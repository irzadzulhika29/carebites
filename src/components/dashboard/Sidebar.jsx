import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (patterns) => 
        (Array.isArray(patterns) ? patterns : [patterns])
            .some(pattern => location.pathname === pattern || location.pathname.startsWith(`${pattern}/`));

    const navItems = [
        { to: "/home", icon: "house", label: "Home", patterns: ['/home'] },
        { to: "/grab-meals", icon: "utensils", label: "Grab Meals", patterns: ['/grab-meals','/cart',    '/product', '/payment', '/payment-product'] },
        { to: "/share-meals", icon: "share", label: "Share Meals", patterns: ['/share-meals', '/share-meals-form'] },
        { to: "/charity-campaign", icon: "heart", label: "Charity Campaign", patterns: ['/charity-campaign', '/charity-detail', '/campaign-form', '/charity-transaction', '/payment-charity'] },
        { to: "/blog", icon: "newspaper", label: "Blog & Article", patterns: ['/blog', '/article','/article-form'] },
        { to: "/share-activity", icon: "postcard-heart", label: "Share Your Activity", patterns: ['/share-activity'] },
        { to: "/profile", icon: "person-circle", label: "My Profile", patterns: ['/profile'] }
    ];

    return (
        <section className="shadow-lg fixed h-screen bg-white">
            <nav className="w-60 flex flex-col my-3 p-5 min-h-screen">
                <Link className='hover:scale-110 duration-300' to="/">
                    <h1 className="text-3xl text-[#47cb18] font-bold mb-5">
                        Care<span className="text-black">Bites</span>
                    </h1>
                </Link>
                <ul className="text-md flex flex-col gap-3">
                    {navItems.map((item, index) => (
                        <Link key={index} to={item.to} 
                              className={`flex items-center gap-2 px-2 py-3 hover:bg-[#47cb18] hover:text-white rounded-md 
                                         ${isActive(item.patterns) ? 'bg-[#47cb18] text-white' : 'text-gray'}`}>
                            <i className={`bi bi-${item.icon}`}></i>
                            <h1>{item.label}</h1>
                        </Link>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Sidebar;