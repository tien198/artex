import { InfoCard } from "../comp/InfoCard";
import { ServicesHeader } from "../comp/ServicesHeader";

export function ServicesSection() {
  const cards = [
    {
      num: "01",
      title: "Thiết Kế",
      desc: "Giao diện hoàn hảo từng pixel và trải nghiệm kỹ thuật số sống động được xây dựng tinh xảo. Dựa trên chính xác những yêu cầu và mong muốn của bạn.",
    },
    {
      num: "02",
      title: "LẬP TRÌNH ",
      desc: "Full-stack. Từ MVP đến quy mô doanh nghiệp — chúng tôi triển khai nhanh và vững chắc.\nTừ trang web đơn giản hay cả phần mềm có nghiệp vụ phức tạp.",
    },
    {
      num: "03",
      title: "Bảo Hành và Mở Rộng",
      desc: "Không chỉ bảo hành trọn đời.\nChúng tôi sẽ đồng hành cũng bạn đến khi doanh nghiệp có quy mô lớn. Sẵn sàng xử lý tối ưu khi bạn có lưu lượng truy cập đồng thời cao.",
    },
  ];

  return (
    <section className="w-full bg-bg-surface py-20 px-6 md:px-20 flex flex-col items-center gap-12">
      <ServicesHeader
        eyebrow="DỊCH VỤ CỦA CHÚNG TÔI"
        title="Phát Triển Từ Đầu Đến Cuối"
        sub="Chúng tôi thiết kế và xây dựng sản phẩm định hình tương lai. Từ chiến lược — tầm nhìn của bạn, hoàn hảo."
      />
      
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
