export type shopsPage = {
    hasError : Boolean;
    isLoading : Boolean;
    shopName : dropDown;
    shopsList : dropDown[];
    onChangeShop : (shop: dropDown[]) => void;
    onSubmitClick : () => void;
}

export type inventoryPage = {
    hasError : Boolean;
    isLoading : Boolean;
    inventoryName : dropDown[];
    shopsList : dropDown[];
    onChangeInventory:(inventory:dropDown[]) => void;
    onSubmitClick : () => void;
}

export type productsPage = {
    hasError : Boolean;
    isLoading : Boolean;
    productName : string;
    tables : table[];
    onChangeProduct : (product:string)=>void;
    onSubmitClick : () => void
}

export type dropDown = {
    options : option[];
    selectedValue : string;
}

export type option = {
    id : String;
    label : string;
}

export type product = {
    sno : number;
    name : string;
    quantity : string;
    price : string;
}

export type table = {
    products : product[];
    totalPages : number;
    currentPage : number;
    selectedProduct : string;
}
