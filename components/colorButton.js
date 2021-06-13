import { Moon, Sun } from "react-feather";
import { IconButton, useColorMode } from 'theme-ui';

function ColorButton({ ...props }) {
  const [colorMode, setColorMode] = useColorMode();

  const icon = colorMode === "dark" ? <Sun /> : <Moon />;

  return (
    <IconButton
      as="button"
      aria-label="Toggle color mode"
      mx="5px"
      background="inherit"
      onClick={(e) => {
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
      {...props}
    >
      {icon}
    </IconButton>
  );
}

export default ColorButton;

