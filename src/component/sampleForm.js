import React from 'react';
// import ButtonGroup from './ButtonGroup';
import { FormGroup, ToggleButtonGroup, ControlLabel } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap-toggle';

class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange = (selectedColors) => {
    console.info(selectedColors);
  };

  handleSubmit() {
    
  }

  render() {
    // const { course } = this.props;
    return (<form ref={form => (this.form = form)} onSubmit={event => event.preventDefault()}>

      <FormGroup>
        <ControlLabel>Sample Toggle Button Group</ControlLabel>

        <ToggleButtonGroup 
          type="checkbox"
          name="favoriteColors"
          ref={favoriteColors => (this.favoriteColors = favoriteColors)} 
          onChange={ this.handleColorChange } > 
          <ToggleButton value="RED">Red</ToggleButton>
          <ToggleButton value="GREEN">Green</ToggleButton>
          <ToggleButton value="BLUE">Blue</ToggleButton>
        </ToggleButtonGroup>
      </FormGroup>

    </form>);
  }
}

export default SampleForm;