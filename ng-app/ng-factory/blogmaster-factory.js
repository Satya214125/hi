app.factory('BlogMasterFactory', function ($http) {
    var BlogMasterFactory = {};
    var urlBase = subDomainName + '/Admin/BlogMaster';
    BlogMasterFactory.getBlogMasterList = function () {

        return $http({
            url: urlBase + "/GetBlogMasterList",
            method: "get"
        })
    };

    BlogMasterFactory.SaveBlogMaster = function (selectedBlogMaster) {
        debugger;
        selectedBlogMaster = {
            Title: selectedBlogMaster.Title,
            Summary: selectedBlogMaster.Summary,
            Summary_ImagePath: selectedBlogMaster.Summary_ImagePath,
            Description: selectedBlogMaster.Description,
            Description__ImagePath: selectedBlogMaster.Description__ImagePath,
            Blog_Date: selectedBlogMaster.Blog_Date,
           
            SequenceNo: selectedBlogMaster.SequenceNo,
            IsActive: selectedBlogMaster.IsActive,
        }
        return $http({

            url: urlBase + "/SaveBlogMaster/",
            method: "POST",
            data: JSON.stringify(selectedBlogMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    BlogMasterFactory.UpdateBlogMaster = function (selectedBlogMaster) {
        debugger;
        selectedBlogMaster = {
            ID: selectedBlogMaster.ID,
            Title: selectedBlogMaster.Title,
            Summary: selectedBlogMaster.Summary,
            Summary_ImagePath: selectedBlogMaster.Summary_ImagePath,
            Description: selectedBlogMaster.Description,
            Description__ImagePath: selectedBlogMaster.Description__ImagePath,
            Blog_Date: selectedBlogMaster.Blog_Date,

            SequenceNo: selectedBlogMaster.SequenceNo,
            IsActive: selectedBlogMaster.IsActive,
        }
        return $http({

            url: urlBase + "/UpdateBlogMaster/",
            method: "POST",
            data: JSON.stringify(selectedBlogMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    BlogMasterFactory.ValidateSequance = function (ID, Website_Blog_SequenceNo) {
        return $http.get(urlBase+'/CheckWebsiteBlogMasterSequanceExist?ID=' + ID + '&Website_Blog_SequenceNo=' + Website_Blog_SequenceNo);
    };
    return BlogMasterFactory;
});
