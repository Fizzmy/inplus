<view class="bg-white">
    <view class="solids-bottom padding-xs flex align-center">
        
        <view class="flex-sub text-center">
            <view class="text-xxl padding">
            <text class="text-black text-bold">C++研发工程师介绍</text>
            </view>
            
        </view>
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
    &emsp;&emsp;工程师的工作内容主要包括Windows程序设计，PC游戏开发、嵌入式开发、密集计算、人工智能底层、数据库底层开发等。此外，C++还用于目前流行的移动互联网应用程序的开发。
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
    &emsp;&emsp;各类企业对C++软件工程师的需求持续升温，国际上许多著名的企业像IBM等都将C++作为优秀程序员的必备软件语言要求。目前C++软件工程师职业发展前景广，市场抢手，薪资水平正有逐年递增的趋势。据专家预测，C++软件工程师是未来几年最热门的职业之一。\n
    </text>
    <view style="display: flex; justify-content: center;" wx:for="{{dataImg}}" wx:key="{{index}}">
    
        <image src="{{item}}" mode="widthFix" bindtap="detail" data-list="{{dataImg}}" data-src="{{item}}" style="width:80%;"></image>
    </view>
</view>
<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">技能要求</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;C++工程师需要掌握基本技能点：
&emsp;&emsp;1.	掌握C++语言以及计算机的一些本质原理；
&emsp;&emsp;2.	熟练使用C++ 开发语言，精通windows下多线程多进程开发；
&emsp;&emsp;3.	熟悉算法设计和数据结构；
&emsp;&emsp;4.	熟悉C/S系统QT开发；
&emsp;&emsp;5.	熟练掌握MYSQL、SQL Server、Oracle数据库相关开发操作；
&emsp;&emsp;6.	具有较强的自我驱动力和学习能力，逻辑思维能力优秀等。

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
    &emsp;&emsp;学习C++语言可以学习相关书籍，尽量多的完成书籍的习题。另外，尝试写C++代码来解决问题，实践越多收获越多。也可以加入程序员的社群，多与他人交流学习。

    </text>
</view>

<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">小In推荐</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;<text class="text-bold">入门书籍：</text>
&emsp;&emsp;《C++程序设计教程》，钱能
&emsp;&emsp;《易学C++》，潘嘉杰
&emsp;&emsp;《大话设计模式》，程杰
&emsp;&emsp;《C++编程规范:101条规则、准则与最佳实践》，刘基诚
&emsp;&emsp;《C和C++程序员面试秘籍》，董山海\n
&emsp;&emsp;<text class="text-bold">进阶书籍：</text>
&emsp;&emsp;《C++程序设计语言》英文第四版，Bjarne Stroustrup
&emsp;&emsp;《C++ Primer 第5版（英文版）》，Stanley Lippman、Josee Laoie、Barbara Moo
&emsp;&emsp;《C++标准库：自学教程与参考手册（第2版）（英文版）》，Nicolai Josuttis
&emsp;&emsp;《C++ Concurrency in Action|C++ 并发实战》，Anthony Wiliams
&emsp;&emsp;《C和C++安全编码（第2版）（英文版）》，Robert Seacord

    </text>
</view>


<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">C++研发工程师的工作经历</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    一位工作五年的C++研发工程师：
&emsp;&emsp;第一份工作是1800一个月的待遇，搞无人机的地面站程序。这个工作跟算法关系不大，基本都是些无聊的串口通信，UDP通信，UI设计等，最大的感触就是那时候虽然掌握的数据结构和设计模式但没有融会贯通，基本就是面向过程的搞法，也很累。我虽然痛苦，但也没有停止学习。想更上一层楼，但是环境不好没办法。中间发生了一个事情，一个无人机遇到障碍后重规划算法，耗时大概是5秒，根据需求，要压缩到500毫秒，公司没人能干这事，我根据之前的打比赛的经验自告奋勇干了，压缩到200毫秒，自以为很不错，然而这个事情，在当时的公司不可能获得什么奖励。我也就心灰意冷，到了17年初，我终于离职了。那会我工资是5400。
&emsp;&emsp;第二份工作是8000，搞机器人路径规划，因为我之前做过无人机路径规划优化，我觉得我能做这个工作。连续搞了半年，我也就搞懂了栅格路径规划的一些基本东西，但是老板还是不满意，亲自跟我读代码，连续加了一个月的班，我感觉我还是搞了一点东西，比如之前的路径规划A*算法，耗时大概是16秒，我改进到了最优50毫秒，最差2秒。取决于输入输出的极端情况。然后老板满意了，工资加到了12K。然后机器人的运动控制算法也让我搞。我一直做到了18年5月，跟老板的关系有点问题，就辞职的。
&emsp;&emsp;第三份工作是21K。我跳槽到了一个工业机器人公司，定位，运动控制，路径规划，全覆盖，图像识别等，也很杂，但是全盘融会贯通了数据结构和设计模式，代码产出还是很容易，所以我工作也没有压力。基本上一天工作8小时，足够。不加班。
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
    &emsp;&emsp;长期从事C++研发工程师的人可能会痴迷工作或者电脑，晚上八点到十二点的这段时间基本上是在电脑桌或工作台前渡过的；不喜欢与人交住，朋友很少，体型偏胖或偏廋，不在正常区间；缺乏未来计划，对五年后自已的生活与工作不太明确。C++研发工程师们一定要合理作息，注意身体健康和人际交往，对自己的未来有一个明确计划哟！
    </text>
</view>
<view style="display: flex; justify-content: center;">
    <image src="/images/logo.png" mode="widthFix" style="width:40%;"></image>
</view>
<view style="display: flex; justify-content: center;">
    <text class="text-xs text-gray">\n\npowered by @In+实践队\n\n</text>
</view>
