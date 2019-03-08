// 导入css
import './css/style.css'
import './css/main.scss'

var greeter = require('./Greeter');
document.getElementsByTagName("body")[0].appendChild(greeter());
let {name, age} = {name: 'zhangsan', age: 14};
console.log(name);
console.log(age);