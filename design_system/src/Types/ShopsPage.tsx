export type ShopsPage = {
    hasError : boolean;
    isLoading : boolean;
    shopName : dropDown;
    shopsList : dropDown;
    onChangeShop : (shop: dropDown) => void;
    onSubmitClick : () => void;
    fetchingShops : () => void
}

export type dropDown = {
    options : option[];
}

export type option = {
    id : string;
    label : string;
}