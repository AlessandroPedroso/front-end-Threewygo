import { useEffect, useState } from 'react';
import type ICurso from '../../interface/ICurso';
import { getCursos } from '../../utils/getDataApi';

export default function Home() {
  const [cursos, setCursos] = useState<ICurso[]>();
  useEffect(() => {
    Promise.all([getCursos()]).then(([curso]) => {
      return setCursos(curso);
    });
  }, []);

  return (
    <div>
      {cursos &&
        cursos.map((curso, index: number) => (
          <p key={index as number}>{curso.titulo}</p>
        ))}
    </div>
  );
}
