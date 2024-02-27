export type shopsPage = {
    hasError : Boolean;
    isLoading : Boolean;
    shopName : dropDown;
    shopsList : dropDown[];
    onChangeShop : (shop: dropDown[]) => void;
    onSubmitClick : () => void;
}

export type dropDown = {
    options : option[];
    selectedValue : string;
}

export type option = {
    id : String;
    label : string;
}
