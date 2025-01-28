const Cart = require("../../../Models/cart");

const cartCount = async (req, res) => {
 try {
   const user_id = req.user.id;
   
   const userCart = await Cart.find({ 
     user_id, 
     orderstatus: "add to cart" 
   });

   if (!userCart || userCart.length === 0) {
     return res.status(404).json({ 
       status: 0, 
       message: "Cart is empty" 
     });
   }

   const totalItems = userCart.reduce((total, item) => 
     total + item.product_qty, 0
   );

   res.status(200).json({ 
     status: 1, 
     totalItems 
   });

 } catch (error) {
   console.error('Cart count error:', error);
   res.status(500).json({ 
     status: 0, 
     message: "Error fetching cart count" 
   });
 }
};

module.exports = cartCount;