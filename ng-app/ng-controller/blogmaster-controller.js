
var app = angular.module("BlogMasterApp", ['lr.upload']);
app.controller('BlogMastercontroller', ['$scope', 'BlogMasterFactory', 'upload', '$filter', '$http', function ($scope, BlogMasterFactory, upload, $filter, $http) {
    $scope.BlogMasterList = [];
    $scope.selectedBlogMaster = [];
    $scope.IsValidSummary = false;
    $scope.IsValidDetails = false;
    $("#IsBtnUpload").hide();
    $("#IsBtnRemove").hide();
    $("#IsBtnDetails").hide();
    $("#IsBtnRemoveDetails").hide();
    $("#Website_Blog_Summary").show();

    var urlBase = subDomainName + '/Admin/BlogMaster';
    $scope.Numbr = "[^0-9]";
    $scope.HidePopup = function () {
        var element = angular.element('#BlogMasterModal');
        element.modal('hide');
        $scope.clearAll();
    }
    $scope.ShowPopup = function () {
        debugger;
        $scope.selectedBlogMaster = [];
        $scope.selectedBlogMaster.IsActive = true;
        document.getElementById("IsActive").disabled = true;
        var element = angular.element('#BlogMasterModal');
        element.modal('show');
        $scope.selectedBlogMaster.ID = 0;
        // $scope.selectedBlogMaster.SequenceNo = 0;
    }
    $scope.checkextension = function (oInput, type) {
        debugger;
        var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];
        {
            if (oInput.type == "file") {
                var sFileName = oInput.value;
                if (sFileName.length > 0) {
                    var blnValid = false;
                    for (var j = 0; j < _validFileExtensions.length; j++) {
                        var sCurExtension = _validFileExtensions[j];
                        if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                            blnValid = true;
                            if (type == "Website_Blog_Summary") {
                                $scope.IsBtnSummary = true;
                                // $scope.IsUploadTrue();
                                $("#IsBtnSummary").show();
                                $("#IsBtnRemove").hide();
                                $("#Website_Blog_Summary").show();
                                $scope.IsBtnRemove = false;

                                $scope.selectedBlogMaster.Summary_ImagePath = "";
                                var fileProgress = document.getElementById("fileProgressSummary");
                                fileProgressSummary.style.display = "none";
                                var lblMessageSummary = document.getElementById("lblMessageSummary");
                                lblMessageSummary.innerHTML = "";
                                $scope.IsValidSummary = false;
                            }
                            else {
                                $scope.IsBtnDetails = true;
                                $("#IsBtnDetails").show();
                                $("#IsBtnRemoveDetails").hide();
                                $("#Website_Blog_Details").show();
                                $scope.IsBtnRemoveDetails = false;

                                $scope.selectedBlogMaster.Description__ImagePath = "";
                                var fileProgress = document.getElementById("fileProgressDetails");
                                fileProgressSummary.style.display = "none";
                                var lblMessageSummary = document.getElementById("lblMessageDetails");
                                lblMessageSummary.innerHTML = "";
                                $scope.IsValidDetails = false;
                            }
                            break;
                        }
                    }
                    if (!blnValid) {
                        alert("Sorry, This File Type  is invalid, allowed types are: " + _validFileExtensions.join(", "));
                        oInput.value = "";
                        return false;
                    }
                }
            }
            return true;
        }
    }
    $scope.EditPopup = function () {

        var element = angular.element('#BlogMasterModal');
        element.modal('show');
    }
    $scope.EditBlog = function (item) {
        debugger;
        $scope.selectedBlogMaster = angular.copy(item);
        // myDate = $filter('date')(item.Website_Blog_Date, "dd/MM/yyyy");
        $scope.selectedBlogMaster.Blog_Date = new Date(item.Display_Date);
        $scope.EditPopup();
        if (item.Summary_ImagePath != undefined && item.Summary_ImagePath != null) {
            $("#IsBtnRemove").show();
            $("#Website_Blog_Summary").hide();
        }
        if (item.Description__ImagePath != undefined && item.Description__ImagePath != null) {
            $("#IsBtnRemoveDetails").show();
            $("#Website_Blog_Details").hide();
        }
        $scope.IsValidDetails = true;
        console.log(item);
    }

    $scope.clearAll = function () {
        if ($scope.selectedBlogMaster != undefined && $scope.selectedBlogMaster != null) {
            $scope.selectedBlogMaster = [];
            $scope.IsValidSummary = false;
            $scope.IsValidDetails = false;
            $scope.IsBtnSummary = false;
            document.getElementById('Website_Blog_Summary').value = "";
            document.getElementById('Website_Blog_Details').value = "";
            $scope.IsValidSummary = false;
            $scope.IsValidDetails = false;
            $scope.IsBtnDetails = false;
            var lblMessageSummary = document.getElementById("lblMessageSummary");
            lblMessageSummary.innerHTML = "";
            var lblMessageDetails = document.getElementById("lblMessageDetails");
            lblMessageDetails.innerHTML = "";
            $("#Website_Blog_Summary").show();
            $("#Website_Blog_Details").show();
            $("#IsBtnRemoveDetails").hide();
            $("#IsBtnRemove").hide();

        }
    }
    $scope.SaveBlogMaster = function () {
        debugger;

        BlogMasterFactory.SaveBlogMaster($scope.selectedBlogMaster).then(function successCallback(response) {
            debugger;
            console.log(response);
            if (response.data.IsSuccess) {
                alert("Record saved successfully");
                $scope.getBlogMasterList();
                $scope.clearAll();
                $scope.HidePopup();
            }
            else if ((response.data.ErrorMessage != "Unauthorized")) {

            }
        }, function errorCallback(response) {
            debugger;
            console.log("Error");
        });
    }

    $scope.UpdateBlogMaster = function () {
        debugger;

        BlogMasterFactory.UpdateBlogMaster($scope.selectedBlogMaster).then(function successCallback(response) {
            debugger;
            console.log(response);
            if (response.data.IsSuccess) {
                alert("Record updated successfully");
                $scope.getBlogMasterList();
                $scope.clearAll();
                $scope.HidePopup();
            }
            else if ((response.data.ErrorMessage != "Unauthorized")) {

            }
        }, function errorCallback(response) {
            debugger;
            console.log("Error");
        });
    }
    $scope.doRemove = function (A) {
        if (A == "Website_Blog_Summary") {
            $scope.IsBtnSummary = false;
            $scope.IsBtnRemove = false;
            $scope.selectedBlogMaster.Summary_ImagePath = "";
            var fileProgress = document.getElementById("fileProgressSummary");
            fileProgressSummary.style.display = "none";
            var lblMessageSummary = document.getElementById("lblMessageSummary");
            lblMessageSummary.innerHTML = "";
            $scope.IsValidSummary = false;
            document.getElementById('Website_Blog_Summary').value = "";
            $("#IsBtnUpload").hide();
            $("#IsBtnRemove").hide();
            $("#Website_Blog_Summary").show();
        }
        else {
            $scope.IsBtnDetails = false;
            $scope.IsBtnRemoveDetails = false;

            $scope.selectedBlogMaster.Description__ImagePath = "";
            var fileProgress = document.getElementById("fileProgressDetails");
            fileProgressDetails.style.display = "none";
            document.getElementById('Website_Blog_Details').value = "";
            var lblMessageDetails = document.getElementById("lblMessageDetails");
            lblMessageDetails.innerHTML = "";
            $scope.IsValidDetails = false;
            $("#IsBtnDetails").hide();
            $("#IsBtnRemoveDetails").hide();
            $("#Website_Blog_Details").show();
        }
    }
    $scope.doUpload = function (A) {
        debugger;

        if (A == "Website_Blog_Summary") {
            $scope.IsBtnRemove = false;
            var fileProgress = document.getElementById("fileProgressSummary");
            fileProgressSummary.style.display = "block";
            var lblMessageSummary = document.getElementById("lblMessageSummary");
            var File = document.getElementById('Website_Blog_Summary').files[0];
        }
        else {
            $scope.IsBtnRemoveDetails = false;
            var fileProgress = document.getElementById("fileProgressDetails");
            fileProgressDetails.style.display = "block";
            var File = document.getElementById('Website_Blog_Details').files[0];
            var lblMessageDetails = document.getElementById("lblMessageDetails");
        }

        var formdata = new FormData();
        formdata.append('imagefile', File);
        upload({
            url: urlBase + "/upload",
            method: 'POST',
            data: formdata,
            headers: { 'Content-Type': undefined },
            uploadEventHandlers: {
                progress: function (e) {
                    if (e.lengthComputable) {
                        fileProgress.setAttribute("value", e.loaded);
                        fileProgress.setAttribute("max", e.total);
                    }
                }
            }
        }).then(
            function (response) {
                debugger;
                if (response.data.IsSuccess) {
                    var ImgName = response.data.Data;
                    var i = ImgName.split('|');
                    //console.log(response.data);
                    if (A == "Website_Blog_Summary") {
                        //$scope.IsBtnRemove = true;
                        //$scope.IsBtnSummary = false;
                        $("#IsBtnSummary").hide();
                        $("#IsBtnRemove").show();
                        $("#Website_Blog_Summary").hide();
                        
                        lblMessageSummary.innerHTML = "<b>" + i[0] + "</b> has been uploaded.";
                        fileProgressSummary.style.display = "none";
                        $scope.selectedBlogMaster.Summary_ImagePath = i[1];
                        $scope.IsValidSummary = true;
                    } else {
                        $("#IsBtnDetails").hide();
                        $("#IsBtnRemoveDetails").show();
                        $("#Website_Blog_Details").hide();
                        lblMessageDetails.innerHTML = "<b>" + i[0] + "</b> has been uploaded.";
                        fileProgressDetails.style.display = "none";
                        $scope.selectedBlogMaster.Description__ImagePath = i[1];
                        $scope.IsValidDetails = true;
                    }
                }
            },
            function (response) {
                console.error(response);
            }
        );
    }
    $scope.ValidateSequance = function () {
        debugger;
        $scope.isDistinctSequnaceNo = true;
        if ($scope.BlogMasterModalForm.Blog_SequnaceNo.$valid) {

            if ($scope.selectedBlogMaster.SequenceNo != undefined && $scope.selectedBlogMaster.SequenceNo != "") {
                BlogMasterFactory.ValidateSequance($scope.selectedBlogMaster.ID, $scope.selectedBlogMaster.SequenceNo).then(function successCallback(response) {
                    if (response.data) {
                        $scope.isDistinctSequnaceNo = response.data.Data;
                    }
                    else if ((response.data.ErrorMessage != "Unauthorized")) {
                        alert("error");
                    }
                }, function errorCallback(response) {
                    $scope.errorMessage = "Sequnace No. already exist";
                });
            }
        }
    };

    $scope.getBlogMasterList = function () {
        BlogMasterFactory.getBlogMasterList().then(function successCallBack(response) {
            debugger;
            if (response.data != null) {
                $scope.BlogMasterList = response.data.Data;
            }
        })
    };
}]).directive('uploadFile', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var file_uploaded = $parse(attrs.uploadFile);
            element.bind('change', function () {
                scope.$apply(function () {
                    console.log(scope);
                    console.log(element[0].files[0]);
                    file_uploaded.assign(scope, element[0].files[0]);
                });
            });
        }
    };
}]).directive('ckEditor', function () {
    return {
        require: '?ngModel',
        link: function (scope, elm, attr, ngModel) {
            var ck = CKEDITOR.replace(elm[0]);
            if (!ngModel) return;
            ck.on('instanceReady', function () {
                ck.setData(ngModel.$viewValue);
            });
            function updateModel() {
                if (!scope.$$phase) {
                    scope.$apply(function () {
                        ngModel.$setViewValue(ck.getData());
                    });
                }
            }
            ck.on('change', updateModel);
            ck.on('key', updateModel);
            ck.on('dataReady', updateModel);
            ngModel.$render = function (value) {
                ck.setData(ngModel.$viewValue);
            };
        }
    };
});