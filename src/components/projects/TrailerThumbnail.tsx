export function TrailerThumbnail({src,className='',priority=false}:{src:string;className?:string;priority?:boolean}){
 return <img
  src={src}
  alt=""
  aria-hidden="true"
  className={className}
  decoding="async"
  loading={priority?'eager':'lazy'}
  fetchPriority={priority?'high':'auto'}
 />;
}
