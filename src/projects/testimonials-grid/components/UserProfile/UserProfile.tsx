import type { PropsWithChildren } from "react";

interface UserProfileProps {
  className?: string;
}

export const UserProfile = ({ children, className, ...props }: PropsWithChildren<UserProfileProps>) => {
  const classes = ["flex", className].join(" ").trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

interface UserProfileAvatarProps {
  className?: string;
  color?: keyof typeof avatarColorVariants;
  src: string;
  alt: string;
}

const avatarColorVariants = {
  white: "border-neutral-1",
  lightGray: "border-neutral-2",
  gray: "border-neutral-3",
  darkGray: "border-neutral-4",
  darkBlue: "border-neutral-5",
  violet: "border-violet",
} as const;

const UserProfileAvatar = ({ className, color = "white", ...props }: UserProfileAvatarProps) => {
  const classes = ["self-center min-w-8 w-8 h-8 rounded-full border", avatarColorVariants[color], className]
    .join(" ")
    .trim();

  return <img className={classes} {...props} />;
};

interface UserProfileNameProps {
  className?: string;
  color?: keyof typeof nameColorVariants;
}

const nameColorVariants = {
  light: "text-neutral-1",
  dark: "text-neutral-5",
};

const UserProfileName = ({
  children,
  className,
  color = "light",
  ...props
}: PropsWithChildren<UserProfileNameProps>) => {
  const classes = ["block text-xs", nameColorVariants[color], className].join(" ").trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

interface UserProfileTitleProps {
  className?: string;
  color?: keyof typeof titleColorVariants;
}

const titleColorVariants = {
  light: "text-neutral-1",
  dark: "text-neutral-5",
};

const UserProfileTitle = ({
  children,
  className,
  color = "light",
  ...props
}: PropsWithChildren<UserProfileTitleProps>) => {
  const classes = ["block text-xs opacity-50", titleColorVariants[color], className].join(" ").trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

UserProfile.Avatar = UserProfileAvatar;
UserProfile.Name = UserProfileName;
UserProfile.Title = UserProfileTitle;
