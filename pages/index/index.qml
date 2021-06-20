<view class="container">
  <view class="userinfo">
    <button qq:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block qq:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
    <text>{{test}}</text>
    <view qq:for="{{array123}}" qq:key="*this">
      {{index}}:{{item}}
    </view>
    <button class="cu-btn bg-blue lg" bindtap="tap1">提交</button>
  </view>
  <input placeholder="请输入信息" bindinput="inputest" name="hahaha"></input>
  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>


  <form bindsubmit="formSubmit" bindreset="formReset">
    <view class="section section_gap">
      <view class="section__title">switch</view>
      <switch name="shifou" />
    </view>
    <view class="section section_gap">
      <view class="section__title">slider</view>
      <slider name="huadongtiao" show-value></slider>
    </view>

    <view class="section">
      <view class="section__title">input</view>
      <input name="shurukuang" placeholder="please input here" />
    </view>
    <view class="section section_gap">
      <view class="section__title">radio</view>
      <radio-group name="danxuan">
        <label>
          <radio value="dx1" />
          radio1
        </label>
        <label>
          <radio value="dx2" />
          radio2
        </label>
      </radio-group>
    </view>
    <view class="section section_gap">
      <view class="section__title">checkbox</view>
      <checkbox-group name="duoxuan">
        <label>
          <checkbox value="duox1" />
          checkbox1
        </label>
        <label>
          <checkbox value="duox2" />
          checkbox2
        </label>
      </checkbox-group>
    </view>
    <view class="btn-area">
      <button form-type="submit">Submit</button>
      <button form-type="reset">Reset</button>
    </view>
  </form>
</view>
