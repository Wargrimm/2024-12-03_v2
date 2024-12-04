function Router(rootFolderOfTemplate='/pages'){
    // Définition des propriétés et fonctions internes
    var currentRoute=location.pathname;
    function changePathName(pathName){
        history.pushState(null,null,pathName);
        currentRoute=location.pathName;
    }
    function loadContentInPage(eventLoader){
    }
    function getContentFromNetwork(contentUrl){
    }

    // Définition des propriétés et fonctions publiques
    this.getCurrentRoute=getCurrentRoute;
    function getCurrentRoute(){
        return currentRoute;
    };
    this.navigate=navigate;
    function navigate(pathName){
        changePathName(pathName);
    }

}