import lynxlogo from '../assets/lynx-logo.png'

export default function Nav() {
    return <view className="flex flex-row justify-between ml-5 mr-5">
        <image src={lynxlogo} className="h-[50px] w-[50px]"/>
        <image src={lynxlogo} className="h-[50px] w-[50px]"/>
        <image src={lynxlogo} className="h-[50px] w-[50px]"/>
        <image src={lynxlogo} className="h-[50px] w-[50px]"/>
    </view>
}
