export default function getDateTime() {
  const now = new Date();

  const oylar = [
    "Yanvar", "Fevral", "Mart", "Aprel",
    "May", "Iyun", "Iyul", "Avgust",
    "Sentabr", "Oktabr", "Noyabr", "Dekabr"
  ];

  const kun = now.getDate();
  const oy = oylar[now.getMonth()];
  const yil = now.getFullYear();

  const soat = String(now.getHours()).padStart(2, "0");
  const minut = String(now.getMinutes()).padStart(2, "0");
  const sekund = String(now.getSeconds()).padStart(2, "0");

  return {
    sana: `${kun} ${oy} ${yil}`,
    vaqt: `${soat}:${minut}:${sekund}`
  };
}