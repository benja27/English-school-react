import PropTypes from 'prop-types';
import BtnRed from '../components/BtnRed';

const SplashScreen = ({ visibility, setVisibility }) => {
    const handleClick = () => {
        setVisibility(!visibility);
    };

  return (
    <section className='absolute h-screen w-screen bg-slate-300 flex items-center justify-center
    flex-col gap-2 p-4
    '>
      <h2 className='text-4xl font-bold  text-center'>Welcome to English School!</h2>
      <p>
        We are glad to have you here. We hope you enjoy your stay and learn a
        lot of English.
      </p>
      <BtnRed text='Continue' handleClick={handleClick}/>
    </section>
  );
};

SplashScreen.propTypes = {
  visibility: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
};

export default SplashScreen;
