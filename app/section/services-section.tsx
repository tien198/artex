import { InfoCard } from "../comp/InfoCard";

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
      desc: "Full-stack. Từ MVP đến quy mô doanh nghiệp — chúng tôi triển khai nhanh và vững chắc.\nTừ trang web đơn giản đến cả phần mềm có nghiệp vụ phức tạp.",
    },
    {
      num: "03",
      title: "Bảo Trì và Mở Rộng",
      desc: "Không chỉ BẢO HÀNH TRỌN ĐỜI.\nChúng tôi sẽ đồng hành cũng bạn đến khi doanh nghiệp có quy mô lớn. Sẵn sàng xử lý tối ưu khi bạn có lưu lượng truy cập đồng thời cao.",
    },
  ];

  return (
    <section className="w-full bg-surface py-20 px-6 md:px-20 flex flex-col items-center gap-12">
      <ServiceHeader />

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}

function ServiceHeader() {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="text-neon-bright font-geist-mono text-[11px] tracking-[3px]">
        DỊCH VỤ CỦA CHÚNG TÔI
      </div>
      <div className="text-primary font-abel text-4xl md:text-[48px] tracking-[1px] text-center max-w-[800px]">
        Phát Triển Từ Đầu Đến Cuối
      </div>
      <div className="text-secondary font-geist-mono text-base text-center">
        Chúng tôi thiết kế và xây dựng sản phẩm định hình tương lai.
        <br />
        Từ chiến lược, tầm nhìn của bạn
        <br />
        Một cách hoàn hảo!
      </div>
    </div>
  );
}
