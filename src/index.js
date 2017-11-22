import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Bar from './bar';
import Calend from './calendar';

import './index.css';


var shed = [];
// var group = [];
getApi("https://shedule-api.herokuapp.com/shedule/student/%D0%90%D0%98%D0%A1%D0%A2%D0%B1%D0%B4-31/all");
// getGroup("https://shedule-api.herokuapp.com/groups");

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

// function getGroup(url){
//   var xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState === 4 && xhttp.status === 200) {
//       var parsethis = xhttp.responseText;
      
//       group = JSON.parse(parsethis); //КОСТЫЛЬ И ВЕЛОСИПЕД
//     }
//   };

//   xhttp.open("GET", url, false); //При асинхронном варианте, данные прогруживаются позже рендера страницы
//   xhttp.send();
// }


class App extends Component {
  render(){
    return(
      <div>
        <Bar />
        <Calend
        data = {shed}
        />
      </div>
    );  
  }
}




// class Week extends Component {
//   render() {
//     return (
//       <div className='app'>
//         <h3>Расписание</h3>
//         <hr />
//         <List data={group} />
//         <hr />
//         <h4>Понедельник</h4><OneDay data={shed.Monday} /><hr />
//         <h4>Вторник</h4><OneDay data={shed.Tuesday} /><hr />
//         <h4>Среда</h4><OneDay data={shed.Wednesday} /><hr />
//         <h4>Четверг</h4><OneDay data={shed.Thursday} /><hr />
//         <h4>Пятница</h4><OneDay data={shed.Friday} /><hr />
//         <h4>Суббота</h4><OneDay data={shed.Saturday} /><hr />
//       </div>
//     );
//   }
// }

// class List extends Component {  
//   state = {
//     value: 15,
//   };

//   handleChange = (event, index, value) => this.setState({value});

//   render() {
//     var data = this.props.data;
//     var ListTemplate;

//     if (data.length > 0) {
//       ListTemplate = data.map(function(item) {
//         return (
//           <MenuItem value={(item.ID-0)} primaryText={item.Naimenovanie} />
//         )
//       })
//     } else {
//       ListTemplate = <MenuItem value={1} primaryText="Ошибка" />
//     }

//     return(
//         <SelectField
//           floatingLabelText="Группа"
//           value={this.state.value}
//           onChange={this.handleChange}
//         >
//         {ListTemplate}
//         </SelectField>
//     )
//   }
// }

// class OneDay extends Component {
//   render() {
//     var data = this.props.data;
//     var PairsTemplate;

//     if (data.length > 0) {
//       PairsTemplate = data.map(function(item, index) {
//         return (
//           <div key={index}>
//             <Pair data={item} />
//           </div>
//         )
//       })
//     } else {
//       PairsTemplate = <p>Пар в этот день нет</p>
//     }
    
//     return (
//       <div className='news'>
//         {PairsTemplate}
//         <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего пар: {data.length}</strong>
//       </div>
//     );
//   }
// }

// // class Comments extends Component {
// //   render() {
// //     return (
// //       <div className="comments">
// //         Нет новостей - комментировать нечего
// //       </div>
// //     );
// //   }
// // }

// class Pair extends Component {
//   render() {
//     var author = this.props.data.disc,
//     grup = this.props.data.group,
//     kab = this.props.data.kabinet,
//     tip = this.props.data.type,
//     tstart = this.props.data.start;

//     return (
//       <div className='article'>
//         <p className='news__author'>{author}:</p>
//         <p className='news__text'>{tstart}</p>
//         <p className='news__text'>{grup}</p>
//         <p className='news__text'>{kab}</p>
//         <p className='news__text'>{tip}</p>
//       </div>
//     );
//   }
// }


ReactDOM.render(
  <MuiThemeProvider>
  <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);