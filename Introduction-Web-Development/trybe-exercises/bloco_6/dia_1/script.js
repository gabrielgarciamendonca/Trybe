window.onload = function() {
  defineStates();
  const submit = document.querySelector('#submit-btn');
  submit.addEventListener('clicked', submitBtn);
  defineResume();
}

function definePersonalData() {
  const name = document.querySelector('#name');
  name.innerText = document.querySelector('#name-field').innerText;
  const email = document.querySelector('#email');
  email.innerText = document.querySelector('#email-field').innerText;
  const taxId = document.querySelector('#tax-id');
  taxId.innerText = document.querySelector('#tax-id-field').innerText;
  const address = document.querySelector('#address');
  address.innerText = document.querySelector('#address-field').innerText;
  const state = document.querySelector('#states');
  state.innerText = document.querySelector('#states-field').innerText;
  const type = document.querySelector('#type');
  type.innerText = document.querySelector('.input-event').innerText;
}

function defineResume() {
  definePersonalData();
}

function submitBtn(event) {
  defineResume();
}

function defineStates() {
  let states = statesOfCountry();
  const options = [];
  const select = document.querySelector('#states-field');
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index].Sigla;
    option.innerText = states[index].Nome;
    options.push(option);
  }
  for(let index = 0; index < states.length; index += 1) {
    select.appendChild(options[index]);
  }
}

function statesOfCountry() {
  const states = [{
    "ID": "1",
    "Sigla": "AC",
    "Nome": "Acre"
  },
       {
    "ID": "2",
    "Sigla": "AL",
    "Nome": "Alagoas"
  },
       {
    "ID": "3",
    "Sigla": "AM",
    "Nome": "Amazonas"
  },
       {
    "ID": "4",
    "Sigla": "AP",
    "Nome": "Amapá"
  },
       {
    "ID": "5",
    "Sigla": "BA",
    "Nome": "Bahia"
  },
       {
    "ID": "6",
    "Sigla": "CE",
    "Nome": "Ceará"
  },
       {
    "ID": "7",
    "Sigla": "DF",
    "Nome": "Distrito Federal"
  },
       {
    "ID": "8",
    "Sigla": "ES",
    "Nome": "Espírito Santo"
  },
       {
    "ID": "9",
    "Sigla": "GO",
    "Nome": "Goiás"
  },
       {
    "ID": "10",
    "Sigla": "MA",
    "Nome": "Maranhão"
  },
       {
    "ID": "11",
    "Sigla": "MG",
    "Nome": "Minas Gerais"
  },
       {
    "ID": "12",
    "Sigla": "MS",
    "Nome": "Mato Grosso do Sul"
  },
       {
    "ID": "13",
    "Sigla": "MT",
    "Nome": "Mato Grosso"
  },
       {
    "ID": "14",
    "Sigla": "PA",
    "Nome": "Pará"
  },
       {
    "ID": "15",
    "Sigla": "PB",
    "Nome": "Paraíba"
  },
       {
    "ID": "16",
    "Sigla": "PE",
    "Nome": "Pernambuco"
  },
       {
    "ID": "17",
    "Sigla": "PI",
    "Nome": "Piauí"
  },
       {
    "ID": "18",
    "Sigla": "PR",
    "Nome": "Paraná"
  },
       {
    "ID": "19",
    "Sigla": "RJ",
    "Nome": "Rio de Janeiro"
  },
       {
    "ID": "20",
    "Sigla": "RN",
    "Nome": "Rio Grande do Norte"
  },
       {
    "ID": "21",
    "Sigla": "RO",
    "Nome": "Rondônia"
  },
       {
    "ID": "22",
    "Sigla": "RR",
    "Nome": "Roraima"
  },
       {
    "ID": "23",
    "Sigla": "RS",
    "Nome": "Rio Grande do Sul"
  },
       {
    "ID": "24",
    "Sigla": "SC",
    "Nome": "Santa Catarina"
  },
       {
    "ID": "25",
    "Sigla": "SE",
    "Nome": "Sergipe"
  },
       {
    "ID": "26",
    "Sigla": "SP",
    "Nome": "São Paulo"
  },
       {
    "ID": "27",
    "Sigla": "TO",
    "Nome": "Tocantins"
  }];

  return states;
}