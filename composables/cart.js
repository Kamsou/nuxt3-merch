export const useCart = () => {

  const selectedProducts = useState('selectedProducts', () => [])
  
  const totalPrice =  computed(() => {
    return selectedProducts.value.reduce((acc, product) => {
      return acc + (product.price * product.quantity)
    }, 0)
  })

  function addProductToCart(product, variantSelect) {
    const productIndexInCart = selectedProducts.value.findIndex(selectedProduct => selectedProduct.id === product.id)

    if (productIndexInCart === -1) {
      selectedProduct.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        imageName: product.imageName,
        variants: variantSelect !== null ? [variantSelect.value] : null,
        quantity: 1
      })
    } else {
      const selectedProduct = selectedProduct.value[productIndexInCart]
      selectedProduct.value[productIndexInCart].quantity++

      if (variantSelect !== null) {
        selectedProduct.variants.push(variantSelect.value)
      }
    }

    console.log(cartSelectedProduct.value);
    console.log(totalPrice.value);
  }

  return {
    addProductToCart,
    selectedProducts,
    totalPrice
  }
}