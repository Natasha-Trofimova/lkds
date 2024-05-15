import './Mini.css'

function Footer() {
  return (
    <>
    <div className='main'>

    <select className='s1'>
      <option>Реквизиты:</option>
      <option>ООО "Лифт-Комплекс ДС"</option>
      <option>Адрес: 630501, Новосибирская обл., Новосибирский р-н, р.п. Краснообск, ул. Восточная, здание 25</option>
      <option>ИНН 5401144062</option>
      <option>КПП 543301001</option>
      <option>ОГРН – 1025400530539</option>
      <option>Р/с 40702810900030000340</option>
      <option>Ф-Л СИБИРСКИЙ ПАО БАНК "ФК ОТКРЫТИЕ"</option>
      <option>БИК 045004867</option>
      <option>к/сч 30101810250040000867</option>
    </select>

<p className='ms'> <a href="https://api.whatsapp.com/send/?phone=79134701800&text&type=phone_number&app_absent=0">Whatsapp:<br/> +7 913 470 1800</a> </p>
<p className='ms'> <a href="https://t.me/MarketLKDSBot">Телеграмм:<br/> MarketLKDS</a></p>

<p>Адрес:<br/> 630501, Новосибирская обл., Новосибирский р-н,<br/> р.п. Краснообск, ул. Восточная, здание 25</p>

<p>Почтовый адрес:<br/> 630501, Новосибирская область, <br/>р.п. Краснообск, Дом связи, а/я 55</p>
</div>
</>
);
}

export default Footer;