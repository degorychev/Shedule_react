import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var shed = [];
getApi("https://shedule-api.herokuapp.com/shedule/student/%D0%90%D0%98%D0%A1%D0%A2%D0%B1%D0%B4-31/week");

function getApi(url){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var parsethis = xhttp.responseText;
      
      shed = JSON.parse(parsethis); //КОСТЫЛЬ И ВЕЛОСИПЕД
    }
  };

  xhttp.open("GET", url, false); //При асинхронном варианте, данные прогруживаются позже рендера страницы
  xhttp.send();
}

class Week extends Component {
  render() {
    return (
      <div className='app'>
        <h3>Расписание</h3>
        <h4>Понедельник</h4><OneDay data={shed.Monday} /><hr />
        <h4>Вторник</h4><OneDay data={shed.Tuesday} /><hr />
        <h4>Среда</h4><OneDay data={shed.Wednesday} /><hr />
        <h4>Четверг</h4><OneDay data={shed.Thursday} /><hr />
        <h4>Пятница</h4><OneDay data={shed.Friday} /><hr />
        <h4>Суббота</h4><OneDay data={shed.Saturday} /><hr />
      </div>
    );
  }
}

class OneDay extends Component {
  render() {
    var data = this.props.data;
    var PairsTemplate;

    if (data.length > 0) {
      PairsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Pair data={item} />
          </div>
        )
      })
    } else {
      PairsTemplate = <p>Пар в этот день нет</p>
    }
    
    return (
      <div className='news'>
        {PairsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего пар: {data.length}</strong>
      </div>
    );
  }
}

// class Comments extends Component {
//   render() {
//     return (
//       <div className="comments">
//         Нет новостей - комментировать нечего
//       </div>
//     );
//   }
// }

class Pair extends Component {
  render() {
    var author = this.props.data.disc,
    grup = this.props.data.group,
    kab = this.props.data.kabinet,
    tip = this.props.data.type,
    tstart = this.props.data.start;

    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{tstart}</p>
        <p className='news__text'>{grup}</p>
        <p className='news__text'>{kab}</p>
        <p className='news__text'>{tip}</p>
      </div>
    );
  }
}


ReactDOM.render(
  <Week />,
  document.getElementById('root')
);