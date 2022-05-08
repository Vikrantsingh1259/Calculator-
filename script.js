const data = document.getElementById('data');

const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');
const m= document.getElementById('m');
const n = document.getElementById('n');
const o = document.getElementById('o');
const p = document.getElementById('p');
const q = document.getElementById('q');
const r = document.getElementById('r');
const s = document.getElementById('s');
const t = document.getElementById('t');

a.addEventListener("click", ()=>){
    data.Value = " ";
})
b.addEventListener("click", ()=>){
    let len = data.value.length;

    data.value = data.value.substring(0, len-1);
})
c.addEventListener("click", ()=>){
    data.Value += " % ";
})
d.addEventListener("click", ()=>){
    data.Value += " / ";
})
e.addEventListener("click", ()=>){
    data.Value += " 7 ";
})
f.addEventListener("click", ()=>){
    data.Value += " 8 ";
})
g.addEventListener("click", ()=>){
    data.Value += " 9 ";
})
h.addEventListener("click", ()=>){
    data.Value += " + ";
})
i.addEventListener("click", ()=>){
    data.Value += " 4 ";
})
j.addEventListener("click", ()=>){
    data.Value += " 5 ";
})
k.addEventListener("click", ()=>){
    data.Value += " 6 ";
})
l.addEventListener("click", ()=>){
    data.Value += " - ";
})
m.addEventListener("click", ()=>){
    data.Value += " 1 ";
})
n.addEventListener("click", ()=>){
    data.Value += " 2 ";
})
o.addEventListener("click", ()=>){
    data.Value += " 3 ";
})
p.addEventListener("click", ()=>){
    data.Value += " + ";
})
q.addEventListener("click", ()=>){
    data.Value += " 0 ";
})
r.addEventListener("click", ()=>){
    data.Value += " 00 ";
})
s.addEventListener("click", ()=>){
    data.Value += " . ";
})
t.addEventListener("click", ()=>){
    data.Value = eval(data.value)
})
