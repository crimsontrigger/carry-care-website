import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const SavoriesScreen = lazy(() => import("../screens/SavoriesScreen"));
const AdminScreen = lazy(() => import("../screens/AdminScreen"));
const OrderSummaryScreen = lazy(() => import("../screens/OrderSummary"));
const SuccessScreen = lazy(() => import("../screens/SuccessScreen"));
const AdminScreenSavoriesOrders = lazy(() =>
  import("../screens/AdminScreen/viewOrders")
);

const Main = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/savories" component={SavoriesScreen} />
      <Route path="/admin" component={AdminScreen} />
      <Route path="/summary" component={OrderSummaryScreen} />
      <Route path="/success" component={SuccessScreen} />
      <Route
        path="/adm/view-orders-savories"
        component={AdminScreenSavoriesOrders}
      />
    </Switch>
  </Suspense>
);

export default Main;
