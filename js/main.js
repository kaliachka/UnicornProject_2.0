$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});














// var surname = prompt('Введите фамилию');
// var user_name = prompt('Введите имя');
// var patronymic = prompt('Введите отчество');
// if (surname === '' || user_name === '' || patronymic === '') {
//     console.log('Вы ввели пустую строку');
// }
// else if(parseInt(surname) || parseInt(user_name) || parseInt(patronymic)) {
//     console.log('Тип введенных данных не соответсвует заданному вопросу');
// }
// else if(surname.length>=30) {
//     console.log('Длина введенных данных превышает допустимую');
// }
// else {
//     console.log('Ваше ФИО:' + ' ' + surname + ' ' + user_name + ' ' + patronymic);
// }
// var age = prompt ('Введите ваш возраст');
// if (!parseInt(age) || age >= 80 || age <=18) {
//     console.log('Введенный возраст не соотвествует допустимому');
// }
// else {
//     console.log('Ваш возраст:' + ' ' + age + ' ' + 'лет');
//     console.log('Ваш возраст в днях:' + ' ' + (age*365) + ' ' + 'дней');
//     console.log('Через 5 лет вам будет:' + (parseInt(age) + 5) + ' ' + 'лет');
// }
// var gender = prompt ('Введите ваш пол', 'мужской');
// console.log('Ваш пол:' + ' ' + gender);
// var pension;
// if (gender == 'мужской' && age >= 64 || gender == 'женский' && age >= 60) {
//     console.log('Вы на пенсии:' + ' ' + 'да');
// }
// else {
//     console.log('Вы на пенсии:' + ' ' + 'нет');
// }