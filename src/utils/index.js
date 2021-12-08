const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const getDateText = (value, unit) => `${value} ${unit}${value !== 1 ? 's' : ''} ago`

export const formatDate = strDate => {
  // Date from backend is in the format <date>T<time>Z
  // The 'Z' in the date enables automatic conversion from UTC to client time when using the Date object
  const date = new Date(strDate)
  const dateFullYear = date.getFullYear()
  const now = new Date()

  // JavaScript date difference by default is in milliseconds, so we convert to seconds
  const dateDiffInSeconds = (now - date) / 1000

  let value
  let response

  if (dateDiffInSeconds < 60) {
    response = getDateText(dateDiffInSeconds, 'second')
  } else if (dateDiffInSeconds < 3600) {
    value = Math.floor(dateDiffInSeconds / 60)
    response = getDateText(value, 'minute')
  } else if (dateDiffInSeconds < 86400) {
    value = Math.floor(dateDiffInSeconds / 3600)
    response = getDateText(value, 'hour')
  } else if (dateDiffInSeconds < (86400 * 4)) { // less than 4 days
    value = Math.floor(dateDiffInSeconds / 86400)
    response = getDateText(value, 'day')
  } else {
    const monthIndex = date.getMonth()
    let datePortion = `${MONTHS[monthIndex]} ${monthIndex + 1}`
    if (dateFullYear !== now.getFullYear()) datePortion += `, ${date.getFullYear()}`
    response = `${datePortion} at ${date.getHours()}:${date.getMinutes()}`
  }

  return response
}
