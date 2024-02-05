import Link from "next/link"

type Props = {
  category: string,
  isActive: boolean,
}

export default function NavLink({ category,isActive }: Props) {
  return (
    <div>
      <Link href={`/news/${category}`} className="navLink">
        {category}
      </Link>
    </div>
  )
}
