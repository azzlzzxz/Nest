/*
 * @Author: xinxu
 * @Date: 2023-06-08 14:12:05
 * @LastEditors: xinxu
 * @LastEditTime: 2023-06-08 14:28:38
 * @FilePath: /Nest/4-debugged/index.js
 */
const os = require("os");

const homedir = os.homedir();
const name = os.hostname();

console.log(homedir);
