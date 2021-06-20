<scroll-view>
    <swiper class="screen-swiper square-dot" style="height:325rpx" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
    <swiper-item wx:for="{{swiperList}}" wx:key="{{index}}">
        <image src="{{item.url}}" style="height:100%" mode="aspectFill" wx:if="{{item.type=='image'}}"></image>
        <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video>
    </swiper-item>
    </swiper>

  <view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
      <text class="cuIcon-title text-orange "></text> 岗位介绍
    </view>
  </view>

  <view class="cu-list grid col-{{gridCol}}">
    <view class="cu-item" wx:for="{{iconList}}" wx:key="{{index}}">
      <navigator hover-class="click" hover-stay-time="200" url="/pages/passageWork/{{index}}/{{index}}">
        <view class="cuIcon-{{item.icon}} text-{{item.color}}" style="font-size:50rpx">
        </view>
        <text>{{item.name}}</text>
      </navigator>
    </view>
  </view>

  <view class="cu-bar bg-white solid-bottom margin-top " wx:if="{{show}}">
    <view class="action">
      <text class="cuIcon-title text-orange "></text> 公司介绍
    </view>
  </view>

  <view class="cu-list grid col-{{gridCol}}" wx:if="{{show}}">
    <view class="cu-item" wx:for="{{iconList2}}" wx:key="{{index}}">
      <navigator hover-class="click" hover-stay-time="200" url="/pages/company/{{index}}/{{index}}">
        <view class="cuIcon-{{item.icon}} text-{{item.color}}" style="font-size:50rpx">
        </view>
        <text>{{item.name}}</text>
      </navigator>
    </view>
  </view>
</scroll-view>