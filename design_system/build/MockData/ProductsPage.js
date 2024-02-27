export const productsPageMockData = {
    hasError: false,
    isLoading: false,
    productName: "Product 1",
    tables: [
        {
            products: [
                { sno: 1, name: "Product 1", quantity: "10", price: "$10" },
                { sno: 2, name: "Product 2", quantity: "20", price: "$20" },
            ],
            totalPages: 1,
            currentPage: 1,
            selectedProduct: "Product 1",
        },
    ],
    onChangeProduct: (product) => {
        console.log("Selected product:", product);
    },
    onSubmitClick: () => {
        console.log("Submit button clicked");
    },
};
