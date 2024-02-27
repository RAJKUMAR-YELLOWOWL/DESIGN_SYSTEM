export type productsPage = {
    hasError : Boolean;
    isLoading : Boolean;
    productName : string;
    tables : table[];
    onChangeProduct : (product:string)=>void;
    onSubmitClick : () => void
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
