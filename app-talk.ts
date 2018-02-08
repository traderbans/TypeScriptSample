export namespace App {
    export class Talk {
        public static GetGreeting(now : Date): string {
            console.log(now);
            let h:number = now.getHours();
            if (h < 5) {
                return "Welcome Back!";
            } else if(h < 12) {
                return "Good Morning!";
            } else if(h < 16) {
                return "Good Afternoon!";
            } else if(h < 22) {
                return "Good Evening!";
            } else {
                return "Welcome Back!";
            }
        }
    }
}