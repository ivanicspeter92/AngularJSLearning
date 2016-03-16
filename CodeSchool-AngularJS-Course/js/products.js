/**
 * Created by PéterIvanics on 3/16/2016.
 */
(function() {
    var app = angular.module('store-products', [ ]);
    /**
     * A custom directive defining the product-title HTML tag.
     *
     * @seealso https://docs.angularjs.org/guide/directive
     */
    app.directive('productTitle', function() { // the camel case name should be used as e.g. "product-title" in HTML
        return {
            restrict: 'E', // specifies the type of the directive - https://docs.angularjs.org/guide/directive
            templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function(){
                /**
                 * Indicates which of the tabs in order is selected.
                 * @type {number}
                 *
                 * @author Peter Ivanics
                 * @date 13.03.2016.
                 */
                this.tab = 1;

                /**
                 * Sets the value of the tab variable to the given value.
                 * @param tab The cardinal order of the tab to be selected.
                 *
                 * @author Peter Ivanics
                 * @date 13.03.2016.
                 */
                this.selectTab = function(tab) {
                    this.tab = tab;
                };

                /**
                 * Tells if the active tab equals to the given number.
                 *
                 * @param tab The order of the tab to be checked in the array.
                 * @returns {boolean}
                 */
                this.isSelected = function(tab) {
                    return this.tab === tab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();