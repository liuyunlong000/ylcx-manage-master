// 获取字典值的接口
import { Module } from 'vuex';
import { find_map } from '/@/api/sys/sysCommonDict';
import { DataDictState, DataJsonState, RootStateTypes } from '/@/store/interface/index';

const dataDictModule: Module<DataDictState, RootStateTypes> = {
    namespaced: true,
    state: {
        metaData: {},
    },
    getters: {
        metaData: (state, getters) => {
            return state.metaData || {};
        },
        filterMetaData: (state, getters) => {
            return (params: any) => {
                if (typeof params === 'object') {
                    let metaData = getters.metaData[params.key] || [];
                    return metaData.filter((item: any) => params.filter.some((key: string) => key === item.dictName));
                } else {
                    return getters.metaData[params] || [];
                }
            };
        },
        /**
         * 获取对应的字典集合
         * @param state
         * @param getters
         * @returns {function(*=): {}}
         */
        metaDataMap: (state, getters) => {
            return (key: any) => {
                let sourceMap: DataJsonState = {};
                if (getters.filterMetaData(key)) {
                    getters.filterMetaData(key).forEach((item: any) => {
                        sourceMap[item.dictValue] = item.dictName;
                    });
                }
                return sourceMap;
            };
        },
    },
    mutations: {
        /**
         * 将后台返回的数据字典放在store中
         * @param state
         * @param items
         * @constructor
         */
        ADD_META_DATA_ITEMS: (state, items) => {
            Object.keys(items).forEach((key) => {
                let value = items[key].map((item: any) => {
                    let { dictValue, dictName, listClass, cssClass } = item;
                    dictValue = dictValue === null ? '' : dictValue;
                    listClass = listClass === null ? '' : listClass;
                    cssClass = cssClass === null ? '' : cssClass;
                    return { dictValue, dictName, listClass, cssClass };
                });
                state.metaData[key] = value;
            });
        },
    },
    actions: {
        /**
         * 从后台初始化数据字典
         * @param commit
         * @param state
         * @param items
         */
        registerMetaDataItems({ commit, state }, items: Array<string>) {
            let types = items.filter((item) => {
                return item != state.metaData[item];
            });
            if (types && types.length) {
                find_map({ dictCodes: types.join(',') }).then((response) => {
                    commit('ADD_META_DATA_ITEMS', response.data);
                });
            }
        },
    },
};

export default dataDictModule;
