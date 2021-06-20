<!--pages/verify/verify.wxml-->

<scroll-view scroll-x class="bg-white nav text-center">
  <view class="cu-item {{index==TabCur?'text-blue cur':''}}" wx:for="{{2}}" wx:key bindtap="tabSelect" data-id="{{index}}">
    {{types[index].value}}
  </view>
</scroll-view>
<!--物品列表布局-->
<view wx:if="{{ TabCur == 0 }}" class="cu-card case {{isCard?'no-card':''}}">
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
</view>
<view wx:if="{{ TabCur == 1 }}" class="cu-card case {{isCard?'no-card':''}}">
  <view class="cu-card article {{isCard?'no-card':''}}"  wx:for="{{list2}}" wx:key="{{index}}" >
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
</view>



