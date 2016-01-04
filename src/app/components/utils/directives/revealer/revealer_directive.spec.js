
(function(){

'use strict';

    describe('dropReveal  Directive Test', function () {
      beforeEach( module('wsSeed.utilDirectives.module'));
      var $compile;
      var $rootScope;
      var $opened;
      var $linkViewHide;

      beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile        = _$compile_;
            $rootScope      = _$rootScope_;
            $opened         = false;
            $linkViewHide   = false;


      }));

      it('Drop Reveal elements created',  function () {
            var element_dr = $compile('<div class="row">'+
                                            '<div reveal-toggle="#revealable-test1"'+
                                                     'reveal-state="opened"'+
                                                     'ng-hide="linkViewHide"'+
                                                     'class="col-sm-12" ng-cloak>'+
                                                  '<h3>'+
                                                     '<a href="/dashboard?seedling=test_1" class="header-link">Top Of the Pops </a>'+
                                                  '</h3>'+
                                            '</div>'+
                                            '<div id="revealable-test1" class="col-sm-12 dropreveal" easing="linear" duration=".5s"> '+
                                                 '<p>Bespoke aesthetic Bushwick craft beer. Qui aesthetic butcher, cardigan ex '+
                                                     'scenester Neutra American Apparel mumblecore.</p> '+
                                                 '<p>Ethical adipisicing before they sold out, sriracha Thundercats cardigan dolor '+
                                                      ' deep v placeat. Flannel tattooed meggings direct trade banh mi tousled sriracha. '+
                                                      ' Portland VHS ut dreamcatcher. Butcher eu irony, Banksy leggings eiusmod Pinterest  '+
                                                      ' hashtag Etsy asymmetrical lo-fi Helvetica quis incididunt adipisicing. '+
                                                      ' YOLO cliche minim mlkshk dreamcatcher excepteur, Austin McSweeney\'s.</p>  '+
                                                 '<p>Coded @ Kinfolk Studios in Williamsburg, Brooklyn, 2013.</p>  '+
                                                 '<p>Your fresh artisinal Ipsum will appear above this paragraph. </p> '+
                                            ' </div>'+
                                      ' </div>')($rootScope);
                                    $rootScope.$digest();
            $rootScope.$digest();

            // Check that the compiled element contains the templated content
            expect(element_dr.html()).toContain('Top Of the Pops');
            expect(element_dr.html()).toContain('revealable-test1');

      });

    });
})();