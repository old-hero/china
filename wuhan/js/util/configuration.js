"use strict"
var __constent__ = {
    type : {
        "1" : "飞机",
        "2" : "火车",
        "3" : "地铁",
        "4" : "长途客车/大巴",
        "5" : "公交车",
        "6" : "出租车",
        "7" : "轮船",
        "8" : "其他公共场所",
    },
    data_url : "http://2019ncov.nosugartech.com/data.json",
    num_data_url : "https://www.tianqiapi.com/api?version=epidemic&appid=23035354&appsecret=8YvlPNrz",
    ak : "cl1Pbdh82UOAXOQitULyfgZFBERX3PQ4",
    planePath : "arrow", // 箭头的svg
    color : ['#fff', '#FFFFA8', '#46bee9'], //圆圈和字的颜色，线的颜色，箭头颜色
    mapBoxOption : function(series){    //地图配置  指定相关的配置项和数据
        return {
            backgroundColor: '#404a59',
            title: {
                text: "全国确诊病例迁徙图",
                left: 'center',
                textStyle : {
                    fontSize : 25,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.value) {
                        return params.name + ' : ' + params.value[2];
                    } else {
                        return params.name;
                    }
                }
            },
            geo: {
                map: 'china',
                roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                aspectScale: 1,
                zoom: 1.2,
                label: {
                    normal: {
                        // textStyle: {
                        //     color: '#00a0c9'
                        // },
                        show: false
                    },
                    emphasis: { // 对应的鼠标悬浮效果
                        // textStyle: {
                        //     color: "#00a0c9"
                        // },
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: "#323c48",
                        borderColor: "#000000",
                        borderWidth: 1
                    },
                    emphasis: {
                        borderWidth: 1.5,
                        borderColor : "#2a333d",
                        areaColor: "#2a333d",
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: series
        }
    },
    // //省
    // province : [{'id': 1, 'text': '上海'}, {'id': 2, 'text': '云南省'}, {'id': 3, 'text': '内蒙古自治区'}, {'id': 4, 'text': '北京'}, {'id': 5, 'text': '台湾省'}, {'id': 6, 'text': '吉林省'}, {'id': 7, 'text': '四川省'}, {'id': 8, 'text': '天津'}, {'id': 9, 'text': '宁夏回族自治区'}, {'id': 10, 'text': '安徽省'}, {'id': 11, 'text': '山东省'}, {'id': 12, 'text': '山西省'}, {'id': 13, 'text': '广东省'}, {'id': 14, 'text': '广西壮族自治区'}, {'id': 15, 'text': '新疆维吾尔自治区'}, {'id': 16, 'text': '江苏省'}, {'id': 17, 'text': '江西省'}, {'id': 18, 'text': '河北省'}, {'id': 19, 'text': '河南省'}, {'id': 20, 'text': '浙江省'}, {'id': 21, 'text': '海南省'}, {'id': 22, 'text': '湖北省'}, {'id': 23, 'text': '湖南省'}, {'id': 24, 'text': '澳门特别行政区'}, {'id': 25, 'text': '甘肃省'}, {'id': 26, 'text': '福建省'}, {'id': 27, 'text': '西藏自治区'}, {'id': 28, 'text': '贵州省'}, {'id': 29, 'text': '辽宁省'}, {'id': 30, 'text': '重庆'}, {'id': 31, 'text': '陕西省'}, {'id': 32, 'text': '青海省'}, {'id': 33, 'text': '香港特别行政区'}, {'id': 34, 'text': '黑龙江省'}],
    // //市区
    // city : {'上海': ['上海'], '云南省': ['临沧', '丽江', '保山', '大理白族自治州', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '文山壮族苗族自治州', '昆明', '昭通', '普洱', '曲靖', '楚雄彝族自治州', '玉溪', '红河哈尼族彝族自治州', '西双版纳傣族自治州', '迪庆藏族自治州'], '内蒙古自治区': ['乌兰察布', '乌海', '兴安盟', '包头', '呼伦贝尔', '呼和浩特', '巴彦淖尔', '赤峰', '通辽', '鄂尔多斯', '锡林郭勒盟', '阿拉善盟'], '北京': ['北京'], '台湾省': ['台中', '台北', '台南', '嘉义', '高雄'], '吉林省': ['吉林', '四平', '延边朝鲜族自治州', '松原', '白城', '白山', '辽源', '通化', '长春'], '四川省': ['乐山', '内江', '凉山彝族自治州', '南充', '宜宾', '巴中', '广元', '广安', '德阳', '成都', '攀枝花', '泸州', '甘孜藏族自治州', '眉山', '绵阳', '自贡', '资阳', '达州', '遂宁', '阿坝藏族羌族自治州', '雅安'], '天津': ['天津'], '宁夏回族自治区': ['中卫', '吴忠', '固原', '石嘴山', '银川'], '安徽省': ['亳州', '六安', '合肥', '安庆', '宣城', '宿州', '池州', '淮北', '淮南', '滁州', '芜湖', '蚌埠', '铜陵', '阜阳', '马鞍山', '黄山'], '山东省': ['东营', '临沂', '威海', '德州', '日照', '枣庄', '泰安', '济南', '济宁', '淄博', '滨州', '潍坊', '烟台', '聊城', '莱芜', '菏泽', '青岛'], '山西省': ['临汾', '吕梁', '大同', '太原', '忻州', '晋中', '晋城', '朔州', '运城', '长治', '阳泉'], '广东省': ['东莞', '中山', '云浮', '佛山', '广州', '惠州', '揭阳', '梅州', '汕头', '汕尾', '江门', '河源', '深圳', '清远', '湛江', '潮州', '珠海', '肇庆', '茂名', '阳江', '韶关'], '广西壮族自治区': ['北海', '南宁', '崇左', '来宾', '柳州', '桂林', '梧州', '河池', '玉林', '百色', '贵港', '贺州', '钦州', '防城港'], '新疆维吾尔自治区': ['乌鲁木齐', '伊犁哈萨克自治州', '克孜勒苏柯尔克孜自治州', '克拉玛依', '博尔塔拉蒙古自治州', '吐鲁番地区', '和田地区', '哈密地区', '喀什地区', '塔城地区', '昌吉回族自治州', '自治区直辖', '阿克苏地区', '阿勒泰地区'], '江苏省': ['南京', '南通', '宿迁', '常州', '徐州', '扬州', '无锡', '泰州', '淮安', '盐城', '苏州', '连云港', '镇江'], '江西省': ['上饶', '九江', '南昌', '吉安', '宜春', '抚州', '新余', '景德镇', '萍乡', '赣州', '鹰潭'], '河北省': ['保定', '唐山', '廊坊', '张家口', '承德', '沧州', '石家庄', '秦皇岛', '衡水', '邢台', '邯郸'], '河南省': ['三门峡', '信阳', '南阳', '周口', '商丘', '安阳', '平顶山', '开封', '新乡', '洛阳', '漯河', '濮阳', '焦作', '省直辖', '许昌', '郑州', '驻马店', '鹤壁'], '浙江省': ['丽水', '台州', '嘉兴', '宁波', '杭州', '温州', '湖州', '绍兴', '舟山', '衢州', '金华'], '海南省': ['三亚', '三沙', '海口', '省直辖'], '湖北省': ['十堰', '咸宁', '孝感', '宜昌', '恩施土家族苗族自治州', '武汉', '省直辖', '荆州', '荆门', '襄阳', '鄂州', '随州', '黄冈', '黄石'], '湖南省': ['娄底', '岳阳', '常德', '张家界', '怀化', '株洲', '永州', '湘潭', '湘西土家族苗族自治州', '益阳', '衡阳', '邵阳', '郴州', '长沙'], '澳门特别行政区': ['无堂区划分区域', '澳门半岛', '澳门离岛'], '甘肃省': ['临夏回族自治州', '兰州', '嘉峪关', '天水', '定西', '平凉', '庆阳', '张掖', '武威', '甘南藏族自治州', '白银', '酒泉', '金昌', '陇南'], '福建省': ['三明', '南平', '厦门', '宁德', '泉州', '漳州', '福州', '莆田', '龙岩'], '西藏自治区': ['山南地区', '拉萨', '日喀则地区', '昌都地区', '林芝地区', '那曲地区', '阿里地区'], '贵州省': ['六盘水', '安顺', '毕节', '贵阳', '遵义', '铜仁', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州'], '辽宁省': ['丹东', '大连', '抚顺', '朝阳', '本溪', '沈阳', '盘锦', '营口', '葫芦岛', '辽阳', '铁岭', '锦州', '阜新', '鞍山'], '重庆': ['重庆'], '陕西省': ['咸阳', '商洛', '安康', '宝鸡', '延安', '榆林', '汉中', '渭南', '西安', '铜川'], '青海省': ['果洛藏族自治州', '海东地区', '海北藏族自治州', '海南藏族自治州', '海西蒙古族藏族自治州', '玉树藏族自治州', '西宁', '黄南藏族自治州'], '香港特别行政区': ['九龙', '新界', '香港岛'], '黑龙江省': ['七台河', '伊春', '佳木斯', '双鸭山', '哈尔滨', '大兴安岭地区', '大庆', '牡丹江', '绥化', '鸡西', '鹤岗', '黑河', '齐齐哈尔']},
    //可以在地图上显示的城市的坐标信息
    geoCoordMap : {}
    // geoCoordMap : {'上海市': [121.487899486, 31.24916171], '临沧市': [100.092612914, 23.8878061038], '丽江市': [100.229628399, 26.8753510895], '保山市': [99.1779956133, 25.1204891962], '大理白族自治州': [100.223674789, 25.5968996394], '德宏傣族景颇族自治州': [98.5894342874, 24.441239663], '怒江傈僳族自治州': [98.8599320425, 25.8606769782], '文山壮族苗族自治州': [104.246294318, 23.3740868504], '昆明市': [102.714601139, 25.0491531005], '昭通市': [103.725020656, 27.3406329636], '普洱市': [100.98005773, 22.7887777801], '曲靖市': [103.782538888, 25.5207581429], '楚雄彝族自治州': [101.529382239, 25.0663556742], '玉溪市': [102.545067892, 24.3704471344], '红河哈尼族彝族自治州': [103.384064757, 23.3677175165], '西双版纳傣族自治州': [100.803038275, 22.0094330022], '迪庆藏族自治州': [99.7136815989, 27.8310294612], '乌兰察布市': [113.112846391, 41.0223629468], '乌海市': [106.831999097, 39.6831770068], '兴安盟': [122.048166514, 46.0837570652], '包头市': [109.846238532, 40.6471194257], '呼伦贝尔市': [119.760821794, 49.2016360546], '呼和浩特市': [111.66035052, 40.8283188731], '巴彦淖尔市': [107.42380672, 40.7691799024], '赤峰市': [118.930761192, 42.2971123203], '通辽市': [122.260363263, 43.633756073], '鄂尔多斯市': [109.993706251, 39.8164895606], '锡林郭勒盟': [116.027339689, 43.9397048423], '阿拉善盟': [105.695682871, 38.8430752644], '北京市': [116.395645038, 39.9299857781], '台中市': [119.337634104, 26.0911937119], '台北市': [114.130474436, 22.3748329286], '台南市': [121.360525873, 38.9658447898], '嘉义市': [114.246701335, 22.7288657203], '高雄市': [111.590952812, 21.9464822541], '吉林市': [126.564543989, 43.8719883344], '四平市': [124.391382074, 43.1755247011], '延边朝鲜族自治州': [129.485901958, 42.8964136037], '松原市': [124.832994532, 45.1360489701], '白城市': [122.840776679, 45.6210862752], '白山市': [126.435797675, 41.945859397], '辽源市': [125.133686052, 42.9233026191], '通化市': [125.942650139, 41.7363971299], '长春市': [125.313642427, 43.8983376071], '乐山市': [103.760824239, 29.6009576111], '内江市': [105.073055992, 29.5994615348], '凉山彝族自治州': [102.259590803, 27.8923929037], '南充市': [106.105553984, 30.8009651682], '宜宾市': [104.633019062, 28.7696747963], '巴中市': [106.757915842, 31.8691891592], '广元市': [105.81968694, 32.4410401584], '广安市': [106.635720331, 30.4639838879], '德阳市': [104.402397818, 31.1311396527], '成都市': [104.067923463, 30.6799428454], '攀枝花市': [101.722423152, 26.5875712571], '泸州市': [105.443970289, 28.8959298039], '甘孜藏族自治州': [101.969232063, 30.0551441144], '眉山市': [103.841429563, 30.0611150799], '绵阳市': [104.705518975, 31.5047012581], '自贡市': [104.776071339, 29.3591568895], '资阳市': [104.635930302, 30.132191434], '达州市': [107.494973447, 31.2141988589], '遂宁市': [105.564887792, 30.5574913504], '阿坝藏族羌族自治州': [102.228564689, 31.9057628583], '雅安市': [103.009356466, 29.9997163371], '天津市': [117.210813092, 39.1439299033], '中卫市': [105.196754199, 37.5211241916], '吴忠市': [106.208254199, 37.9935610029], '固原市': [106.285267996, 36.0215234807], '石嘴山市': [106.379337202, 39.0202232836], '银川市': [106.206478608, 38.5026210119], '亳州市': [115.787928245, 33.8712105653], '六安市': [116.505252683, 31.7555583552], '合肥市': [117.282699092, 31.8669422607], '安庆市': [117.058738772, 30.5378978174], '宣城市': [118.752096311, 30.9516423543], '宿州市': [116.988692412, 33.6367723858], '池州市': [117.494476772, 30.6600192482], '淮北市': [116.791447429, 33.9600233054], '淮南市': [117.018638863, 32.6428118237], '滁州市': [118.324570351, 32.3173505954], '芜湖市': [118.384108423, 31.3660197875], '蚌埠市': [117.357079866, 32.9294989067], '铜陵市': [117.819428729, 30.9409296947], '阜阳市': [115.820932259, 32.9012113306], '马鞍山市': [118.515881847, 31.6885281589], '黄山市': [118.293569632, 29.7344348562], '东营市': [118.583926333, 37.4871211553], '临沂市': [118.340768237, 35.0724090744], '威海市': [122.093958366, 37.5287870813], '德州市': [116.328161364, 37.4608259263], '日照市': [119.507179943, 35.4202251931], '枣庄市': [117.279305383, 34.8078830784], '泰安市': [117.089414917, 36.1880777589], '济南市': [117.024967066, 36.6827847272], '济宁市': [116.600797625, 35.4021216643], '淄博市': [118.059134278, 36.8046848542], '滨州市': [117.968292415, 37.4053139418], '潍坊市': [119.142633823, 36.7161148731], '烟台市': [121.30955503, 37.5365615629], '聊城市': [115.986869139, 36.4558285147], '莱芜市': [117.684666912, 36.2336541336], '菏泽市': [115.463359775, 35.2624404961], '青岛市': [120.384428184, 36.1052149013], '临汾市': [111.538787596, 36.0997454436], '吕梁市': [111.143156602, 37.527316097], '大同市': [113.290508673, 40.1137444997], '太原市': [112.550863589, 37.890277054], '忻州市': [112.727938829, 38.461030573], '晋中市': [112.7385144, 37.6933615268], '晋城市': [112.867332758, 35.4998344672], '朔州市': [112.479927727, 39.3376719662], '运城市': [111.006853653, 35.0388594798], '长治市': [113.120292086, 36.2016643857], '阳泉市': [113.569237602, 37.8695294932], '东莞市': [113.763433991, 23.0430238154], '中山市': [113.422060021, 22.5451775145], '云浮市': [112.050945959, 22.9379756855], '佛山市': [113.134025635, 23.0350948405], '广州市': [113.307649675, 23.1200491021], '惠州市': [114.41065808, 23.1135398524], '揭阳市': [116.379500855, 23.5479994669], '梅州市': [116.126403098, 24.304570606], '汕头市': [116.728650288, 23.3839084533], '汕尾市': [115.372924289, 22.7787305002], '江门市': [113.078125341, 22.5751167835], '河源市': [114.713721476, 23.7572508505], '深圳市': [114.025973657, 22.5460535462], '清远市': [113.040773349, 23.6984685504], '湛江市': [110.365067263, 21.2574631038], '潮州市': [116.630075991, 23.6618116765], '珠海市': [113.562447026, 22.2569146461], '肇庆市': [112.47965337, 23.0786632829], '茂名市': [110.931245331, 21.6682257188], '阳江市': [111.977009756, 21.8715173045], '韶关市': [113.594461107, 24.8029603119], '北海市': [109.122627919, 21.472718235], '南宁市': [108.297233556, 22.8064929356], '崇左市': [107.357322038, 22.4154552965], '来宾市': [109.231816505, 23.7411659265], '柳州市': [109.42240181, 24.3290533525], '桂林市': [110.260920147, 25.262901246], '梧州市': [111.30547195, 23.4853946367], '河池市': [108.069947709, 24.6995207829], '玉林市': [110.151676316, 22.6439736084], '百色市': [106.631821404, 23.9015123679], '贵港市': [109.613707557, 23.1033731644], '贺州市': [111.552594179, 24.4110535471], '钦州市': [108.638798056, 21.9733504653], '防城港市': [108.351791153, 21.6173984705], '乌鲁木齐市': [87.5649877411, 43.8403803472], '伊犁哈萨克自治州': [81.2978535304, 43.9222480963], '克孜勒苏柯尔克孜自治州': [76.1375644775, 39.7503455778], '克拉玛依市': [84.8811801861, 45.5943310667], '博尔塔拉蒙古自治州': [82.0524362672, 44.9136513743], '吐鲁番地区': [89.1815948657, 42.9604700169], '和田地区': [79.9302386372, 37.1167744927], '哈密地区': [93.5283550928, 42.8585963324], '喀什地区': [75.9929732675, 39.4706271887], '塔城地区': [82.9748805837, 46.7586836297], '昌吉回族自治州': [87.2960381257, 44.0070578985], '自治区直辖': [85.6148993383, 42.1270009576], '阿克苏地区': [80.2698461793, 41.1717309015], '阿勒泰地区': [88.1379154871, 47.8397444862], '南京市': [118.778074408, 32.0572355018], '南通市': [120.873800951, 32.0146645408], '宿迁市': [118.296893379, 33.9520497337], '常州市': [119.981861013, 31.7713967447], '徐州市': [117.188106623, 34.2715534311], '扬州市': [119.427777551, 32.4085052546], '无锡市': [120.305455901, 31.5700374519], '泰州市': [119.919606016, 32.4760532748], '淮安市': [119.030186365, 33.6065127393], '盐城市': [120.148871818, 33.3798618771], '苏州市': [120.619907115, 31.317987368], '连云港市': [119.173872217, 34.601548967], '镇江市': [119.455835405, 32.2044094436], '上饶市': [117.955463877, 28.4576225539], '九江市': [115.999848022, 29.7196395261], '南昌市': [115.893527546, 28.6895780001], '吉安市': [114.992038711, 27.1138476502], '宜春市': [114.400038672, 27.8111298958], '抚州市': [116.360918867, 27.9545451703], '新余市': [114.947117417, 27.8223215586], '景德镇市': [117.186522625, 29.3035627684], '萍乡市': [113.859917033, 27.639544223], '赣州市': [114.935909079, 25.8452955363], '鹰潭市': [117.035450186, 28.2413095972], '保定市': [115.494810169, 38.886564548], '唐山市': [118.183450598, 39.6505309225], '廊坊市': [116.703602223, 39.5186106251], '张家口市': [114.89378153, 40.8111884911], '承德市': [117.933822456, 40.9925210525], '沧州市': [116.863806476, 38.2976153503], '石家庄市': [114.522081844, 38.0489583146], '秦皇岛市': [119.604367616, 39.9454615659], '衡水市': [115.686228653, 37.7469290459], '邢台市': [114.520486813, 37.0695311969], '邯郸市': [114.482693932, 36.6093079285], '三门峡市': [111.181262093, 34.7833199411], '信阳市': [114.085490993, 32.1285823075], '南阳市': [112.542841901, 33.0114195691], '周口市': [114.654101942, 33.6237408181], '商丘市': [115.641885688, 34.4385886402], '安阳市': [114.351806508, 36.1102667222], '平顶山市': [113.300848978, 33.7453014565], '开封市': [114.351642118, 34.8018541758], '新乡市': [113.912690161, 35.3072575577], '洛阳市': [112.447524769, 34.6573678177], '漯河市': [114.0460614, 33.5762786885], '濮阳市': [115.026627441, 35.7532978882], '焦作市': [113.211835885, 35.234607555], '省直辖': [113.486804058, 34.157183768], '许昌市': [113.83531246, 34.0267395887], '郑州市': [113.64964385, 34.7566100641], '驻马店市': [114.049153547, 32.9831581541], '鹤壁市': [114.297769838, 35.7554258742], '丽水市': [119.929575843, 28.4562995521], '台州市': [121.440612936, 28.6682832857], '嘉兴市': [120.760427699, 30.7739922396], '宁波市': [121.579005973, 29.8852589659], '杭州市': [120.219375416, 30.2592444615], '温州市': [120.690634734, 28.002837594], '湖州市': [120.137243163, 30.8779251557], '绍兴市': [120.592467386, 30.0023645805], '舟山市': [122.169872098, 30.0360103026], '衢州市': [118.875841652, 28.9569104475], '金华市': [119.652575704, 29.1028991054], '三亚市': [109.522771281, 18.2577759149], '三沙市': [112.350383075, 16.840062894], '海口市': [110.330801848, 20.022071277], '十堰市': [110.801228917, 32.6369943395], '咸宁市': [114.300060592, 29.8806567577], '孝感市': [113.935734392, 30.9279547842], '宜昌市': [111.310981092, 30.732757818], '恩施土家族苗族自治州': [109.491923304, 30.2858883166], '武汉市': [114.316200103, 30.5810841269], '荆州市': [112.241865807, 30.332590523], '荆门市': [112.217330299, 31.0426112029], '襄阳市': [112.250092848, 32.2291685915], '鄂州市': [114.895594041, 30.3844393228], '随州市': [113.379358364, 31.7178576082], '黄冈市': [114.906618047, 30.4461089379], '黄石市': [115.050683164, 30.2161271277], '娄底市': [111.996396357, 27.7410733023], '岳阳市': [113.146195519, 29.3780070755], '常德市': [111.653718137, 29.0121488552], '张家界市': [110.481620157, 29.1248893532], '怀化市': [109.986958796, 27.5574829012], '株洲市': [113.131695341, 27.8274329277], '永州市': [111.614647686, 26.4359716468], '湘潭市': [112.935555633, 27.835095053], '湘西土家族苗族自治州': [109.7457458, 28.3179507937], '益阳市': [112.366546645, 28.5880877799], '衡阳市': [112.583818811, 26.8981644154], '邵阳市': [111.461525404, 27.2368112449], '郴州市': [113.037704468, 25.7822639757], '长沙市': [112.979352788, 28.2134782309], '无堂区划分区域': [113.557519102, 22.2041179884], '澳门半岛': [113.566432335, 22.1950041592], '澳门离岛': [113.557519102, 22.2041179884], '临夏回族自治州': [103.215249178, 35.5985143488], '兰州市': [103.823305441, 36.064225525], '嘉峪关市': [98.2816345853, 39.8023973267], '天水市': [105.736931623, 34.5843194189], '定西市': [104.626637601, 35.5860562418], '平凉市': [106.688911157, 35.55011019], '庆阳市': [107.644227087, 35.7268007545], '张掖市': [100.459891869, 38.939320297], '武威市': [102.640147343, 37.9331721429], '甘南藏族自治州': [102.917442486, 34.9922111784], '白银市': [104.171240904, 36.5466817062], '酒泉市': [98.5084145062, 39.7414737682], '金昌市': [102.208126263, 38.5160717995], '陇南市': [104.934573406, 33.3944799729], '三明市': [117.642193934, 26.2708352794], '南平市': [118.181882949, 26.6436264742], '厦门市': [118.103886046, 24.4892306125], '宁德市': [119.54208215, 26.6565274192], '泉州市': [118.600362343, 24.901652384], '漳州市': [117.676204679, 24.5170647798], '福州市': [119.330221107, 26.0471254966], '莆田市': [119.077730964, 25.4484501367], '龙岩市': [117.017996739, 25.0786854335], '山南地区': [91.7506438744, 29.2290269317], '拉萨市': [91.111890896, 29.6625570621], '日喀则地区': [88.8914855677, 29.2690232039], '昌都地区': [97.18558158, 31.1405756319], '林芝地区': [94.3499854582, 29.6669406258], '那曲地区': [92.0670183689, 31.4806798301], '阿里地区': [81.1076686895, 30.4045565883], '六盘水市': [104.85208676, 26.5918660603], '安顺市': [105.928269966, 26.2285945777], '毕节市': [105.333323371, 27.4085621313], '贵阳市': [106.709177096, 26.6299067414], '遵义市': [106.931260316, 27.6999613771], '铜仁市': [109.168558028, 27.6749026906], '黔东南苗族侗族自治州': [107.985352573, 26.5839917665], '黔南布依族苗族自治州': [107.52320511, 26.2645359974], '黔西南布依族苗族自治州': [104.900557798, 25.0951480559], '丹东市': [124.338543115, 40.1290228266], '大连市': [121.593477781, 38.9487099383], '抚顺市': [123.929819767, 41.8773038296], '朝阳市': [120.446162703, 41.5718276679], '本溪市': [123.77806237, 41.3258376266], '沈阳市': [123.432790922, 41.8086447835], '盘锦市': [122.07322781, 41.141248023], '营口市': [122.233391371, 40.6686510665], '葫芦岛市': [120.860757645, 40.7430298813], '辽阳市': [123.172451205, 41.2733392656], '铁岭市': [123.854849615, 42.2997570121], '锦州市': [121.147748738, 41.1308788759], '阜新市': [121.660822129, 42.0192501071], '鞍山市': [123.007763329, 41.1187436822], '重庆市': [106.530635013, 29.5446061089], '咸阳市': [108.707509278, 34.345372996], '商洛市': [109.934208154, 33.8739073951], '安康市': [109.038044563, 32.70437045], '宝鸡市': [107.170645452, 34.3640808097], '延安市': [109.500509757, 36.6033203523], '榆林市': [109.745925744, 38.2794392401], '汉中市': [107.045477629, 33.0815689782], '渭南市': [109.483932697, 34.5023579758], '西安市': [108.953098279, 34.2777998978], '铜川市': [108.968067013, 34.9083676964], '果洛藏族自治州': [100.223722769, 34.4804845846], '海东地区': [102.085206987, 36.5176101677], '海北藏族自治州': [100.879802174, 36.9606541011], '海南藏族自治州': [100.624066094, 36.2843638038], '海西蒙古族藏族自治州': [97.3426254153, 37.3737990706], '玉树藏族自治州': [97.0133161374, 33.0062399097], '西宁市': [101.76792099, 36.640738612], '黄南藏族自治州': [102.007600308, 35.5228515517], '九龙': [114.173291988, 22.3072458588], '新界': [114.146701965, 22.4274312754], '香港岛': [114.183870524, 22.2721034276], '七台河市': [131.019048047, 45.7750053686], '伊春市': [128.910765978, 47.7346850751], '佳木斯市': [130.284734586, 46.8137796047], '双鸭山市': [131.17140174, 46.6551020625], '哈尔滨市': [126.657716855, 45.7732246332], '大兴安岭地区': [124.19610419, 51.991788968], '大庆市': [125.02183973, 46.59670902], '牡丹江市': [129.608035396, 44.5885211528], '绥化市': [126.989094572, 46.646063927], '鸡西市': [130.941767273, 45.3215398866], '鹤岗市': [130.292472051, 47.3386659037], '黑河市': [127.500830295, 50.2506900907], '齐齐哈尔市': [123.987288942, 47.3476998134]}
}