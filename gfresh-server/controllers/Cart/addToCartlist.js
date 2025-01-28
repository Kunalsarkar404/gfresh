const Cart = require("../../Models/cart");

const addToCartlist = async (req, res) => {
 try {
   const user_id = req.user.id;

   const userCart = await Cart.find({ 
     user_id, 
     orderstatus: 'add to cart' 
   })
   .populate('user_id', 'name email mobile')
   .populate('product_variant_id', 'product_name product_image1 description selling_price mrp_price weight weighttype')
   .populate('product_id', 'product_name product_image1 description selling_price mrp_price weight weighttype');

   if (!userCart || userCart.length === 0) {
     return res.status(404).json({ message: 'Cart is empty' });
   }

   const cartTotals = userCart.reduce((totals, item) => {
     const product = item.product_variant_id || item.product_id;
     const quantity = item.product_qty;
     const sellingPrice = product.selling_price;
     const mrpPrice = product.mrp_price;
     const discount = mrpPrice - sellingPrice;

     return {
       total_Amount_with_discount: totals.total_Amount_with_discount + (sellingPrice * quantity),
       total_Amount_without_discount: totals.total_Amount_without_discount + (mrpPrice * quantity),
       totalItems: totals.totalItems + quantity,
       totalDiscount: totals.totalDiscount + (discount * quantity)
     };
   }, {
     total_Amount_with_discount: 0,
     total_Amount_without_discount: 0,
     totalItems: 0,
     totalDiscount: 0
   });

   const shipping_charges = calculateShippingCharges(cartTotals.total_Amount_with_discount);
   const final_amount = cartTotals.total_Amount_with_discount + shipping_charges;

   res.status(200).json({
     data: userCart,
     total_Amount_with_discount_subtotal: cartTotals.total_Amount_with_discount,
     total_Amount_with_discount: final_amount,
     total_Amount_without_discount: cartTotals.total_Amount_without_discount,
     totalItems: cartTotals.totalItems,
     totalDiscount: cartTotals.totalDiscount,
     shipping_charges
   });

 } catch (error) {
   console.error('Cart summary error:', error);
   res.status(500).json({ message: 'Error fetching cart summary' });
 }
};

const calculateShippingCharges = (amount) => {
 return amount * 0.15;
};

module.exports = addToCartlist;