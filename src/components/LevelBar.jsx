function LevelBar(level) {
  let lvBar;
  switch (level.level) {
    case 1:
      lvBar = "20%";
      break;
    case 2:
      lvBar = "40%";
      break;
    case 3:
      lvBar = "60%";
      break;
    case 4:
      lvBar = "80%";
      break;
    case 5:
      lvBar = "100%";
      break;

    default:
      lvBar = 0;
      break;
  }
  const styles = {
    base_bar:{
        width: '100%',
        backgroundColor: 'rgb(151, 151, 151)',
        borderRadius: '10px',
        height: '5px'
    },
    level_bar: {
      width: lvBar,
      backgroundColor: "rgb(73 164 204)",
      borderRadius: "10px",
      height: "5px",
    },
  };
  return (
    <div  style={styles.base_bar}>
      <div  style={styles.level_bar} />
    </div>
  );
}

export default LevelBar;
