import PropTypes from 'prop-types';;

const BtnRed = ({ text, handleClick }) => {
  return (
    <button 
      onClick={handleClick} 
      className="btn-red">
        {text}
    </button>
  );
};

BtnRed.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
};

export default BtnRed;
