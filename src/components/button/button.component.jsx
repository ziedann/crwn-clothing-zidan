import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ''}`}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <div className='button-spinner' /> : children}
    </button>
  );
};

export default Button;
