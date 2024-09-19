import { TSidebarLinks } from "@/types/general.type";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "@/constants/general.const";
import React from "react";
import { Avatar, Drawer, Badge } from "antd";
import Logo from "./Logo";
import { Input } from "./ui/input";
import UseDebounce from "@/hooks/useDebounce";
import { UserSearchCard } from "./userCard/UserSearchCard";
import IconOutlineHeart2 from "@/icon/IconOutlineHeart2";
import IconOutlineHeart from "@/icon/IconOutlineHeart";
import { UserOutlined } from "@ant-design/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadImg from "./upload/UploadImg";
import { Button } from "@/components/ui/button";
import IconOutlineAdd from "@/icon/IconOutlineAdd";

const Sidebar = () => {
  const router = useLocation();
  const { pathname } = router;
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="px-5 py-6 bg-[#FCFCFC] hidden md:block border">
      <Logo />
      {sidebarLinks.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className={`px-4 py-5 flex items-center gap-3 font-normal text-lg rounded-lg cursor-pointer`}
      >
        <span>{<IconOutlineHeart />}</span>
        <Badge size="default" count={5}>
          <span className="pr-3">Thông báo</span>
        </Badge>
        <Drawer
          closable
          destroyOnClose
          title={<p className="w-full font-bold size-7 text-lg">Thông báo</p>}
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className="flex flex-col items-center justify-center">
            <IconOutlineHeart2 />
            <span className="my-3">Hoạt động trên bài viết của bạn</span>
            <span className="text-center">
              Khi có người thích hoặc bình luận về một trong những bài viết của
              bạn, bạn sẽ nhìn thấy nó ở đây.
            </span>
          </div>
        </Drawer>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="px-4 py-5 flex items-center gap-3 font-normal text-lg rounded-lg cursor-pointer">
            <span>{<IconOutlineAdd />}</span>
            <span>Tạo</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Thêm bài viết mới</DialogTitle>
            <DialogDescription>
              Chia sẻ nhưng kỉ niệm với bạn bè của mình.
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Bạn đang nghĩ gì thế?"
            className="border-none"
            type="text"
          />
          <UploadImg />
          <DialogFooter>
            <Button type="submit">Xác nhận</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Link
        to={"/profile"}
        className={`px-4 py-5 flex items-center gap-3 font-normal text-lg rounded-lg cursor-pointer`}
      >
        <span>
          {
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          }
        </span>
        <span>Trang cá nhân</span>
      </Link>
    </div>
  );
};
interface ISidebarLinkProps {
  link: TSidebarLinks;
  isActive: boolean;
}
function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const debounced = UseDebounce(searchValue, 400);

  const isOpen = () => {
    setOpen(true);
  };
  return link.path ? (
    <>
      <Link
        to={link.path}
        className={`px-4 py-5 flex items-center gap-3 font-normal text-lg rounded-lg ${
          isActive ? "!font-bold" : "hover:bg-gray-100"
        }`}
      >
        {isActive ? (
          <span className="text-3xl">{link.iconIsActive}</span>
        ) : (
          <span>{link.icon}</span>
        )}
        <span>{link.title}</span>
      </Link>
    </>
  ) : (
    <>
      <div
        onClick={isOpen}
        className={`px-4 py-5 flex items-center cursor-pointer gap-3 font-normal text-lg rounded-lg`}
      >
        <span>{link.icon}</span>
        <span>{link.title}</span>
      </div>
      <Drawer
        closable
        destroyOnClose
        title={<p className="w-full font-bold size-7 text-lg">Tìm kiếm</p>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Input
          placeholder="Tìm kiếm"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="bg-slate-200 mb-5"
          type="search"
        />
        {debounced ? (
          <UserSearchCard fullName="le xuan tuyen" username="Cuaaa" />
        ) : (
          <>
            <hr />
            <h2 className="w-full my-5 font-bold size-7 text-lg">Gần đây</h2>
            <div className="flex justify-center items-center">
              <p>không có nội dung tìm kiếm mới đây.</p>
            </div>
          </>
        )}
      </Drawer>
    </>
  );
}

export default Sidebar;
