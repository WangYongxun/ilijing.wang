
var canvas = document.getElementById("canvas")
//参数 contextID 指定了您想要在画布上绘制的类型。
//当前唯一的合法值是 "2d"，它指定了二维绘图，
//并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API。
var context = canvas.getContext("2d")
var w = window.innerWidth
var h = window.innerHeight
canvas.width = w;
canvas.height = h;
var count = 200 //雪花的个数
var snows = [] //雪花对象数组
for (var i = 0; i < count; i++) {
    snows.push({
        x: Math.random() * w,//Math.random()用于生成0～1的随机数
        y: Math.random() * h,
        r: Math.random() * 5,
    })
}
//绘制雪花
function draw() {
    context.clearRect(0, 0, w, h)
    context.beginPath()
    for (var i = 0; i < count; i++) {
        var snow = snows[i];//遍历每一片雪花
        context.fillStyle = "rgb(255,255,255)" //设置雪花的样式
        context.shadowBlur = 10;
        context.shadowColor = "rgb(255,255,255)";
        //moveTo 的方法是可以移动到指定的坐标
        context.moveTo(snow.x, snow.y)
        // 使用canvas arc()创建一个圆形
        //x，y，r：圆的中心的x坐标和y坐标，r为半径
        //0,Math.PI * 2起始弧度和结束弧度

        context.arc(snow.x, snow.y, snow.r, 0, Math.PI * 2)


    }
    //画布填充
    context.fill()
    move()
}
//雪花飘动
function move() {
    for (var i = 0; i < count; i++) {
        var snow = snows[i];
        snow.y += (7 - snow.r) / 10 //从上往下飘落
        snow.x += ((5 - snow.r) / 10)//从左到右飘落
        if (snow.y > h) {
            snows[i] = {
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 5,
            }
        }
    }
}
draw()
//每毫秒刷新一次
setInterval(draw, 1)
