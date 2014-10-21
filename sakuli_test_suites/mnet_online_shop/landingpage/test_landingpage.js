_dynamicInclude($includeFolder);
var testCase = new TestCase(60, 70);
var env = new Environment();
var screen = new Region();

try {

    _navigateTo("http://www.m-net.de/regio");
    _highlight(_image("Logo"));
    _assert(_isVisible(_image("Logo")));

    _highlight(_link("Über M-net"));
    _assert(_isVisible(_link("Über M-net")));

    _highlight(_link("Wohnungswirtschaft"));
    _assert(_isVisible(_link("Wohnungswirtschaft")));

    _highlight(_link("Kontakt"));
    _assert(_isVisible(_link("Kontakt")));

    _highlight(_link("Webmail"));
    _assert(_isVisible(_link("Webmail")));

    _highlight(_link("Kundenportal"));
    _assert(_isVisible(_link("Kundenportal")));

    _highlight(_link("Privatkunden"));
    _assert(_isVisible(_link("Privatkunden")));

    _highlight(_link("Geschäftskunden"));
    _assert(_isVisible(_link("Geschäftskunden")));

    _highlight(_link("Glasfaserausbau"));
    _assert(_isVisible(_link("Glasfaserausbau")));

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}

