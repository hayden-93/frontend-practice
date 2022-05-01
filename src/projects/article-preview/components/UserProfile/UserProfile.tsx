import { PropsWithChildren } from "react";

interface UserProfileProps {
  className?: string;
}

export const UserProfile = ({ children, className }: PropsWithChildren<UserProfileProps>) => {
  const classes = ["px-8 text-sm items-center", className].join(" ").trim();

  return <section className={classes}>{children}</section>;
};

interface UserProfileNameProps {
  className?: string;
}

export const UserProfileName = ({ children, className }: PropsWithChildren<UserProfileNameProps>) => {
  const classes = ["text-article-dark-grayish-blue font-semibold", className].join(" ").trim();

  return <p className={classes}>{children}</p>;
};
interface UserProfileProps {
  className?: string;
}

UserProfile.Name = UserProfileName;
