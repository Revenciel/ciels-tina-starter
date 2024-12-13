import Link from "next/link";

export default function PageList(props) {
  return (
    <>
      <ul className = "navLinks">
        {props.data.pageConnection.edges.map((page) => (
          <li key={page.node.id}>
            <Link href={`/${page.node._sys.filename}`}>
              {page.node._sys.filename}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
