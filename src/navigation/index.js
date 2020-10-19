import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const SavoriesScreen = lazy(() => import("../screens/SavoriesScreen"));
const AdminScreen = lazy(() => import("../screens/AdminScreen"));
const OrderSummaryScreen = lazy(() => import("../screens/OrderSummary"));

const Main = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/savories" component={SavoriesScreen} />
      <Route path="/admin" component={AdminScreen} />
      <Route path="/summary" component={OrderSummaryScreen} />
    </Switch>
  </Suspense>
);

export default Main;
