<view class="topview">
	<form catchsubmit="formSubmit" catchreset="formReset">
	<!--	<view class="cu-form-group margin-top">
			<view class="title">用户名</view>
			<input placeholder="请输入你的用户名" name="name" type="text" value="{{name}}" bindinput="nameinput"> </input>
		</view>
		-->

		<view class="cu-form-group margin-top">
			<view class="title">标题</view>
			<input placeholder="请输入标题" name="title" type="text" value="{{title}}" bindinput="titleinput"> </input>
		</view>
		<view class="cu-form-group align-start">
			<view class="title">文章类型</view>
			<view class="padding-sm flex flex-wrap">
			<view class="padding-xs" wx:for="{{passageList}}" wx:key="{{index}}">
				<view wx:if="{{msg[index]}}" class="cu-tag bg-{{item.color}}" data-nwid="{{index}}" bindtap="modify">{{item.name}}</view>
				<view wx:else class="cu-tag bg-{{item.color}} light" data-nwid="{{index}}" bindtap="modify">{{item.name}}</view>
			</view>
</view>
		</view>
		
		<view class="cu-form-group align-start">
			<view class="title">正文</view>
			<textarea maxlength="-1" name="content" value="{{content}}" placeholder="在此输入正文" bindinput="contentinput"></textarea>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class="action">
				图片上传
			</view>
			<view class="action">
				{{files.length}}/9
			</view>
		</view>
		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" wx:for="{{files}}" wx:key="*this" bindtap="previewImage"  id="{{item}}">
					<image  src="{{item}}" mode="aspectFill" />
					<view class="cu-tag bg-red" data-index="{{index}}" catchtap="deleteImage">
						<text class="cuIcon-close"></text>
					</view>
				</view>
				<view class="solids" bindtap="chooseImage" wx:if="{{files.length<9}}">
					<text class="cuIcon-cameraadd"></text>
				</view>
			</view>
		</view>
            

		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg" formType="submit">提交</button>
		</view>
	</form>
</view>

