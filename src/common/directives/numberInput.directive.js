export default class NumberInput {
    static factory() {
        const directive = () => new NumberInput();
        return directive;
    }

    constructor() {
        this.require = "ngModel";
        this.restrict = "A";
    }

    link(scope, element, attrs, ngModelController) {
        const regexp = /^[0-9]\d*$/;
        debugger;
        function isNumber(value) {return typeof value === 'number';}

        function isDefined(value) {return typeof value !== 'undefined';}

        let originalIsEmpty = ngModelController.$isEmpty;

        ngModelController.$isEmpty = (value) => {
            return originalIsEmpty(value) || value === '-';
        }

        ngModelController.$parsers.push(function(value) {
            if (ngModelController.$isEmpty(value)) {
                return null;
            }
            if (regexp.test(value))
                return parseInt(value);

            ngModelController.$setViewValue(isNumber(ngModelController.$modelValue) ?
                ngModelController.$modelValue + '' : '');

            ngModelController.$render();
            return isNumber(ngModelController.$modelValue) ? 
                    ngModelController.$modelValue : null;
        });

        ngModelController.$formatters.push(function (value) {
            if (value && typeof value !== 'number') {
                value = parseInt(value);
            }
            if (!ngModelController.$isEmpty(value)) {
                if (!isNumber(value)) {
                    throw Error(`Expected ${value} to be a number`);
                }
                value = value.toString();
            }
            return value;
        });        

        if (isDefined(attrs.min) || attrs.ngMin) {
            var minVal;
            ngModelController.$validators.min = function (value) {
                return ngModelController.$isEmpty(value) || !isDefined(minVal) || value >= minVal;
            };

            attrs.$observe('min', function(val) {
                if (isDefined(val) && !isNumber(val)) {
                    val = parseInt(val+'');
                }
                minVal = isNumber(val) && !isNaN(val) ? val : undefined;
                ngModelController.$validate();
            });
        }

        if (isDefined(attrs.max) || attrs.ngMax) {
            var maxVal;
            ngModelController.$validators.max = function(value) {
                return ngModelController.$isEmpty(value) || !isDefined(maxVal) || value <= maxVal;
            };

            attrs.$observe('max', function(val) {
                if (isDefined(val) && !isNumber(val)) {
                    val = parseInt(val+'');
                }
                maxVal = isNumber(val) && !isNaN(val) ? val : undefined;
                ngModelController.$validate();
            });
        }

    }
}