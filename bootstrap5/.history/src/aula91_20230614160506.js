axios('http://difiores-001-site3.etempurl.com/Agenda')
.then(resposta => carregaElementoNaPagina(resposta.data))

 const carregaElementoNaPagina = (json) => {
  console.log(json)


//  events: function(inf, successCallback, failureCallback) {​​​​​​
//  var url = 'http://difiores-001-site3.etempurl.com/Agenda'
//  fetch(url)
//  .then(response => {​​​​​​
//  if(response) {​​​​​​
//  return response.json();
//  }​​​​​​ else {​​​​​​
//  throw new Error('Erro na solicitação GET. ' + response.status);
//  }​​​​​​
//  }​​​​​​)
//  .then(data => {​​​​​​
//  successCallback(data);
//  }​​​​​​)
//  .catch(error => {​​​​​​
//  console.error('Ocorreu um erro:', error);
//  failureCallback(error)
//  }​​​​​​)
//  }​​​​​​
 // 'http://difiores-001-site3.etempurl.com/Agenda'
 // [
 // {​​​​​​
 // agendaId: 1,
 // aluno: "João",
 // professor: "Silva",
 // disciplina: "Matemática",
 // data: "01/06/2023",
 // horaInicio: "09:00",
 // horaTermino: "15:00",
 // local: "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // agendaId: 2,
 // aluno: "Maria",
 // professor: "Santos",
 // disciplina: "Ciências",
 // data: "02/06/2023",
 // horaInicio: "10:00",
 // horaTermino: "16:00",
 // local: "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // agendaId: 3,
 // aluno: "Lucas",
 // professor: "Pereira",
 // disciplina: "História",
 // data: "03/06/2023",
 // horaInicio: "11:00",
 // horaTermino: "17:00",
 // local: "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 4,
 // "aluno": "Ana Paula",
 // "professor": "Costa",
 // "disciplina": "Geografia",
 // "data": "09/06/2023",
 // "horaInicio": "12:00",
 // "horaTermino": "18:00",
 // "local": "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 5,
 // "aluno": "Paulo",
 // "professor": "Souza",
 // "disciplina": "Português",
 // "data": "12/06/2023",
 // "horaInicio": "13:00",
 // "horaTermino": "19:00",
 // "local": "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 6,
 // "aluno": "Manuela",
 // "professor": "Oliveira",
 // "disciplina": "Inglês",
 // "data": "15/06/2023",
 // "horaInicio": "14:00",
 // "horaTermino": "20:00",
 // "local": "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 7,
 // "aluno": "Pedro",
 // "professor": "Lima",
 // "disciplina": "Artes",
 // "data": "18/06/2023",
 // "horaInicio": "09:00",
 // "horaTermino": "15:00",
 // "local": "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 8,
 // "aluno": "Julia",
 // "professor": "Moraes",
 // "disciplina": "Física",
 // "data": "19/06/2023",
 // "horaInicio": "10:00",
 // "horaTermino": "16:00",
 // "local": "Sala 1"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 9,
 // "aluno": "Carlos",
 // "professor": "Ribeiro",
 // "disciplina": "Física",
 // "data": "01/06/2023",
 // "horaInicio": "09:00",
 // "horaTermino": "15:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 10,
 // "aluno": "Fernanda",
 // "professor": "Rocha",
 // "disciplina": "Química",
 // "data": "07/06/2023",
 // "horaInicio": "16:00",
 // "horaTermino": "10:00",
 // "local": "16:00"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 11,
 // "aluno": "Gabriel",
 // "professor": "Almeida",
 // "disciplina": "Biologia",
 // "data": "08/06/2023",
 // "horaInicio": "11:00",
 // "horaTermino": "17:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 12,
 // "aluno": "Bianca",
 // "professor": "Gomes",
 // "disciplina": "Literatura",
 // "data": "09/06/2023",
 // "horaInicio": "12:00",
 // "horaTermino": "18:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 13,
 // "aluno": "Ricardo",
 // "professor": "Barros",
 // "disciplina": "Geometria",
 // "data": "10/06/2023",
 // "horaInicio": "13:00",
 // "horaTermino": "19:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 14,
 // "aluno": "Teresa",
 // "professor": "Castro",
 // "disciplina": "Algebra",
 // "data": "11/06/2023",
 // "horaInicio": "14:00",
 // "horaTermino": "20:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 15,
 // "aluno": "Renato",
 // "professor": "Cardoso",
 // "disciplina": "Música",
 // "data": "12/06/2023",
 // "horaInicio": "09:00",
 // "horaTermino": "15:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 16,
 // "aluno": "Daniela",
 // "professor": "Nunes",
 // "disciplina": "Filosofia",
 // "data": "01/06/2023",
 // "horaInicio": "10:00",
 // "horaTermino": "12:00",
 // "local": "Sala 2"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 17,
 // "aluno": "Guilherme",
 // "professor": "Teixeira",
 // "disciplina": "Sociologia",
 // "data": "06/06/2023",
 // "horaInicio": "09:00",
 // "horaTermino": "15:00",
 // "local": "Sala 3"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 18,
 // "aluno": "Clarissa",
 // "professor": "Moreira",
 // "disciplina": "Psicologia",
 // "data": "07/06/2023",
 // "horaInicio": "10:00",
 // "horaTermino": "16:00",
 // "local": "Sala 3"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 19,
 // "aluno": "André",
 // "professor": "Mendonça",
 // "disciplina": "Economia",
 // "data": "08/06/2023",
 // "horaInicio": "11:00",
 // "horaTermino": "17:00",
 // "local": "Sala 3"
 // }​​​​​​,
 // {​​​​​​
 // "agendaId": 20,
 // "aluno": "Aline",
 // "professor": "Barreto",
 // "disciplina": "Política",
 // "data": "06/06/2023",
 // "horaInicio": "11:00",
 // "horaTermino": "14:00",
 // "local": "Sala 3"
 // }​​​​​​
 // ]
 // var jsonString = JSON.stringify(objetoJSON);
 // console.log(jsonString);
 // console.log(jsonString[5]);
 // ]
//  }​​​​​​);
//  calendar.render();
// }​​​​​​);

//     const tr = document.createElement('tr');

//     let td = document.createElement('td');
//     td.innerHTML = pessoa.aluno;
//     tr.appendChild(td);

//     td = document.createElement('td');
//     td.innerHTML = pessoa.professor;
//     tr.appendChild(td);

//     td = document.createElement('td');
//     td.innerHTML = pessoa.disciplina;
//     tr.appendChild(td);

//     td = document.createElement('td');
//     td.innerHTML = pessoa.data;
//     tr.appendChild(td);

//     // Aqui inserimos a tr como filha de table

//     table.appendChild(tr)

//     const resultado = document.querySelector('.resultado')

//     resultado.appendChild(table)

//     console.log(pessoa.nome)
//   }
//  }
//
