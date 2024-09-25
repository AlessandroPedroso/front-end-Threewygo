import type ICurso from '../interface/ICurso';
import { api } from '../services/api';

export async function getCursos(): Promise<ICurso[]> {
  const { data } = await api.get('curso');

  return data;
}
