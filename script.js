const places = [
  {
    id: 1,
    title: 'ເດີ່ນເຕະບານ New Arena',
    location: 'ບ້ານໂພນທອງ, ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '400.000', unit: 'ກີບ/ຊົ່ວໂມງ', category: '⚽ ສະໜາມກິລາ',
    img: 'https://live.staticflickr.com/1554/26683968316_24d7d4c9e4_b.jpg',
    hours: '06:00 - 22:00 ທຸກວັນ', phone: '+856 20 5555 1111', rating: 4.8, reviews: 124,
    desc: 'ສະໜາມເຕະບານ New Arena ມີສິ່ງອຳນວຍຄວາມສະດວກຄົບຄ້ວງ ທັງຫຍ້າທຽມ FIFA Standard ໄຟ LED ສ່ອງສະຫວ່າງ ຫ້ອງອາບນ້ຳ ແລະ ພື້ນທີ່ຈອດລົດ.',
    amenities: ['🚿 ຫ້ອງອາບນ້ຳ', '🚗 ທີ່ຈອດລົດ', '💡 ໄຟ LED', '🏆 ຫຍ້າທຽມ', '🥤 ເຄື່ອງດື່ມ'],
  },
  {
    id: 2,
    title: 'ຮ້ານອາຫານ ເຂົ້າມັນໄກ່ 3ສະຫາຍ',
    location: 'ບ້ານໂພນທອງ, ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '70.000', unit: 'ກີບ/ໂຕະ', category: '🍽️ ຮ້ານອາຫານ',
    img: 'https://cheewajit.com/app/uploads/2017/05/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%82%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B9-%E0%B8%94%E0%B8%B4-%E0%B9%80%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B8%B1%E0%B8%A5%E0%B8%94%E0%B9%8C-01.jpg',
    hours: '08:00 - 21:00 (ຫຍຸດວັນຈັນ)', phone: '+856 20 7777 2222', rating: 4.6, reviews: 89,
    desc: 'ຮ້ານອາຫານຊື່ດັງ ທີ່ຄົນຮັກ ສູດເດັດສ່ວນຕົວ ລົດຊາດເຂົ້າມັນໄກ່ ແທ້ ເໝາະກັບທຸກໂອກາດ.',
    amenities: ['❄️ ອາກາດເຢັນ', '📶 WiFi ຟຣີ', '🅿️ ທີ່ຈອດລົດ', '💳 ຮັບບັດ'],
  },
  {
    id: 3,
    title: 'ໂຮງແຮມ Simon',
    location: 'ບ້ານໂພນທອງ, ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '1.500.000', unit: 'ກີບ/ຄືນ', category: '🏨 ໂຮງແຮມ',
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/46930155.jpg?k=b1ba5a63789436f56d2b883ffe54c6b69d1295f4d20f62ac5a984b220a919aa4&o=',
    hours: 'Check-in 14:00 / Check-out 12:00', phone: '+856 21 265 000', rating: 4.9, reviews: 312,
    desc: 'ໂຮງແຮມ 5 ດາວ ໃຈກາງນະຄອນຫຼວງ ວິວສວຍງາມ ຫ້ອງພັກ Deluxe ແລະ Suite ຄົບຄ້ວງ.',
    amenities: ['🏊 ສະລອຍນ້ຳ', '🍳 ອາຫານເຊົ້າຟຣີ', '🏋️ ຟິດເນດ', '🧖 Spa', '🚗 ຮັບ-ສົ່ງ', '📶 WiFi ຟຣີ'],
  },
  {
    id: 4,
    title: 'ເດີ່ນເຕະບານ BMW',
    location: 'ບ້ານນາໄຊ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '550.000', unit: 'ກີບ/ຊົ່ວໂມງ', category: '⚽ ສະໜາມກິລາ',
    img: 'https://t4.ftcdn.net/jpg/03/80/33/33/360_F_380333325_WoxRdP4rgqu4f1Zo1rZ76pVgMxU6R8Kn.jpg',
    hours: '07:00 - 23:00 ທຸກວັນ', phone: '+856 20 9999 3333', rating: 4.5, reviews: 76,
    desc: 'ສະໜາມເຕະບານ BMW ມາດຕະຖານສູງ ຫຍ້າທຽມຄຸນນະພາບດີ ໄຟ LED ສ່ອງສະຫວ່າງ.',
    amenities: ['🚿 ຫ້ອງອາບນ້ຳ', '🚗 ທີ່ຈອດລົດ', '💡 ໄຟ LED', '🏆 ຫຍ້າທຽມ'],
  },
  {
    id: 5,
    title: 'ຮ້ານອາຫານ ເຂົ້າຕາມສັ່ງ',
    location: 'ບ້ານໂສກປະຫຼວງ, ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '150.000', unit: 'ກີບ/ໂຕະ', category: '🍽️ ຮ້ານອາຫານ',
    img: 'https://static.spotapps.co/website_images/ab_websites/174603_website_v1/menu.jpg',
    hours: '10:00 - 22:00 ທຸກວັນ', phone: '+856 20 6666 4444', rating: 4.3, reviews: 54,
    desc: 'ຮ້ານອາຫານ ເຂົ້າຕາມສັ່ງ ຫຼາຍເມນູ ລາຄາໂດດເດັ່ນ ອາຫານຝີມືຊ່ຽວຊານ.',
    amenities: ['❄️ ອາກາດເຢັນ', '📶 WiFi ຟຣີ', '🅿️ ທີ່ຈອດລົດ'],
  },
  {
    id: 6,
    title: 'ໂຮງແຮມ Savia',
    location: 'ບ້ານຮ່ອງແກ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '10.500.000', unit: 'ກີບ/ຄືນ', category: '🏨 ໂຮງແຮມ',
    img: 'https://ik.imagekit.io/tvlk/image/imageResource/2024/06/21/1718957715688-26316a3442d27400e8a6919f75237573.jpeg?tr=q-75',
    hours: 'Check-in 15:00 / Check-out 11:00', phone: '+856 21 333 444', rating: 4.7, reviews: 198,
    desc: 'ໂຮງແຮມ Savia ຫ້ອງພັກໂທນທີ່ດີ ສິ່ງອຳນວຍຄວາມສະດວກຄົບຄ້ວງ ໃຈກາງເມືອງໄຊເສດຖາ.',
    amenities: ['🏊 ສະລອຍນ້ຳ', '🍳 ອາຫານເຊົ້າຟຣີ', '🏋️ ຟິດເນດ', '📶 WiFi ຟຣີ'],
  },
  {
    id: 7,
    title: 'ເດີ່ນເຕະບານ SNV',
    location: 'ບ້ານໂພນສີນວນ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '950.000', unit: 'ກີບ/ຊົ່ວໂມງ', category: '⚽ ສະໜາມກິລາ',
    img: 'https://thumbs.dreamstime.com/b/wide-angle-view-lit-football-stadium-interior-expansive-shot-illuminated-showcasing-green-playing-field-packed-stands-380699665.jpg',
    hours: '06:00 - 24:00 ທຸກວັນ', phone: '+856 20 8888 5555', rating: 4.9, reviews: 201,
    desc: 'ສະໜາມ SNV ໃຫຍ່ທີ່ສຸດໃນເຂດໄຊເສດຖາ ຮອງຮັບໄດ້ຫຼາຍທີມ ໄຟ LED ສ່ອງສະຫວ່າງທຸກມຸມ.',
    amenities: ['🚿 ຫ້ອງອາບນ້ຳ', '🚗 ທີ່ຈອດລົດ', '💡 ໄຟ LED', '🏆 ຫຍ້າທຽມ', '🏟️ ສ້ານຂະໜາດໃຫຍ່'],
  },
  {
    id: 8,
    title: 'ຮ້ານອາຫານ ເຂົ້າຂາຫມູຂອງແທ້',
    location: 'ບ້ານໂພນປາເປົ້າ, ສີສັດຕະນາກ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '70.000', unit: 'ກີບ/ໂຕະ', category: '🍽️ ຮ້ານອາຫານ',
    img: 'https://images.deliveryhero.io/image/fd-la/LH/v1qh-listing.JPG',
    hours: '09:00 - 21:00 (ຫຍຸດວັນອາທິດ)', phone: '+856 20 5544 6677', rating: 4.7, reviews: 143,
    desc: 'ເຂົ້າຂາໝູຕ້ົນຕຳລັບ ສູດດັ້ງເດີມ ນ້ຳໃສ ລົດຊາດຖ່ານ ກິນແລ້ວຕ້ອງກັບມາອີກ.',
    amenities: ['❄️ ອາກາດເຢັນ', '🅿️ ທີ່ຈອດລົດ', '💳 ຮັບບັດ'],
  },
  {
    id: 9,
    title: 'ໂຮງແຮມ Relax',
    location: 'ບ້ານສີສັງວອນ, ໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
    price: '15.500.000', unit: 'ກີບ/ຄືນ', category: '🏨 ໂຮງແຮມ',
    img: 'https://imageio.forbes.com/specials-images/imageserve/68aafd1e6087d1488d23ff9f/Flowing-exterior-lines-of-Dubai-s-Jumeirah-Marsa-Al-Arab--a-new-ultra-luxury-hotel/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&width=960',
    hours: 'Check-in 14:00 / Check-out 12:00', phone: '+856 21 555 888', rating: 5.0, reviews: 87,
    desc: 'ໂຮງແຮມ Relax ລະດັບ Ultra Luxury ປະສົບການພັກຜ່ອນທີ່ດີທີ່ສຸດ ວິວສວຍ ສິ່ງອຳນວຍຄວາມສະດວກທຸກຢ່າງ.',
    amenities: ['🏊 ສະລອຍນ້ຳ', '🍳 ອາຫານເຊົ້າຟຣີ', '🏋️ ຟິດເນດ', '🧖 Spa', '🚁 Helipad', '📶 WiFi ຟຣີ'],
  },
];

// ===================================================
// NAVIGATION - ໄປໜ້າ Detail
// ===================================================
function goToDetail(id) {
  const p = places.find(x => x.id === id);
  if (!p) return;

  document.getElementById('detail-img').src = p.img;
  document.getElementById('detail-img').alt = p.title;
  document.getElementById('detail-title').textContent = p.title;
  document.getElementById('detail-badge').textContent = p.category;
  document.getElementById('detail-location').textContent = p.location;
  document.getElementById('detail-hours').textContent = p.hours;
  document.getElementById('detail-phone').textContent = p.phone;
  document.getElementById('detail-price').textContent = p.price + ' ' + p.unit;
  document.getElementById('detail-desc').textContent = p.desc;
  document.getElementById('booking-price').textContent = p.price + ' ກີບ';
  document.getElementById('booking-unit').textContent = '/ ' + p.unit.replace('ກີບ/', '');

  const full = Math.floor(p.rating);
  const half = p.rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  document.getElementById('detail-stars').textContent = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
  document.getElementById('detail-score').textContent = p.rating;
  document.getElementById('detail-count').textContent = `(${p.reviews} ຄໍາເຫັນ)`;

  document.getElementById('detail-amenities').innerHTML =
    p.amenities.map(a => `<span class="amenity-tag">${a}</span>`).join('');

  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-detail').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  window._currentPlace = p;
}

// ===================================================
// NAVIGATION - ກັບໜ້າ Home
// ===================================================
function goHome() {
  document.getElementById('page-detail').classList.remove('active');
  document.getElementById('page-home').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================================
// BOOKING - ຢືນຢັນການຈອງ
// ===================================================
function submitBooking() {
  const date = document.getElementById('book-date').value;
  const time = document.getElementById('book-time').value;

  if (!date || !time) {
    alert('ກະລຸນາເລືອກວັນທີ ແລະ ເວລາກ່ອນ!');
    return;
  }

  const toast = document.getElementById('toast');
  toast.textContent = `🎉 ຈອງ "${window._currentPlace?.title}" ວັນທີ ${date} ${time} ສຳເລັດ!`;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 4000);
}

// ===================================================
// SIDEBAR FILTER
// ===================================================
document.addEventListener('DOMContentLoaded', () => {

  // ແຜນທີ່ label sidebar → data-category value ໃນ HTML (lowercase)
  const categoryMap = {
    'all':        null,
    'sports':     'sports',
    'hotel':      'hotel',
    'restaurant': 'restaurant',
  };

  const filterLinks  = document.querySelectorAll('.sidebar ul li a');
  const allCards     = document.querySelectorAll('.card');
  const sectionTitle = document.querySelector('.section-title');

  filterLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // ເພີ່ມ active ໃຫ້ link ທີ່ຖືກກົດ
      filterLinks.forEach(l => l.classList.remove('active-link'));
      link.classList.add('active-link');

      const label  = link.querySelector('span').textContent.trim();
      const key    = label.toLowerCase();
      const target = categoryMap[key]; 

      sectionTitle.textContent = label;

      allCards.forEach(card => {
        // data-category ໃນ HTML: "Sports", "Hotel", "Restaurant" → lowercase ເພື່ອ compare
        const cardCat = (card.getAttribute('data-category') || '').toLowerCase();

        if (target === null || cardCat === target) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

});