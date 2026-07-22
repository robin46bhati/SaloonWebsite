import { Link } from "react-router-dom";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-body font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-gold-gradient text-charcoal shadow-luxe-gold hover:shadow-[0_14px_50px_-10px_rgba(200,155,60,0.6)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-gold text-charcoal hover:bg-gold hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  dark:
    "bg-charcoal text-cream shadow-luxe hover:bg-charcoal-light hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-charcoal hover:text-gold",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-base sm:text-lg",
};

/**
 * Universal CTA button. Renders a <Link> for internal routes, an <a> for
 * external links (WhatsApp/tel/mailto), or a <button> for in-page actions.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
