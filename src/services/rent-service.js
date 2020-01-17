export default class RentService {

  _baseUrl = 'http://134.209.138.34';

  getResources = async (url) => {
    const res = await fetch(`${this._baseUrl}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch, status - ${res.status}`);
    }

    return await res.json();
  };

  getAllItems = async () => {
    return await this.getResources(`/items`);
  };

  getItemInfo = async (id) => {
    return await this.getResources(`/item/${id}`);
  };
}
