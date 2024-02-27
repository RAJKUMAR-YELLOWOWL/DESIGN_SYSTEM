import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopsPage from './Components/ShopsPage';
import AddShops from './Components/AddShops';
import AddInventories from './Components/AddInventories';
import AddProducts from './Components/AddProducts';
import InventoryPage from './Components/InventoryPage';
const App = () => {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(ShopsPage, {}, void 0) }, void 0), _jsx(Route, { path: "/AddShops", element: _jsx(AddShops, {}, void 0) }, void 0), _jsx(Route, { path: "/AddInventories", element: _jsx(AddInventories, {}, void 0) }, void 0), _jsx(Route, { path: "/AddProducts", element: _jsx(AddProducts, {}, void 0) }, void 0), _jsx(Route, { path: "/InventoryPage", element: _jsx(InventoryPage, {}, void 0) }, void 0)] }, void 0) }, void 0));
};
export default App;
