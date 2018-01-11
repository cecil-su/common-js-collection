export const formatDuration = ms => {
  if (ms < 0) ms = -ms
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  }
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(val => val[1] + ' ' + (val[1] !== 1 ? val[0] + 's' : val[0]))
    .join(', ')
}

/*
  // examples
  formatDuration(1001) // '1 second, 1 millisecond'
  formatDuration(34325055574) // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
*/

export const getDaysDiffBetweenDates = (dateIninial, dateFinal) => (dateFinal - dateIninial) / (1000 * 3600 * 24)

/*
  // examples
  getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')) // 9
*/

export const toEnglishDate = time => {
  try {
    return new Date(time)
      .toISOString()
      .split('T')[0]
      .replace(/-/g, '/')
  } catch (e) {}
}
