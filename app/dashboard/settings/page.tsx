"use client";

import { useFetchUser } from "@/hooks/useFetchUser";
import UsersDetails from "@/components/UserProfile/UserDetails";
import UsersName from "@/components/UserProfile/UsersName";

export default function SettingsPage() {
  const { loading, userState: user } = useFetchUser();
  return (
    <div className="p-4">
      <UsersName user={user} loading={loading} />
      <UsersDetails user={user} loading={loading} />
    </div>
  );
}
