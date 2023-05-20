export const API_HOST = import.meta.env.VITE_APP_API_HOST
export const USER_STORAGE_KEY = 'MOZAPP_WEB'

export const STRONG_PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{8,})/g
export const MEDIUM_PASSWORD_REGEX =
  /((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/g

export const ID_NUMBER_REGEX = {
  pattern: /^([0-9])(?=.{12}$)/,
  message: 'ID number should be 13 digits long'
}

export const INSTAGRAM_URL = 'https://instagram.com/mozappafrica'
export const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.allmacamo.mozapp'
export const APPSTORE_URL = 'https://apps.apple.com/app/moz-app/id1556524120'
