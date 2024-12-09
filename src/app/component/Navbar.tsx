import Image from "next/image"
import Link from "next/link"
import SearchIcon from "../../../Public/SearchIcon.svg"
import Shoppingcart from "../../../Public/Shoppingcart.svg"
import Menu from "../../../Public/Menu.svg"
import UserAvatar from "../../../Public/UserAvatar.svg"


const Navbar = () => {
    return (
       <>

            <div className="flex justify-between items-center sticky top-0 z-50 h-[69px] bg-white lg:px-[28px] px-4"> {/* Added bg-white */}
                <div>
                    <Image
                        src={SearchIcon}
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                    <div className="text-[24px] text-pupleText md:hidden">Avion</div>
                </div>

                <div className="text-[24px] text-pupleText md:block hidden">Avion</div>

                <div className="flex items-center gap-4">
                    <Image
                        src={Shoppingcart}
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                    <Image
                        src={UserAvatar}
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:block hidden"
                    />
                    <Image
                        src={SearchIcon}
                        alt="Search"
                        width={16}
                        height={16}
                        className="md:hidden block"
                    />

                    <Image
                        src={Menu}
                        alt="Menu"
                        width={16}
                        height={16}
                        className="md:hidden block"
                    />
                </div>
            </div>

            <hr className="w-full mb-[20px] mx-auto" />

            {/* links */}
            <ul className="w-full md:flex items-center font-satoshi justify-center gap-[44px] mb-5 text-lightPurple hidden">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About Us</Link></li>
                <li><Link href="/ProductListing">Product Listing</Link></li>
                <li><Link href="/ShoppingBasket">Shopping Basket</Link></li>
                <li><Link href="/ProductListings">Product Listings</Link></li>
             
            </ul>

      </>
    )
}

export default Navbar
