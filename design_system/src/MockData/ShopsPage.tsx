import { shopsPage } from "../Types/ShopsPage"

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
      console.log("hop:", shop);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };

  export const shopsPageMockDataHasError: shopsPage = {
    hasError: true,
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
      console.log("hop:", shop);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };

  export const shopsPageMockDataIsLoading: shopsPage = {
    hasError: false,
    isLoading: true,
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
      console.log("hop:", shop);
    },
    onSubmitClick: () => {
      console.log("Submit button clicked");
    },
  };