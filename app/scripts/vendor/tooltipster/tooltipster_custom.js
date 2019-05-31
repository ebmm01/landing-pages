// Tooltipster
$('.tooltipster').tooltipster({
    theme: 'tooltipster-borderless',
    delay: 0,
    trigger: 'click',
    interactive: 'true',
    zIndex: 900,
    arrow: false
});
// Tooltipster
$('.tooltipster-left').tooltipster({
    theme: 'tooltipster-borderless',
    delay: 0,
    trigger: 'click',
    interactive: true,
    zIndex: 900,
    position: 'left',
    viewportAware: false,
    functionPosition: function(instance, helper, position){
        var half_heigth = position.size.height/2;
        position.coord.top -= half_heigth+10;
        var half_width = position.size.width/2;
        position.coord.left += 30;
        return position;
    },
});