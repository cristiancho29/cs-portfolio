import {
  FacebookOutlined,
  InstagramOutlined,
  LinkOutlined,
  GithubOutlined,
} from '@ant-design/icons'

export const NavBar = () => {
  return (
    <nav className="flex bg-black justify-between px-12">
      <ul className="flex">
        <FacebookOutlined className="text-3xl text-white" />
        <InstagramOutlined className="text-3xl text-white" />
        <LinkOutlined className="text-3xl text-white" />
        <GithubOutlined className="text-3xl text-white" />
      </ul>
      <ul className="flex text-white">
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </nav>
  )
}
