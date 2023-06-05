export function validateUsername(rules, value, callback) {
    let reg = /^[a-zA-Z]{3,6}$/
    if (value == '') {
        callback(new Error("请输入管理员账号！"))
    } else if (!reg.test(value)) {
        callback(new Error("管理员账号为3-6位字符"))
    } else {
        callback()
    }
}

export function validatePassword(rules, value, callback) {
    let pass = /^\S*(?=\S{6,8})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value == '') {
        callback(new Error("请输入密码！"))
    } else if (!pass.test(value)) {
        callback(new Error("密码为6-8位"))
    } else {
        callback()
    }
}