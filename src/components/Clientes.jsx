import React from "react";
import GridMotion from "./Backgrounds/GridMotion/GridMotion"
import "./Clientes.css"


const items = [
 'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081441/_YES4283_khwmdi.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081441/_YES3554_orryeo.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081442/_YES2060_bwaycy.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081442/_YES3131_m5qmuk.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081443/_YES8179_atb46s.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081443/Chinese-traditional-cuisine-1068136_sqwjcx.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081443/Piece-of-homemade-cheesecake-1062655_ij0tct.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081444/Pile-of-coffee-beans-592847_lue7ac.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081444/Pieces-of-homemade-jam-pie-1062654_uspq6s.jpg',
'https://res.cloudinary.com/ddajljgfe/video/upload/v1745081458/rECOMENDACI%C3%93N_maRI_aYLURI_opdvya.mp4',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081486/Portrait-of-a-guitarist-474012_miageo.jpg',
'https://res.cloudinary.com/ddajljgfe/video/upload/v1745085763/Recomendaci%C3%B3n_Jaime_Barbas_muox6l.mp4',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086130/_YES0598_lpzpfe.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081442/_YES2060_bwaycy.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081442/_YES3131_m5qmuk.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081443/_YES8179_atb46s.jpg',
'https://res.cloudinary.com/ddajljgfe/video/upload/v1745084894/output_compress-video-online.com_2_mlajpy.mp4',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086113/_YES0460_vcuetz.jpg',

'https://res.cloudinary.com/ddajljgfe/video/upload/v1745090972/output_compress-video-online.com_3_pgeeds.mp4',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081444/Pile-of-coffee-beans-592847_lue7ac.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081444/Pieces-of-homemade-jam-pie-1062654_uspq6s.jpg',

'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086128/_YES0575_hapcn3.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086130/_YES0598_lpzpfe.jpg',

'https://res.cloudinary.com/ddajljgfe/image/upload/v1745081441/_YES4283_khwmdi.jpg',
'https://res.cloudinary.com/ddajljgfe/video/upload/v1744911210/PASSION_MULE_ihfkwl.mp4',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086784/_YES8962_htfhev.jpg',
'https://res.cloudinary.com/ddajljgfe/image/upload/v1745086823/Alpha_Llama_Photo_and_Video_MATAMBA_1_zaruxx.png',

];
const Clientes = () => {
  return (
    <div className="seccion-proceso">
      <h2 className="titulo-seccion1">Conoce nuestros trabajos</h2>
      <GridMotion items={items} />
    </div>
)};

export default Clientes;