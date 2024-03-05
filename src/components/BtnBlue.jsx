import PropTypes from 'prop-types';;

const BtnBlue = ({ text, handleClick }) => {
  return (
    <button 
      onClick={handleClick} 
      id='btn-blue'
      className="bg-blue-700 text-white py-2 rounded-md hover:scale-110">
        {text}
    </button>
  );
};

BtnBlue.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default BtnBlue;
