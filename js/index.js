    //检测登录
    var str = "";
    str = str.replace(/\-/g, "/");
    var expire = new Date(str);
    var now = new Date();
    if (ska.username && (now < expire)) {
        $(".login-control").hide();
        $(".logout-control").show();
    } else {
        $(".login-control").show();
        $(".logout-control").hide();
    }
    //登录
    $(".login-btn").click(function(event) {
        login();
    });
    //登出
    $(".logout-btn").click(function(event) {
        logout();
    });

    function login(callback) {
        //0:汇文系统验证, 1:直接数据库验证,2:url验证,3:指定数据库直接验证,4:单点登录
        if (4 == 4) {
            window.location.href = "/cas/index.php?callback=" + window.location.href;
            return;
            //$('.login_click').attr("href","/cas/index.php");
            //$('.login_click').removeClass("login-btn");
        }
        loginDialog(ska.loginApi, ska.checkUrl, function(data) {
            if (data.status == 1) {
                //设置access_token
                //设置userid 
                window.ska.access_token = data.data._hash_.access_token;
                window.ska.userid = data.data._hash_.userid;
                window.ska.username = data.data.list.name;
                //显示登陆成功信息
                $(".login-control").hide();
                $(".logout-control").show();
                $(".login-welcome").html('我的中心');
                dialog({
                    'id': 'login-dialog'
                }).remove();
                //alertDialog('登录成功!','success',10);
                bookRule(ska.bookRule);
                alertDialog(data.msg, 'success', 500);
                if (callback instanceof Function) {
                    callback(data);
                }
            } else {
                var captcha_img = $('#checkpic');
                var verifyimg = captcha_img.attr("src");
                if (verifyimg.indexOf('?') > 0) {
                    $('#checkpic').attr("src", verifyimg + '&random=' + Math.random());
                } else {
                    $('#checkpic').attr("src", verifyimg.replace(/\?.*$/, '') + '?' + Math.random());
                }
                if (data.status == 2) {
                    $(".renege").show();
                }
                alertDialog(data.msg, 'error', 1, 10000);
            }
        });
    }

    //		setTimeout(function ()
    //			{
    //				logout();
    //			},360000);

    function logout() {
        logoutDialog(ska.logoutApi, {
            'access_token': window.ska.access_token,
            'userid': window.ska.userid
        }, function(data) {
            if (data.status == 1) {
                //console.log(data);
                //设置access_token
                //设置userid 
                window.ska.access_token = '';
                window.ska.userid = '';
                //显示登陆成功信息
                $(".login-control").show();
                $(".logout-control").hide();
                alertDialog('退出成功，欢迎使用！', 'success');
                //如果选择CAS认证则退出时CAS端也一并退出
                if (4 == 4)
                    window.location = "/cas/index.php?logout=" + window.location.href;
            } else {
                alertDialog(data.msg, 'error');
            }
        });
    }


    <!--放大缩小插件-->
    <script src="/Public/static/jquery-panzoom/dist/panzoom.js"></script>



    <!--大屏幕-->
    <div class="top visible-md visible-lg" style="text-align:center;">
        <div class="col-xs-12 col-sm-9 top_title">
            <div class="left systitle">
                <span class="title">复旦大学医科图书馆空间预约系统</span>
                <br/>
                <span class="min_title">The library space reservation system</span>
            </div>
            <ul class="menu">
                <li>
                    <a href="/home/web/index">首页</a>
                </li>
                <li class="active">
                    <a href="/home/web/f_second">空间预约</a>
                </li>
                <li>
                    <a href="/home/web/spacedetail" target="_blank">授权空间</a>
                </li>
                <li>
                    <a href="javascript:void(0);" onclick="bookRule(ska.bookRule);">预约规则</a>
                </li>
                <li class="login-control">
                    <a class="login-btn login_click" href="javascript:void(0);">登录</a>
                </li>
                <li class="renege" style="display:none;">
                    <a href="/web/renege"></a>
                </li>
                <li class="logout-control" style="display:none;">
                    <a class="login-welcome" href="/user/index/index/from/index" target="_blank">我的中心</a>
                    欢迎                <a class="logout-btn" href="javascript:void(0);">退出登录</a>
                </li>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>