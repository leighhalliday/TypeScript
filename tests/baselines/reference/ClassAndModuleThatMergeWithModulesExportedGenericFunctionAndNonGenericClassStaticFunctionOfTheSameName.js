//// [ClassAndModuleThatMergeWithModulesExportedGenericFunctionAndNonGenericClassStaticFunctionOfTheSameName.ts]
class clodule<T> {
    id: string;
    value: T;

    static fn(id: string) { }
}

module clodule {
    // error: duplicate identifier expected
    export function fn<T>(x: T, y: T): T {
        return x;
    }
}



//// [ClassAndModuleThatMergeWithModulesExportedGenericFunctionAndNonGenericClassStaticFunctionOfTheSameName.js]
var clodule = (function () {
    function clodule() {
    }
    clodule.fn = function (id) { };
    return clodule;
})();
var clodule;
(function (clodule) {
    // error: duplicate identifier expected
    function fn(x, y) {
        return x;
    }
    clodule.fn = fn;
})(clodule || (clodule = {}));
