import React from "react";
import img1 from "../../assets/livas1.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <img src={img1} alt="Livas" />
        <div className="content">
          <h1>Acrylic dòng 1800</h1>
          <h2>TOPX của Livas chống xước bề mặt tuyệt đối</h2>
          <p>
            Với tấm ốp tường Livas, việc thay đổi và tạo điểm độc đáo trong
            không gian nội thất trở nên dễ dàng hơn bao giờ hết.
          </p>
        </div>
      </div>
      <div className="introduce">
        <h1 className="title">Giới thiệu về Lara</h1>
        <p>
          Công ty TNHH LIVAS VINA là doanh nghiệp hoạt động trong lĩnh vực gia
          công cánh Acrylic no line với mục tiêu mang đến cho khách hàng những
          công trình như ý, những không gian sống lý tưởng. Trong hơn 7 năm hoạt
          động, Livas Vina đã được tin tưởng và thực hiền nhiều dự án với các
          đối tác lớn nhỏ như XHome, V6 Design, Halam Furniture,…
        </p>
      </div>
      <div className="introduce">
        <h1 className="title">Sản phẩm tiêu biểu</h1>
        <p>
          Công ty TNHH LIVAS VINA là doanh nghiệp hoạt động trong lĩnh vực gia
          công cánh Acrylic no line với mục tiêu mang đến cho khách hàng những
          công trình như ý, những không gian sống lý tưởng. Trong hơn 7 năm hoạt
          động, Livas Vina đã được tin tưởng và thực hiền nhiều dự án với các
          đối tác lớn nhỏ như XHome, V6 Design, Halam Furniture,…
        </p>
      </div>
      <div className="introduce">
        <h1 className="title">Danh mục loại sản phẩm</h1>
        <p>
          Công ty TNHH LIVAS VINA là doanh nghiệp hoạt động trong lĩnh vực gia
          công cánh Acrylic no line với mục tiêu mang đến cho khách hàng những
          công trình như ý, những không gian sống lý tưởng. Trong hơn 7 năm hoạt
          động, Livas Vina đã được tin tưởng và thực hiền nhiều dự án với các
          đối tác lớn nhỏ như XHome, V6 Design, Halam Furniture,…
        </p>
      </div>
      <div className="contact-section">
        <div className="contact-container">
          <h1>Liên hệ với chúng tôi</h1>

          <p>
            Hãy liên hệ với LARA để được tư vấn về các dòng vật liệu nội thất
            cao cấp phù hợp với không gian của bạn.
          </p>

          <div className="contact-info">
            <div style={{ width: "25%" }}>
              <h3>Địa chỉ</h3>
              <p>
                P501, CT3-2 KĐT Mễ Trì Hạ, P. Mễ Trì, Q. Nam Từ Liêm, Tp. Hà Nội
              </p>
            </div>

            <div>
              <h3>Phương thức liên hệ</h3>
              <p>0123 456 789</p>
              <p>contact@lara.vn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
