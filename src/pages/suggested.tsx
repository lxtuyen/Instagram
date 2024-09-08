import {UserSuggestedCard} from "@/components/userCard/UserSuggestedCard";

export default function Suggested() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-medium">Gợi ý</span>
      <UserSuggestedCard fullName="nguyen thhi b" username="asjjhas" />
      <UserSuggestedCard fullName="nguyen thhi b" username="asjjhas" />
      <UserSuggestedCard fullName="nguyen thhi b" username="asjjhas" />
      <UserSuggestedCard fullName="nguyen thhi b" username="asjjhas" />
    </div>
  );
}
