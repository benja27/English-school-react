import PropTypes from 'prop-types';

const SplashScreen = ({ visibility, setVisibility }) => {
    const handleClick = () => {
        setVisibility(!visibility);
    };

  return (
    <section className='absolute h-screen w-screen bg-slate-300 flex items-center justify-center
    flex-col gap-2
    '>
      <h2>Welcome to English School!</h2>
      <p>
        We are glad to have you here. We hope you enjoy your stay and learn a
        lot of English.
      </p>
      <button
        onClick={handleClick}
      >
        Continue
      </button>
    </section>
  );
};

SplashScreen.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
};

export default SplashScreen;
