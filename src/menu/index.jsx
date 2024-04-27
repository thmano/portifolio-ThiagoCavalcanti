import "./style.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
        <div className="menuContent">
        <Link to="/">
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
          </Link>
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
            <Link to="/about">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    className="list_menu"
                    primary="Minha história"
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider className="divider_menu" />
          </List>
        </div>
        <div className="contactIcons">
          <p className="textContact">Vamos trabalhar juntos?</p>
          <p className="subTextContact">Entre em contato via:</p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/thiago-s-36651b129/"
              className="link"
              target="_blank"
            >
              <LinkedInIcon className="iconLinkedin" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://wa.me/+5511959817334"
              className="link"
              target="_blank"
            >
              <WhatsAppIcon className="iconWhatsapp" sx={{ fontSize: 40 }} />
            </a>
            <a
              href="https://github.com/thmano"
              className="link"
              target="_blank"
            >
              <GitHubIcon className="iconGithub" sx={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
