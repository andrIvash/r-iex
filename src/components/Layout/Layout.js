import React from "react";
import PropTypes from 'prop-types';
import Navigation from "../Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div>
        {props.children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default React.memo(Layout);
