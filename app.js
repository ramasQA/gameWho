let words1 = [
    "Непобедимый",
    "Визжащий",
    "Реальный",
    "Скоростной",
    "Экцентричный",
    "Кодовый",
    "Прожорливый",
    "Догадливый",
    "Гениальный",
    "Разрушительный",
    "Растерянный",
    "Торопливый",
    "Вопрошающий",
    "Космический",
    "Динамичный",
    "Паникующий",
    "Задумчивый",
    "Загадочный",
    "Рекордный",
    "Непонимающий",
    "Ультрафиолетовый",
    "Читающий",
    "Озорной",
    "Тормозной",
    "Волшебный",
    "Хардовый",
    "Тычущий",
    "Внимательный",
    "Криповый",
  ];
  let words2 = [
    "Мозг",
    "Везунчик",
    "Повелитель",
    "Красавчик",
    "Печенька",
    "Тормоз",
    "Динозавр",
    "Индеец",
    "Экстрасенс",
    "Цыпленок",
    "Решала",
    "Ураган",
    "Взломщик",
    "Эрудит",
    "Сыщик",
    "Крушитель",
    "Паникер",
    "Шутник",
    "Обуза",
    "Капитан",
    "Ботаник",
    "Гриб",
    "Зомби",
    "Котик",
    "Ведьмак",
    "Храбрец",
    "Мастер",
    "Король",
  ];

  function allRandomNames(arr1, arr2){
      let rezult = []
      for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2.length; j++) {
              rezult.push(`${arr1[i]} ${arr2[j]}`)
              
          }
          
      }
      return rezult
  }
  let allNames = allRandomNames(words1, words2)
  let item = document.createElement('div')
  item.classList.add('menu_link')
  

  function gameStart(){
  setTimeout( ()=>{
    item.textContent = allNames[Math.floor(Math.random() * allNames.length)]
    //document.body.append(item)
    document.querySelector('.header').append(item)

  }, 500);
}

  
      
  