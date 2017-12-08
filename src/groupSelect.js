import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



export default class SelectGroup extends Component {
  state = {
    value: 15,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    var data = this.props.data;
    var ListTemplate;

    if (data.length > 0) {
      ListTemplate = data.map(function(item) {
        return (
          <MenuItem value={(item.ID-0)} primaryText={item.Naimenovanie} />
        )
      })
    } else {
      ListTemplate = <MenuItem value={1} primaryText="Ошибка" />
    }

    return(
        <SelectField
          floatingLabelText="Группа"
          value={this.state.value}
          onChange={this.handleChange}
        >
        {ListTemplate}
        </SelectField>
    )
  }
}