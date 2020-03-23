import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form, Header} from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import moment from 'moment';
import api from '../../api';

function Create() {
  const history = useHistory();
  const {register, handleSubmit} = useForm();

  const onCancel = () => history.push('/recipes');
  const onSubmit = (data) => {
    api.createRecipe({...data, createDate: moment().format('YYYY-MM-DD HH:mm:SS')});
    history.push('/recipes');
  };

  return (
    <div>
      <Header as="h1">Create</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Name</label>
          <input name="name" ref={register}/>
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <input name="category" ref={register}/>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input name="shortDesc" ref={register}/>
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <textarea name="longDesc" ref={register}/>
        </Form.Field>
        <div>
          <Button primary type='submit'>Submit</Button>
          <Button color="red" onClick={onCancel}>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
