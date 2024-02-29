import { inventoryPage } from "../Types/InventoryPage";

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
  
  export const inventoryPageMockDataHasError: inventoryPage = {
    hasError: true,
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

  export const inventoryPageMockDataIsLoading: inventoryPage = {
    hasError: false,
    isLoading: true,
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