var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

// 读取数据模块,供客户端调用
// data/read?type=it
// data/read?type=it.json
router.get('/read', function (req, res, next) {

    var type = req.param('type') || '';

    fs.readFile(PATH + type + '.json', function (err, data) {

        if (err) {

            return res.send({

                                status: 0,
                                info: '服务异常,读取文件失败',
                            });

        }

        var COUNT = 50;

        // TODO: try
        var obj = [];
        try {
            obj = JSON.parse(data.toString());
        } catch (e) {

            obj = [];

        }

        if (obj.length > 50) {

            obj = obj.slice(0, COUNT);

        }

        return res.send({

                            status: 1,
                            data: obj

                        });

    });

});

// 阅读模块写人接口

router.post('/write_config', function (req, res, next) {

    // TODO:后期进行提交数据的验证
    // 防xss攻击
    // npm install xss
    // require('xss')
    // var str = xss(name)
    var data = req.body.data;
    // TODO: try catch
    var obj = JSON.parse(data);
    var newObj = JSON.stringify(obj);
    // 写入文件
    fs.writeFile(PATH + "config.json", newObj, function (err) {

        if (err) {

            return res.send({

                                status: 0,
                                info: '写入数据失败'
                            });

        }

        return res.send({

                            status: 1,
                            info: obj
                        });

    });

});

// 数据存储模块
router.post('/write', function (req, res, next) {
    // 文件名
    var type = req.param('type') || '';
    // 关键字段
    var url = req.param('url') || '';
    var title = req.param('title') || '';
    var img = req.param('img') || '';

    if (!type || !url || !img) {

        return res.send({

                            status: 0,
                            info: '提交字段不全'

                        });

    }

    // 1.需要拿到文件的信息
    fs.readFile(PATH + type + '.json', function (err, data) {

        if (err) {

            return res.send({

                                status: 0,
                                info: '读取数据失败'

                            });

        }

        var arr = JSON.parse(data.toString());

        // 代表每一条记录
        var obj = {

            img: img,
            url: url,
            title: title,
            id: guidGenerate(),
            time: new Date()

        };

        arr.splice(0, 0, obj);

        // 2.写入文件

        var newData = JSON.stringify(arr);

        fs.writeFile(PATH + type + '.json', newData, function (err, data) {

            if (err) {
                return res.send({

                                    status: 0,
                                    info: '写入文件失败'

                                });
            }

            return res.send({

                                status: 1,
                                info: obj
                            });

        });

    });
    // 3.读取文件

});

// guid
function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;
