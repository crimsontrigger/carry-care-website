import { Service, Container } from "typedi";
import { MainApi } from "../apis";

class ItemService {
  /**
   * Add a new item
   * @param {Object} item
   */
  async addNewItem(item) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.addNewItem(item);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getItemType(type) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.getItemType(type);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ItemService;
