app.factory('ServicesFactory', function ($http) {
    var ServicesFactory = {};
    var urlBase = subDomainName + '/Admin/ServicesMaster';
    ServicesFactory.getServicesList = function () {

        return $http({
            url: urlBase + "/GetServicesList",
            method: "get"
        })
    };

    ServicesFactory.SaveServicesMaster = function (selectedServicesMaster) {
        debugger;
        selectedServicesMaster = {
            Title: selectedServicesMaster.Title,
            S_Image: selectedServicesMaster.S_Image,
            SequenceNo: selectedServicesMaster.SequenceNo,
            IsActive: selectedServicesMaster.IsActive

        }
        return $http({
            url: urlBase + "/SaveServicesMaster/",
            method: "POST",
            data: JSON.stringify(selectedServicesMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    ServicesFactory.UpdateServicesMaster = function (selectedServicesMaster) {
        debugger;
        selectedServicesMaster = {
            ID: selectedServicesMaster.ID,
            Title: selectedServicesMaster.Title,
            S_Image: selectedServicesMaster.S_Image,
            SequenceNo: selectedServicesMaster.SequenceNo,
            IsActive: selectedServicesMaster.IsActive
        }
        return $http({

            url: urlBase + "/UpdateServicesMaster/",
            method: "POST",
            data: JSON.stringify(selectedServicesMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    ServicesFactory.ValidateSequance = function (ID, Website_Services_SequenceNo) {
        debugger;
        return $http.get(urlBase + '/CheckWebsiteServicesMasterSequanceExist?ID=' + ID + '&Website_Services_SequenceNo=' + Website_Services_SequenceNo);
    };
    return ServicesFactory;
});
