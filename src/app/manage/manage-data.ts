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
    static onTestConnect(txt) {
        console.log('------------In class ManageData---------------');
        console.log('this is test connect with text => ' + txt);
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
