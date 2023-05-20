import DateFnsFormatDate from 'date-fns/format'
import { USER_STORAGE_KEY } from './constants'

export const formatDate = (date?: string | null | undefined) => {
  if (date) {
    return DateFnsFormatDate(new Date(date), 'dd LLLL yyyy')
  }
  return DateFnsFormatDate(new Date(), 'dd LLLL yyyy')
}

export const formatAmount = (amount: any, currency?: string | null | undefined) => {
  const symbol = currency ?? 'R'
  if (amount) {
    return (
      symbol +
      ' ' +
      parseInt(amount)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    )
  } else {
    return symbol + ' 0.00'
  }
}

/**
 * Gets JWT of authenticatedUser from either sessionStorage or localStorage
 */
export const fetchJwt = (): string | null => {
  const localUser = localStorage.getItem(USER_STORAGE_KEY)
  const sessionUser = sessionStorage.getItem(USER_STORAGE_KEY)
  const user = sessionUser || localUser

  return user ? JSON.parse(user).jwt : null
}
