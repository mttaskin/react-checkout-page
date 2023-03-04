import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({products}) => {
  
  const subTotal = products.reduce((acc,product)=> product.price*product.amount*product.dampingRate+acc,0)
  
  
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">{subTotal.toFixed}</th>
          <td>
            $<span className="subtotal"></span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{(subTotal*taxRate).toFixed}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">{(subTotal+shipping+(subTotal*taxRate)).toFixed}</th>
          <td>
            $
            <span className="total">
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
