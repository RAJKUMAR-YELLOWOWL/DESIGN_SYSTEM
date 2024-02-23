import { shopsPage, inventoryPage, productsPage } from "./types";

export const shopsPageMockData: shopsPage = {
    hasError: false,
    isLoading: false,
    shopName: {
      options: [{ id: "1", label: "Shop 1" }],
      selectedValue: "1",
    },
    shopsList: [
      { options: [{ id: "1", label: "Shop 1" }], selectedValue: "1" },
      { options: [{ id: "2", label: "Shop 2" }], selectedValue: "2" },
      { options: [{ id: "3", label: "Shop 3" }], selectedValue: "3" },
      { options: [{ id: "4", label: "Shop 4" }], selectedValue: "4" },
      { options: [{ id: "5", label: "Shop 5" }], selectedValue: "5" },
      { options: [{ id: "6", label: "Shop 6" }], selectedValue: "6" },



    ],
    onChangeShop: (shop) => {
      console.log("Selected shop:", shop);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };
  
  export const inventoryPageMockData: inventoryPage = {
    hasError: false,
    isLoading: false,
    inventoryName: [
      { options: [{ id: "1", label: "Inventory 1" }], selectedValue: "1" },
    ],
    shopsList: [
      { options: [{ id: "1", label: "Shop 1" }], selectedValue: "1" },
      { options: [{ id: "2", label: "Shop 2" }], selectedValue: "2" },
    ],
    onChangeInventory: (inventory) => {
      console.log("Selected inventory:", inventory);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };
  
  export const productsPageMockData: productsPage = {
    hasError: false,
    isLoading: false,
    productName: "Product 1",
    tables: [
      {
        products: [
          { sno: 1, name: "Product 1", quantity: "10", price: "$10" },
          { sno: 2, name: "Product 2", quantity: "20", price: "$20" },
        ],
        totalPages: 1,
        currentPage: 1,
        selectedProduct: "Product 1",
      },
    ],
    onChangeProduct: (product) => {
      console.log("Selected product:", product);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };
  