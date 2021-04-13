import Head from 'next/head'
import Layout from '../Layout/Layout'

export default function Header(props)
{
    const openMenu = () =>{
        document.body.setAttribute('overflow','hidden');   
        var _elMenuMobile =  document.getElementsByClassName('menu-mobile');
        var _elMenuMobileoverlay =  document.getElementsByClassName('overlay-menu');
        if(_elMenuMobile != null && _elMenuMobile.length >0)   
        {
            _elMenuMobile[0].setAttribute("class","menu-mobile WEB show");        
            _elMenuMobileoverlay[0].setAttribute('class','overlay-menu overlay-show');   
        }
       
    }
    const closeMenu =()=>
    {
        document.body.setAttribute('overflow','');        
        var _elMenuMobile =  document.getElementsByClassName('menu-mobile');
        var _elMenuMobileoverlay =  document.getElementsByClassName('overlay-menu');
        if(_elMenuMobile != null && _elMenuMobile.length >0)   
        {
            _elMenuMobile[0].setAttribute("class","menu-mobile WEB");     
            _elMenuMobileoverlay[0].setAttribute('class','overlay-menu overlay-hidden');      
        }
    }
    return(
      
        <Layout>                                        
            <div id="header" className="WEB active-child header">
                <div className="main-header d-flex align-items-center flex-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-8 d-flex align-items-center">
                                    <a id="logo" className="main-logo d-xl-block d-none" href="/">
                                        <img src="/images/logo.png" alt="Nội thất bốn bánh" />
                                    </a>
                                    <a className="main-logo d-block d-xl-none" href="/film-cach-nhiet-oto">
                                        <img src="/images/logo.png" alt="Nội thất bốn bánh" />
                                    </a>
                            </div>
                            <div className="col-xl-10 col-4 d-flex justify-content-end">
                            
                                <ul className="d-none d-xl-flex justify-content-end">
                                        <li>
                                            <a target="_blank">Nội thất ô tô <i className="fa fa-angle-down"></i></a>
                                          
                                            <ul className="childMenu product">
                                                <li>
                                                    <a href="/phan-mem-quan-ly-ban-hang.html" className="d-flex align-item-start">                                                  
                                                        <div>
                                                            <strong>Sapo POS</strong>
                                                            <p>Phần mềm quản lý bán hàng tốt nhất cho cửa hàng &amp; bán online</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/phan-mem-quan-ly-nha-hang.html" className="d-flex align-item-start">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                        <div>
                                                            <strong>Sapo FnB</strong>
                                                            <p>Phần mềm quản lý nhà hàng, quán cafe toàn diện</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/quan-ly-ban-hang-online.html" className="d-flex align-item-start">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                        <div>
                                                            <strong>Sapo GO</strong>
                                                            <p>Quản lý tăng trưởng bán hàng online trên Sàn TMĐT và Facebook</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/thiet-ke-website-ban-hang.html" className="d-flex align-item-start">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                        <div>
                                                            <strong>Sapo Web</strong>
                                                            <p>Giải pháp thiết kế website bán hàng chuyên nghiệp</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/omnichannel.html" className="d-flex align-item-start">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                        <div>
                                                            <strong>Sapo Omnichannel</strong>
                                                            <p>Giải pháp quản lý và bán hàng đa kênh từ Online đến Offline</p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/enterprise" className="d-flex align-item-start">
                                                        <svg className="icon">
                                                            
                                                        </svg>
                                                        <div>
                                                            <strong>Sapo Enterprise</strong>
                                                            <p>Giải pháp quản lý bán hàng và phát triển thương hiệu cho doanh nghiệp lớn</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                            
                                        </li>

                                        <li>
                                            <a href="#" target="_blank">Khám phá</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">Về chúng tôi</a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <span className="header-mobile">
                                                    <i className="fa fa-phone"></i> 0968.067.256
                                                </span>
                                            </a>
                                        </li>
                                </ul>
                                <a className="d-inline-block d-xl-none btn-menu" onClick={openMenu}  aria-hidden="true">
                                    <i className="fa fa-bars"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        <div className="menu-mobile WEB">
            <div className="logo-mobile">
                        <a href="/thiet-ke-website-ban-hang.html">
                            <img src="/Images/Logo.png" alt="Sapo logo" />
                        </a>
                <a className="btn-close-menu" onClick={closeMenu}  aria-hidden="true">
                    <i className="fa fa-close"></i>
                </a>
            </div>
            <div className="box-scroll">

            <ul className="nav">
                <li className=""><a href="/tinh-nang-noi-bat-website.html">Tính năng</a></li>
                <li className=""><a href="/bang-gia-sapo-web.html">Bảng giá<span className="badge d-none">SALE</span></a></li>
                <li><a href="https://themes.sapo.vn/" target="_blank">Kho giao diện</a></li>
                <li><a href="https://apps.sapo.vn/" target="_blank">Kho ứng dụng</a></li>
                <li className=""><a href="/website-tham-khao.html">Khách hàng</a></li>
                <li className="trial">
                    <a href="#" className="btn-registration" ><span>Dùng thử</span></a>
                </li>
            </ul>

                <ul className="nav nav-bottom">
                    <li className="show-sub">
                        <a data-toggle="collapse" href="#nav-bottom-child-1">
                                Sản phẩm khác
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <div id="nav-bottom-child-1" className="panel-collapse collapse">
                            <ul className="sub-menu">
                                    <li>
                                        <a href="/phan-mem-quan-ly-ban-hang.html">
                                            <strong>Sapo POS</strong>
                                            <span>Phần mềm quản lý bán hàng</span>
                                        </a>
                                    </li>
                                                            <li>
                                        <a href="/phan-mem-quan-ly-nha-hang.html">
                                            <strong>Sapo FnB</strong>
                                            <span>Phần mềm quản lý nhà hàng</span>
                                        </a>
                                    </li>
                                                            <li>
                                        <a href="/quan-ly-ban-hang-online.html">
                                            <strong>Sapo GO</strong>
                                            <span>Quản lý bán hàng online</span>
                                        </a>
                                    </li>
                                                                                    <li>
                                        <a href="/omnichannel.html">
                                            <strong>Sapo Omnichannel</strong>
                                            <span>Giải pháp quản lý bán hàng đa kênh</span>
                                        </a>
                                    </li>
                                <li>
                                    <a href="/enterprise">
                                        <strong>Sapo Enterprise</strong>
                                        <span>Quản lý và phát triển thương hiệu <br />cho doanh nghiệp lớn</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="show-sub">
                        <a data-toggle="collapse" href="#nav-bottom-child-2">
                            Thêm<i className="fa fa-caret-down"></i>
                        </a>
                        <div id="nav-bottom-child-2" className="panel-collapse collapse">
                            <ul className="sub-menu">
                                <li><a href="/ve-chung-toi.html">Về chúng tôi</a></li>
                                <li><a href="/sapo-la-gi.html">Sapo là gì?</a></li>
                                <li><a href="//www.sapo.vn/blog/" target="_blank">Blog</a></li>
                                <li><a href="/sapo-express.html">Sapo Express</a></li>
                                <li><a href="/sapo-finance.html">Sapo Finance <span className="badge">New</span></a></li>
                                <li><a href="/sapo-affiliate.html">Giới thiệu khách hàng</a></li>
                                <li><a href="/bao-chi-noi-ve-sapo.html">Báo chí nói về Sapo</a></li>
                                <li><a href="//www.sapo.vn/blog/tin-su-kien-sapo/" target="_blank">Sapo updates</a></li>
                                <li><a href="//tuyendung.sapo.vn/" target="_blank">Tuyển dụng</a></li>
                                <li><a href="/lien-he.html">Liên hệ</a></li>
                            </ul>
                        </div>
                    </li>
                        <li>
                            <a href="https://support.sapo.vn" target="_blank">Trợ giúp</a>
                        </li>
                        <li >
                            <a href="/dang-nhap-kenh-ban-hang.html">Đăng nhập</a>
                        </li>
                                    <li className="home">
                            <a href="/">Sapo.vn</a>
                        </li>
                </ul>
            </div>
        </div>
        <div className="overlay-menu" onClick={closeMenu} ></div>
        </Layout>       
    )
}