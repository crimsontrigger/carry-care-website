import { Service, Container } from "typedi";
import { MainApi } from "../apis";

class OrderService {
  /**
   * Add a new order
   * @param {Object} order
   */
  async addNewOrder(order) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.addNewOrder(order);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default OrderService;
