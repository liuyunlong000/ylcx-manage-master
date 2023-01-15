/**
 * 用于查询时添加日期范围到参数
 * @param queryForm 查询参数集对象
 * @param dateRange 选择的日期数据
 * @param propName 需要查询的日期属性
 * @returns {*}
 */
export function addDateRange(queryForm: any, dateRange: any, propName: any) {
    if (!Array.isArray(dateRange)) {
        return queryForm;
    }
    if (typeof propName !== 'undefined') {
        queryForm.map = typeof queryForm.map === 'object' && queryForm.map !== null && !Array.isArray(queryForm.map) ? queryForm.map : {};
        queryForm.map[propName + 'Start'] = convertDateToLong(parseTime(dateRange[0], '{y}-{m}-{d} {h}:{i}:{s}'));
        queryForm.map[propName + 'End'] = convertDateToLong(parseTime(dateRange[1], '{y}-{m}-{d} {h}:{i}:{s}'));
    }
    return queryForm;
}

/**
 * 用于查询时重置日期范围参数
 * @param queryForm 查询参数集对象
 * @param propName 需要清除的日期属性
 * @returns {*}
 */
export function removeDateRange(queryForm: any, propName: any) {
    if (typeof propName !== 'undefined') {
        queryForm.map = typeof queryForm.map === 'object' && queryForm.map !== null && !Array.isArray(queryForm.map) ? queryForm.map : {};
        queryForm[propName + 'Search'] = null;
        delete queryForm.map[propName + 'Start'];
        delete queryForm.map[propName + 'End'];
    }
    return queryForm;
}

/**
 * 添加属性到参数集的map属性集里面
 * @param queryForm 查询参数集对象
 * @param propName 需要添加的属性
 * @param propValue 属性值
 * @returns {*}
 */
export function addPropToMap(queryForm: any, propName: any, propValue: any) {
    if (typeof propName !== 'undefined') {
        queryForm.map = typeof queryForm.map === 'object' && queryForm.map !== null && !Array.isArray(queryForm.map) ? queryForm.map : {};
        queryForm.map[propName] = propValue;
    }
    return queryForm;
}

/**
 * 用于从参数集的map对象中移除指定的属性
 * @param queryForm 参数集对象
 * @param propName 需要清除的属性
 * @returns {*}
 */
export function removePropFromMap(queryForm: any, propName: any) {
    if (typeof propName !== 'undefined') {
        queryForm.map = typeof queryForm.map === 'object' && queryForm.map !== null && !Array.isArray(queryForm.map) ? queryForm.map : {};
        delete queryForm.map[propName];
    }
    return queryForm;
}

/**
 * 格式化日期
 * @param timeValue 需要格式化的日期
 * @param pattern 格式
 * @returns {string|null}
 */
export function parseTime(timeValue: any, pattern: any) {
    if (arguments.length === 0 || !timeValue) {
        return null;
    }
    const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof timeValue === 'object') {
        date = timeValue;
    } else {
        if (typeof timeValue === 'string' && /^[0-9]+$/.test(timeValue)) {
            timeValue = parseInt(timeValue);
        } else if (typeof timeValue === 'string') {
            timeValue = timeValue
                .replace(new RegExp(/-/gm), '/')
                .replace('T', ' ')
                .replace(new RegExp(/\.[\d]{3}/gm), '');
        }
        if (typeof timeValue === 'number' && timeValue.toString().length === 10) {
            timeValue = timeValue * 1000;
        }
        date = new Date(timeValue);
    }
    const formatObj: FormatObjState = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: any, key: string) => {
        let value: number = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        let value2: string = '';
        if (result.length > 0 && value < 10) {
            value2 = '0' + value;
        } else {
            value2 = value.toString();
        }
        return value2 || 0;
    });
    return time_str;
}

//JSON对象
export interface FormatObjState {
    [key: string]: number;
}

/**
 * 将时间转换成long型
 * @param time 时间
 * @returns {number}
 */
export function convertDateToLong(time: any) {
    let currentDateLong = new Date(time.replace(new RegExp('-', 'gm'), '/')).getTime();
    return currentDateLong;
}

/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params: any) {
    let result = '';
    for (const propName of Object.keys(params)) {
        const value = params[propName];
        let part = encodeURIComponent(propName) + '=';
        if (value !== null && typeof value !== 'undefined') {
            if (typeof value === 'object') {
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && typeof value[key] !== 'undefined') {
                        let params = propName + '[' + key + ']';
                        let subPart = encodeURIComponent(params) + '=';
                        result += subPart + encodeURIComponent(value[key]) + '&';
                    }
                }
            } else {
                result += part + encodeURIComponent(value) + '&';
            }
        }
    }
    return result;
}

/**
 * 改变节点及其所有子节点的展开状态
 * @param node 节点
 * @param expand 状态：true or false
 */
export function expandTreeNode(node: any, expand: any) {
    node.expanded = expand;
    for (let i = 0; i < node.childNodes.length; i++) {
        // 改变节点的自身expanded状态
        node.childNodes[i].expanded = expand;
        // 遍历子节点
        if (node.childNodes[i].childNodes.length > 0) {
            expandTreeNode(node.childNodes[i], expand);
        }
    }
}

const minuteSize = 60 * 60;
const hourSize = 60 * 60 * 24;

/**
 * 格式化时间显示
 * @param value
 */
export function convertTime(value: number) {
    value = Math.round(value); //四舍五入
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;
    if (value < 60) {
        return value + '秒';
    }
    second = value % 60; //得到秒数
    //小于1小时
    if (value < minuteSize) {
        minute = (value - second) / 60;
        return minute + '分' + second + '秒';
    }
    minute = ((value - second) % minuteSize) / 60; //得到分钟数
    //小于1天
    if (value < hourSize) {
        hour = (value - second - minute * 60) / minuteSize;
        return hour + '小时' + minute + '分' + second + '秒';
    }
    let v1 = value - second - minute * 60;
    hour = (v1 / minuteSize) % 24; // 得到小时数
    let v2 = value - second - minute * 60 - hour * minuteSize;
    day = v2 / hourSize;
    return day + '天' + hour + '小时' + minute + '分' + second + '秒';
}
