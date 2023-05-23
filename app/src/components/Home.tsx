import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HomeCarousel from './Home/HomeCarousel';
import CategoryTile from './CategoryTile';


export default function Home() {

  interface CategoryItem {
    title: string,
    description: string,
    src: string
  }

    //TODO: hook this up to an API call when the backend is running
  const categoryItems : CategoryItem[] = [ 
    {
      title: 'Food',
      description: 'food stuff',
      src: 'https://cms-www.chewy.com/contentAsset/image/9b9d82af-d798-4026-be7d-86bfbe0e923a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/PET-TILES-Deal-FlagsCat-2x.jpg'
    },
    {
      title: 'Toys',
      description: 'toys stuff',
      src: 'https://cms-www.chewy.com/contentAsset/image/9b9d82af-d798-4026-be7d-86bfbe0e923a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/PET-TILES-Deal-FlagsCat-2x.jpg'
    },
    {
      title: 'Clothes',
      description: 'clothes stuff',
      src: 'https://cms-www.chewy.com/contentAsset/image/9b9d82af-d798-4026-be7d-86bfbe0e923a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/PET-TILES-Deal-FlagsCat-2x.jpg'
    },
    {
      title: 'Favorites',
      description: 'favorites stuff',
      src: 'https://cms-www.chewy.com/contentAsset/image/9b9d82af-d798-4026-be7d-86bfbe0e923a/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/222/resize_h/222/PET-TILES-Deal-FlagsCat-2x.jpg'
    }
  ]
  
  const categoryTiles = categoryItems.map( ({title, description, src}) => <CategoryTile
    title={title}
    description={description}
    src={src}
    />
  )

  return (
    <Box 
      sx={{ 
        flexGrow: 1,
        margin: 2,
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <HomeCarousel />
        </Grid>

        {categoryTiles}
      </Grid>
    </Box>
  );
}