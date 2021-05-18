console.log(_.isArray([1,2]));
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
})





let fio = [13,14]

localStorage.setItem('empStore', fio)

console.log(localStorage.empStore)

