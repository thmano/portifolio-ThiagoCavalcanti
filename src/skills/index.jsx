import { useEffect, useState } from "react";
import { api } from "../services/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./style.css";
import LevelBar from "../components/LevelBar";


function Skills() {
  const [technologies, setTechnologies] = useState();

  useEffect(() => {
    api.get("skills/").then((response) => setTechnologies(response.data));
  }, []);

  return (
    <div className="container_painel">
      <div className="content">

      <h2 className="titleSkills">Essas são as technologias que mais tenho experiência:</h2>
      <div className="containerTechnologies">
        {technologies?.map((skill) => (
          <Card sx={{ maxWidth: 345 }} key={skill.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={skill.url}
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {skill.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActionArea>
              <CardContent className="experienceCard">
                <Typography gutterBottom variant="h6" component="div">
                  Experiência:
                </Typography>
                  <LevelBar level={skill.level}/>
                  <Typography gutterBottom variant="h6" component="div">
                  Anos:
                  {skill.yearsExperience}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      </div>
      <div className="text">O nivel de experiência em cada barra de progresso não simboliza todo o conteudo de cada technologia, e sim o quanto de experiência eu tenho em cada uma baseado em toda minha carreira como desenvolvedor. </div>
    </div>
  );
}

export default Skills;
