import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <img
        src="https://vignette.wikia.nocookie.net/smeshworldwiki/images/a/aa/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0_%D0%BB%D0%B5%D1%81%D0%BD%D0%BE%D0%B9_%D0%B3%D0%BE%D1%81%D1%82%D1%8C.png/revision/latest?cb=20190512083129&path-prefix=ru"
        className={classes.image}
      />
      <NavLink to={"/dialogs/" + props.id} activeClassName="selected">
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
