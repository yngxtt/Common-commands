function getServe (status: number) {
    if(status === 0) {
        return 'massage'
    } else if (status === 1) {
        return 'SPA'
    } else if (status === 2) {
        return 'dabaojian'
    }
}

const Status = {
    massage: 0,
    SPA: 1,
    dabaojian: 2
}

function getServe2(status: any) {
    if(status === Status.massage) {
        return 'massage'
    } else if (status === Status.SPA) {
        return 'SPA'
    } else if (status === Status.dabaojian) {
        return 'dabaojian'
    }
}

// 枚举类型
enum StatusEnum {
    MASSAGE = 1,
    SPA,
    DABAOJIAN
}
function getServe3(status: StatusEnum) {
    if(status === StatusEnum.MASSAGE) {
        return 'massage'
    } else if (status === StatusEnum.SPA) {
        return 'SPA'
    } else if (status === StatusEnum.DABAOJIAN) {
        return 'dabaojian'
    }
}