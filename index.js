function sendEmail() {
  const phone1 = document.getElementById('inputPhone1')
  const phone2 = document.getElementById('inputPhone2')
  const name = document.getElementById('inputName')

  if (!phone1.value && !phone2.value) {
    return alert('Введите номер телефона')
  }

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'bulbulnoreply@gmail.com',
    Password: 'bulbul1234qw',
    To: 'Bulbul.kyiv@gmail.com',
    From: 'bulbulnoreply@gmail.com',
    Subject: 'Заявка с сайта',
    Body: `Телефон: ${phone1.value || phone2.value}<br/>Имя клиента: ${
      name.value ? name.value : '-'
    }`,
  }).then((message) => {
    alert('Заявка успешно создана! Ожидайте звонка')
    phone1.value = ''
    phone2.value = ''
    name.value = ''
  })
}
