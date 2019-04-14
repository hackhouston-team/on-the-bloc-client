import axios from 'axios';

class ApiService {
  baseUrl =  "https://on-the-bloc-api.herokuapp.com/api/v1"; 
  usersUrl = `${this.baseUrl}/users/`;
  blocsUrl = `${this.baseUrl}/blocs/`;

  // user endpoints
  getUser = async id => {
    const { data } = await axios.get(`${this.usersUrl}/${id}`);
    return data;
  };

  getUserMessages = () => {}; // low priority

  createUser = async username => {
    const { data } = axios.post(`${this.usersUrl}`, { id: username });
    return data;
  };

  // bloc endopoints
  getBloc = async id => {
    const { data } = await axios.get(`${this.blocsUrl}/${id}`);
    return data;
  };

  // creates a new bloc
  postBloc = async (creatorId, blocName) => {
    const { data } = await axios.post(`${this.blocsUrl}`, {
      creatorId,
      name: blocName
    });
    return data;
  };

  postBlocMessage = async (creatorId, blocId, content) => {
    const { data } = await axios.post(`${this.blocsUrl}/${blocId}/message`, {
      creatorId,
      content
    });
    return data;
  };
}

export default new ApiService();
