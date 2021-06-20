<scroll-view scroll-y class="scrollPage">
  <view class="UCenter-bg" style="background-image: url({{nwPic}})">
    <view class='padding-xl' wx:if="{{ !hasUserInfo }}">
			<button class='cu-btn  bg-green shadow lg block' open-type="getUserInfo" bindgetuserinfo="getUserInfo">授权登录</button>
		</view>
    <image src="{{userInfo.avatarUrl}}" class='avatar' mode="widthFix"></image>
    <view class="text-xl text-black">{{userInfo.nickName}}</view>
    <image src="/images/wave.gif" mode="scaleToFill" class="gif-wave"></image>
  </view>
  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
    <view wx:if="{{ifadmin}}" class="cu-item arrow">
      <navigator class="content" url="/pages/verify/verify" hover-class="none">
        <text class="cuIcon-question text-olive"></text>
        <text class="text-grey">审核</text>
      </navigator>
    </view>
    <view class="cu-item arrow">
      <navigator class="content" url="/pages/myPassage/myPassage" hover-class="none">
        <text class="cuIcon-creativefill text-orange"></text>
        <text class="text-grey">我的发布</text>
      </navigator>
    </view>
  </view>
  <view class="cu-tabbar-height"></view>
</scroll-view>