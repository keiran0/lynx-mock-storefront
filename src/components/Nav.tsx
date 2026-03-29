import lynxlogo from '../assets/lynx-logo.png'

export default function Nav() {
    return <view className="nav">
        <image src={lynxlogo} className="nav-image"/>
        <image src={lynxlogo} className="nav-image" />
        <image src={lynxlogo} className="nav-image" />
        <image src={lynxlogo} className="nav-image" />
    </view>
}
