import PropTypes from 'prop-types';

export default function Card({ data, cardDelete, id }) {
  return (
    <>
      <div className="message-card">
        <div>{data}</div>
        <button className="delete-button" onClick={() => cardDelete(id)}>
          Удалить
        </button>
      </div>
    </>
  );
}

Card.propTypes = {
  data: PropTypes.string,
  cardDelete: PropTypes.func,
  id: PropTypes.number,
}
