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
}
