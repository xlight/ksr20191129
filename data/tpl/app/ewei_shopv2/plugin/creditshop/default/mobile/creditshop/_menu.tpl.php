<?php defined('IN_IA') or exit('Access Denied');?><div class="fui-navbar" style="height: 50px;">
	<a href="http://xt.quinnovare.cn/index/index/famousDoctor" class="external nav-item <?php  if($_W['routes'] == 'creditshop.index') { ?>active<?php  } ?>">
	<!--<a href="#" class="external nav-item <?php  if($_W['routes'] == 'creditshop.index') { ?>active<?php  } ?>">-->
		<span><img width="24" height="24" src="/icon/my_unclick.png"/> </span>
		<span class="label" style="color:black;">名医讲糖</span>
	</a>
	<a href="http://shop.quinnovare.cn/app/index.php?i=8&c=entry&m=ewei_shopv2&do=mobile&r=creditshop" class="external nav-item <?php  if($_W['routes'] == 'creditshop.lists') { ?>active<?php  } ?>">
		<span><img width="24" height="24" src="/icon/hd_click.png"/> </span></span>
		<span class="label" style="color:#01c7a8;">互动福利</span>
	</a>
	<?php  if(p('sign')) { ?>
		<?php  $signset = p('sign')->getSet();?>
		<?php  if(!empty($signset['isopen']) && !empty($signset['iscreditshop'])) { ?>
			<a href="<?php  echo mobileUrl('sign')?>" class="external nav-item">
				<span class="icon icon-gifts"></span>
				<span class="label"><?php  echo $_W['shopset']['trade']['credittext'];?>签到</span>
			</a>
		<?php  } ?>
	<?php  } ?>
	<a href="http://xt.quinnovare.cn/index/index/zskt" class="external nav-item <?php  if($_W['routes'] == 'creditshop.log') { ?>active<?php  } ?>">
	<!--<a href="#" class="external nav-item <?php  if($_W['routes'] == 'creditshop.log') { ?>active<?php  } ?>">-->
		<span><img width="24" height="24" src="/icon/zs_unclick.png"/> </span></span>
		<span class="label" style="color:black;">注射控糖</span>
	</a>
</div>
<script>
    $(".fui-navbar img").css("margin-top","4px");
    /*
   iphone X及以上机型 bottom适配
    */
    // x xs
    if (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812){
        $(".fui-navbar").css("height","60px");
        $(".fui-navbar .external").css({"vertical-align":"top"});
        //$(".fui-navbar img").css("margin-top","6px");
    }
    //xs max
    if (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896){
        $(".fui-navbar").css("height","60px");
        $(".fui-navbar .external").css({"vertical-align":"top"});
    }
    //xr
    if (/iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896){
        $(".fui-navbar").css("height","60px");
        $(".fui-navbar .external").css({"vertical-align":"top"});
    }
    if (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812){
        $(".mui-bar-tab").css("height","60px");
        $(".mui-bar-tab .mui-tab-item").css({"vertical-align":"top"});
    }
    alert(window.screen.height);
</script>

<?php  $this->followBar()?>
<!--6Z2S5bKb5piT6IGU5LqS5Yqo572R57uc56eR5oqA5pyJ6ZmQ5YWs5Y+454mI5p2D5omA5pyJ-->