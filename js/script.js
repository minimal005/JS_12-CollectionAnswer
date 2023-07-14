let answerCollection = [[1, 'Виявивши, що улюблені джинси розірвалися, ви:', 'викидаєте їх', 'робите кілька художніх розрізів і продовжуєте носити'],  //  0/1
[2, 'Подруга попросила вас побути з її дитиною-непосидою. Ви:', 'включите йому телевізор або відеоігри', 'зануритесь в дитинство і разом придумаєте веселу захоплюючу гру'], //  0/1
[3, 'Часто чи сниться вам?','Так, зазвичай ви пам"ятаєте свої сни, вони яскраві і цікаві',' Ні, ви рідко запам"ятовуєте свої сни'], //   1/0
[4, 'Яку роботу ви б обрали - ту, де відомо, що і як робити, чи ту, в якій потрібно щось вигадувати?','Цікавіше самостійно шукати рішення проблем, навіть якщо це потребує часових витрат',' Вам легше працювати, коли існує чіткий алгоритм'], //  1/0
[5, 'Подруга виходить заміж, і вам належить організувати викуп нареченої.','Ви вивчите літературу і підберете конкурси','Cпробуєте вигадати конкурси самостійно, щоб вони були оригінальними'], //    0/1
[6, 'Вивчаючи меню в ресторані, ви, скоріш за все:','зупинитеся на знайомій страві', 'зупинитеся на страві з найекстравагантнішою назвою'], //   0/1
[7, 'Якщо в процесі створення стенду потрібно намалювати якусь тварину, ви:','спробуєте знайти фотографію або інше зображення і скопіюєте його','намалюєте тварину самі, навіть якщо не дуже добре малюєте'], //    0/1
[8, 'Для новорічного маскараду в дитячому садку потрібно знайти костюм для малюка. Ви:','пошиєте його самі','купите в магазині'], //  1/0
[9, 'Чи любили ви в дитинстві читати казки?','Вам було цікавіше дивитися мультики','Так, ви любили читати не менше, ніж дивитися телевізор'],  //   0/1
[10, 'Ваші фотографії в альбомі', 'частіше традиційні','живі пози в незвичайних місцях']  //   0/1
]
const activeNumber = document.querySelector('#activeNumber')
const answer = document.querySelector('.answer')
const l_1 = document.querySelector('.l-1')
const l_2 = document.querySelector('.l-2')
const alert = document.querySelector('.alert')
const get_btn = document.querySelector('.btn__send')
const rezBlock = document.querySelector('.rezult__block')
let rezultAnswer = [] // сюди записуватимемо відповіді usera

let check = [document.querySelector('#question-1'), document.querySelector('#question-2')]

document.querySelector('.btn__startTest').addEventListener('click', () => {
   document.querySelector('.btn__startTest').classList.add('hidden')
   alert.classList.remove('hidden')
})

function showAnswer(arr){
   activeNumber.textContent = arr[0]
   answer.textContent = arr[1]
   l_1.innerText = arr[2]
   l_2.innerText = arr[3]
}

function hide (){
   get_btn.classList.remove('hidden')
   alert.style.minHeight = 200 + 'px'
   document.querySelector('.form__wrapper').classList.add('hidden')
}

get_btn.addEventListener('click', () => {
   get_btn.textContent = 'Exit'
   showrezult()
   get_btn.addEventListener('click', () => {
      alert.classList.add('hidden')
      document.querySelector('.btn__startTest').classList.remove('hidden')
      rezBlock.classList.add('hidden')
      location.reload()
   })
}) 

function showrezult() {
   rezBlock.classList.remove('hidden')
   rezBlock.style.textAlign = 'center'
   rezBlock.innerHTML = finishResult()
   }

let k = 1
for(let i = 0; i < check.length; i++){
   check[i].addEventListener('click', () => {
      if (check[i].checked) {
         rezultAnswer.push(i) 
         if (k == 10) hide()
         else showAnswer(answerCollection[k++])}
      })
}

function finishResult() {
   let newArr = [1, 1, 0, 0, 1, 1, 1, 0, 1, 1] //масив результатів, за які получаєш по 1 балу
   let out = 0
   for (let i = 0; i < newArr.length; i++){
      if (newArr[i] == rezultAnswer[i]) out += 1 //порівнюємо цей масив з відповідями usera і якщо результати сповпадають, то сумуємо їх
   }

   if (out < 4) return `Кількість набраних балів: ${out}<br>Ви дотримуєтеся традиційних поглядів на вирішення проблемних ситуацій.`
   else if (out >= 4 && out < 6) return `Кількість набраних балів: ${out}<br>Ви досить креативні за своєю природою, але не завжди вважаєте за потрібне користуватися цими здібностями.`
   else return `Кількість набраних балів: ${out}<br>Ви дуже творча людина. Ви вмієте бачити можливості в складних ситуаціях і готові до експериментів.`
}
