# class-manage-system
## 开发目的
在学校、大学等教育机构中，合理利用教室资源是一项重要的管理任务。然而，由于教室资源有限和课程安排的复杂性，学生和教职员工经常面临找不到空闲教室的问题。本项目针对这一问题在平台上基于CSS+HTML+JavaScript开发建立空闲教室系统管理网站，该网站可以实时提供教室的空闲情况，方便用户查询和预约可用教室，同时方便管理员对空闲教室进行管理，提高教室资源的利用率和管理效率
## 实现功能
1.教室信息查询：用户应能够通过系统查询相关教学楼和教室的信息，包括教室的容量、设备设施等。
2.空闲教室查询：系统应提供实时更新的空闲教室信息，允许用户查询任意时段的空闲教室情况。
3.教室预约功能：用户可以根据自身需求，通过系统预约空闲教室，避免与其他活动或课程发生冲突。
4.用户权限管理：系统应设置不同的用户角色和权限，如学生、教师、教务处管理人员等，确保不同用户只能访问和操作其权限范围内的内容。
### 非功能性需求主要包含：
1.性能需求：系统应支持多用户操作，运行稳定可靠，提供及时有效的技术支持和系统维护。
2.安全需求：系统应设置访问用户的标识和密码验证，保证用户身份的安全。同时，应对不同的数据设置不同的访问级别，限制用户可查询和处理数据的类别和内容。此外，系统还应记录所有操作日志，防止数据被破坏和丢失。
3.用户界面需求：系统的人机界面应友好，屏幕显示画面清晰，颜色设置合理，控件摆放整齐。界面风格设计应统一，以提高用户的使用体验。

## 目录
- [开发目的](#开发目的)
- [开发前的配置要求](#开发前的配置要求)
- [目录](#目录)
- [文件目录说明](#文件目录说明)
- [开发架构](#开发架构)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
- [版本控制](#版本控制)
- [作者](#作者)
## 文件目录说明
```
filetree
front-end 
├── /CSS/
│  ├── autoMatic.css
│  ├── login platform.css
│  ├── main stage 2.0.css
│  ├── platform choice.css
│  ├── reset.css
│  ├── user center.css
│  ├── 教室学生端背景框架.css
│  ├── 用户咨询.css
│  └── 管理平台.css
│── /JS/
│  └── index.js
│── /vue project/
│  └── /class-frame
│  │  └── /src/
│  │  │  ├── /components/
│  │  │  │  ├── /login/
│  │  │  │  │  ├── login.vue
│  │  │  │  │  └── register.vue
│  │  │  │  ├── /platform/
│  │  │  │  │  └── platform.choice.vue
│  │  │  │  ├── /managerstage/
│  │  │  │  │  ├── manager_judge.vue
│  │  │  │  │  └── userinfo_managestore.vue
│  │  │  │  ├── /mainstage/
│  │  │  │  │  ├── /guideline/
│  │  │  │  │  │  ├── mainstage.vue
│  │  │  │  │  │  ├── user_center.vue
│  │  │  │  │  │  ├── space.vue
│  │  │  │  │  │  └── facility_infrastructure.vue
│  │  │  │  │  ├── /btn_line/
│  │  │  │  │  │  ├── contact.vue
│  │  │  │  │  │  ├── reserve_rules.vue
│  │  │  │  │  │  ├── search.vue
│  │  │  │  │  │  ├── WIFI.vue
│  │  │  │  │  │  └── user_enquire.vue
│  │  │  ├── /router/
│  │  │  ├── App.vue
│  │  │  └── main.js
├── LICENSE.txt
├── README.md
```

## 开发前的配置要求

1.visual studio code version-1.89
2.Microsoft Windows 11 
3.Vue 3.4.21
4.Node.js v20.13.1

## 网址
http://localhost:xxxx/
## 开发架构
详情请见architecture: https://github.com/ravemelodic/class-manage-system/blob/main/architecture.md
## 使用到的框架
1.vue3 
基于vue框架实现用户端注册登录、教室信息资源查询及预约等多种功能的使用。
2.vue router 4
本项目使用基于vue框架下的路由管理工具vue router 4以实现路由搭建及数据共享，使项目中各组件能够相互关联且用户在注册后的用户数据能够向管理员进行共享。
3.vue axios
本项目使用基于vue框架下的前后端交互工具vue axios，实现前端用户数据输送至后端管理、后端教室信息的抓取及更新和预约信息管理及预约信息审核。
## 贡献者

## 版本控制

## 作者
ravemelodic:
https://github.com/ravemelodic





