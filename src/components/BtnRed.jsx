import PropTypes from 'prop-types';;

const BtnRed = ({ text, handleClick }) => {
  return (
    <button 
      onClick={handleClick} 
      id='btn-red'
      className="bg-red-600 hover:bg-red-800 text-white p-2 rounded">
        {text}
    </button>
  );
};

BtnRed.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default BtnRed;
