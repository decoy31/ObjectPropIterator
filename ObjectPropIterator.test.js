var testObj = {
    "key_1": {
        "your_name": "jimmy",
      "your_msg": "hello world"
    },
    "key_2": {
    	"your_name": "billy",
    	"your_msg": "foo equals bar"
    }
};

function iterTest() {
    iter(testObj, true, function (key, val) {
        console.log(key, val);
    });
}

iterTest();
