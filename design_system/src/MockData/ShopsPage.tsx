import { ShopsPage } from "../Types/ShopsPage"

export const shopsPageMockData: ShopsPage = {
    hasError: false,
    isLoading: false,
    shopName: {
      options: [
        { id: "1", label: "Shop 1" },
        { id: "2", label: "Shop 1" },
        { id: "3", label: "Shop 1" },
      ],
    },
    shopsList: {
      options:[
        {id:"1", label:"shop1"},
        {id:"2", label:"shop1"},
        {id:"3", label:"shop1"},
        {id:"4", label:"shop1"},
      ]
    },
    onChangeShop: (shop) => {
    },
    onSubmitClick: () => {
    },
  };

  export const shopsPageMockDataHasError: ShopsPage = {
    hasError: true,
    isLoading: false,
    shopName: {
      options: [
        { id: "1", label: "Shop 1" },
        { id: "1", label: "Shop 1" },
        { id: "1", label: "Shop 1" },
      ],
    },
    shopsList: {
      options:[
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
      ]
    },
    onChangeShop: (shop) => {
    },
    onSubmitClick: () => {
    },
  };

  export const shopsPageMockDataIsLoading: ShopsPage = {
    hasError: false,
    isLoading: true,
    shopName: {
      options: [
        { id: "1", label: "Shop 1" },
        { id: "1", label: "Shop 1" },
        { id: "1", label: "Shop 1" },
      ],
    },
    shopsList: {
      options:[
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
        {id:"1", label:"shop1"},
      ]
    },
    onChangeShop: (shop) => {
    },
    onSubmitClick: () => {
    },
  };