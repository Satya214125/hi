app.factory('TestimonialFactory', function ($http) {
    var TestimonialFactory = {};
    var urlBase = subDomainName + '/Admin/TestimonialMaster';
    TestimonialFactory.getTestimonialList = function () {

        return $http({
            url: urlBase + "/GetTestimonialList",
            method: "get"
        })
    };

    TestimonialFactory.SaveTestimonialMaster = function (selectedTestimonialMaster) {
        debugger;
        selectedTestimonialMaster = {
            Title: selectedTestimonialMaster.Title,
            T_Image: selectedTestimonialMaster.T_Image,
            Header: selectedTestimonialMaster.Header,
            Description: selectedTestimonialMaster.Description,
            SequenceNo: selectedTestimonialMaster.SequenceNo,
            IsActive: selectedTestimonialMaster.IsActive

        }
        return $http({
            url: urlBase + "/SaveTestimonialMaster/",
            method: "POST",
            data: JSON.stringify(selectedTestimonialMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    TestimonialFactory.UpdateTestimonialMaster = function (selectedTestimonialMaster) {
        debugger;
        selectedTestimonialMaster = {
            ID: selectedTestimonialMaster.ID,
            Title: selectedTestimonialMaster.Title,
            T_Image: selectedTestimonialMaster.T_Image,
            Header: selectedTestimonialMaster.Header,
            Description: selectedTestimonialMaster.Description,
            SequenceNo: selectedTestimonialMaster.SequenceNo,
            IsActive: selectedTestimonialMaster.IsActive
        }
        return $http({

            url: urlBase + "/UpdateTestimonialMaster/",
            method: "POST",
            data: JSON.stringify(selectedTestimonialMaster),
            dataType: 'json',
            headers: { 'Content-Type': 'application/json' }
        });
    };

    TestimonialFactory.ValidateSequance = function (ID, Website_Testimonial_SequenceNo) {
        debugger;
        return $http.get(urlBase + '/CheckWebsiteTestimonialMasterSequanceExist?ID=' + ID + '&Website_Testimonial_SequenceNo=' + Website_Testimonial_SequenceNo);
    };
    return TestimonialFactory;
});
