export function Link(props: { href: string; children?: React.ReactNode }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="not-prose inline-block after:ease relative whitespace-nowrap text-yellow-400 no-underline after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-0 after:rounded-full after:bg-yellow after:transition-[width] after:duration-200 hover:after:w-full hover:after:ease-out  hover:text-yellow-500"
    >
      {props.children}
    </a>
  );
}
