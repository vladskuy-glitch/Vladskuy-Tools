/* ===== 1. ISI LINK DI SINI SAJA =====
   Format: "Nama Cabang": "link",
   Link kosong atau tidak ditulis = SOON. Ada link = READY.
   C = isi link share Gemini Canvas, W = nama file halaman web kita. */
const LINKS = {
  "Text to Video": "vb-prompt-studio.html",
  "Image to Video": "vb-prompt-studio.html",
  "Character Generator": "https://share.gemini.google/RisdLxNMtBGB",
};

/* ===== 2. DAFTAR MODUL (tidak perlu diubah) ===== */
const MODULES = [
  {no:"01", nama:"Factory Content", desc:"Pabrik bahan konten harian",
   guna:"Pabrik bahan konten sosmed harian untuk kreator yang butuh stok ide cepat.", items:[
    {nama:"Ide Konten", ket:"AI mengusulkan ide dari niche kamu", tipe:"C"},
    {nama:"Caption dan Hook", ket:"AI menulis caption, hook, dan CTA", tipe:"C"},
    {nama:"Konten Harian", ket:"Kalender dan checklist posting", tipe:"W"},
    {nama:"Konten Produk", ket:"Template sudut jualan dan deskripsi produk", tipe:"W"}]},
  {no:"02", nama:"Image Generator", desc:"Bikin gambar dari ide kamu",
   guna:"Membuat gambar non-karakter: bebas, produk, thumbnail, dan poster.", items:[
    {nama:"Gambar Bebas", ket:"Ide jadi prompt, lalu gambar", tipe:"C"},
    {nama:"Gambar Produk", ket:"Foto produk bergaya studio", tipe:"C"},
    {nama:"Thumbnail dan Poster", ket:"Ukuran dan komposisi khusus", tipe:"C"},
    {nama:"Ubah Gaya Gambar", ket:"Katalog gaya siap salin", tipe:"W"}]},
  {no:"03", nama:"Video Generator", desc:"Ubah ide jadi video",
   guna:"Mesin utama prompt video untuk Seedance, Flow, Kling, dan lainnya.", items:[
    {nama:"Text to Video", ket:"VB Prompt Studio, mode teks", tipe:"W"},
    {nama:"Image to Video", ket:"VB Prompt Studio, mode gambar", tipe:"W"},
    {nama:"Motion Control", ket:"Katalog gerak kamera dan karakter", tipe:"W"},
    {nama:"Video Sinematik", ket:"AI menyusun cerita dan storyboard dari judul", tipe:"C"}]},
  {no:"04", nama:"Modifying Character", desc:"Ubah dan atur karakter AI",
   guna:"Membuat dan mengubah karakter AI yang konsisten di semua konten.", items:[
    {nama:"Character Generator", ket:"Form karakter lengkap lalu render", tipe:"W"},
    {nama:"Character Clone", ket:"Karakter konsisten dari foto referensi", tipe:"C"},
    {nama:"Ganti Outfit dan Gaya", ket:"Katalog outfit dan gaya siap salin", tipe:"W"},
    {nama:"Influencer Maker", ket:"Persona influencer lengkap", tipe:"C"}]},
  {no:"05", nama:"Music Clip", desc:"Susun adegan klip musik",
   guna:"Dari lagu ke visual klip: konsep, storyboard, dan prompt video.", items:[
    {nama:"Konsep dan Lirik", ket:"Ide klip dan lirik dengan AI", tipe:"C"},
    {nama:"Storyboard Klip", ket:"Daftar adegan jadi prompt", tipe:"W"},
    {nama:"Video Klip", ket:"Preset musik di Prompt Studio", tipe:"W"}]},
  {no:"06", nama:"Short Drama", desc:"Drama pendek dari ide sampai visual",
   guna:"Cerita pendek dari ide, skrip, karakter, sampai prompt video.", items:[
    {nama:"Ide Cerita", ket:"AI membuat premis dan alur", tipe:"C"},
    {nama:"Skrip Adegan", ket:"AI menulis skrip per adegan", tipe:"C"},
    {nama:"Karakter Drama", ket:"Memakai tool Character Generator", tipe:"C"},
    {nama:"Drama Video", ket:"Preset drama di Prompt Studio", tipe:"W"}]},
  {no:"07", nama:"Prompt Siap Pakai", desc:"Prompt tinggal salin",
   guna:"Perpustakaan prompt jadi yang tinggal disalin, tanpa AI.", items:[
    {nama:"Prompt Gambar", ket:"Perpustakaan prompt siap salin", tipe:"W"},
    {nama:"Prompt Video", ket:"Perpustakaan prompt siap salin", tipe:"W"},
    {nama:"Prompt Karakter", ket:"Perpustakaan prompt siap salin", tipe:"W"},
    {nama:"Prompt Caption dan Iklan", ket:"Perpustakaan prompt siap salin", tipe:"W"}]},
  {no:"08", nama:"Studio Content", desc:"Rakit konten sampai siap tayang",
   guna:"Perakitan akhir dari bahan jadi konten siap tayang.", items:[
    {nama:"Influencer Video", ket:"Alur terpandu karakter dan video", tipe:"C"},
    {nama:"UGC Video", ket:"Alur video gaya UGC", tipe:"C"},
    {nama:"Podcast Video", ket:"Alur video podcast", tipe:"C"},
    {nama:"Finishing Konten", ket:"Checklist akhir sebelum tayang", tipe:"W"}]}
];

/* Menempelkan link dari daftar LINKS ke tiap cabang */
MODULES.forEach(m => m.items.forEach(t => { t.link = LINKS[t.nama] || ""; }));
