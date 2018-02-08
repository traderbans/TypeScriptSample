"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    var Talk = /** @class */ (function () {
        function Talk() {
        }
        Talk.GetGreeting = function (now) {
            console.log(now);
            var h = now.getHours();
            if (h < 5) {
                return "Welcome Back!";
            }
            else if (h < 12) {
                return "Good Morning!";
            }
            else if (h < 16) {
                return "Good Afternoon!";
            }
            else if (h < 22) {
                return "Good Evening!";
            }
            else {
                return "Welcome Back!";
            }
        };
        return Talk;
    }());
    App.Talk = Talk;
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=app-talk.js.map