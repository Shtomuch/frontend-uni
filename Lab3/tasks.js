var lots = [
  { id: 1, title: 'Планети', author: 'О. Коваль', shortLen: 120, usersDay1: 1200, usersDay2: 900, publishedAt: new Date('2025-01-05T10:30:00') },
  { id: 2, title: 'Зірки', author: 'М. Іваненко', shortLen: 200, usersDay1: 800, usersDay2: 600, publishedAt: new Date('2025-02-12T20:10:00') },
  { id: 3, title: 'Галактики', author: 'Л. Сагайдак', shortLen: 180, usersDay1: 400, usersDay2: 350, publishedAt: new Date('2025-03-01T06:05:00') },
  { id: 4, title: 'Місії', author: 'Ю. Марченко', shortLen: 90, usersDay1: 650, usersDay2: 700, publishedAt: new Date('2025-04-02T13:45:00') },
  { id: 5, title: 'Космологія', author: 'Редакція', shortLen: 220, usersDay1: 500, usersDay2: 480, publishedAt: new Date('2025-05-03T15:15:00') },
  { id: 6, title: 'Небулярна теорія', author: 'М. Іваненко', shortLen: 160, usersDay1: 720, usersDay2: 540, publishedAt: new Date('2025-06-21T09:00:00') },
  { id: 7, title: 'Екзопланети', author: 'О. Коваль', shortLen: 140, usersDay1: 900, usersDay2: 880, publishedAt: new Date('2025-07-11T11:25:00') },
  { id: 8, title: 'Спектроскопія', author: 'Редакція', shortLen: 110, usersDay1: 350, usersDay2: 300, publishedAt: new Date('2025-08-09T17:30:00') },
  { id: 9, title: 'Історія астрономії', author: 'Ю. Марченко', shortLen: 130, usersDay1: 430, usersDay2: 410, publishedAt: new Date('2025-09-18T19:40:00') },
  { id: 10, title: 'Телескопи', author: 'Л. Сагайдак', shortLen: 95, usersDay1: 600, usersDay2: 610, publishedAt: new Date('2025-10-01T07:20:00') }
];

var sortedLots = [];
for (var i = 0; i < lots.length; i++) {
  sortedLots.push(lots[i]);
}
for (var i = 0; i < sortedLots.length; i++) {
  for (var j = i + 1; j < sortedLots.length; j++) {
    if (sortedLots[i].publishedAt > sortedLots[j].publishedAt) {
      var temp = sortedLots[i];
      sortedLots[i] = sortedLots[j];
      sortedLots[j] = temp;
    }
  }
}
console.log('Сортування за часом:');
for (var i = 0; i < sortedLots.length; i++) {
  console.log(sortedLots[i].id);
}

var hourGroups = {};
for (var i = 0; i < lots.length; i++) {
  var hour = lots[i].publishedAt.getHours();
  if (!hourGroups[hour]) {
    hourGroups[hour] = [];
  }
  hourGroups[hour].push(lots[i].shortLen);
}
console.log('Середня довжина за годиною:');
for (var hour in hourGroups) {
  var sum = 0;
  for (var i = 0; i < hourGroups[hour].length; i++) {
    sum = sum + hourGroups[hour][i];
  }
  var avg = sum / hourGroups[hour].length;
  console.log('Година ' + hour + ': ' + avg);
}

var minUsers = lots[0].usersDay2;
for (var i = 1; i < lots.length; i++) {
  if (lots[i].usersDay2 < minUsers) {
    minUsers = lots[i].usersDay2;
  }
}
console.log('Мінімум користувачів на 2 день: ' + minUsers);
var minIds = [];
for (var i = 0; i < lots.length; i++) {
  if (lots[i].usersDay2 === minUsers) {
    minIds.push(lots[i].id);
  }
}
console.log('ID з мінімумом:');
for (var i = 0; i < minIds.length; i++) {
  console.log(minIds[i]);
}

function insertLot(list, lot) {
  var hasAll = true;
  if (!lot.id) hasAll = false;
  if (!lot.title) hasAll = false;
  if (!lot.author) hasAll = false;
  if (!lot.shortLen) hasAll = false;
  if (!lot.usersDay1) hasAll = false;
  if (!lot.usersDay2) hasAll = false;
  if (!lot.publishedAt) hasAll = false;

  if (!hasAll) {
    list.push(lot);
  } else {
    var inserted = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i].shortLen > lot.shortLen) {
        list.splice(i, 0, lot);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      list.push(lot);
    }
  }
}

insertLot(lots, { id: 11, title: 'Комети', author: 'Редакція' });
insertLot(lots, { id: 12, title: 'Астероїди', author: 'Редакція', shortLen: 120, usersDay1: 200, usersDay2: 150, publishedAt: new Date() });
console.log('Після вставки, довжина: ' + lots.length);

function getPricePerSymbol(date) {
  var month = date.getMonth();
  if (month === 11 || month === 0 || month === 1 || month === 5 || month === 6 || month === 7) {
    return 0.95;
  } else {
    return 1.1;
  }
}

console.log('Оплати:');
for (var i = 0; i < lots.length; i++) {
  if (lots[i].publishedAt && lots[i].shortLen) {
    var price = getPricePerSymbol(lots[i].publishedAt);
    var pay = lots[i].shortLen * price;
    console.log('ID ' + lots[i].id + ': ' + pay.toFixed(2));
  }
}

function User(lastName, firstName, age, education, purpose, dateStr, timeStr) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.age = age;
  this.education = education;
  this.purpose = purpose;
  this.date = new Date(dateStr + 'T' + timeStr);
}

var users = [
  new User('Коваль','Ірина',28,'вища','співпраця','2025-01-02','08:30'),
  new User('Іваненко','Марко',34,'повна','пропозиція','2025-03-15','10:00'),
  new User('Сагайдак','Леся',41,'вища','наявність помилки','2025-06-20','19:10'),
  new User('Марченко','Юрій',63,'професійна','скарга на порушення права власності','2025-07-11','21:00'),
  new User('Петренко','Олег',22,'неповна','співпраця','2025-09-05','12:00'),
  new User('Сидоренко','Анна',55,'вища','пропозиція','2025-10-10','16:30'),
  new User('Бондар','Оксана',48,'вища','пропозиція','2025-04-08','14:40'),
  new User('Романюк','Дарина',31,'повна','співпраця','2025-11-18','09:05'),
  new User('Гуменюк','Стас',27,'неповна','наявність помилки','2025-12-01','23:50'),
  new User('Шевченко','Ілля',60,'вища','співпраця','2025-02-22','07:15')
];

function filterUsersByMonthAndTime(month, timeStr) {
  var parts = timeStr.split(':');
  var targetHour = parseInt(parts[0]);
  var targetMin = parseInt(parts[1]);
  var result = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].date.getMonth() === month) {
      var h = users[i].date.getHours();
      var m = users[i].date.getMinutes();
      if (h > targetHour || (h === targetHour && m >= targetMin)) {
        result.push(users[i]);
      }
    }
  }
  return result;
}

var marchUsers = filterUsersByMonthAndTime(2, '09:30');
console.log('Користувачі у березні після 09:30:');
for (var i = 0; i < marchUsers.length; i++) {
  console.log(marchUsers[i].lastName);
}

var maxAge = users[0].age;
for (var i = 1; i < users.length; i++) {
  if (users[i].age > maxAge) {
    maxAge = users[i].age;
  }
}
console.log('Максимальний вік: ' + maxAge);
for (var i = 0; i < users.length; i++) {
  if (users[i].age === maxAge) {
    console.log('Освіта: ' + users[i].education);
    console.log('Дата: ' + users[i].date);
  }
}

var owlsClaims = 0;
var friendlyLarks = 0;
var other = 0;
for (var i = 0; i < users.length; i++) {
  var hour = users[i].date.getHours();
  var isLark = hour >= 6 && hour < 12;
  var isOwl = hour >= 20 || hour < 6;
  if (isOwl && users[i].purpose.indexOf('скарга') >= 0) {
    owlsClaims = owlsClaims + 1;
  } else if (isLark && users[i].purpose.indexOf('пропозиція') >= 0) {
    friendlyLarks = friendlyLarks + 1;
  } else {
    other = other + 1;
  }
}
console.log('Сови зі скаргами: ' + owlsClaims);
console.log('Жайворонки з пропозиціями: ' + friendlyLarks);
console.log('Інші: ' + other);

var sortedUsers = [];
for (var i = 0; i < users.length; i++) {
  sortedUsers.push(users[i]);
}
for (var i = 0; i < sortedUsers.length; i++) {
  for (var j = i + 1; j < sortedUsers.length; j++) {
    var compare = sortedUsers[i].lastName.localeCompare(sortedUsers[j].lastName);
    if (compare > 0 || (compare === 0 && sortedUsers[i].firstName.localeCompare(sortedUsers[j].firstName) > 0)) {
      var temp = sortedUsers[i];
      sortedUsers[i] = sortedUsers[j];
      sortedUsers[j] = temp;
    }
  }
}
console.log('Сортування користувачів:');
for (var i = 0; i < sortedUsers.length; i++) {
  console.log(sortedUsers[i].lastName + ' ' + sortedUsers[i].firstName + ': ' + sortedUsers[i].purpose);
}
