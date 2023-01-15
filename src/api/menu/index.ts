import request from '/@/utils/request';

/**
 * 获取路由列表
 * @param params
 */
export function routerList() {
	return request({
		url: '/sysMenu/routerList',
		method: 'post',
	});
}
