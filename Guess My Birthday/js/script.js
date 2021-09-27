const day = 13;
const month = 11;
let score = 0;

const displayMessageDay = function (message) {
  document.querySelector('.day').textContent = message;
};
const displayMessageMonth = function (message) {
  document.querySelector('.month').textContent = message;
};

document.querySelector('.btn--check').addEventListener('click', function () {
  const guessDay = Number(document.querySelector('.guess-day').value);
  const guessMonth = Number(document.querySelector('.guess-month').value);

  if (guessDay === day && guessMonth === month) {
    document.querySelector('.birthday').textContent = day + '/' + month;
    displayMessageDay('🎉 correct!');
    displayMessageMonth('🎉 correct!');
    document.querySelector('.game').style.backgroundImage =
      'linear-gradient(to bottom right, #60b347, #60b347)';
    document.querySelector('.guess-day').removeAttribute('readonly');
    document.querySelector('.guess-month').removeAttribute('readonly');
    document.querySelector('.guess-day').toggleAttribute('readonly');
    document.querySelector('.guess-month').toggleAttribute('readonly');
  } else {
    if (!guessDay) {
      displayMessageDay('⛔️ no number');
    } else if (guessDay === day) {
      displayMessageDay('🎉 correct!');
      document.querySelector('.birthday').textContent = day + '/?';
      document.querySelector('.guess-day').toggleAttribute('readonly');
    } else if (guessDay !== day) {
      displayMessageDay(guessDay > day ? 'too high!' : 'too low!');
    }

    if (!guessMonth) {
      displayMessageMonth('⛔️ no number');
    } else if (guessMonth === month) {
      displayMessageMonth('🎉 correct!');
      document.querySelector('.birthday').textContent = '?/' + month;
      document.querySelector('.guess-month').toggleAttribute('readonly');
    } else if (guessMonth !== month) {
      displayMessageMonth(guessMonth > month ? 'too high!' : 'too low!');
    }
  }
});
