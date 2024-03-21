import vid from '../vid/V12.mp4'

function Homes() {
    return (
      <div className="video-background">
        <video autoPlay loop muted style={{ width: '100%'}} >
          <source src={vid} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        <div className="content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', margin: '0 auto'  }} >
          {/* Aca agregar cualquier contenido que se pueda mostrar sobre el video de fondo */}
          <h1>Bienvenido</h1>
          <p>Descubre la ferocidad del V12.</p>
        </div>
      </div>
    );
  }
  
  export default Homes;