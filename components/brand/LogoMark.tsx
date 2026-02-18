type LogoMarkProps = {
  className?: string;
  title?: string;
};

export default function LogoMark({ className, title = 'SurLogic' }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
    >
      <path d="M48 112 A64 64 0 0 1 146 48" />
      <path d="M152 88 A64 64 0 0 1 54 152" />
    </svg>
  );
}
