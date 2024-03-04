export type InventoryPage = {
    hasError : boolean;
    isLoading : boolean;
    inventoryName : dropDown;
    shopsList : dropDown;
    onChangeInventory:(inventory:dropDown) => void;
    onSubmitClick : () => void;
}

export type dropDown = {
    options : option[];
}

export type option = {
    id : string;
    label : string;
}
