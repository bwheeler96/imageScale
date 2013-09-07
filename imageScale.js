/*

 The MIT License (MIT)

 Copyright (c) 2013 Brian Wheeler

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

(function($) {
    $.fn.imageScale = function(params) {

        var params = $.extend( { parent: false }, params);
        var _imgWidth, _imgHeight, _parentWidth, _parentHeight, _imgRatio, _parentRatio, parent, scaledAspect, leftMargin, topMargin;

        $(this).load(function() {
            if (params.parent) {
                parent = $(this).parents(params.parent);
            } else {
                parent = $(this).parent;
            }

            _imgWidth = $(this).width();
            _imgHeight = $(this).height();
            _parentHeight = $(parent).height();
            _parentWidth = $(parent).width();
            _imgRatio = $(this).width() / $(this).height(); // width / height
            _parentRatio = $(parent).width() / $(parent).height();

            if (_imgRatio > _parentRatio) {
                scaledAspect = (100 + ((_parentHeight - _imgHeight) / _imgHeight) * 100 ) * (_imgWidth / _parentWidth) +  '%';
                $(this).css({ height: '100%', width: scaledAspect });
                leftMargin = (_parentWidth - $(this).width()) / _parentWidth / 0.02 + '%';
                $(this).css({ "margin-left": leftMargin });
            } else {
                scaledAspect = (100 + ((_parentWidth - _imgWidth) / _imgWidth) * 100 ) * (_imgHeight / _parentHeight) +  '%';
                $(this).css({width: '100%', height: scaledAspect });
                topMargin = ( ( ( _parentHeight - $(this).height() ) / _parentHeight) / .02) + '%';
                $(this).css({ "margin-top": topMargin  });
            }
        });
    };
})(jQuery);
