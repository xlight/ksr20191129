<?php
global $_GPC, $_W;
$action = 'start';
//$GLOBALS['frames'] = $this->getMainMenu2();
$storeid=$_COOKIE["storeid"];
$cur_store = $this->getStoreById($storeid);
$GLOBALS['frames'] = $this->getNaveMenu($storeid, $action);
$item = pdo_get('wpdc_dyj',array('id'=>$_GPC['id']));
		if(checksubmit('submit')){
		
				$data['name']=$_GPC['name'];
				$data['dyj_title']=$_GPC['dyj_title'];
				$data['dyj_id']=$_GPC['dyj_id'];
				$data['dyj_key']=$_GPC['dyj_key'];
				$data['type']=$_GPC['type'];
				$data['mid']=$_GPC['mid'];
				$data['token']=$_GPC['token2'];
				$data['api']=$_GPC['api'];
				$data['uniacid']=$_W['uniacid'];
				$data['location']=$_GPC['location'];
				$data['state']=$_GPC['state'];
				$data['yy_id']=$_GPC['yy_id'];
				$data['num']=$_GPC['num'];
				$data['store_id']=$storeid;
				$data['fezh']=$_GPC['fezh'];
				$data['fe_ukey']=$_GPC['fe_ukey'];
				$data['fe_dycode']=$_GPC['fe_dycode'];
				
			if($_GPC['id']==''){
				$res=pdo_insert('wpdc_dyj',$data);
				if($res){
					message('添加成功',$this->createWebUrl2('dlprint',array()),'success');
				}else{
					message('添加失败','','error');
				}
			}else{
				$res = pdo_update('wpdc_dyj', $data, array('id' => $_GPC['id']));
				if($res){
					message('编辑成功',$this->createWebUrl2('dlprint',array()),'success');
				}else{
					message('编辑失败','','error');
				}
			}
		}
include $this->template('web/dladdprint');