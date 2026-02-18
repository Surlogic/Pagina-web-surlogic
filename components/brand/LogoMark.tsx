type LogoMarkProps = {
  className?: string;
  title?: string;
};

export default function LogoMark({ className, title = 'SurLogic' }: LogoMarkProps) {
  const classes = ['object-contain', className].filter(Boolean).join(' ');
  return (
    <img
      className={classes}
      src="/brand/logo-mark.png"
      alt={title}
      width={200}
      height={200}
      loading="eager"
      decoding="async"
    />
  );
}
