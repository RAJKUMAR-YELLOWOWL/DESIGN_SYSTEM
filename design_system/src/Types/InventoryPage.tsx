export type inventoryPage = {
    hasError : Boolean;
    isLoading : Boolean;
    inventoryName : dropDown[];
    shopsList : dropDown[];
    onChangeInventory:(inventory:dropDown[]) => void;
    onSubmitClick : () => void;
}

export type dropDown = {
    options : option[];
    selectedValue : string;
}

export type option = {
    id : string;
    label : string;
}
