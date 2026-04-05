import { useNavigate } from "react-router-dom"

const Home = () => {
  const nativation = useNavigate()
  const jump = (type: number) => {
    nativation(`${type === 1 ? '/newWatch' : '/watch'}`)
  }


  return (
    <>
      <div>Home</div>
      <div onClick={() => jump(1)}>跳转新表带搭配页面</div>
      <div onClick={() => jump(2)}>跳转表带搭配页面</div>
    </>
  )
}

export default Home