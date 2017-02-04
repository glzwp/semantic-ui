//sidebar
//$('.ui.sidebar').sidebar('attach events', '.toc.item').sidebar('setting', 'transition', 'overlay');
$('.ui.sidebar').sidebar('attach events', '.toc.item').sidebar('setting',
    {
        dimPage: true,
        transition: 'overlay',
        mobileTransition: 'overlay'
    });

