const isGregLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const gregToFixed = (year, month, day) => {
  const a = Math.floor((year - 1) / 4);
  const b = Math.floor((year - 1) / 100);
  const c = Math.floor((year - 1) / 400);
  const d = Math.floor((367 * month - 362) / 12);
  let e;

  if (month <= 2) {
    e = 0;
  } else if (month > 2 && isGregLeapYear(year)) {
    e = -1;
  } else {
    e = -2;
  }

  return 1 - 1 + 365 * (year - 1) + a - b + c + d + e + day;
};

const hijriToFixed = function () {
  return this.day + Math.ceil(29.5 * (this.month - 1)) + (this.year - 1) * 354 +
    Math.floor((3 + 11 * this.year) / 30) + 227015 - 1;
};

// Fungsi untuk mengubah fixed date menjadi tanggal Hijri
const fixedToHijri = (f) => {
  const i = new Hijri(1100, 1, 1);
  i.year = Math.floor((30 * (f - 227015) + 10646) / 10631);
  const i2 = new Hijri(i.year, 1, 1);
  const m = Math.ceil((f - 29 - i2.toFixed()) / 29.5) + 1;
  i.month = Math.min(m, 12);
  i2.year = i.year;
  i2.month = i.month;
  i2.day = 1;
  i.day = f - i2.toFixed() + 1;
  return i;
};

const hijriToString = function () {
  const months = ["Muharram", "Safar", "Rabiul Awwal", "Rabiul Tsani", "Jumadil Ula", "Jumadil Tsani", "Rajab", "Sya'ban", "Ramadhan", "Syawwal", "Dzul Qa'dah", "Dzul Hijjah"];
  return this.day + " " + months[this.month - 1] + " " + this.year;
};

function Hijri(year, month, day) {
  this.year = year;
  this.month = month;
  this.day = day;
  this.toFixed = hijriToFixed;
  this.toString = hijriToString;
}

const weekday = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const monthname = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentDayOfWeek = currentDate.getDay();

const hijriDate = fixedToHijri(gregToFixed(currentYear, currentMonth, currentDay));

document.write(`${weekday[currentDayOfWeek]} | ${hijriDate.toString()} <span class="hidden md:inline-block">Hijriah</span> `);

document.write(` | ${currentDay} ${monthname[currentMonth - 1]} ${currentYear} <span class="hidden md:inline-block">Masehi</span>`);