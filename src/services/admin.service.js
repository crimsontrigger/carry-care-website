import { Service, Container } from "typedi";
import { MainApi } from "../apis";

class AdminService {
  async getOrdersType(type) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.getOrdersType(type);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateOrderStatus(body) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.updateOrderStatus(body);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default AdminService;
