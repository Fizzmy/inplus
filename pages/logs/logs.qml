<view class="container log-list">
  <block qq:for="{{logs}}" qq:for-item="log" qq:key="*this">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
</view>
