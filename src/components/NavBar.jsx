import PropTypes from 'prop-types';

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
