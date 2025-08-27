
// 공통 유틸
export function $(sel, root=document){ return root.querySelector(sel); }
export function $all(sel, root=document){ return [...root.querySelectorAll(sel)]; }
export const rand = (n)=> Math.floor(Math.random()*n);
export function shuffle(arr){ 
  for(let i=arr.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}
export function playClick(){ try{ new Audio('../assets/media/click.mp3').play(); }catch(e){} }
export function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
export function load(key, fallback=null){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch(e){ return fallback; } }

// 전체화면 진입 (웹앱 느낌)
export function goFullscreen(el=document.documentElement){
  const r = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if(r) r.call(el);
}
