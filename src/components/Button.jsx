import clsx from 'clsx';
import PropTypes from 'prop-types';

export function Button({ buttonText, className, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={clsx("block bg-gray-200 rounded-[100px] border-[4px] w-[443px] h-[55px] px-4 py-2 text-lg font-semibold", className)}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};