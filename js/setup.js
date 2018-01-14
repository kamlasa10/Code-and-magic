var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var nameWizards = ['Иван, Хуан Себастья', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnameWizards = ['Да Марья', 'Верно', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницская', 'Нионго', 'Ирвинг'];
var coatColorArr = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorArr = ['black', 'red', 'blue', 'yellow', 'green'];
var setupSimilarTemplay = document.querySelector('#similar-wizard-template').content;
var setupSimilarList = document.querySelector('.setup-similar-list');
setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

var wizards = [
  {
    name: getRandom(nameWizards) + ' ' + getRandom(surnameWizards),
    coatColor: getRandom(coatColorArr),
    eyesColor: getRandom()
  },
  {
    name: getRandom(nameWizards) + ' ' + getRandom(surnameWizards),
    coatColor: getRandom(coatColorArr),
    eyesColor: ''
  },
  {
    name: getRandom(nameWizards) + ' ' + getRandom(surnameWizards),
    coatColor: getRandom(coatColorArr),
    eyesColor: ''
  },
  {
    name: getRandom(nameWizards) + ' ' + getRandom(surnameWizards),
    coatColor: getRandom(coatColorArr),
    eyesColor: ''
  }
];
function getRandom(arr) {
  var getRandomNum = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  var randomNum = getRandomNum(0, arr.length - 1);
  return arr[randomNum];
}
for(var i = 0; i < wizards.length; i++) {
  var wizardElem = setupSimilarTemplay.querySelector('.setup-similar-item').cloneNode(true);
  wizardElem.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElem.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElem.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  setupSimilarList.appendChild(wizardElem);
}

