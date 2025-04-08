import React from "react";
import GridMotion from "./Backgrounds/GridMotion/GridMotion"
import "./Clientes.css"


const items = [
  'https://drive.google.com/file/d/1ohMt6VWy6Cuy1WHYkXPVSng2xeq-rU6U/view?usp=sharing',
  'https://drive.google.com/file/d/167wZ9UODGgQg_yX2AqST-GXRNxfsAMMw/view?usp=sharing',
  'https://drive.google.com/file/d/1NUbt5_sw1cnYuBO8n8SEk1mjSMjGZpt3/view?usp=sharing',
  'https://drive.google.com/file/d/1uRHcUFuWyZ_rwx-ijPyNAYLXgkpXIVwL/view?usp=sharing',
  'https://drive.google.com/file/d/1Vr3w91YzDnl1BXbIW4EbbV1O4Nh7yQ0B/view?usp=sharing',
  'https://drive.google.com/file/d/19rN_7bZt4fWHFMuF8ICfnh6oMAnIFmcd/view?usp=sharing',
  'https://drive.google.com/file/d/1YUW6NHDGukYezb8HPB-F9JlPV7d9ZCQC/view?usp=sharing',
  'https://drive.google.com/file/d/1uRHcUFuWyZ_rwx-ijPyNAYLXgkpXIVwL/view?usp=sharing',
  'https://drive.google.com/file/d/1d7UZ8KCnDaDwe1qDuyJf8dzW-SXz0gFP/view?usp=sharing',
  'https://drive.google.com/file/d/1jGrigUKa9CenaU7cosk_msyhf8-w4rXn/view?usp=sharing',
  'https://drive.google.com/file/d/1uRHcUFuWyZ_rwx-ijPyNAYLXgkpXIVwL/view?usp=sharing',
  'https://drive.google.com/file/d/1QYHhEaHw9DNUV4cRKcdBKqiFfHt66AQG/view?usp=sharing',
  'https://drive.google.com/file/d/1HjESdbzdD1KOSs9uB2_QJFn4YMDlbCfX/view?usp=sharing',
  'https://drive.google.com/file/d/1ohMt6VWy6Cuy1WHYkXPVSng2xeq-rU6U/view?usp=sharing',
  'https://drive.google.com/file/d/1DDWPUurmSSVxl1w41REqz7VYFHUZK3Jk/view?usp=sharing',
  'https://drive.google.com/file/d/167wZ9UODGgQg_yX2AqST-GXRNxfsAMMw/view?usp=sharing',
  'https://drive.google.com/file/d/1CdTTyPKQb1vwc0GoNmT3p5WQYZaQIBmk/view?usp=sharing',
  'https://drive.google.com/file/d/1NUbt5_sw1cnYuBO8n8SEk1mjSMjGZpt3/view?usp=sharing',
  'https://drive.google.com/file/d/1yPrS6agsD04gK411Pwe25YRD889KFt_T/view?usp=sharing',
  'https://drive.google.com/file/d/1Vr3w91YzDnl1BXbIW4EbbV1O4Nh7yQ0B/view?usp=sharing',
  'https://drive.google.com/file/d/19rN_7bZt4fWHFMuF8ICfnh6oMAnIFmcd/view?usp=sharing',
  'https://drive.google.com/file/d/1YUW6NHDGukYezb8HPB-F9JlPV7d9ZCQC/view?usp=sharing',
  'https://drive.google.com/file/d/1jGrigUKa9CenaU7cosk_msyhf8-w4rXn/view?usp=sharing',
  'https://drive.google.com/file/d/1d7UZ8KCnDaDwe1qDuyJf8dzW-SXz0gFP/view?usp=sharing',
  'https://drive.google.com/file/d/1DDWPUurmSSVxl1w41REqz7VYFHUZK3Jk/view?usp=sharing',
  'https://drive.google.com/file/d/1Nsi-BY43DQi2QE-64RSeObHFUdL_dwA-/view?usp=sharing',
  'https://drive.google.com/file/d/1HjESdbzdD1KOSs9uB2_QJFn4YMDlbCfX/view?usp=sharing',
  
];
const Clientes = () => {
  return (
    <div className="seccion-proceso">
      <h2 className="titulo-seccion1">Conoce nuestros trabajos</h2>
      <GridMotion items={items} />
    </div>
)};

export default Clientes;