import React from 'react';
import Video from './Video'; // Asegúrate de tener el componente Video importado

const MiMixSection = () => {
  // Datos del primer mix de YouTube
  const mix1 = {
    title: 'Mi Mix 1',
    thumbnail: 'url_de_la_miniatura_mix_1',
    channel: 'Canal del mix 1',
    uploadedAt: 'Fecha de carga del mix 1',
    link: 'https://www.youtube.com/watch?v=VhRb5A2Gihk&list=PLeySRPnY35dEHnMLZGaNEXgHzJ2-TPLWw'
  };

  return (
    <div className="mi-mix-section">
      <h2>Mi Mix</h2>
      <div className="videos">
        <Video {...mix1} /> {/* Renderiza el componente Video con los datos del mix */}
        {/* Repite esto para los otros mixes si es necesario */}
      </div>
    </div>
  );
};

export default MiMixSection;
