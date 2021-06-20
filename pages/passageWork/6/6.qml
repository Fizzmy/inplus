<view class="bg-white">
    <view class="solids-bottom padding-xs flex align-center">
        
        <view class="flex-sub text-center">
            <view class="text-xxl padding">
            <text class="text-black text-bold">大数据工程师介绍</text>
            </view>
            
        </view>
    </view>
</view>
<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">什么是大数据工程师</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;大数据工程师顾名思义，是利用大数据技术处理大量数据的专业技术人员，依据专业水平划分为初级、中级、高级。
    </text>
    <view style="display: flex; justify-content: center;">
    <image src="{{firimgurl}}" mode="widthFix"style="width:80%;"></image>
    </view>
    
</view>

<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">大数据工程师工作内容</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
    &emsp;&emsp;大数据工程师的主要工作包括：
 &emsp;&emsp;1.	数据采集，实现分散日志的集合；
 &emsp;&emsp;2.	数据清洗，对异常取值的数据记录进行过滤或者字段数据回填，删除多余的字段信息，并进行脱敏处理（如用户姓名只保留姓，名字用*替换）；
 &emsp;&emsp;3.	数据存储，清洗后的数据落地到数据仓库，供下游做离线分析；
 &emsp;&emsp;4.	数据分析统计，从日志记录里统计出各种各样的报表数据；
 &emsp;&emsp;5.	数据可视化，用数据表格、数据图等直观的形式展示上游数据分析统计的数据。

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
    &emsp;&emsp;作为IT类职业中的“大熊猫”，大数据工程师这个职业在国内人才市场可谓是一颗闪耀的新星，由于刚刚处于萌芽阶段，这个领域出现很大的人才缺口，国内发展势头激进，完全是供不应求的状况。
 &emsp;&emsp;在美国大数据工程师的平均年薪高达17.5万美元，在国内顶尖互联网类公司，同一个级别大数据工程师的薪酬可能要比其他职位高20%到30%，颇受企业重视。由于大数据人才数量较少，因此大多数公司的数据部门一般都是扁平化的层级模式，大致分为数据分析师、资深研究员、部门总监3个级别。随着国家重视大数据，政府扶持大数据，大数据在企业中生根发芽，开花结果。企业基于大数据计算分析存储、数据挖掘、数据分析等数据产业的发展，IT行业需要更多的数据人才，大数据工程师将会成为一个炙手可热的行业。
\n
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
    &emsp;&emsp;成为一名大数据工程师需要具备一些技能：
&emsp;&emsp;1.	数学及统计学相关背景，“只有具备一定的理论知识，才能理解模型、复用模型甚至创新模型，来解决实际问题。”；
&emsp;&emsp;2.	计算机编码能力，实际开发能力和大规模的数据处理能力是大数据工程师的必备要素；
&emsp;&emsp;3.	对特定应用领域或行业的知识，在某个或多个垂直行业的经历能为应聘者积累对行业的认知，对于之后成为大数据工程师有很大帮助，因此这也是应聘这个岗位时较有说服力的加分项；

    </text>
    <view style="display: flex; justify-content: center;">
    <image src="{{lasimgurl}}" data-src="{{lasimgurl}}"  mode="widthFix" bindtap="detail" style="width:80%;"></image>
    </view>
</view>



<view class="cu-bar bg-white solid-bottom margin-top">
    <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-bold text-xl text-black">资深大数据工程师对初学者的建议</text>
    </view>
</view>
<view class="padding bg-white">
    <text class="text-lg text-black" decode="true" style="line-height: 50rpx;">
   &emsp;&emsp;很多初学者，对大数据的概念都是模糊不清的，大数据是什么，能做什么，学的时候，该按照什么线路去学习，学完往哪方面发展。其实这就是想告诉你大数据的三个发展方向，平台搭建/优化/运维/监控；大数据开发/设计/架构；数据分析/挖掘。
&emsp;&emsp;先谈一下大数据的四个特征：1.数据量大；2.数据类型繁多，结构化、非结构化文本、日志、视频、图片、地理位置等；3.商业价值高，但是这种价值需要在海量数据之上，通过数据分析与机器学习更快速的挖掘出来；4.处理时效性高，海量数据的处理需求不再局限在离线计算当中。
&emsp;&emsp;就我个人而言主要是在第二个方向，经历了初识Hadoop（一个分布式系统基础架构），更高效的WordCount，把其他数据用到Hadoop上，把Hadoop的数据用到别的地方，运用SQL，一夫多妻制（一次采集、多次消费），越来越多的分析，数据实时，数据对外等一系列过程。

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
    &emsp;&emsp;大数据行业也面临着一定的风险，如海量数据的计算速度，如处处都是假规律：数据量的增大会带来规律的丧失和严重失真，如封闭数据与断裂数据：封闭数据使数据缺乏多样化，断裂数据使数据缺乏结构化，如缺失数据等，这也是我们在选择职业时需要注意的呢。
    </text>
</view>
<view style="display: flex; justify-content: center;">
    <image src="/images/logo.png" mode="widthFix" style="width:40%;"></image>
</view>
<view style="display: flex; justify-content: center;">
    <text class="text-xs text-gray">\n\npowered by @In+实践队\n\n</text>
</view>
