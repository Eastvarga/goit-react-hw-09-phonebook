import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { form, nameStyle, input, tel, button } from './styles.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    if (this.props.items.some(elem => elem.name === name)) {
      window.alert(`${name} is already in contacts`);
      this.reset();
      return;
    }
    this.props.onAddContact(this.state);

    this.reset();
  };
  reset = () => {
    this.setState(() => {
      return { ...INITIAL_STATE };
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={form} onSubmit={this.handleSubmit}>
        <label className={nameStyle}>
          Name
          <input
            className={input}
            // autocomplete="off"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={nameStyle}>
          📞
          <input
            className={tel}
            type="tel"
            name="number"
            value={number}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={button} type="submit">
          Add to contacts
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: contactsSelectors.getContactsItems(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(
        contactsOperations.addContact({
          // id: uuidv4(),
          name,
          number,
        }),
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
