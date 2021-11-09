import { axios } from '../../core/axios';
import { Recept } from '../../store/ducks/recepts/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const ReceptsApi = {
  async fetchRecepts(userId?: string): Promise<Recept[]> {
    const { data } = await axios.get<Response<Recept[]>>(
      userId ? `/recepts/user/${userId}` : '/recepts',
    );
    return data.data;
  },
  async addRecept(payload: { text: string; images: string[] }): Promise<Recept> {
    const { data } = await axios.post<Response<Recept>>('/recepts', payload);
    return data.data;
  },
};
