import Head from 'next/head'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import WhyChoice from './component/Partial/WhyChoice'

export default function Home() {
  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Header></Header>
    
    <div className="about-us">
        <div className="banner">
            <div className="container">
                <h1>
                  <span>Nội thất ô tô, đồ chơi xe hơi </span>
                  <span>Được sử dụng nhiều nhất Việt Nam</span>
                </h1>
                <p> Hãy dùng cách +27,000 người dùng đã chọn và tin dùng sản phẩm.</p>
            </div>
        </div>
    </div>

    <div id="wrapper" className="clearfix">
            
        <div className="home-wrapper">
            <div id="solution" className="solution text-center">
                <div  className="container">
                    <h2>Giải pháp bạn cần để nâng cao chất lượng của xe hơi</h2>
                    <p>Chúng tôi mang đến cho bạn những trợ lý đắc lực để nâng tầm đẳng cấp của chiếc xe của bạn.</p>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="item sapopos label_1 ">
                                <div className="title"> 
                                    <svg className="icon">
                                    <svg id="icon-sapo-pos">
                                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 68.63 75.45"><g><path d="M68.63,13.62A13.62,13.62,0,0,0,55,0h0L13.61,6.82A13.61,13.61,0,0,0,0,20.43H0V61.84A13.61,13.61,0,0,0,13.61,75.45H55A13.61,13.61,0,0,0,68.63,61.86V45.64c0-.7-.07-1.4-.07-2.12s0-1.45.07-2.16Z" fill="url(#linear-gradient-pos)"></path><path d="M34.56,15.71,11.8,38.52a5.49,5.49,0,0,0,0,7.74L26.36,60.84a5.41,5.41,0,0,0,3.87,1.61h0a5.46,5.46,0,0,0,3.87-1.6L56.93,38V15.71ZM53.28,36.53,31.52,58.26a1.78,1.78,0,0,1-1.29.54h0a1.84,1.84,0,0,1-1.29-.54L14.38,43.68a1.83,1.83,0,0,1,0-2.58l21.7-21.74h17.2ZM43.79,27a1.83,1.83,0,1,1,1.84,1.82h0A1.84,1.84,0,0,1,43.79,27Zm-6,5.6L40,30.47l2.59,2.58-2.13,2.12a4.85,4.85,0,0,1,.47,1.94,4.68,4.68,0,0,1-1.38,3.54l-.32.32L36.6,38.39l.32-.32a1.27,1.27,0,0,0-.12-1.79,1.38,1.38,0,0,0-1-.42,1.17,1.17,0,0,0-.83.34c-.63.63-.66,1.5-.11,3.22h0a14.91,14.91,0,0,1,.78,3.36,4.81,4.81,0,0,1-1.37,3.86,5.6,5.6,0,0,1-6.4,1l-2.13,2.13-2.58-2.59,2.16-2.16a5.6,5.6,0,0,1,1.09-6.25l.51-.51,2.59,2.58L29,41.4a1.93,1.93,0,0,0,0,2.68,1.84,1.84,0,0,0,1.33.53,2,2,0,0,0,1.36-.55c.55-.56.32-1.55-.31-3.54h0c-.38-1.22-1.41-4.47,1-6.9a4.83,4.83,0,0,1,3.42-1.41,4.92,4.92,0,0,1,2,.42Z" fill="#fff"></path></g></svg>
                                        </svg>
                                    </svg>                                  
                                    <div>
                                        <h3><a href="/phim-cach-nhiet-oto">Phim cách nhiệt</a></h3>
                                        <p>Làm giảm nhiệt độ trong xe tăng độ bền của nội thất ô tô.</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>Sản phẩm này được sử dụng như những vật trang bị thêm cho cửa kính xe hơi nhằm làm tăng tính cách nhiệt và an toàn.</p>
                                    <a href="/phim-cach-nhiet-oto" className="btn-registration">
                                        Xem thêm 
                                        <svg className="mg-left-10 arrow-right">
                                          <svg id="icon-arrow-right">
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                          </svg>     
                                        </svg>      
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                        <div className="item sapoweb label_4  " >
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/camera-360-oto">Camera 360 ô tô</a></h3>
                                    <p>Hệ thống giúp ghi hình toàn cảnh xung quanh xe.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Cho phép bạn quan sát được cả hình ảnh ở các góc khuất, điểm mù mà mắt thường không thể nhìn thấy thông qua gương.</p>
                                <a href="/camera-360-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapogo label_3 " >
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/boc-ghe-da-oto">Bọc ghế da ô tô</a></h3>
                                    <p>Cho xe trông đẹp và sang trọng hơn, đẳng cấp khi ngồi trên xe.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Giúp cho xe trở nên sang trọng, thẩm mỹ hơn tạo cảm giác thoải mái cho người ngồi trên xe.</p>
                                <a href="/boc-ghe-da-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                  <svg id="icon-arrow-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                    </svg>     
                                  </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapofnb label_5 ">
                            <div className="title">
                              
                                <div>
                                    <h3><a href="//man-hinh-androi-oto">Màn hình android</a></h3>
                                    <p>Kết nối các phụ kiện khác trên xe như camera hành trình.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Thiết bị hiện đại thiết kế riêng cho ô tô và được áp dụng công nghệ tiên tiến nhất để kết nối các tiện ích.</p>
                                <a href="//man-hinh-androi-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapoomni label_2 ">
                            <div className="title">
                                
                                <div className="fix-padding">
                                    <h3><a href="/camera-hanh-trinh-oto">Camera hành trình</a></h3>
                                    <p>Giúp lưu trữ các thông tin trên suốt quá trình xe lăn bánh.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Hỗ trợ cho việc lái xe an toàn cũng như tránh được những rủi ro đáng tiếc có thể xảy ra.</p>
                                <a href="/camera-hanh-trinh-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapoenterprise label_6 " >
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/do-den-oto">Độ đèn ô tô</a></h3>
                                    <p>Nâng cấp hệ thống chiếu sáng ô tô của bạn.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Hệ thống chiếu sáng phong cách, độc đáo, khác biệt thể hiện cá tính đẳng cấp của xe.</p>
                                <a href="/do-den-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-lg-4 col-md-6">
                        <div className="item sapopos label_1 " >
                            <div className="title">
                             
                                <div>
                                    <h3><a href="/boc-tran-oto">Bọc trần ô tô</a></h3>
                                    <p>Không gian xe thẩm mỹ hơn, giữ sức khỏe người trong xe.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Chống bám bụi, bám bẩn, bị mùi, vệ sinh trần dễ dàng hơn, giữ vẻ đẹp thẩm mỹ cho trần xe ô tô.</p>
                                <a href="/boc-tran-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapoweb label_4  " >
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/chong-on-oto">Chống ồn ô tô</a></h3>
                                    <p>Hệ thống giúp giảm tiếng ổn tối đa trong quá trình lăn bánh.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Hạn chế tối đa tiếng ổn từ động cơ xe, ống xả, tiếng ồn từ môi trường và tiếng ồn từ đường xá.</p>
                                <a href="/chong-on-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapogo label_3 " >
                            <div className="title">
                                
                                <div>
                                    <h3><a href="/boc-vo-lang-tap-lo-oto">Bọc vô lăng - táp lô</a></h3>
                                    <p>Lái xe có cảm giác vững chãi hơn khi điều khiển vô lăng.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Với thiết kế các đường vân gợn trên bề mặt nhằm tạo ma sát cho tay lái xe, họa tiết, đường chỉ đẹp mắt trên bọc vô lăng.</p>
                                <a href="/boc-vo-lang-tap-lo-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapofnb label_5 " >
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/phu-kien-noi-that-oto">Phụ kiện nội thất</a></h3>
                                    <p>Tổng hợp phụ kiện ô tô : cảm biến lùi, ốp mưa ...</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Đa dạng lựa chọn kiểu dáng phong cách phụ kiện tô điểm thêm cho chiếc ô tô của bạn long lanh, sang trọng hơn.</p>
                                <a href="/phu-kien-noi-that-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapoomni label_2 " >
                            <div className="title">
                               
                                <div className="fix-padding">
                                    <h3><a href="/phu-kien-ngoai-that-oto">Phụ kiện ngoại thất</a></h3>
                                    <p>Tổng hợp phụ kiện ô tô : bậc lên xuống, cản trước, cản sau ...</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Đa dạng lựa chọn kiểu dáng phong cách phụ kiện tô điểm thêm cho chiếc ô tô của bạn long lanh, sang trọng hơn.</p>
                                <a href="/phu-kien-ngoai-that-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="item sapoenterprise label_6 ">
                            <div className="title">
                               
                                <div>
                                    <h3><a href="/dich-vu-noi-that-oto">Dịch vụ nội thất</a></h3>
                                    <p>Dọn dẹp nội thất, khoang máy chuyên nghiệp, đẳng cấp.</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Hệ thống dọn dẹp sạch sẽ từ những chi tiết nhỏ nhất sẽ khiến khách hàng khó tính nhất vẫn hài lòng.</p>
                                <a href="/dich-vu-noi-that-oto" className="btn-registration">
                                    Xem thêm
                                    <svg className="mg-left-10 arrow-right">
                                      <svg id="icon-arrow-right">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.92 22.14"><g><path className="cls-1" d="M18.65,21.81a1.12,1.12,0,1,1-1.59-1.57l8.05-8h-24A1.1,1.1,0,0,1,0,11.08,1.12,1.12,0,0,1,1.11,10h24l-8-8a1.14,1.14,0,0,1,0-1.59,1.12,1.12,0,0,1,1.59,0l10,10a1.13,1.13,0,0,1,0,1.58Z"></path></g></svg>
                                      </svg>     
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>
            </div>

            <div className="news-aboutus">
                <div className="container">
                    <div className="text-center">
                        <h2>Tổng hợp tin tức khám phá nội thất ô tô</h2>                
                        <p>Chúng tôi mang đến cho bạn những trợ lý đắc lực để nâng tầm đẳng cấp của chiếc xe của bạn.</p>
                    </div>
                    <div className="row">
                
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 item">
                            <div className="news-item">
                                <a aria-label="text" href="https://www.sapo.vn/blog/sapo-pos-update-thang-4/" target="_blank">
                                    <img className="news-blog fade show" src="https://www.sapo.vn/blog/wp-content/uploads/2021/04/Update-768x533.png" alt="Sapo POS update tháng 4: Những tính năng hỗ trợ chủ kinh doanh quản lý bán hàng hiệu quả nhất" data-src="https://www.sapo.vn/blog/wp-content/uploads/2021/04/Update-768x533.png"/>
                                </a>
                                <div className="time"><i className="fa fa-clock-o"></i> Thứ 2, 12/04/2021</div>
                                <div className="title"><a href="https://www.sapo.vn/blog/sapo-pos-update-thang-4/" className="article-title" target="_blank" title="Sapo POS update tháng 4: Những tính năng hỗ trợ chủ kinh doanh quản lý bán hàng hiệu quả nhất">Sapo POS update tháng 4: Những tính năng hỗ trợ chủ kinh doanh quản lý bán hàng hiệu quả nhất</a>
                                </div>
                                <div className="continue"><a href="https://www.sapo.vn/blog/sapo-pos-update-thang-4/" className="article-title" target="_blank" title="Sapo POS update tháng 4: Những tính năng hỗ trợ chủ kinh doanh quản lý bán hàng hiệu quả nhất">Đọc tiếp →</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 d-none d-lg-block item">
                            <div className="news-item">
                                <a aria-label="text" href="https://www.sapo.vn/blog/sapo-fnb-bo-sung-ho-tro-mat-hang-dich-vu-tinh-nang-tinh-tien-theo-thoi-gian-su-dung/" target="_blank">
                                    <img className="news-blog fade show" src="https://www.sapo.vn/blog/wp-content/uploads/2021/04/168420312_293453468959260_5776271383004380533_n-768x426.jpg" alt="[SAPO FNB] Bổ sung hỗ trợ mặt hàng dịch vụ – Tính năng tính tiền theo thời gian sử dụng" data-src="https://www.sapo.vn/blog/wp-content/uploads/2021/04/168420312_293453468959260_5776271383004380533_n-768x426.jpg"/>
                                </a>
                                <div className="time"><i className="fa fa-clock-o"></i> Thứ 5, 8/04/2021</div>
                                <div className="title"><a href="https://www.sapo.vn/blog/sapo-fnb-bo-sung-ho-tro-mat-hang-dich-vu-tinh-nang-tinh-tien-theo-thoi-gian-su-dung/" className="article-title" target="_blank" title="[SAPO FNB] Bổ sung hỗ trợ mặt hàng dịch vụ – Tính năng tính tiền theo thời gian sử dụng">[SAPO FNB] Bổ sung hỗ trợ mặt hàng dịch vụ – Tính năng tính tiền theo thời gian sử dụng</a>
                                </div>
                                <div className="continue"><a href="https://www.sapo.vn/blog/sapo-fnb-bo-sung-ho-tro-mat-hang-dich-vu-tinh-nang-tinh-tien-theo-thoi-gian-su-dung/" className="article-title" target="_blank" title="[SAPO FNB] Bổ sung hỗ trợ mặt hàng dịch vụ – Tính năng tính tiền theo thời gian sử dụng">Đọc tiếp →</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-12 d-none d-md-block item">
                            <div className="news-item">
                                <a aria-label="text" href="https://www.sapo.vn/blog/sapo-pos-update-tinh-nang-phat-hanh-ma-giam-gia/" target="_blank">
                                    <img className="news-blog fade show" src="https://www.sapo.vn/blog/wp-content/uploads/2021/03/Untitled-1-1-768x533.jpg" alt="[Sapo POS] Ra mắt tính năng Phát hành mã giảm giá giúp chủ Shop bùng nổ doanh số" data-src="https://www.sapo.vn/blog/wp-content/uploads/2021/03/Untitled-1-1-768x533.jpg"/>
                                </a>
                                <div className="time"><i className="fa fa-clock-o"></i> Thứ 4, 24/03/2021</div>
                                <div className="title"><a href="https://www.sapo.vn/blog/sapo-pos-update-tinh-nang-phat-hanh-ma-giam-gia/" className="article-title" target="_blank" title="[Sapo POS] Ra mắt tính năng Phát hành mã giảm giá giúp chủ Shop bùng nổ doanh số">[Sapo POS] Ra mắt tính năng Phát hành mã giảm giá giúp chủ Shop bùng nổ doanh số</a>
                                </div>
                                <div className="continue"><a href="https://www.sapo.vn/blog/sapo-pos-update-tinh-nang-phat-hanh-ma-giam-gia/" className="article-title" target="_blank" title="[Sapo POS] Ra mắt tính năng Phát hành mã giảm giá giúp chủ Shop bùng nổ doanh số">Đọc tiếp →</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>                
            </div>

            <div id="whychoice">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2><span>Tại sao chọn Justfly.vn?</span></h2>
                        </div>
                        <div className="col-md-9">
                            <WhyChoice></WhyChoice>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>

    </div>
    <Footer></Footer>
    </>
  )
}
