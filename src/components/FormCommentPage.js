import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'formsy-semantic-ui-react';
import styled from 'styled-components';
import FormComponent from './FormComponent';

class FormCommentPage extends React.Component {

  state = {
    toPost: false,
  }

  onMainAction = () => {
    this.props.onMainAction();
    this.setState(() => ({ toPost: true }));
  }

  render() {
    const { body, handleChange, postId, category, icon, text } = this.props;
    
    if (this.state.toPost === true)
      return <Redirect to={`/${category}/${postId}`} />

    return (
      <div>
        <Title>
          {icon} {text}
        </Title>
        <FormComponent
          onMainAction={this.onMainAction}
          content={
            <Form.TextArea
              label="Comment:"
              name="body"
              value={body}
              onChange={handleChange}
              required
              maxLength={2000}
              validations="maxLength:2000"
              validationErrors={{
                isDefaultRequiredValue: 'Required field',
                maxLength: "A maximum of 2000 characters is used for this field."
              }}
              errorLabel={<label />}
            />
          }
        />

      </div>
    );
  }
}

const Title = styled.span`
  font-size: 2em;
  font-weight: bold;
`;

export default FormCommentPage;