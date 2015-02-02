_dynamicInclude($includeFolder);
var testCase = new TestCase(5, 10);
var env = new Environment();
try {
    function getImageKeySet() {
        var keySet = Packages.de.consol.sakuli.loader.BeanLoader.loadBaseActionLoader().getImageLib().keySet();
        env.logInfo('Keys: ' + keySet);

        var iterrator = keySet.iterator();
        while (iterrator.hasNext()) {
            env.logInfo('Key: ' + iterrator.next());
        }
        return keySet;
    }

    var images = getImageKeySet();

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

    _highlight(_link(/Glasfaser.*/));
    _assert(_isVisible(_link(/Glasfaser.*/)));

} catch (e) {
    testCase.handleException(e);
} finally {
    testCase.saveResult();
}

