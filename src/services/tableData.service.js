import { Service, Container } from "typedi";
import { MainApi } from "../apis";

class AdminService {
  async getTableData(type) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.getTableData(type);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async addRow(body) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.addRow(body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async editRow(body) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.editRow(body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteRow(body) {
    try {
      const publicApiService = Container.get(MainApi);
      const response = await publicApiService.deleteRow(body);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default AdminService;
