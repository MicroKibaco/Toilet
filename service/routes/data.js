var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

// 读取数据模块
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

module.exports = router;
