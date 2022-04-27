app.factory('BrandFactory', function ($http) {
    var BrandFactory = {};
    var urlBase = subDomainName + '/Admin/BrandsMaster';
    BrandFactory.getBrandsList = function () {

        return $http({
            url: urlBase + "/GetBrandsList",
            method: "get"
        })
    };

    BrandFactory.SaveBrandsMaster = function (selectedBrandsMaster) {
        debugger;
        selectedBrandsMaster = {
            Title: selectedBrandsMaster.Title,
            B_Image: selectedBrandsMaster.B_Image,
            SequenceNo: selectedBrandsMaster.SequenceNo,
            IsActive: selectedBrandsMaster.IsActive

        }
        return $http({
            url: urlBase + "/SaveBrandsMaster/",
            method: "POST",
            data: JSON.stringify(selectedBrandsMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    BrandFactory.UpdateBrandsMaster = function (selectedBrandsMaster) {
        debugger;
        selectedBrandsMaster = {
            ID: selectedBrandsMaster.ID,
            Title: selectedBrandsMaster.Title,
            B_Image: selectedBrandsMaster.B_Image,
            SequenceNo: selectedBrandsMaster.SequenceNo,
            IsActive: selectedBrandsMaster.IsActive
        }
        return $http({

            url: urlBase + "/UpdateBrandsMaster/",
            method: "POST",
            data: JSON.stringify(selectedBrandsMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    BrandFactory.ValidateSequance = function (ID, Website_Brands_SequenceNo) {
        debugger;
        return $http.get(urlBase + '/CheckWebsiteBrandsMasterSequanceExist?ID=' + ID + '&Website_Brands_SequenceNo=' + Website_Brands_SequenceNo);
    };
    return BrandFactory;
});
