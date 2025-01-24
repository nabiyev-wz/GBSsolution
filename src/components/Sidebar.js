import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Telegram bot uchun ma'lumot yuborish
  const handlePurchase = async () => {
    const telegramToken = "7636069952:AAFHHpUFBOrVIoo0A4ifXshGYmc4C44aMrM"; // Bot tokenini kiriting
    const chatId = "7636069952"; // Telegram chat ID ni kiriting

    // Yuborilayotgan xabar matni
    const text = `
      Telefon raqam: ${phoneNumber}
      Xarid qilingan mahsulotlar:
      ${cart.map(item => `${item.name} - ${item.price}`).join('\n')}
      Umumiy summa: $${parseFloat(total).toFixed(2)}
    `;

    const apiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        alert("Sotib olish muvaffaqiyatli amalga oshirildi!");
      } else {
        alert("Sotib olishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Telegram API Error: ", error);
      alert("Sotib olishda xatolik yuz berdi.");
    }
  };

  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[360px] md:h-[480px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="font-semibold">
            <span className="mr-2">Subtotal:</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>

        {/* Telefon raqamini kiritish */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="font-semibold">
            Telefon raqamingiz
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Telefon raqamingizni kiriting"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="p-2 border rounded-md"
            required
          />
        </div>

        {/* Sotib olish tugmasi */}
        <button
          onClick={handlePurchase}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Sotib olish
        </button>

        <Link
          to={"Kontakt"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
