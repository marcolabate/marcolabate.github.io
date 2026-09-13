"""Make a portable review of the exported pages, without deploying the site."""
from pathlib import Path
import re, json, base64, mimetypes, sys
from html import unescape

root = Path(__file__).resolve().parents[1]
output = Path(sys.argv[1]) if len(sys.argv)>1 else root.parent/'deliverables/Marco_Labate_Portfolio_Preview.html'
out = root/'out'
css = '\n'.join(p.read_text() for p in sorted((out/'_next/static').rglob('*.css')))
pages = {}
for p in sorted(out.rglob('*.html')):
    if p.name != 'index.html': continue
    route = '/' + str(p.relative_to(out)).replace('index.html','')
    if route.startswith(('/en/','/_not-found')) or route in ['/404.html','/404/']: continue
    html = p.read_text()
    title = unescape(re.search(r'<title>(.*?)</title>',html).group(1))
    body = re.search(r'<body[^>]*>(.*)</body>',html,re.S).group(1)
    body = re.sub(r'<script\b[^>]*>.*?</script>','',body,flags=re.S)
    body = re.sub(r'<link\b[^>]*>','',body)
    pages[route] = {'title':title,'body':body}
assets = {}
paths = set()
for page in pages.values():
    paths.update(re.findall(r'(?:src|href)="(/[^"#?]+)',page['body']))
for path in paths:
    file = out/path.lstrip('/')
    if file.is_file() and file.suffix not in ['.html','.txt']:
        assets[path] = 'data:'+ (mimetypes.guess_type(file)[0] or 'application/octet-stream')+';base64,'+base64.b64encode(file.read_bytes()).decode()

shell = r'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Marco Labate portfolio review</title><style>
*{box-sizing:border-box}body{margin:0;background:#243144;color:#eff4f9;font:14px system-ui,sans-serif}header{display:flex;flex-wrap:wrap;gap:12px;align-items:center;padding:10px 16px;background:#0c1727;min-height:58px}strong{margin-right:auto;font-size:14px}select,button{background:#142338;color:#eff4f9;border:1px solid #596d87;border-radius:4px;padding:8px 10px;font:inherit;min-height:36px}select{max-width:42vw}button{cursor:pointer}button[aria-pressed=true]{border-color:#5ed3e0;color:#5ed3e0}button:focus-visible,select:focus-visible{outline:2px solid #5ed3e0;outline-offset:3px}#stage{display:flex;justify-content:center}iframe{width:100%;height:calc(100dvh - 58px);border:0;background:#09111e;display:block}iframe.mobile{max-width:390px}@media(max-width:600px){header{gap:8px}header strong{width:100%}select{max-width:60vw}iframe{height:calc(100dvh - 100px)}}
</style></head><body><header><strong>Marco Labate · Review preview</strong><label for="page-select" class="sr">Page</label><select id="page-select" aria-label="Preview page"></select><button id="desktop" aria-pressed="true">Desktop</button><button id="mobile" aria-pressed="false">Mobile</button></header><div id="stage"><iframe title="Portfolio preview"></iframe></div><script>
const pages=__PAGES__,assets=__ASSETS__,css=__CSS__;
const frame=document.querySelector('iframe'),select=document.querySelector('select');
let theme='dark',current='/',anchor='';
const names={'/':'Home','/selected-work/':'Work','/beyond-game-qa/':'Software QA','/about/':'About','/contact/':'Contact'};
for(const route of [...Object.keys(names),...Object.keys(pages).filter(x=>!names[x]&&x!=='/projects/')]){if(pages[route]){const o=document.createElement('option');o.value=route;o.textContent=names[route]||pages[route].title.replace(/ \| Marco Labate$/,'');select.append(o)}}
function render(route,hash=''){
 if(route.startsWith('/en/'))route=route.slice(3)||'/';
 if(!pages[route]&&pages[route+'/'])route+='/';
 if(!pages[route])return;
 current=route;anchor=hash.replace(/^#/,'');select.value=route;
 let body=pages[route].body.replace(/(src|href)="(\/[^"#?]+)"/g,(all,attr,path)=>assets[path]?attr+'="'+assets[path]+'"':all);
 frame.srcdoc='<!doctype html><html lang="en" data-theme="'+theme+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>'+css+'</style></head><body>'+body+'</body></html>';
 document.title=pages[route].title+' · Review preview';
}
frame.addEventListener('load',()=>{
 const d=frame.contentDocument;
 d.addEventListener('click',e=>{
  const video=e.target.closest('button[data-youtube-id]');
  if(video){const player=d.createElement('iframe');player.src='https://www.youtube-nocookie.com/embed/'+video.dataset.youtubeId;player.title=video.getAttribute('aria-label').replace(/^Load /,'');player.style='width:100%;height:100%;border:0';player.allowFullscreen=true;video.closest('.aspect-video').replaceChildren(player);return}
  const toggle=e.target.closest('button[aria-label^="Switch to"]');
  if(toggle){theme=theme==='dark'?'light':'dark';d.documentElement.dataset.theme=theme;d.documentElement.style.colorScheme=theme;toggle.setAttribute('aria-label','Switch to '+(theme==='dark'?'light':'dark')+' theme');toggle.setAttribute('aria-pressed',String(theme==='light'));return}
  const a=e.target.closest('a');if(!a)return;
  const href=a.getAttribute('href');if(!href)return;
  if(href.startsWith('data:')){if(a.hasAttribute('download'))return;e.preventDefault();return}
  if(href.startsWith('#')){e.preventDefault();const el=d.getElementById(decodeURIComponent(href.slice(1)));if(el){el.scrollIntoView();if(href==='#main-content')el.focus()}return}
  if(href.startsWith('/')){e.preventDefault();const [route,hash]=href.split('#');render(route,hash||'');return}
  if(href.startsWith('http')){a.target='_blank';a.rel='noopener noreferrer'}
 });
 if(anchor){const target=d.getElementById(decodeURIComponent(anchor));if(target)target.scrollIntoView()}
});
select.addEventListener('change',()=>render(select.value));
for(const kind of ['desktop','mobile'])document.getElementById(kind).addEventListener('click',()=>{frame.classList.toggle('mobile',kind==='mobile');for(const k of ['desktop','mobile'])document.getElementById(k).setAttribute('aria-pressed',String(k===kind))});
render('/');
</script></body></html>'''
for key,value in [('__PAGES__',pages),('__ASSETS__',assets),('__CSS__',css)]:
    shell=shell.replace(key,json.dumps(value,ensure_ascii=False).replace('</','<\\/'))
output.parent.mkdir(parents=True,exist_ok=True)
output.write_text(shell)
print(json.dumps({'file':str(output),'pages':len(pages),'embedded_assets':len(assets),'bytes':output.stat().st_size}))
