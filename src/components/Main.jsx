import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default function Main({ children }) {
  return <main className="main">{children}</main>;
}
