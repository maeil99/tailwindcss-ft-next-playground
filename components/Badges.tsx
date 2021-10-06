import React, { Children } from "react";

interface IBadgesProps {
  type: BadgeType;
  text: string;
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  className?: string;
  notiText?: string;
}

export enum BadgeType {
  INLINE = "inline",
  PILL = "pill",
  BUTTON = "button",
  CORNER = "corner",
  INDICATOR = "indicator",
}

const Badge = ({
  type,
  text,
  children,
  bgColor,
  className,
  textColor,
  notiText,
}: IBadgesProps) => {
  switch (type) {
    case BadgeType.INLINE:
      return (
        <InlineBadge
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          className={className}
        >
          {children}
        </InlineBadge>
      );
    case BadgeType.PILL:
      return (
        <PillBadge
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          className={className}
        >
          {children}
        </PillBadge>
      );
    case BadgeType.BUTTON:
      return (
        <ButtonBadge
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          className={className}
          btnText={notiText}
        >
          {children}
        </ButtonBadge>
      );
    case BadgeType.CORNER:
      return (
        <CornerBadge
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          className={className}
          btnText={notiText}
        >
          {children}
        </CornerBadge>
      );
    case BadgeType.INDICATOR:
      return (
        <IndicatorBadge
          text={text}
          textColor={textColor}
          bgColor={bgColor}
          className={className}
        >
          {children}
        </IndicatorBadge>
      );
    default:
      return null;
  }
};

export default Badge;

interface BadgeProps {
  bgColor?: string;
  textColor?: string;
  className?: string;
  text: string;
  children?: React.ReactNode;
  btnText?: string;
}

const InlineBadge = ({
  text,
  bgColor = "bg-red-500",
  textColor = "text-red-100",
  className,
  children,
}: BadgeProps) => {
  return (
    <>
      <p>
        {children}
        <span
          className={`${bgColor} ${textColor} ${className} py-1 px-1.5 text-xs rounded`}
        >
          {text}
        </span>
      </p>
    </>
  );
};

const PillBadge = ({
  text,
  bgColor = "bg-blue-500",
  textColor = "text-blue-100",
  className,
  children,
}: BadgeProps) => {
  return (
    <>
      <p>
        {children}
        <span
          className={`${bgColor} ${textColor} ${className} py-1 px-4 text-xs rounded-full`}
        >
          {text}
        </span>
      </p>
    </>
  );
};

const ButtonBadge = ({
  text,
  bgColor = "bg-blue-500",
  textColor = "text-blue-100",
  className,
  children,
  btnText,
}: BadgeProps) => {
  return (
    <>
      <p>
        {children}
        <button
          className={`${bgColor} ${textColor} ${className} py-3 px-4 text-xs rounded`}
        >
          {text}
          <span className="bg-blue-900 text-blue-200 py-1 px-2 text-xs rounded ml-1">
            {btnText}
          </span>
        </button>
      </p>
    </>
  );
};

const CornerBadge = ({
  text,
  bgColor = "bg-yellow-500",
  textColor = "text-yellow-100",
  className,
  children,
  btnText,
}: BadgeProps) => {
  return (
    <>
      <p>
        {children}
        <button
          className={`relative ${bgColor} ${textColor} ${className} py-3 px-4 text-xs rounded`}
        >
          {text}
          <span className="absolute -top-3 -right-3 bg-red-500 text-red-50 py-1 px-2 text-xs rounded ml-1">
            {btnText}
          </span>
        </button>
      </p>
    </>
  );
};

const IndicatorBadge = ({
  text,
  bgColor = "bg-green-500",
  textColor = "text-green-100",
  className,
  children,
}: BadgeProps) => {
  return (
    <>
      <p>
        {children}
        <button
          className={`relative ${bgColor} ${textColor} ${className} py-3 px-4 text-xs rounded`}
        >
          {text}
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 text-red-50 rounded-full animate-ping" />
        </button>
      </p>
    </>
  );
};
