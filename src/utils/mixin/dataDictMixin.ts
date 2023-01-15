import { useStore } from '/@/store';
import { parseTime as commonParseTime } from '/@/utils/common/tools';

/**
 * 设定自定义属性metaDataDict: 用于声明定义组件内使用到的字典表
 *
 * 在metaDataDict中声明的字典表可以直接通过metaData和metaDataMap使用
 *
 */
const dataDictMixin = {
    created() {
        // @ts-ignore
        let metaDataDict = this.$options.metaDataDict || null;
        if (metaDataDict) {
            metaDataDict = Object.prototype.toString.call(metaDataDict) === '[object Array]' ? metaDataDict : [metaDataDict];
            metaDataDict = metaDataDict.map((item: any) => item.trim());
            localStorage.setItem('metaDataDict', JSON.stringify(metaDataDict));
            try {
                const store = useStore();
                store.dispatch('dataDict/registerMetaDataItems', metaDataDict).then(() => {});
            } catch (e) {
                console.log(e);
            }
        }
    },
    computed: {
        metaData() {
            const store = useStore();
            return store.getters['dataDict/metaData'];
        },
    },
    methods: {
        metaDataMap(key: any) {
            const store = useStore();
            if (Array.isArray(key)) {
                let all = key.reduce((result, item) => {
                    result = Object.assign(result, store.getters['dataDict/metaDataMap'](item) || {});
                    return result;
                }, {});
                return all;
            }
            return store.getters['dataDict/metaDataMap'](key);
        },
        metaDataFilter(params: any) {
            const store = useStore();
            return store.getters['dataDict/filterMetaData'](params);
        },
        parseTime(time: number, pattern: string) {
            return commonParseTime(time, pattern);
        },
    },
};
export { dataDictMixin };
