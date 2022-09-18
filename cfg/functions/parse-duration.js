const tinyduration = require('tinyduration');
const incline = require('./incline');

const MAP = [
  {
    segment: 'years',
    words: ['год', 'года', 'лет']
  },
  {
    segment: 'months',
    words: ['месяц', 'месяца', 'месяцов']
  },
  {
    segment: 'weeks',
    words: ['неделя', 'недели', 'недель']
  },
  {
    segment: 'days',
    words: ['день', 'дня', 'дней']
  },
  {
    segment: 'hours',
    words: ['час', 'часа', 'часов']
  },
  {
    segment: 'minutes',
    words: ['минута', 'минуты', 'минут']
  },
  {
    segment: 'seconds',
    words: ['секунда', 'секунды', 'секунд']
  }
];

module.exports = (value) => {
  const duration = tinyduration.parse(value);

  let result = '';

  for (const i of MAP) {
    if (duration[i.segment]) {
      result += `${duration[i.segment]} ${incline(duration[i.segment], i.words)} `;
    }
  }

  return result;
};
