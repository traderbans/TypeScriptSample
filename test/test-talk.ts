import assert = require('assert');
import appTalk = require('../app-talk');

describe("App.Talk", () => {
    it("GetGreeting Test", () => {
        
        // 「2018/0/1 00:00:00:00」を渡すと「Welcome Back!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 0, 0,0,0)), "Welcome Back!");

        // 「2018/0/1 04:59:59:999」を渡すと「Welcome Back!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 4, 59,59,999)), "Welcome Back!");

        // 「2018/0/1 05:00:00:00」を渡すと「Good Morning!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 5, 0,0,0)), "Good Morning!");

        // 「2018/0/1 11:59:59:999」を渡すと「Good Morning!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 11, 59,59,999)), "Good Morning!");
        
        // 「2018/0/1 12:00:00:00」を渡すと「Good Afternoon!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 12, 0,0,0)), "Good Afternoon!");

        // 「2018/0/1 15:59:59:999」を渡すと「Good Afternoon!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 15, 59,59,999)), "Good Afternoon!");
        
        // 「2018/0/1 16:00:00:00」を渡すと「Good Evening!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 16, 0,0,0)), "Good Evening!");

        // 「2018/0/1 21:59:59:999」を渡すと「Good Evening!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 21, 59,59,999)), "Good Evening!");

        // 「2018/0/1 22:00:00:00」を渡すと「Welcome Back!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 22, 0,0,0)), "Welcome Back!");

        // 「2018/0/1 23:59:59:999」を渡すと「Welcome Back!」が返ってくるか？
        assert.equal(appTalk.App.Talk.GetGreeting(new Date(2018,0,1, 23, 59,59,999)), "Welcome Back!");
    });
});