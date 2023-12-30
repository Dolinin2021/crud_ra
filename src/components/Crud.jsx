import React from 'react';
import Cards from './Cards';
import data from './../data/dataContent';

export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], inputValue: '' };
    this.cardDelete = this.cardDelete.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.id = 0;
  }

  componentDidMount() {
    const actualData = this.getData();
    this.setState({ data: actualData });
    this.id = actualData.length;
  }

  getData() {
    return data;
  }

  cardDelete(id) {
    const index = data.findIndex((e) => e.id === id);
    data.splice(index, 1);

    this.setState({ data: this.getData() });
  }

  onChangeHandler({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  submitHandler(evt) {
    data.push({ id: this.id, content: this.state.inputValue });

    this.setState({ data: this.getData() });
    this.setState({ inputValue: '' });
    this.id++;

    evt.preventDefault();
  }

  refreshData() {
    const actualData = this.getData();
    this.setState({ data: actualData });
  }

  render() {
    return (
      <>
        <h2>Notes</h2>
        <Cards data={this.state.data} cardDelete={this.cardDelete} />
        <h5>New note</h5>
        <form action="" onSubmit={this.submitHandler}>
          <input
            value={this.state.inputValue}
            onChange={this.onChangeHandler}
            type="text"
            required
          />
          <button className="create-button">Создать</button>
        </form>
        <button className="refresh-button" onClick={this.refreshData}>
          Обновить
        </button>
      </>
    );
  }
}
