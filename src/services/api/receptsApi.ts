import { axios } from '../../core/axios';
import { Recept } from '../../store/ducks/recepts/contracts/state';

interface Response<T> {
  status: string;
  data: T;
}

export const ReceptsApi = {
  async addRecept(payload: { text: string }): Promise<Recept> {
    const { data } = await axios.post<Response<Recept>>('/recepts', payload);
    return data.data;
  },
};
