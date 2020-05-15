export enum STATE {
    Draft = 'draft',
    Waitapprove = 'waitapprove',
    Orderavailable = 'orderavailable',
    Serviceprepared = 'serviceprepared',
    Ordercancel = 'ordercancel',
    Golive = 'golive',
    Close = 'close',
    Closewithcondition = 'closewithcondition'
}

export class ManageData {

    text = 'test text';
    static text2 = 'test text2';

    // static ไม่สามารถเรียกใช้ตัวแปรภายใน class ได้เช่น this.text เพราะมันไม่ได้สำรอง memory สำหรับตัวแปรนอก function
    // กรณีตัวแปรเป็น static เช่น text2 จะสามารถใช้ได้
    static onTestConnect(txt) {
        console.log('------------In class ManageData---------------');
        console.log('this is test connect with text => ' + txt + ' ' + this.text2);
        console.log('------------In class ManageData---------------');
    }

    static onChangeState(item, event) {
        console.log(item);
        console.log(event);

        switch (item.orderStatus) {
            case STATE.Draft:
                console.log('draft');
                break;

            case STATE.Waitapprove:
                if (event === 'CustomerSendBackAll') {
                    return 'orderavailable';
                }
                break;

            case STATE.Orderavailable:
                console.log('Orderavailable');
                break;

            case STATE.Serviceprepared:
                console.log('Serviceprepared');
                break;

            case STATE.Ordercancel:
                console.log('Ordercancel');
                break;

            case STATE.Golive:
                console.log('Golive');
                break;

            case STATE.Close:
                console.log('Close');
                break;

            case STATE.Closewithcondition:
                console.log('Closewithcondition');
                break;

            default:
                break;
        }
    }
}
