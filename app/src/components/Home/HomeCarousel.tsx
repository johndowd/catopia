import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'

export default function HomeCarousel() {

  //TODO: this will need to convert to an API call when the backend is running
  const items = [
    {
      alt: "Random thing #1",
      src: "https://cms-www.chewy.com/contentAsset/image/481aed43-02ac-42ad-805f-c191e91015c5/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/2880/resize_h/592/2023-02_NCA-Offer-HP-Hero-LARGE-v2.jpg"
    },
    {
      alt: 'random thing 2',
      src: 'https://cms-www.chewy.com/contentAsset/image/d3e6be98-e8f7-4477-bbe4-3bbdcbf36c9c/fileAsset/byInode/1/filter/Resize,Jpeg/jpeg_q/100/resize_w/2880/resize_h/592/2023-05-Pharmacy-FleaTick-Zoetis-BI-HP-Hero-LARGE-Multi-Promo.jpg'
    }
  ]

  const carouselElements = items.map( ({alt, src}) => <Box 
    component="img"
    alt={alt}
    src={src}
    width="100%"
    height='250px'
    />
  )

  return (
    <Carousel> 
      {carouselElements}
    </Carousel>
  )
}