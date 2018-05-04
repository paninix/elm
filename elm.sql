/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.7.12-log : Database - elm
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`elm` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `elm`;

/*Table structure for table `food` */

DROP TABLE IF EXISTS `food`;

CREATE TABLE `food` (
  `foodId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(32) NOT NULL,
  `sellCount` int(11) NOT NULL DEFAULT '100',
  `rating` int(11) NOT NULL DEFAULT '90',
  `info` varchar(128) NOT NULL,
  `icon` varchar(256) NOT NULL,
  `image` varchar(256) NOT NULL,
  `fTypeId` int(11) NOT NULL,
  PRIMARY KEY (`foodId`),
  KEY `fTypeId` (`fTypeId`),
  CONSTRAINT `fTypeId` FOREIGN KEY (`fTypeId`) REFERENCES `foodtype` (`fTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

/*Data for the table `food` */

insert  into `food`(`foodId`,`name`,`price`,`description`,`sellCount`,`rating`,`info`,`icon`,`image`,`fTypeId`) values (1,'皮蛋瘦肉粥',10,'咸粥',229,100,'一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足','http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',1),(2,'扁豆焖面',14,'',188,96,'','http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750',1),(3,'葱花饼',10,'',124,85,'','http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750',1),(4,'牛肉馅饼',14,'',114,91,'','http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750',1),(5,'招牌猪肉白菜锅贴/10个',17,'',101,78,'','http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750',1),(6,'南瓜粥',9,'甜粥',91,100,'','http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',1),(7,'红豆薏米美肤粥',12,'甜粥',86,100,'','http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750',1),(8,'八宝酱菜',4,'',84,100,'','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750',1),(9,'红枣山药糙米粥',10,'',81,91,'','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750',1),(10,'糊塌子',10,'',80,93,' ','http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750',1),(11,'红枣山药粥套餐',29,'',17,93,' ','http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750',2),(12,'VC无限橙果汁',8,'',15,100,' ','http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750',3),(13,'娃娃菜炖豆腐',17,'',43,92,' ','http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750',4),(14,'手撕包菜',16,'',29,100,' ','http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750',4),(15,'香酥黄金鱼/3条',11,'',15,100,' ','http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750',4),(16,'八宝酱菜',4,'',84,100,' ','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750',5),(17,'拍黄瓜',9,'',28,100,' ','http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750',5),(18,'红豆薏米粥套餐',37,'',3,100,' ','http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750',6),(19,'皮蛋瘦肉粥套餐',31,'',12,100,' ','http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750',6),(20,'蜜瓜圣女萝莉杯',6,'',1,100,' ','http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750',7),(21,'加多宝',6,'',7,100,' ','http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750',7),(22,'VC无限橙果汁',8,'',15,100,' ','http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750',7),(23,'扁豆焖面',14,'',188,96,' ','http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750',8),(24,'葱花饼',8,'',15,100,' ','http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750',8),(25,'牛肉馅饼',14,'',114,91,' ','http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750',8),(26,'招牌猪肉白菜锅贴/10个',17,'',101,78,' ','http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750',8),(27,'糊塌子',10,'',80,93,' ','http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750',8),(28,'皮蛋瘦肉粥',10,'',229,100,' ','http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',9),(29,'南瓜粥',9,'',91,100,' ','http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750',9),(30,'红豆薏米美肤粥',12,'',86,100,' ','http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750',9),(31,'红枣山药糙米粥',10,'',81,100,' ','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750',9),(32,'鲜蔬菌菇粥',11,'',65,100,' ','http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750',9),(33,'田园蔬菜粥',10,'',78,100,' ','http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114','http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750',9);

/*Table structure for table `foodrating` */

DROP TABLE IF EXISTS `foodrating`;

CREATE TABLE `foodrating` (
  `fRateId` int(11) NOT NULL AUTO_INCREMENT,
  `foodId` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `rateTime` varchar(128) NOT NULL,
  `rateType` int(11) NOT NULL,
  `text` varchar(128) DEFAULT NULL,
  `avatar` varchar(128) NOT NULL,
  PRIMARY KEY (`fRateId`),
  KEY `foodId` (`foodId`),
  CONSTRAINT `foodId` FOREIGN KEY (`foodId`) REFERENCES `food` (`foodId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `foodrating` */

/*Table structure for table `foodtype` */

DROP TABLE IF EXISTS `foodtype`;

CREATE TABLE `foodtype` (
  `fTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`fTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `foodtype` */

insert  into `foodtype`(`fTypeId`,`name`) values (1,'热销榜'),(2,'单人精彩套餐'),(3,'冰爽饮品限时特惠'),(4,'精选热菜'),(5,'爽口凉菜'),(6,'精选套餐'),(7,'果拼果汁'),(8,'小吃主食'),(9,'特色粥品');

/*Table structure for table `orders` */

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `orderTime` varchar(128) NOT NULL,
  `price` int(11) NOT NULL,
  `orderType` int(11) NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `orders` */

/*Table structure for table `seller` */

DROP TABLE IF EXISTS `seller`;

CREATE TABLE `seller` (
  `sellerId` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(128) NOT NULL,
  `deliveryTime` int(11) NOT NULL,
  `score` float NOT NULL,
  `serviceScore` float NOT NULL,
  `foodScore` float NOT NULL,
  `rankRate` float NOT NULL,
  `minPrice` int(11) NOT NULL,
  `deliveryPrice` int(11) NOT NULL,
  `ratingCount` int(11) NOT NULL,
  `sellCount` int(11) NOT NULL,
  `bulletin` varchar(256) NOT NULL,
  `avatar` varchar(256) NOT NULL,
  PRIMARY KEY (`sellerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `seller` */

insert  into `seller`(`sellerId`,`name`,`description`,`deliveryTime`,`score`,`serviceScore`,`foodScore`,`rankRate`,`minPrice`,`deliveryPrice`,`ratingCount`,`sellCount`,`bulletin`,`avatar`) values (1,'粥品香坊（回龙观）','蜂鸟专送',38,4.2,4.1,4.3,69.2,20,4,24,90,'粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。','http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg');

/*Table structure for table `sellerinfos` */

DROP TABLE IF EXISTS `sellerinfos`;

CREATE TABLE `sellerinfos` (
  `sInfoId` int(11) NOT NULL AUTO_INCREMENT,
  `sellerId` int(11) NOT NULL,
  `info` varchar(128) NOT NULL,
  PRIMARY KEY (`sInfoId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `sellerinfos` */

insert  into `sellerinfos`(`sInfoId`,`sellerId`,`info`) values (1,1,'该商家支持发票,请下单写好发票抬头'),(2,1,'品类：其他菜系,包子粥店'),(3,1,'北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340'),(4,1,'营业时间:10:00-20:30');

/*Table structure for table `sellerpics` */

DROP TABLE IF EXISTS `sellerpics`;

CREATE TABLE `sellerpics` (
  `sPicsId` int(11) NOT NULL AUTO_INCREMENT,
  `sellerId` int(11) NOT NULL,
  `picSrc` varchar(256) NOT NULL,
  PRIMARY KEY (`sPicsId`),
  KEY `sellerId` (`sellerId`),
  CONSTRAINT `sellerId` FOREIGN KEY (`sellerId`) REFERENCES `seller` (`sellerId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `sellerpics` */

insert  into `sellerpics`(`sPicsId`,`sellerId`,`picSrc`) values (1,1,'http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180'),(2,1,'http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180'),(3,1,'http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180'),(4,1,'http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180');

/*Table structure for table `sellerratings` */

DROP TABLE IF EXISTS `sellerratings`;

CREATE TABLE `sellerratings` (
  `sRateId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `sellerId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `rateTime` varchar(128) NOT NULL,
  `deliveryTime` int(11) NOT NULL,
  `score` float NOT NULL,
  `rateType` int(11) NOT NULL,
  `text` varchar(256) NOT NULL,
  PRIMARY KEY (`sRateId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `sellerratings` */

/*Table structure for table `sellersupports` */

DROP TABLE IF EXISTS `sellersupports`;

CREATE TABLE `sellersupports` (
  `sSupportId` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(128) NOT NULL,
  `sellerId` int(11) NOT NULL,
  PRIMARY KEY (`sSupportId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `sellersupports` */

insert  into `sellersupports`(`sSupportId`,`description`,`sellerId`) values (1,'在线支付满28减5',1),(2,'VC无限橙果汁全场8折',1),(3,'单人精彩套餐',1),(4,'该商家支持发票,请下单写好发票抬头',1),(5,'已加入“外卖保”计划,食品安全保障',1);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`userId`,`username`,`password`) values (1,'admin','1111');

/*Table structure for table `userinfos` */

DROP TABLE IF EXISTS `userinfos`;

CREATE TABLE `userinfos` (
  `uInfoId` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(128) NOT NULL,
  `account` int(11) NOT NULL,
  `headSrc` varchar(128) DEFAULT NULL,
  `nick` varchar(32) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `phone` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`uInfoId`),
  KEY `userId` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `userinfos` */

insert  into `userinfos`(`uInfoId`,`address`,`account`,`headSrc`,`nick`,`userId`,`phone`) values (1,'南昌大学学生公寓6#666',1000,'https://pic1.zhimg.com/v2-ba9690274a886065a1d481d8f090da61_xl.jpg','帕尼尼',1,'13578889999');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
