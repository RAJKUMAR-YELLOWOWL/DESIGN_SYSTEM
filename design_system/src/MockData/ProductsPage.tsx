import { ProductsPage } from "../Types/ProductsPage";

export const productsPageMockData: ProductsPage = {
    shopName: "SHOP 1",
    inventoryName: "INVENTORY 1",
    hasError: false,
    isLoading: false,
    productName: "Product 1",
    tables: [
      {
        products: [
          { sno: 1, name: "Product 1", quantity: "10", price: "$10" },
          { sno: 2, name: "Product 2", quantity: "20", price: "$20" },
          { sno: 3, name: "Product 3", quantity: "30", price: "$30" },
          { sno: 4, name: "Product 4", quantity: "40", price: "$40" },
        ],
        totalPages: 1,
        currentPage: 1,
        selectedProduct: "Product 1",
      },
    ],
    onChangeProduct: (product) => {
    },
    onSubmitClick: () => {
    },
  };
  
  export const productsPageMockDataHasError: ProductsPage = {
    shopName: "SHOP 1",
    inventoryName: "INVENTORY 1",
    hasError: true,
    isLoading: false,
    productName: "Product 1",
    tables: [
      {
        products: [
          { sno: 1, name: "Product 1", quantity: "10", price: "$10" },
          { sno: 2, name: "Product 2", quantity: "20", price: "$20" },
          { sno: 3, name: "Product 3", quantity: "30", price: "$30" },
          { sno: 4, name: "Product 4", quantity: "40", price: "$40" },
        ],
        totalPages: 1,
        currentPage: 1,
        selectedProduct: "Product 1",
      },
    ],
    onChangeProduct: (product) => {
    },
    onSubmitClick: () => {
    },
  };

  export const productsPageMockDataIsLoading: ProductsPage = {
    shopName: "SHOP 1",
    inventoryName: "INVENTORY 1",
    hasError: false,
    isLoading: true,
    productName: "Product 1",
    tables: [
      {
        products: [
          { sno: 1, name: "Product 1", quantity: "10", price: "$10" },
          { sno: 2, name: "Product 2", quantity: "20", price: "$20" },
          { sno: 3, name: "Product 3", quantity: "30", price: "$30" },
          { sno: 4, name: "Product 4", quantity: "40", price: "$40" },
        ],
        totalPages: 1,
        currentPage: 1,
        selectedProduct: "Product 1",
      },
    ],
    onChangeProduct: (product) => {
    },
    onSubmitClick: () => {
    },
  };