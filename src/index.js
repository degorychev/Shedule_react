import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var shed = [];
getApi("https://shedule-api.herokuapp.com/shedule/teacher/%D0%A7%D0%BE%D1%80/today");

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

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h3>Расписание Чоракаева</h3>
        <Pair data={shed} />
      </div>
    );
  }
}

class Pair extends Component {
  render() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению расписания нет</p>
    }
    
    return (
      <div className='news'>
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего пар: {data.length}</strong>
      </div>
    );
  }
}

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
}

class Article extends Component {
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
  <App />,
  document.getElementById('root')
);