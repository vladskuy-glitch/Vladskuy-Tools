/* Background marble + urat emas (dipakai semua halaman) dan banner beranda */
(function () {
  const bg = document.createElement("div");
  bg.className = "bg"; bg.setAttribute("aria-hidden", "true");
  let sp = "";
  [[1.5,.2],[1.8,.9],[2.2,1.4],[1.65,.6],[1.95,1.1],[2.15,.4]].forEach((a, i) =>
    sp += '<use href="#m' + i + '" class="spark" style="animation-duration:' + a[0] + 's;animation-delay:-' + a[1] + 's"/>');
  bg.innerHTML =
   '<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="400" y2="800"><stop offset="0" stop-color="#7a5a14"/><stop offset=".5" stop-color="#d4a82c"/><stop offset="1" stop-color="#a67c1a"/></linearGradient>' +
   '<g id="m0"></g><g id="m1"></g><g id="m2"></g><g id="m3"></g><g id="m4"></g><g id="m5"></g><g id="mc"></g>' +
   '<g id="v"><use href="#m0"/><use href="#m1"/><use href="#m2"/><use href="#m3"/><use href="#m4"/><use href="#m5"/><use href="#mc"/></g></defs><use href="#v" class="line"/></svg>' +
   '<svg class="gl" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice"><defs><filter id="b"><feGaussianBlur stdDeviation="2"/></filter></defs><use href="#v" class="glow" filter="url(#b)"/></svg>' +
   '<svg class="sp" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">' + sp + '</svg>';
  document.body.prepend(bg);

  let seed = 23;
  const r = () => (seed = seed * 16807 % 2147483647) / 2147483647;
  const NS = "http://www.w3.org/2000/svg", $e = id => document.getElementById(id);
  function path(x, y, a, len, n, j) {
    let d = "M" + x.toFixed(1) + " " + y.toFixed(1), p = [[x, y, a]];
    for (let i = 0; i < n; i++) {
      a += (r() - .5) * j; x += Math.cos(a) * len / n; y += Math.sin(a) * len / n;
      d += "L" + x.toFixed(1) + " " + y.toFixed(1); p.push([x, y, a]);
    }
    return { d, p };
  }
  function add(g, d, op) {
    const e = document.createElementNS(NS, "path");
    e.setAttribute("d", d); e.setAttribute("pathLength", "1000");
    if (op) e.setAttribute("opacity", op);
    g.appendChild(e);
  }
  const M = [0, 1, 2, 3, 4, 5].map(i => $e("m" + i)), C = $e("mc");
  for (let i = 0; i < 34; i++) {
    const n = 14 + (r() * 10 | 0);
    const v = path(r() * 460 - 30, r() * 860 - 30, r() * 6.283, 300 + r() * 500, n, 1.1);
    add(M[i % 6], v.d);
    for (let b = 0; b < 2; b++) {
      const q = v.p[3 + (r() * (n - 6) | 0)];
      const w = path(q[0], q[1], q[2] + (r() < .5 ? -1 : 1) * (.5 + r() * .8), 80 + r() * 130, 6 + (r() * 4 | 0), 1.1);
      add(C, w.d, .6);
    }
  }
  const bn = document.querySelector(".banner");
  if (!bn) return;
  function banner(cx) {
    ["bg2", "bl", "b0", "b1"].forEach(id => $e(id).textContent = "");
    for (let i = 0; i < 18; i++) {
      const a = i / 18 * 6.283 + (r() - .5) * .5;
      const v = path(cx, 72, a, 110 + r() * 130, 8 + (r() * 4 | 0), .8);
      add($e("bg2"), v.d); add($e("bl"), v.d); add($e(i % 2 ? "b1" : "b0"), v.d);
      if (r() < .6) {
        const q = v.p[3 + (r() * 4 | 0)];
        const w = path(q[0], q[1], q[2] + (r() < .5 ? -1 : 1) * (.6 + r() * .6), 40 + r() * 60, 5, .9);
        add($e("bl"), w.d, .6);
      }
    }
  }
  const m = bn.querySelector(".mascot");
  const noM = () => { m.remove(); banner(200); };
  if (m.complete) { m.naturalWidth ? banner(280) : noM(); }
  else { m.addEventListener("load", () => banner(280)); m.addEventListener("error", noM); }
})();
