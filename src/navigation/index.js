import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "../components/Loading";

const HomeScreen = lazy(() => import("../screens/HomeScreen"));
const SupplierDetails = lazy(() =>
  import("../screens/TablesScreen/MasterTables/SupplierDetails")
);
const CustomerDetails = lazy(() =>
  import("../screens/TablesScreen/MasterTables/CustomerDetails")
);
const EmployeeDetails = lazy(() =>
  import("../screens/TablesScreen/MasterTables/EmployeeDetails")
);
const UserDetails = lazy(() =>
  import("../screens/TablesScreen/MasterTables/UserDetails")
);
const CompanyDetails = lazy(() =>
  import("../screens/TablesScreen/MasterTables/CompanyDetails")
);

const Main = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route
        exact
        path="/master/supplier_details"
        component={SupplierDetails}
      />
      <Route
        exact
        path="/master/customer_details"
        component={CustomerDetails}
      />
      <Route
        exact
        path="/master/employee_details"
        component={EmployeeDetails}
      />
      <Route exact path="/master/user_details" component={UserDetails} />
      <Route exact path="/master/company_details" component={CompanyDetails} />
      <Route exact path="/" component={HomeScreen} />
    </Switch>
  </Suspense>
);

export default Main;
