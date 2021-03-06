import React, { useState } from 'react';
import styled from 'styled-components';

import CustomInput from './CustomInput';
import CustomSubmit from './CustomSubmit';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
  border-left: 1px solid var(--black);
  padding: var(--padding-lg);

  .form-group,
  h2 {
    position: relative;
    padding: var(--padding-sm) 0 var(--padding-sm) var(--padding-base);
  }

  form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .textarea {
    flex: 1;
    display: flex;
  }

  .short-text {
    display: none;
  }
`;

export default function Mail() {
  const [mailData, setMailData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit() {
    setIsSubmitted(true);
  }

  const inputs = [
    { type: 'text', name: 'name', label: 'Name | Company' },
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'textarea', name: 'message', label: 'Message' },
  ];

  return (
    <Container className="mail-border" id="contact">
      <h2 className="full-text">Feel free to drop me an email</h2>
      <h2 className="short-text">Drop me an email</h2>
      <form
        onSubmit={onSubmit}
        name="portfolio"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="portfolio" />
        {inputs.map(({ type, name, label }) => {
          return (
            <div className={`form-group ${type}`} key={name}>
              <CustomInput
                type={type}
                name={name}
                label={label}
                setMailData={setMailData}
                mailData={mailData}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
              />
            </div>
          )
        })}
        <div className="form-group">
          <CustomSubmit isSubmitted={isSubmitted} />
        </div>
      </form>
    </Container>
  )
}
