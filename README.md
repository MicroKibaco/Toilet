### 找厕所
```flow
st=>start: Node环境搭建
e=>end
op=>operation: 数据存储接口,数据读取接口
cond=>condition: 服务接口设计
st->op->cond
cond(阅读模块数据配置)->e
cond(Express创建项目)->op
```