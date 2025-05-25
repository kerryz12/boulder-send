import React from "react";
import { UserProfile as UserProfileType } from "../../types";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import { Edit3, UserPlus, Users } from "lucide-react";

interface UserProfileProps {
  user: UserProfileType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <Avatar
          src={user.profilePictureUrl}
          alt={user.fullName}
          size="xl"
          className="mb-4 md:mb-0 md:mr-8"
        />
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            {user.fullName}
          </h1>
          <p className="text-lg text-blue-600 hover:underline cursor-pointer">
            @{user.username}
          </p>
          {user.bio && (
            <p className="mt-2 text-slate-600 text-sm md:text-base max-w-xl">
              {user.bio}
            </p>
          )}
          <div className="flex justify-center md:justify-start space-x-6 mt-4 text-slate-700">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-1.5 text-blue-500" />
              <span className="font-semibold">{user.followersCount}</span>
              <span className="ml-1 text-slate-500">Followers</span>
            </div>
            <div className="flex items-center">
              <UserPlus className="h-5 w-5 mr-1.5 text-blue-500" />
              <span className="font-semibold">{user.followingCount}</span>
              <span className="ml-1 text-slate-500">Following</span>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          size="md"
          className="mt-6 md:mt-0 md:ml-auto"
          leftIcon={<Edit3 size={18} />}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
