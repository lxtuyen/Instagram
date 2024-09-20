import type { UploadRequestOption } from "rc-upload/lib/interface";
import { toast } from "sonner";

export const uploadImage = async (options: UploadRequestOption) => {
    const { file, onSuccess, onError } = options;
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "multiLibrary");
    uploadData.append("upload_name", "");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/multi-library/image/upload",
        {
          method: "POST",
          body: uploadData,
        }
      );
      const data = await res.json();

      if (data.url) {
        onSuccess && onSuccess(data);
        return data.url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      toast.error("Upload failed");
      onError && onError(err as Error, null);
    }
};
export const uploadVideo = async (options: UploadRequestOption) => {
    const { file, onSuccess, onError } = options;
    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "multiLibrary");
    uploadData.append("upload_name", "");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/multi-library/video/upload",
        {
          method: "POST",
          body: uploadData,
        }
      );
      const data = await res.json();

      if (data.url) {
        onSuccess && onSuccess(data);
        return data.url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      toast.error("Upload failed");
      onError && onError(err as Error, null);
    }
};