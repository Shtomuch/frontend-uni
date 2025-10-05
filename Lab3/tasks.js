// Lab3 — Variant 7
// 1) Records for encyclopedia lots and operations
(function lotsModule() {
  const lots = [
    { id: 1, title: 'Планети', author: 'О. Коваль', shortLen: 120, usersDay1: 1200, usersDay2: 900, publishedAt: new Date('2025-01-05T10:30:00') },
    { id: 2, title: 'Зірки', author: 'М. Іваненко', shortLen: 200, usersDay1: 800, usersDay2: 600, publishedAt: new Date('2025-02-12T20:10:00') },
    { id: 3, title: 'Галактики', author: 'Л. Сагайдак', shortLen: 180, usersDay1: 400, usersDay2: 350, publishedAt: new Date('2025-03-01T06:05:00') },
    { id: 4, title: 'Місії', author: 'Ю. Марченко', shortLen: 90, usersDay1: 650, usersDay2: 700, publishedAt: new Date('2025-04-02T13:45:00') },
    { id: 5, title: 'Космологія', author: 'Редакція', shortLen: 220, usersDay1: 500, usersDay2: 480, publishedAt: new Date('2025-05-03T15:15:00') },
    { id: 6, title: 'Небулярна теорія', author: 'М. Іваненко', shortLen: 160, usersDay1: 720, usersDay2: 540, publishedAt: new Date('2025-06-21T09:00:00') },
    { id: 7, title: 'Екзопланети', author: 'О. Коваль', shortLen: 140, usersDay1: 900, usersDay2: 880, publishedAt: new Date('2025-07-11T11:25:00') },
    { id: 8, title: 'Спектроскопія', author: 'Редакція', shortLen: 110, usersDay1: 350, usersDay2: 300, publishedAt: new Date('2025-08-09T17:30:00') },
    { id: 9, title: 'Історія астрономії', author: 'Ю. Марченко', shortLen: 130, usersDay1: 430, usersDay2: 410, publishedAt: new Date('2025-09-18T19:40:00') },
    { id: 10, title: 'Телескопи', author: 'Л. Сагайдак', shortLen: 95, usersDay1: 600, usersDay2: 610, publishedAt: new Date('2025-10-01T07:20:00') },
  ];

  // sort by publication time
  const sortedByTime = [...lots].sort((a, b) => a.publishedAt - b.publishedAt);
  console.log('lots.sortedByTime ids:', sortedByTime.map(l => l.id));

  // average shortLen per hour of day
  const byHour = new Map();
  for (const l of lots) {
    const hour = l.publishedAt.getHours();
    if (!byHour.has(hour)) byHour.set(hour, []);
    byHour.get(hour).push(l.shortLen);
  }
  const avgLenByHour = [...byHour.entries()].map(([hour, arr]) => ({ hour, avg: arr.reduce((s, v) => s + v, 0) / arr.length }));
  console.log('avg shortLen by hour:', avgLenByHour);

  // min usersDay2 and ids
  const minDay2 = Math.min(...lots.map(l => l.usersDay2));
  const minDay2Ids = lots.filter(l => l.usersDay2 === minDay2).map(l => l.id);
  console.log('min usersDay2 value:', minDay2, 'ids:', minDay2Ids);

  // insert new lot depending on completeness
  function insertLot(list, lot) {
    const requiredKeys = ['id','title','author','shortLen','usersDay1','usersDay2','publishedAt'];
    const complete = requiredKeys.every(k => lot[k] !== undefined && lot[k] !== null);
    if (!complete) {
      list.push(lot);
    } else {
      const insertIndex = list.findIndex(l => l.shortLen > lot.shortLen);
      if (insertIndex === -1) list.push(lot);
      else list.splice(insertIndex, 0, lot);
    }
    return list;
  }
  insertLot(lots, { id: 11, title: 'Комети', author: 'Редакція' });
  insertLot(lots, { id: 12, title: 'Астероїди', author: 'Редакція', shortLen: 120, usersDay1: 200, usersDay2: 150, publishedAt: new Date() });
  console.log('lots after inserts length:', lots.length);

  // author payment by season rule
  function pricePerSymbol(date) {
    const month = date.getMonth();
    const isSummerWinter = [11,0,1,5,6,7].includes(month);
    return isSummerWinter ? 0.95 : 1.1;
  }
  const payments = lots
    .filter(l => l.publishedAt && l.shortLen)
    .map(l => ({ id: l.id, pay: +(l.shortLen * pricePerSymbol(l.publishedAt)).toFixed(2) }));
  console.log('payments:', payments);
})();

// 2) Users records and operations
(function usersModule() {
  class User { constructor(lastName, firstName, age, education, purpose, dateStr, timeStr) { this.lastName = lastName; this.firstName = firstName; this.age = age; this.education = education; this.purpose = purpose; this.date = new Date(`${dateStr}T${timeStr}`); } }
  const users = [
    new User('Коваль','Ірина',28,'вища','співпраця','2025-01-02','08:30'),
    new User('Іваненко','Марко',34,'повна','пропозиція','2025-03-15','10:00'),
    new User('Сагайдак','Леся',41,'вища','наявність помилки','2025-06-20','19:10'),
    new User('Марченко','Юрій',63,'професійна','скарга на порушення права власності','2025-07-11','21:00'),
    new User('Петренко','Олег',22,'неповна','співпраця','2025-09-05','12:00'),
    new User('Сидоренко','Анна',55,'вища','пропозиція','2025-10-10','16:30'),
    new User('Бондар','Оксана',48,'вища','пропозиція','2025-04-08','14:40'),
    new User('Романюк','Дарина',31,'повна','співпраця','2025-11-18','09:05'),
    new User('Гуменюк','Стас',27,'неповна','наявність помилки','2025-12-01','23:50'),
    new User('Шевченко','Ілля',60,'вища','співпраця','2025-02-22','07:15'),
  ];

  // filter by month and moment in time
  function usersInMonthAt(month, hhmm) {
    const [h, m] = hhmm.split(':').map(Number);
    return users.filter(u => u.date.getMonth() === month && (u.date.getHours() > h || (u.date.getHours() === h && u.date.getMinutes() >= m)));
  }
  console.log('users in March after 09:30:', usersInMonthAt(2,'09:30').map(u => u.lastName));

  // max age and details
  const maxAge = Math.max(...users.map(u => u.age));
  const oldest = users.find(u => u.age === maxAge);
  console.log('max age user:', { age: maxAge, education: oldest.education, date: oldest.date.toISOString() });

  // classes by time and purpose
  const classes = { owlsClaims: 0, friendlyLarks: 0, other: 0 };
  for (const u of users) {
    const hour = u.date.getHours();
    const isLark = hour >= 6 && hour < 12;
    const isOwl = hour >= 20 || hour < 6;
    if (isOwl && u.purpose.includes('скарга')) classes.owlsClaims++;
    else if (isLark && u.purpose.includes('пропозиція')) classes.friendlyLarks++;
    else classes.other++;
  }
  console.log('classes:', classes);

  // sorting by alphabet with purpose
  const sorted = [...users].sort((a,b)=> a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName));
  console.log('sorted users with purposes:', sorted.map(u => `${u.lastName} ${u.firstName}: ${u.purpose}`));
})();


