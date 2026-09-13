"""Check the static export's inbound routes, local resources and link targets."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import json

ROOT = Path(__file__).resolve().parents[1] / 'out'
ORIGIN = 'https://marcolabate.games'

class Page(HTMLParser):
    def __init__(self, content):
        super().__init__()
        self.ids = []; self.links = []; self.resources = []; self.h1 = 0
        self.canonical = None; self.description = None; self.title = False
        self.images = []; self.refresh = None; self.social = set()
        self.feed(content)
    def handle_starttag(self, tag, pairs):
        a = dict(pairs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'a' and 'href' in a: self.links.append(a['href'])
        if tag in ['img', 'script', 'source'] and a.get('src'): self.resources.append(a['src'])
        if tag == 'img': self.images.append(a)
        if tag == 'link':
            if a.get('rel') == 'canonical': self.canonical = a.get('href')
            if a.get('rel') in ['stylesheet', 'icon', 'preload']: self.resources.append(a.get('href',''))
        if tag == 'h1': self.h1 += 1
        if tag == 'title': self.title = True
        if tag == 'meta':
            if a.get('name') == 'description': self.description = a.get('content')
            if a.get('http-equiv','').lower() == 'refresh': self.refresh = a.get('content')
            if a.get('property','').startswith('og:') or a.get('name','').startswith('twitter:'):
                self.social.add(a.get('property') or a.get('name'))

def local_file(path):
    candidate = ROOT / unquote(path).lstrip('/')
    return candidate / 'index.html' if candidate.is_dir() else candidate

pages = {}
for file in ROOT.rglob('*.html'):
    route = '/' + str(file.relative_to(ROOT)).replace('index.html','')
    pages[route] = Page(file.read_text())
errors = []; checks = 0
for route, page in pages.items():
    if len(page.ids) != len(set(page.ids)): errors.append(f'{route}: duplicate IDs')
    if not page.title: errors.append(f'{route}: missing title')
    if route != '/404.html' and not route.startswith('/_not-found'):
        if page.h1 != 1: errors.append(f'{route}: expected one H1, got {page.h1}')
        if not page.description: errors.append(f'{route}: missing description')
        if not page.canonical or not page.canonical.startswith(ORIGIN): errors.append(f'{route}: invalid canonical')
        if not page.refresh and not {'og:title','og:description','og:image','twitter:card'}.issubset(page.social): errors.append(f'{route}: incomplete social metadata')
    for img in page.images:
        if 'alt' not in img: errors.append(f'{route}: image missing alt')
    for href in page.links + page.resources:
        if not href: continue
        url = urlparse(urljoin(ORIGIN+route, href))
        if url.netloc != 'marcolabate.games' or url.scheme not in ['http','https']: continue
        checks += 1
        target = local_file(url.path)
        if not target.is_file(): errors.append(f'{route}: missing {href}')
        elif url.fragment and target.suffix == '.html':
            target_page = pages.get(url.path)
            if target_page is None: target_page = Page(target.read_text())
            if unquote(url.fragment) not in target_page.ids: errors.append(f'{route}: missing anchor {href}')
    if page.refresh:
        target = page.refresh.split('url=',1)[-1]
        if not local_file(urlparse(target).path).is_file(): errors.append(f'{route}: broken legacy redirect')

required = ['/', '/selected-work/', '/projects/', '/about/', '/contact/', '/beyond-game-qa/', '/skills/', '/certifications/', '/privacy/', '/case-studies/', '/projects/runescape-dragonwilds/', '/projects/possessors/', '/projects/dont-stop-girlypop/', '/case-studies/character-driven-action-adventure/']
for route in required:
    if route not in pages: errors.append(f'Missing preserved route {route}')
cv = ROOT / 'assets/Marco_Labate_CV_Public.pdf'
if not cv.is_file() or not cv.read_bytes().startswith(b'%PDF-'): errors.append('CV missing or not a PDF')
home = (ROOT / 'index.html').read_text()
for forbidden in ['copies sold', 'Mostly Positive', 'Very Positive', '<video']:
    if forbidden in home: errors.append(f'Homepage includes {forbidden}')
result = {'html_pages':len(pages),'local_link_and_resource_checks':checks,'preserved_entry_routes':len(required),'errors':errors}
print(json.dumps(result,indent=2))
raise SystemExit(bool(errors))
