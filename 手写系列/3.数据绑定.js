// 数据绑定

function bindData(obj, fn) {
    for (let key in obj) {
        Object.defineProperty(obj, key, {
            set(newVal) {
                if (this.value !== newVal) {
                    this.value = newVal;
                    fn.call(obj, key);
                }
            },
            get() {
                return this.value;
            }
        })
    }
}

// 一个双向绑定

/**
 *   <input type="text" id="model">
        <p id="word"></p>
 */
const model = document.getElementById("model")
const word = document.getElementById("word")
var obj = {};

const newObj = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log('setting', target, key, value, receiver);
        if (key === "text") {
            model.value = value;
            word.innerHTML = value;
        }
        return Reflect.set(target, key, value, receiver);
    }
});

model.addEventListener("keyup", function (e) {
    newObj.text = e.target.value
})

// Proxy实现双向绑定2

const proxy = new Proxy(data, {
    get(target, property) {
        return target[property];
    },
    set(target, property, value) {
        target[property] = value;
        render(value);
    }
});

render(proxy.count);

function render(value) {
    document.getElementById('count').innerHTML = value;
}

function increase() {
    proxy.count += 1;
}

function decrease() {
    proxy.count -= 1;
}