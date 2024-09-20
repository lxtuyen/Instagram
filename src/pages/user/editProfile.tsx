import { Button } from "@/components/ui/button";
import { Avatar } from "@chatscope/chat-ui-kit-react";
import { Upload } from "antd";
import { useState, ChangeEvent } from "react";
import { uploadImage } from "@/utils/upload";
import type { UploadRequestOption } from "rc-upload/lib/interface";
import { toast } from "sonner";

export default function EditProfile() {
  const [avatar, setAvatar] = useState<string>(
    "https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
  );
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Function to handle fullname change
  const handleFullnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullname(e.target.value);
  };

  // Function to handle bio change
  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleCustomRequest = async (options: UploadRequestOption) => {
    try {
      const url = uploadImage(options);
      if (url) {
        setAvatar(await url);
        toast.success("Upload thành công");
      }
    } catch (error) {
      toast.error("Upload thất bại");
    }
  };

  return (
    <div className="p-10 flex flex-col gap-8">
      <span className="font-bold text-xl">Chỉnh sửa trang cá nhân</span>
      <div className="flex flex-col justify-between gap-4 p-2 rounded-xl items-center">
        <Upload
          className="cursor-pointer"
          showUploadList={false}
          customRequest={handleCustomRequest}
          name="file"
        >
          <Avatar size="lg" src={avatar} />
        </Upload>
        <div className="flex flex-col items-center">
          <span className="font-bold ">cuaa.xt2</span>
          <span>Le xuan tuyen</span>
        </div>
      </div>
      <div>
        <div className="flex gap-2 flex-col">
          <span className="font-medium text-lg ">Tên người dùng</span>
          <input
            className="border-2 rounded-lg p-2"
            placeholder="Tên người dùng"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <span className="font-medium text-lg ">Tên đầy đủ</span>
          <input
            className="border-2 rounded-lg p-2"
            placeholder="Tên người dùng"
            type="text"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </div>
        <div className="flex gap-2 flex-col">
          <span className="font-medium text-lg ">tiểu sử</span>
          <textarea
            className="border-2 rounded-lg p-2"
            placeholder="Tiểu sử"
            value={bio}
            onChange={handleBioChange}
          ></textarea>
        </div>
      </div>
      <Button
        className=" bg-cyan-500 hover:bg-cyan-600 flex gap-2"
        variant={"default"}
      >
        Cập nhật
      </Button>
    </div>
  );
}
