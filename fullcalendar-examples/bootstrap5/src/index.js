import { Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { get } from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // webpack uses file-loader to handle font files
import './index.css'; // our app's CSS

const axios = require('axios');
const url = "http://difiores-001-site3.etempurl.com/Agenda";

axios.get(url)
    .then(response =>
    {
        const json = response.data;
        console.log(json);

        const jsonString = JSON.stringify(json);
        console.log(jsonString);
        console.log(jsonString.length);

         for (let i = 0; i < json.length; i+8)
         {
             console.log(json[i].agendaId);
             console.log(json[i+1].aluno);
             console.log(json[i+2].professor);
             console.log(json[i+3].disciplina);
             console.log(json[i+4].data);
             console.log(json[i+5].horaInicio);
             console.log(json[i+6].horaTermino);
             console.log(json[i+7].local);
         }
    })
    .catch(error =>
    {
        console.error('Erro na solicitação HTTP:', error);
    });

  document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin ],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: '2018-01-12',
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2018-01-01',
      },
      {
        title: 'Long Event',
        start: '2018-01-07',
        end: '2018-01-10'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2018-01-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Repeating Event',
        start: '2018-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-01-11',
        end: '2018-01-13'
      },
      {
        title: 'Meeting',
        start: '2018-01-12T10:30:00',
        end: '2018-01-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-01-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-01-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-01-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-01-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-01-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-01-28'
      }
    ]
  });

  calendar.render();
});
