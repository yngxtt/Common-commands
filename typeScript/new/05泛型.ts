function jion<T> (first: T, second : T) {
    return `${first}${second}`
}
jion<string>('hello','-world')
// function Fun<ANY> (params: ANY[]) {
function Fun<T> (params: Array<T>) {
    return params
}
Fun<string>(['hao','HAO'])

function Fun2<T,P> (first: T, second: P) {
    return `${first}${second}`
}

Fun2<string, number> ('1', 2)

interface INAME {
    name: string
}

class SelectName<T extends INAME> {
    constructor(private girls: T[]) {

    }
    getGirl(index: number): string {
        return this.girls[index].name
    }
}

const selectName = new SelectName([
    { name: 'a' },
    { name: 'b' },
    { name: 'c' }
])
const NAME = selectName.getGirl(1)


class SelectName2<T extends number | string> {
    constructor(private girls: T[]) {

    }
    getGirl(index: number): T {
        return this.girls[index]
    }
}

const selectName2 = new SelectName2(['a', 'b', 'c'])
const NAME2 = selectName2.getGirl(1)