<view class="bg-white">
    <view class="padding-xs flex align-center">
        
        <view class="flex-sub text-center">
            <view class="text-xxl padding">
            <text class="text-black text-bold">php工程师介绍</text>
            </view>
        </view>
    </view>
        <view style="display: flex; justify-content: center;" wx:for="{{dataImg}}" wx:key="{{index}}">
            <image src="{{item}}" mode="widthFix" bindtap="detail" data-list="{{dataImg}}" data-src="{{item}}" style="width:40%;"></image>
        </view>
    
</view>



<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">工作内容</text>
    </view>
</view>

<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;PHP工程师可操纵多种主流与非主流的数据库，PHP支持面向对象的编程、支持跨平台的操作，因此，可应用于任何地方、任何领域，最广泛的是应用于动态网站开发，比如门户、微博、论坛、电子商务、SNS（社交）等，除此之外，PHP工程师还可以通过混合式开发APP的方式，将业务领域扩展到移动端（兼容Android和iOS）。
    </text>
</view>
<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">发展前景</text>
    </view>
</view>

<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;PHP技术人才，正迎合了目前的互联网的发展趋势；PHP作为非常优秀的、简便的Web开发语言，和Linux，Apache，MySQL紧密结合，形成LAMP的开源黄金组合，不仅降低使用成本，还提升了开发速度，满足最新的互动式网络开发的应用，这使得php软件工程师成为一个发展迅速的职业。
    </text>
    <view style="display: flex; justify-content: center;" wx:for="{{dataImg2}}" wx:key="{{index}}">
        <image src="{{item}}" mode="widthFix" bindtap="detail" data-list="{{dataImg2}}" data-src="{{item}}" style="width:70%;"></image>
    </view>
</view>



<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">职业需求</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;成为php工程师所需要的技能：
    &emsp;&emsp;1.具备良好的代码编程习惯及较强的文档编写能力；
    &emsp;&emsp;2.精通PHP语言，精通CGI标准和HTTP等互联网协议；
    &emsp;&emsp;3.熟练掌握HTML语言、JavaScript脚本语言；
    &emsp;&emsp;4.英文水平过硬，能基本不借助字典快速阅读英文文档；
    &emsp;&emsp;5.熟悉LINUX或WINDOWS操作系统；


    </text>
</view>


<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">Php工程师工作经历</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    一位三年php经验的phper：
    &emsp;&emsp;搞了三年的PHP马马虎虎算个中级PHPer，很感谢PHP的简单，让我可以有大量的时间来研究整个网站的原理，一次请求过程发生了什么，还对swoole workerman之类的感兴趣，也有时间去看点 golang Node.js 等语言的知识，去了解，去对比PHP的优势和劣势。从那时起就一直觉得swoole workerman可能是未来PHP的趋势。但是苦于外包公司是不会给你练手的机会的，自己搭建的也只能是属于玩具级别的东西。
    &emsp;&emsp;当前公司的技术栈分为 Java和PHP 两块，以前还有.net，后来在2015年就弃用了，转眼到了现在（2017年）PHP也要弃用了。原因是在三线小城市，招不到PHP人员，现在也就我一个还在维护着以前的PHP项目，如果继续用PHP做项目会造成后续无法维护的问题。然后领导就要求转Java，凭借3年PHP的经验转Java的过程还是非常顺利的，网站免不了就是增删改，大约1周左右就可以跟着开发项目中的一些模块。
    &emsp;&emsp;真心觉得，大部分的网站用PHP或者Java还是go还有node、Python并没有多少区别，PHP因为简单，可以让人有更多的时间去关注业务之外的问题，比如linux，比如mysql的优化。不过确实Java有更加成熟的技术栈，直接拿来用就可以了，相对来说 PHP swoole 还有很长的路要走。

    </text>
</view>

<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">小In贴士</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;如今Nodejs等学习成本更低的语言兴起，导致php市场逐渐萎缩，php相关工作岗位集中在中小企业。另外，php是社区支持，发展意见难以统一，没有大厂支持，无法择优选择发展方向，所以想去大厂的同学还是要慎重考虑的呀！
    </text>
</view>

<view style="display: flex; justify-content: center;">
    <image src="/images/logo.png" mode="widthFix" style="width:40%;"></image>
</view>
<view style="display: flex; justify-content: center;">
    <text class="text-xs text-gray">\n\npowered by @In+实践队\n\n</text>
</view>
