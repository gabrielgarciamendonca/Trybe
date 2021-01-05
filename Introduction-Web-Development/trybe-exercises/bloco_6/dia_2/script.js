window.onload = function() {
  defineStates();
  const submit = document.querySelector('#submit-btn');
  submit.addEventListener('click', submitBtn);
  const clear = document.querySelector('#clear');
  clear.addEventListener('click', clearBtn);
}

function clearBtn() {
  document.querySelector('#name').innerText = "";
  document.querySelector('#email').innerText = "";
  document.querySelector('#tax-id').innerText = "";
  document.querySelector('#address').innerText = "";
  document.querySelector('#state').innerText = "";
  document.querySelector('#type').innerText = "";
  document.querySelector('#resume').innerText = "";
  document.querySelector('#office').innerText = "";
  document.querySelector('#office-description').innerText = "";
  document.querySelector('#start-date').innerText = "";
}

function definePersonalData() {
  const name = document.querySelector('#name');
  const nameInputed = document.querySelector('#name-field');
  name.innerText = nameInputed.value;

  const email = document.querySelector('#email');
  const emailInputed = document.querySelector('#email-field');
  email.innerText = emailInputed.value;

  const taxId = document.querySelector('#tax-id');
  const taxIdInputed = document.querySelector('#tax-id-field');
  taxId.innerText = taxIdInputed.value;

  const address = document.querySelector('#address');
  const addressInputed = document.querySelector('#address-field');
  address.innerText = addressInputed.value;

  const state = document.querySelector('#state');
  const stateInputed = document.querySelector('#states-field');
  state.innerText = stateInputed.value;

  const type = document.querySelector('#type');
  const typeInputed = document.getElementsByName('type');
  for (let index = 0; index < typeInputed.length; index += 1) {
    if(typeInputed[index].checked) {
      type.innerText = typeInputed[index].value;
    }
  }
}

function defineLastWork() {
  const resumeCv = document.querySelector('#resume');
  const resumeCvInputed = document.querySelector('#resume-cv-field');
  resumeCv.innerText = resumeCvInputed.value;

  const office = document.querySelector('#office');
  const officeInputed = document.querySelector('#office-field');
  office.innerText = officeInputed.value;

  const officeDescription = document.querySelector('#office-description');
  const officeDescriptionInputed = document.querySelector('#office-description-field');
  officeDescription.innerText = officeDescriptionInputed.value;

  const date = document.querySelector('#start-date');
  const dateInputed = document.querySelector('#date-field');
  date.innerText = dateInputed.value;
}

function defineResume() {
  definePersonalData();
  defineLastWork();
}

function submitBtn(event) {
  defineResume();
  event.preventDefault();
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
    "ID": "0",
    "Sigla": "",
    "Nome": ""
  },   
       {
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