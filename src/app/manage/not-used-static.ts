export class NotUsedStatic {
    // กรณีเจอ not use function ให้เติม public ด้านหน้าของ function ที่แจ้งเตือน
    onTestConnectNotUsedStatic() {
        console.log('this connect with not used static on function');
    }
}

export class NotUsedStaticWithParams {

    txt: string;
    num: number;

    constructor(st: string, num: number) {
        this.txt = st;
        this.num = num;
    }

    getParameter() {
        console.log(this.txt + ' ' + this.num);
    }
}
