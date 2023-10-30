import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  const info = { handleThemeChange, theme };

  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default ContextProvider;
ContextProvider.propTypes = {
  children: PropTypes.node,
};
