function getServe (status: number) {
    if(status === 0) {
        return 'massage'
    } else if (status === 1) {
        return 'SPA'
    } else if (status === 2) {
        return 'dabaojian'
    }
}