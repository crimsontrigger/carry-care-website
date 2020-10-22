import HttpClient from "./base.api";
import routes from "./routes";
import { SERVER_URI } from "../constants/server";

class MainApi extends HttpClient {
  constructor() {
    super(`${SERVER_URI}`);

    // this._initializeResponseInterceptor();
  }

  // _initializeResponseInterceptor = () => {
  //   this.instance.interceptors.request.use(
  //     this._handleRequest,
  //     this._handleError
  //   );
  // };

  // _handleRequest = (config) => {
  //   config.headers["x-key"] = API_KEY;

  //   return config;
  // };

  addNewItem = (item) => {
    return this.instance.post(`${routes.ITEM}/add`, item);
  };

  getItemType = (type) => {
    return this.instance.post(`${routes.ITEM}/`, type);
  };

  addNewOrder = (order) => {
    return this.instance.post(`${routes.ORDER}/add`, order);
  };

  getOrdersType = (type) => {
    return this.instance.post(`${routes.ORDER}/`, type);
  };

  updateOrderStatus = (body) => {
    return this.instance.post(`${routes.ORDER}/update-status`, body);
  };
}

export default MainApi;
