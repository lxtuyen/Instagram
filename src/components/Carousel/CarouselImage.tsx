import { Carousel } from "antd";
import { Image } from "antd";

export default function CarouselImage() {
  return (
    <div className="py-3">
      <Carousel arrows infinite={false}>
      {Array.from({ length: 5 }).map((_, index) => (
          <Image
          key={index}
          className="rounded-sm"
          width={468}
          height={585}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        ))}
      </Carousel>
    </div>
  );
}
