import { shopsPageMockData } from "../MockData/ShopsPage";
const rows = shopsPageMockData.shopsList.map((shop, index) => ({
    id: index + 1,
    shop: shop.options[0].label,
}));
export { rows };
