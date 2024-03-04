import { InventoryPage } from "../Types/InventoryPage";

export const inventoryPageMockData: InventoryPage = {
    hasError: false,
    isLoading: false,
    inventoryName: { 
      options: [
        { id: "1", label: "Inventory 1" },
        { id: "2", label: "Inventory 2" },
        { id: "3", label: "Inventory 3" },
        { id: "4", label: "Inventory 4" },
      ],
    },
    shopsList:{ 
      options:[ 
      { id: "1", label: "Shop 1" },
      { id: "2", label: "Shop 2" },
      { id: "3", label: "Shop 3" },
      { id: "4", label: "Shop 4" },
    ]
  },
    onChangeInventory: (inventory) => {
    },
    onSubmitClick: () => {
    },
  };
  
  export const inventoryPageMockDataHasError: InventoryPage = {
    hasError: true,
    isLoading: false,
    inventoryName: { 
      options: [
        { id: "1", label: "Inventory 1" },
        { id: "2", label: "Inventory 2" },
        { id: "3", label: "Inventory 3" },
        { id: "4", label: "Inventory 4" },
      ],
    },
    shopsList:{ 
      options:[ 
      { id: "1", label: "Shop 1" },
      { id: "2", label: "Shop 2" },
      { id: "3", label: "Shop 3" },
      { id: "4", label: "Shop 4" },
    ]
  },
    onChangeInventory: (inventory) => {
    },
    onSubmitClick: () => {
    },
  };

  export const inventoryPageMockDataIsLoading: InventoryPage = {
    hasError: false,
    isLoading: true,
    inventoryName: { 
      options: [
        { id: "1", label: "Inventory 1" },
        { id: "2", label: "Inventory 2" },
        { id: "3", label: "Inventory 3" },
        { id: "4", label: "Inventory 4" },
      ],
    },
    shopsList:{ 
      options:[ 
      { id: "1", label: "Shop 1" },
      { id: "2", label: "Shop 2" },
      { id: "3", label: "Shop 3" },
      { id: "4", label: "Shop 4" },
    ]
  },
    onChangeInventory: (inventory) => {
    },
    onSubmitClick: () => {
    },
  };