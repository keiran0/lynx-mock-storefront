import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'
import TopBar from './components/TopBar'

export function App() {

  return (
    <view className="flex justify-between flex-col h-full pb-14 bg-gray-600 ">
      <TopBar/>
      <Content/>
      <Nav/>
    </view>
  )
}
