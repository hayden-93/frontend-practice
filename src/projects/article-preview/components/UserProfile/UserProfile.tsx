import { PropsWithChildren } from "react";

interface UserProfileProps {
  className?: string;
}

export const UserProfile = ({ children, className }: PropsWithChildren<UserProfileProps>) => {
  const classes = ["px-8", className].join(" ").trim();

  return <section className={classes}>{children}</section>;
};

interface UserProfileNameProps {
  className?: string;
}

export const UserProfileName = ({ children, className }: PropsWithChildren<UserProfileNameProps>) => {
  const classes = ["", className].join(" ").trim();

  return <section>{children}</section>;
};
interface UserProfileProps {
  className?: string;
}

UserProfile.Name = UserProfileName;
