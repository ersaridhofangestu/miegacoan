import React, { useState } from 'react'
import MenuAndPrice from './menuAndPrice'
import { v4 as uuidv4 } from "uuid"

const Pesan = () => {

    const [menus, setMenus] = useState(MenuAndPrice)
    const [selectedMenu, setSelectedMenu] = useState([])
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [orderNumber, setOrderNumber] = useState(uuidv4())
    const [totalPrice, setTotalPrice] = useState(0)

    const handleIncrement = (category, id) => {
        const updatedMenu = { ...menus };
        updatedMenu[category] = updatedMenu[category].map(menu => {
            if (menu.id === id) {
                return { ...menu, quantity: menu.quantity + 1 };
            }
            return menu;
        });
        setMenus(updatedMenu);
        setSelectedMenu(getSelectedMenu(updatedMenu));
        calculateTotalPrice(updatedMenu);
    };

    const handleDecrement = (category, id) => {
        const updatedMenu = { ...menus };
        updatedMenu[category] = updatedMenu[category].map(menu => {
            if (menu.id === id && menu.quantity > 0) {
                return { ...menu, quantity: menu.quantity - 1 };
            }
            return menu;
        });
        setMenus(updatedMenu);
        setSelectedMenu(getSelectedMenu(updatedMenu));
        calculateTotalPrice(updatedMenu);
    };

    const getSelectedMenu = (updatedMenu) => {
        const selected = [];
        Object.values(updatedMenu).forEach((categoryMenus) => {
            categoryMenus.forEach((menu) => {
                if (menu.quantity > 0) {
                    selected.push(menu);
                }
            });
        });
        return selected;
    };

    const calculateTotalPrice = (updatedMenu) => {
        const totalPrice = Object.values(updatedMenu).flat().reduce((total, menu) => {
            return total + (menu.price * menu.quantity || 0);
        }, 0);
        setTotalPrice(totalPrice);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message =
            `Order Number : ${orderNumber}\n\n 
         Name: ${fullName}\n\n 
         Order : ${selectedMenu.map(menu => `${menu.name} X ${menu.quantity}`).join('\n')} 
    \n\n Total Harga : Rp. ${totalPrice.toLocaleString('id-ID')}`;

        // const url = `https://wa.me/089669144986/?text=${encodeURIComponent(message)}`;
        window.open
            (
                // url,
                "_blank");
        resetForm();
        console.log(message)
    }

    const resetForm = () => {
        setOrderNumber(uuidv4());
        setSelectedMenu([]);
        setFullName("");
        setEmail("");
        setAddress("");
        setTotalPrice(0);
        // Reset quantity of all menus to 0
        const resetMenus = { ...menus };
        Object.keys(resetMenus).forEach((category) => {
            resetMenus[category] = resetMenus[category].map((menu) => ({
                ...menu,
                quantity: 0,
            }));
        });
        setMenus(resetMenus);
    };
    return (
        <div className='w-full py-10 bg-slate-950'>
            <div className='mx-auto max-w-[66rem] px-5'>
                <p className='text-2xl md:text-4xl text-center w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]'
                >
                    MENU
                </p>
                <p className='md:text-2xl w-full text-center font-semibold text-slate-600'>
                    "Nikmati keunggulan menu kami dengan rasa autentik yang tiada tanding, sambil hadirkan keceriaan pada setiap momen makan Anda. Temukan pengalaman kuliner yang tak terlupakan di restoran kami!"
                </p>
                <div name="menu">
                    {Object.entries(menus).map(([category, menuItems]) =>
                        <div key={category} className='py-5'>
                            <p className='text-2xl text-slate-600 font-semibold'>{category}</p>
                            <div className='lg:grid lg:grid-cols-3 gap-5 py-5'>
                                {menuItems.map(menu =>
                                    <div key={menu.id}
                                        ata-aos="fade-up"
                                        data-aos-duration="1000">
                                        <div className="card__menu my-10 lg:my-0">
                                            <div className='overflow-hidden'>
                                                <img src={menu.img} className='w-96 h-96 lg:h-52 rounded-t-xl' alt="product" />
                                            </div>
                                            <div className="card__title">{menu.name}</div>
                                            <div className="card__subtitle">{menu.deks}</div>
                                            <div className="card__wrapper">
                                                <div className="card__price">Rp {menu.price.toLocaleString('id-ID')}</div>
                                                <div className="card__counter">
                                                    <button className='font-extrabold card__btn' onClick={() => handleDecrement(category, menu.id)}> - </button>
                                                    <p className='card__counter-score'>{menu.quantity}</p>
                                                    <button className='card__btn card__btn-plus' onClick={() => handleIncrement(category, menu.id)}> + </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    )}
                </div>
                <div className="form-container mx-auto" name="order">
                    <form className="form">
                        <p className='text-2xl md:text-4xl text-center w-full font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ec008c] to-[#00b2d8]'
                        >
                            ORDER
                        </p>
                        <div className="form-group">
                            <label htmlFor="fullName">Nama :</label>
                            <input type="text" id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Alamat :</label>
                            <textarea id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <p className='p'>
                            Total Harga: Rp {totalPrice.toLocaleString('id-ID')}
                        </p>
                        <button type="submit" className="btn__pesan" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pesan
