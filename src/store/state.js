let defaultCity = '北京'
try { // 有些浏览器不支持localStorage
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
