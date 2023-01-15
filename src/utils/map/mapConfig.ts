import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import { View } from 'ol';

/**
 * 获取地图数据
 * @param mapType 地图数据源类型（0表示离线瓦片，1表示OSM,2表示高德），默认为OSM
 */
export function getMapLayer(mapType: number = 1): TileLayer<any> {
    let mapLayer: TileLayer<any> = new TileLayer({
        source: new OSM(),
    });
    switch (mapType) {
        case 0:
            //引入离线瓦片
            mapLayer = new TileLayer({
                source: new XYZ({
                    tileUrlFunction: ($xyz) => {
                        return require('/@/assets/map/map-abc/roadmap/' + $xyz[0] + '/' + $xyz[1] + '/' + $xyz[2] + '.png');
                    },
                }),
            });
            break;
        case 1:
            mapLayer = new TileLayer({
                source: new OSM(),
            });
            break;
        case 2:
            mapLayer = new TileLayer({
                source: new XYZ({
                    url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scl=2&style=7&x={x}&y={y}&z={z}',
                }),
            });
            break;
    }
    return mapLayer;
}

/**
 * 获取地图配置
 */
export function getView(): View {
    return new View({
        // 地图视图
        projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3857
        center: [117.273274, 31.869037], // 默认显示的中心坐标
        maxZoom: 19, // 限制缩放级别，可以和extent同用限制范围
        minZoom: 5, // 地图缩放最小级别
        zoom: 11, // 地图缩放级别（打开页面时默认级别）
    });
}
