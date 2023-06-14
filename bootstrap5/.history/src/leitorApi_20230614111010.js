const axios = require('axios');

const url = "http://difiores-001-site3.etempurl.com/Agenda";

axios.get(url)
  .then(response => {
    const json = response.data;
    console.log(json);

    const jsonString = JSON.stringify(json);
    console.log(jsonString);
  })
  .catch(error => {
    console.error('Erro na solicitação HTTP:', error);
  });
