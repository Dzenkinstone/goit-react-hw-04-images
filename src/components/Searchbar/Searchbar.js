import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import { Loader } from '../Loader';
import { Header } from './Searchbar.styled';
import { Form } from './Searchbar.styled';
import { Button } from './Searchbar.styled';
import { Label } from './Searchbar.styled';
import { Input } from './Searchbar.styled';
import { Container } from './Searchbar.styled';

export const Searchbar = ({ onChange, isLoading }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onChange(value);
    setValue('');
    return;
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch size="16px" />
          <Label>Search</Label>
        </Button>
        <Input
          onChange={handleChange}
          value={value}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {isLoading && (
          <Container>
            <Loader />
          </Container>
        )}
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
