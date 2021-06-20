<view class="cu-card dynamic">
  <view class="cu-item shadow">
    <view class="cu-list menu-avatar">
      <view class="cu-item">
        <view class="cu-avatar round lg" style="background-image:url({{information.avatarUrl}});"></view>
        <view class="content flex-sub">
          <view>{{information.nickName}}</view>
          <view class="text-gray text-sm flex justify-between">
           {{information.submitDate}}
          </view>
        </view>
      </view>
    </view>
    <view class="solid-bottom text-xl padding text-black text-bold text-center margin-bottom-sm">{{information.title}}</view>
    <view class="text-content">
      {{information.content}}
    </view>
    <view class="grid flex-sub padding-lr col-3 grid-square padding-bottom-lg">
      <view class="bg-img" style="background-image:url(https://picture.fizzmy.club/picture/{{item}});" wx:for="{{information.picUrl}}" wx:key="{{index}}" bindtap="detail" data-list="{{information.picUrl}}" data-src="https://picture.fizzmy.club/picture/{{item}}">
      </view>
    </view>
    <view wx:if="{{ifadmin&&information.verify==0}}" class="padding flex flex-direction">
        <button id="{{information.id}}" class="cu-btn bg-blue lg" bindtap="pass">通过</button>
        <button id="{{information.id}}" class="cu-btn bg-red margin-tb-sm lg" bindtap="unpass">不通过</button>
    </view>
    <view wx:if="{{ifadmin||information.openid==openid}}" class="padding flex flex-direction">
        <button id="{{information.id}}" class="cu-btn bg-grey lg" bindtap="delForm">删除</button>
    </view>
  </view>
</view>