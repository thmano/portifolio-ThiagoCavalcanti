import "./style.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Menu() {
  return (
    <>
      <div className="container_menu">
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="../../assets/thiagoPixar.png"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
        <Box>
          <Typography variant="h5" gutterBottom>
            Thiago Cavalcanti
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Front-end developer
          </Typography>
        </Box>
        <Divider className="divider_menu" />
        <List>
          <Link to="/project">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className="list_menu" primary="Projetos" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider className="divider_menu" />
          <Link to="/skills">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className="list_menu" primary="Habilidades" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider className="divider_menu" />
          <Link to="/contact">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className="list_menu" primary="Fale comigo" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider className="divider_menu" />
          <Link to="/about">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText className="list_menu" primary="Minha história" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider className="divider_menu" />
        </List>
      </div>
    </>
  );
}

export default Menu;
