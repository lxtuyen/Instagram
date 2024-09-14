import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { UserStoryCard } from "../userCard/UserStoryCard";
import IconAdd from "@/icon/IconAdd";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import UploadVideo from "../upload/UploadVideo";

export function CarouselUser() {
  const handleAdd = () => {};

  return (
    <>
      <Carousel className="w-full max-w-[620px]">
        <CarouselContent className="-ml-1">
          <CarouselItem key={9} className="pl-1 md:basis-1/2 lg:basis-1/5">
            <Dialog>
              <DialogTrigger asChild>
                <div
                  onClick={handleAdd}
                  className="cursor-pointer flex flex-col items-center"
                >
                  <IconAdd />
                  <span>Mới</span>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Thêm tin mới</DialogTitle>
                  <DialogDescription>
                    Chia sẻ nhưng kỉ niệm với bạn bè
                  </DialogDescription>
                </DialogHeader>
                <UploadVideo />
                <DialogFooter>
                  <Button type="submit">Xác nhận</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CarouselItem>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/5"
            >
              <UserStoryCard username="Cuaaa" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
