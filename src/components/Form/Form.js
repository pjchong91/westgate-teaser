import React, { Component } from 'react';
import styled from 'styled-components';
import screen from 'src/styles/media';

import Button from 'components/Button';
import Input from './elements/Input';
import Select from './elements/Select';
import SelectCountry from './elements/SelectCountry';

class Form extends Component {
  render() {
    return (
      <Wrapper action="https://spark.re/bene-group/westgate/register/westgate-register" method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <Fields>
          <Input
            placeholder="First Name *"
            name="contact[first_name]"
            required
          />
          <Input placeholder="Last Name *" name="contact[last_name]" required />
          <Input
            type="email"
            name="contact[email]"
            placeholder="Email *"
            required
          />
          <Input type="tel" name="contact[phone]" placeholder="Phone Number" />
          <Input placeholder="Employer" name="contact[employer]" />
          <Input placeholder="Job Title" name="contact[job_title]" />
          <Input placeholder="Street" name="contact[address_line_1]" />
          <Input
            placeholder="Apt #, Unit, Suite"
            name="contact[address_line_2]"
          />
          <Input placeholder="Postcode / Zip" name="contact[postcode]" />
          <Input placeholder="City" name="contact[city]" />
          <Input placeholder="Province / State" name="contact[province]" />
          <SelectCountry defaultValue={'35'} />
          <Select
            label="Contact Preference"
            name="contact[contact_preference]"
            defaultValue=""
          >
            <option value="Any">Any</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Work">Work</option>
            <option value="Phone">Phone</option>
            <option value="Agent">Agent</option>
            <option value="Text Message">Text Message</option>
          </Select>
          <Select
            label="Where did you hear about us? *"
            name="answers[4541][answers]"
            defaultValue=""
            required
          >
            <option value="Internet">Internet</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Magazine">Magazine</option>
            <option value="TV">TV</option>
            <option value="Walk/Drive By">Walk/Drive By</option>
            <option value="Friend/Family">Friend/Family</option>
          </Select>
          <Select
            label="Do you currently own a home?"
            name="answers[4542][answers]"
            defaultValue=""
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
          <Select
            label="What is your age group?"
            name="answers[4543][answers]"
            defaultValue=""
          >
            <option value="20-30">20-30</option>
            <option value="30-40">30-40</option>
            <option value="40-50">40-50</option>
            <option value="50-60">50-60</option>
            <option value="60+">60+</option>
          </Select>
          <Select
            label="Are you working with a realtor?"
            name="answers[4544][answers]"
            defaultValue=""
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
          <Input
            placeholder="What city do you live in?"
            name="answers[4545][answers]"
          />
          <Select label="Are you an Agent?" name="agent" defaultValue="">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </Select>
          <Input
            placeholder="Employer/Brokerage"
            name="contact[brokerage_name]"
          />
          <Input placeholder="Comments:" style={{width: '100%'}}/>
          <Input type="hidden" name="source" id="source" value="Website Registration Form" />
          <Input type="hidden" name="redirect_success" id="redirect_success" value={`${window.location.href}thankyou`} />
          <Input type="hidden" name="redirect_error" id="redirect_error" value="" />
          <Input type="text" name="are_you_simulated" id="are_you_simulated" placeholder="Leave this field blank" style={{display: 'none'}} />
        </Fields>
        <p>
          By clicking submit, you have agreed to receive emails from Westgate.
        </p>
        <Button>Submit</Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.form`
  p {
    color: #80767a;
    margin-top: 2.5%;
    margin-bottom: 4%;
    font-size: 14px;
    letter-spacing: 1.2px;
    line-height: 1.5;
    @media (max-width: ${screen.sm}) {
      margin-bottom: 35px;
    }
  }
`;

const Fields = styled.div`
  display: flex;
  max-width: 820px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    width: 49%;
  }
  @media (max-width: ${screen.sm}) {
    & > * {
      width: 100%;
    }
  }
`;

export default Form;
