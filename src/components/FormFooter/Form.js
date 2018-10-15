import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'src/styles/media';

import Input from './elements/Input';
import Select from './elements/Select';
import selections from 'src/data/selections';

class Form extends Component {
  handleClick = e => {
    e.preventDefault();
    console.log('Hello');
  };

  render() {
    return (
      <FormWrapper id="register">
        <HeaderText className="purple">
          3 Bedroom Townhomes <br /> in Richmond
        </HeaderText>
        <SubheaderText>
          Register today and live a naturally connected life.
        </SubheaderText>
        <form onSubmit={e => this.handleClick(e)}>
          <Input type="text" placeholder="First Name *" required />
          <Input type="text" placeholder="Last Name *" required />
          <Input type="text" placeholder="Email *" required />
          <Input type="text" placeholder="Phone Number" />
          <Input type="text" placeholder="Employer" />
          <Input type="text" placeholder="Job Title" />
          <Input type="text" placeholder="Street" />
          <Input type="text" placeholder="Apt #, Unit, Suite" />
          <Input type="text" placeholder="Postcode/Zip" />
          <Input type="text" placeholder="City" />
          <Input type="text" placeholder="Province / State" />
          {/* TODO: Dropdown with countries */}
          {/* <Select >
          <option selected value="Canada">
            Canada
          </option>
        </Select>
     */}
          <Select options={selections.agent.options} required>
            {selections.agent.question}
          </Select>
          {/* <Select options={SelectionsData[0].options} required>
            {SelectionsData[0].question}
          </Select>
          <Select options={SelectionsData[1].options} required>
            {SelectionsData[1].question}
          </Select> */}

          <Text>
            By cliking submit, you have agreed to receive emails from Westgate.
          </Text>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.div`
  max-width: 927px;
`;

const HeaderText = styled.h1`
  font-style: italic;
  color: ${({ theme }) => theme.colorPurple};
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  padding: 8% 0;
  transition: 0.4s ease;

  &.purple {
    color: white;
  }

  @media (min-width: ${media.smup}) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colorLightGray};
  font-size: 16px;
  margin: 40px 0;
  text-align: center;
`;

const SubheaderText = styled.h2`
  color: white;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 300;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colorYellow};
  color: ${({ theme }) => theme.colorPurple};
  padding: 20px 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 auto;
  display: block;
`;

export default Form;
