var scrollOffset = [0,0,0]
var $win = $(window);
var $doc = $(document);

$win
.on('scroll', function(){
    // this is needed because scroll is triggered when zooming before the zoom event
    scrollOffset[2] = scrollOffset[1];
    scrollOffset[1] = scrollOffset[0];
    scrollOffset[0] = 100 / $win.height() * $win.scrollTop();
    console.log('scroll event', scrollOffset);
})
.on('resize', function(){
    // set back the history because of multiple zooming events
    scrollOffset[0] = scrollOffset[1];
    scrollOffset[1] = scrollOffset[2];
    scrollOffset[2] = 0;
    console.log('zoom event', scrollOffset);
    window.scrollTo(0, scrollOffset[0] / 100 * $win.height());
})