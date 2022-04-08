function hello(msg) {
    return msg;
}
export default function (context, inject) {
    inject('msg', hello);
}