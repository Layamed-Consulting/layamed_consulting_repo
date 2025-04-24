/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

publicWidget.registry.ReferenceSlider = publicWidget.Widget.extend({
    selector: '.reference-slider-section',
    events: {
        'click #refSliderPrev': '_onClickPrev',
        'click #refSliderNext': '_onClickNext',
    },

    start() {
        this.$scrollContainer = this.$('#refLogoContainer');
        return this._super(...arguments);
    },

    _onClickPrev() {
        console.log("⬅️ Left (Prev) icon clicked");
        this._scrollBy(-300); // Scroll left by 300px
    },

    _onClickNext() {
        console.log("➡️ Right (Next) icon clicked");
        this._scrollBy(300, true); // Scroll right by 300px and check if it's the end
    },

    _scrollBy(pixels, checkLoop = false) {
        if (this.$scrollContainer && this.$scrollContainer.length) {
            const element = this.$scrollContainer[0];
            const start = element.scrollLeft;
            const end = start + pixels;
            const duration = 700;

            const startTime = performance.now();

            const animateScroll = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));

                element.scrollLeft = start + (end - start) * easeInOut;

                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                } else if (checkLoop && this._isAtEnd()) {
                    setTimeout(() => {
                        element.scrollLeft = 0; // Jump back instantly to the start
                    }, 300); // Wait briefly before jumping back
                }
            };

            requestAnimationFrame(animateScroll);
        }
    },

    _isAtEnd() {
        const element = this.$scrollContainer[0];
        // Buffer is small number to allow slight offset tolerance
        const buffer = 5;
        return (element.scrollWidth - element.scrollLeft - element.clientWidth) <= buffer;
    },
});
