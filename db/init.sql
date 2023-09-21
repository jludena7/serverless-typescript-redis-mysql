CREATE TABLE `author` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(30) NOT NULL,
    `password` varchar(250) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `key_UNIQUE` (`email`)
);
INSERT INTO `author` (`id`,`email`,`password`) VALUES (1,'admin@gmail.com','$2a$10$ytGAKDOk8OCcopi836pJq..fdP.pKIDppM.ZPgsarrnLlMTafByEi');

CREATE TABLE `article` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `code` varchar(32) NOT NULL,
    `title` varchar(250) NOT NULL,
    `content` text default null,
    PRIMARY KEY (`id`),
    UNIQUE KEY `key_UNIQUE` (`code`)
);
