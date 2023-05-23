import { Paper, Typography, Grid, Box } from "@mui/material"

export default function CategoryTile ({title, src, description} : {title: string, src: string, description: string}) {


  return (
    <Grid item xs={3}>
      <Paper sx={{
        height: '150px',
      }}>
        <Typography> {title}</Typography>
        <Box 
          component="img"
          src={src}
          alt={title}
          height={'100px'}
        />
      </Paper>
    </Grid>
  )
}