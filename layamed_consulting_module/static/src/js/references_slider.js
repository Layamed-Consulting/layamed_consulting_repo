/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.ReferenceSlider = publicWidget.Widget.extend({
    selector: '.reference-slider-section',
    events: {
        'click #refSliderPrev': '_onClickPrev',
        'click #refSliderNext': '_onClickNext',
    },

    start() {
        this.$scrollContainer = this.$('#refLogoContainer'); // Store the scrollable container
        return this._super(...arguments);
    },

    _onClickPrev() {
        console.log("⬅️ Left (Prev) icon clicked");
        this._scrollBy(-300); // Scroll left by 300px
    },

    _onClickNext() {
        console.log("➡️ Right (Next) icon clicked");
        this._scrollBy(300); // Scroll right by 300px
    },

    _scrollBy(pixels) {
        if (this.$scrollContainer && this.$scrollContainer.length) {
            this.$scrollContainer[0].scrollBy({
                left: pixels,
                behavior: 'smooth'
            });
        }
    },
});
