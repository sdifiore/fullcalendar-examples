import axios from 'axios';
import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // webpack uses file-loader to handle font files
import './index.css'; // our app's CSS

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl1 = document.getElementById('calendar1');
  let calendarEl2 = document.getElementById('calendar2');
  let calendarEl3 = document.getElementById('calendar3');

  var calendar1 = new Calendar(calendarEl1, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    locale: 'pt-br',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2023-06-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        "title": "Aula de Inglês",
        "start": "2023-05-30T09:30:00",
        "end": "2023-05-30T11:00:00"
      },
      {
        "title": "Aula de Geografia",
        "start": "2023-05-30T11:30:00",
        "end": "2023-05-30T13:00:00"
      },
      {
        "title": "Aula de Artes",
        "start": "2023-05-30T14:00:00",
        "end": "2023-05-30T15:30:00"
      }
    ]
  });

  var calendar2 = new Calendar(calendarEl2, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    locale: 'pt-br',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2023-06-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        "title": "Aula de Inglês",
        "start": "2023-05-30T09:30:00",
        "end": "2023-05-30T11:00:00"
      },
      {
        "title": "Aula de Geografia",
        "start": "2023-05-30T11:30:00",
        "end": "2023-05-30T13:00:00"
      },
      {
        "title": "Aula de Artes",
        "start": "2023-05-30T14:00:00",
        "end": "2023-05-30T15:30:00"
      }
    ]
  });

  var calendar3 = new Calendar(calendarEl3, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    locale: 'pt-br',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2023-06-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [    {
      "title": "Aula de Inglês",
      "start": "2023-05-30T09:30:00",
      "end": "2023-05-30T11:00:00"
    },
    {
      "title": "Aula de Geografia",
      "start": "2023-05-30T11:30:00",
      "end": "2023-05-30T13:00:00"
    },
    {
      "title": "Aula de Artes",
      "start": "2023-05-30T14:00:00",
      "end": "2023-05-30T15:30:00"
    }]
  });

  calendar1.render();
  calendar2.render();
  calendar3.render();

   // Usar o Axios para fazer chamadas HTTP
   axios.get('http://difiores-001-site3.etempurl.com/Agenda')
   .then(function(response) {
    console.log(response)
     var events = response.data;

     // Adicionar os eventos aos calendários
     calendar1.addEventSource(events);
     calendar2.addEventSource(events);
     calendar3.addEventSource(events);
   })
   .catch(function(error) {
     console.error('Erro ao obter os eventos da API:', error);
   });
  });
