import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './../../styles/theme.js';

class Form extends Component {
  render() {
    return (
      <FormWrapper>
        <HeaderText className="purple">
          3 Bedroom Townhomes <br /> in Richmond
        </HeaderText>
        <SubheaderText>
          Register today and live a naturally connected life.
        </SubheaderText>

        <InputField type="text" placeholder="First Name *" />
        <InputField type="text" placeholder="Last Name *" />
        <InputField type="text" placeholder="Email *" />
        <InputField type="text" placeholder="Phone Number" />
        <InputField type="text" placeholder="Employer" />
        <InputField type="text" placeholder="Job Title" />
        <InputField type="text" placeholder="Street" />
        <InputField type="text" placeholder="Apt #, Unit, Suite" />
        <InputField type="text" placeholder="Postcode/Zip" />
        <InputField type="text" placeholder="City" />
        <InputField type="text" placeholder="Province / State" />
        {/* TODO: Dropdown with countries */}
        <SelectMenu type="text" placeholder="Canada">
          <option value="Canada">Canada</option>
        </SelectMenu>
        <SelectMenu type="text" placeholder="Contact Preference">
          <option value="any">Any</option>
          <option value="any">Email</option>
          <option value="any">Phone</option>
          <option value="any">Work</option>
          <option value="any">Agent</option>
          <option value="any">Text Message</option>
        </SelectMenu>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div``;

const HeaderText = styled.h1`
  font-style: italic;
  color: ${theme.colorPurple};
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  padding: 8% 0;

  &.purple {
    color: white;
  }
`;

const SubheaderText = styled.h2`
  color: white;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0px;
  border-bottom: 1px solid ${theme.colorLightGray};
  line-height: 2;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px 0;
  color: white;
  &:focus {
    border: 1px solid ${theme.colorYellow};
    outline: none !important;
  }
`;

const SelectMenu = styled.select`
  width: 100%;
  background: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid ${theme.colorLightGray};
  font-size: 16px;
  line-height: 2;
  margin: 10px 0;
  padding: 10px 0;
`;

export default Form;
