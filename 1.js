const userIvanov = function(a) {
  a = {Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: 25}
for (let prop in a) {
  if(a.hasOwnProperty(prop)) {
      console.log(prop+":"+a[prop]);
    }
  }
}
userIvanov();