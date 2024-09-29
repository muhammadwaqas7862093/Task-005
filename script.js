const birthdayInput = document.getElementById('birthday');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    const birthday = new Date(birthdayInput.value);
    const today = new Date();
    const age = getAge(birthday, today);

    resultDiv.innerHTML = `
    <h5>${age.years}<br> years </h5>    
    
    <h5>${age.months} <br> months </h5>  
    
    <h5>${age.days}<br> days </h5>
    `;
}

function getAge(birthday, today) {
    var years = today.getFullYear() - birthday.getFullYear();
    var months = today.getMonth() - birthday.getMonth();
    var days = today.getDate() - birthday.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += getDaysInMonth(today.getFullYear(), today.getMonth());
    }

    return { years, months, days };
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
