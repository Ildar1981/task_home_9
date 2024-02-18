document.getElementById(`generic`).addEventListener(`click`,function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('birthDayOutput').innerText = initPerson.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    
});

document.getElementById(`remove`).addEventListener(`click`,function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    
});