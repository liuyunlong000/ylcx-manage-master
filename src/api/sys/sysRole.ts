import request from '/@/utils/request';

/**
 * 添加角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function save_id(data: any) {
    return request({
        url: '/sysRole/save',
        method: 'post',
        data,
    });
}

/**
 * 编辑角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function update_id(data: any) {
    return request({
        url: '/sysRole/update',
        method: 'put',
        data,
    });
}

/**
 * 按id删除角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function delete_id(data: any) {
    return request({
        url: '/sysRole/delete',
        method: 'delete',
        params: data,
    });
}

/**
 * 按id集合批量删除角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function batDelete(data: any) {
    return request({
        url: '/sysRole/bat_delete',
        method: 'delete',
        data,
    });
}

/**
 * 按id查询角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function find_id(data: any) {
    return request({
        url: '/sysRole/find_id',
        method: 'get',
        params: data,
    });
}

/**
 * 获取角色信息列表
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list(data: any) {
    return request({
        url: '/sysRole/find_list',
        method: 'post',
        data,
    });
}

/**
 * 获取角色信息列表（分页）
 * @param data
 * @returns {AxiosPromise}
 */
export function find_list_by_page(data: any) {
    return request({
        url: '/sysRole/find_list_by_page',
        method: 'post',
        data,
    });
}

/**
 * 按id启用或禁用角色信息
 * @param data
 * @returns {AxiosPromise}
 */
export function disable_id(data: any) {
    return request({
        url: '/sysRole/disable',
        method: 'get',
        params: data,
    });
}

/**
 * 获取菜单列表
 * @param data
 * @returns {AxiosPromise}
 */
export function role_menu_tree_select(data: any) {
    return request({
        url: '/sysRole/role_menu_tree_select',
        method: 'post',
        params: data,
    });
}

/**
 * 修改菜单授权
 * @param data
 * @returns {AxiosPromise}
 */
export function update_menu_grant(data: any) {
    return request({
        url: '/sysRole/update_menu_grant',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    });
}

/**
 * 添加用户授权
 * @param data
 * @returns {AxiosPromise}
 */
export function add_user_grant(data: any) {
    return request({
        url: '/sysRole/add_user_grant',
        method: 'post',
        params: data,
    });
}

/**
 * 删除用户授权
 * @param data
 * @returns {AxiosPromise}
 */
export function remove_user_grant(data: any) {
    return request({
        url: '/sysRole/remove_user_grant',
        method: 'post',
        params: data,
    });
}

/**
 * 获取角色已授权用户列表
 * @param data
 * @returns {AxiosPromise}
 */
export function user_list(data: any) {
    return request({
        url: '/sysRole/user_list',
        method: 'post',
        data,
    });
}
