<swiper class="screen-swiper square-dot" style="height:325rpx" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
    <swiper-item wx:for="{{swiperList}}" wx:key="{{index}}">
        <image src="{{item.url}}" style="height:100%" mode="aspectFill" wx:if="{{item.type=='image'}}"></image>
        <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video>
    </swiper-item>
</swiper>

<view class="cu-list menu card-menu margin-top-xl margin-bottom-lg shadow-lg radius" wx:if="{{show}}">
  <view class="cu-item arrow">
    <navigator class="content" url="/pages/publish/publish" hover-class="none">
      <text class="cuIcon-writefill text-cyan"></text>
      <text class="text-grey">我要发贴</text>
    </navigator>
  </view>
</view>

<view class="cu-card article {{isCard?'no-card':''}}"  wx:for="{{list}}" wx:key="{{index}}" >
  <navigator class="cu-item shadow" style="margin-top:-10rpx" url="/pages/detail/detail?id={{item.id}}">
    <view class="title">
      <view class="text-cut">{{item.title}}</view>
    </view>
    <view class="content" wx:if="{{item.picUrl.length!=0}}">
      <image src="https://picture.fizzmy.club/picture/{{item.picUrl[0]}}" mode="aspectFill"></image>
      <view class="desc">
        <view class="text-content">{{item.content}}</view>
        <view class="flex justify-between">
          <view wx:if="{{item.type==0}}" class="cu-tag bg-red light sm">经验分享</view>
          <view wx:else class="cu-tag bg-blue light sm">求职信息</view>
          <view>
            <text class="text-gray text-xs">{{item.nickName}} 于 {{item.submitDate}}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="content" wx:else>
      <view class="desc">
        <view class="text-content">{{item.content}}</view>
        <view class="flex justify-between">
          <view wx:if="{{item.type==0}}" class="cu-tag bg-red light sm">经验分享</view>
          <view wx:else class="cu-tag bg-blue light sm">求职信息</view>
          <view>
            <text class="text-gray text-xs">{{item.nickName}} 于 {{item.submitDate}}</text>
          </view>
        </view>
      </view>
    </view>
  </navigator>
</view>
