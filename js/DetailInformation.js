$(document).ready(function() {
    var CITYLIST = [
        {"Code": "01","City": "Hà Nội","Lookup": "Hà Nội, ha noi, hanoi"},
        {"Code": "79","City": "Hồ Chí Minh","Lookup": "Hồ Chí Minh, ho chi minh, Thành phố Hồ Chí Minh, hcm"}
    ];
    var DISTRICTLIST = [
        {"Code":"760", "District":"Quận 1", "CityCode": "79","Lookup":"Quận 1,District 1,Quận 01"},
        {"Code":"769", "District":"Quận 2", "CityCode": "79","Lookup":"Quận 2,District 2"},
        {"Code":"770", "District":"Quận 3", "CityCode": "79","Lookup":"Quận 3,District 3"},
        {"Code":"773", "District":"Quận 4", "CityCode": "79","Lookup":"Quận 4,District 4"},
        {"Code":"774", "District":"Quận 5", "CityCode": "79","Lookup":"Quận 5,District 5"},
        {"Code":"775", "District":"Quận 6", "CityCode": "79","Lookup":"Quận 6,District 6"},
        {"Code":"778", "District":"Quận 7", "CityCode": "79","Lookup":"Quận 7,District 7"},
        {"Code":"776", "District":"Quận 8", "CityCode": "79","Lookup":"Quận 8,District 8"},
        {"Code":"763", "District":"Quận 9", "CityCode": "79","Lookup":"Quận 9,District 9"},
        {"Code":"771", "District":"Quận 10", "CityCode": "79","Lookup":"Quận 10,District 10"},
        {"Code":"772", "District":"Quận 11", "CityCode": "79","Lookup":"Quận 11,District 11"},
        {"Code":"761", "District":"Quận 12", "CityCode": "79","Lookup":"Quận 12,District 12"},
        {"Code":"765", "District":"Quận Bình Thạnh", "CityCode": "79","Lookup":"Quận Bình Thạnh,Bình Thạnh"},
        {"Code":"764", "District":"Quận Gò Vấp", "CityCode": "79","Lookup":"Quận Gò Vấp,Gò Vấp"},
        {"Code":"768", "District":"Quận Phú Nhuận", "CityCode": "79","Lookup":"Quận Phú Nhuận,Phú Nhuận"},
        {"Code":"766", "District":"Quận Tân Bình", "CityCode": "79","Lookup":"Quận Tân Bình,Tân Bình,Tan Binh"},
        {"Code":"767", "District":"Quận Tân Phú", "CityCode": "79","Lookup":"Quận Tân Phú,Tân Phú"},
        {"Code":"777", "District":"Quận Bình Tân", "CityCode": "79","Lookup":"Quận Bình Tân,Bình Tân"},
        {"Code":"762", "District":"Quận Thủ Đức", "CityCode": "79","Lookup":"Quận Thủ Đức,Thủ Đức,Thu Duc District"},
        {"Code":"001", "District":"Quận Ba Đình", "CityCode": "01","Lookup":"Quận Ba Đình,Ba Đình"},
        {"Code":"005", "District":"Quận Cầu Giấy", "CityCode": "01","Lookup":"Quận Cầu Giấy,Cầu Giấy"},
        {"Code":"006", "District":"Quận Đống Đa", "CityCode": "01","Lookup":"Quận Đống Đa,Đống Đa"},
        {"Code":"007", "District":"Quận Hai Bà Trưng", "CityCode": "01","Lookup":"Quận Hai Bà Trưng,Hai Bà Trưng,Hai Bà Trưng District"},
        {"Code":"002", "District":"Quận Hoàn Kiếm", "CityCode": "01","Lookup":"Quận Hoàn Kiếm,Hoàn Kiếm,Hà Noi"},
        {"Code":"008", "District":"Quận Hoàng Mai", "CityCode": "01","Lookup":"Quận Hoàng Mai,Hoàng Mai,Thanh Trì"},
        {"Code":"003", "District":"Quận Tây Hồ", "CityCode": "01","Lookup":"Quận Tây Hồ,Tây Hồ"},
        {"Code":"009", "District":"Quận Thanh Xuân", "CityCode": "01","Lookup":"Quận Thanh Xuân,Thanh Xuân,Hà Nội"},
        {"Code":"021", "District":"Quận Bắc Từ Liêm", "CityCode": "01","Lookup":"Quận Bắc Từ Liêm,Bắc Từ Liêm,Bac Tu Liem"},
        {"Code":"268", "District":"Quận Hà Đông", "CityCode": "01","Lookup":"Hà đông,Quận hà đông"},
        {"Code":"004", "District":"Quận Long Biên", "CityCode": "01","Lookup":"Quận Long Biên,Long Biên"},
        {"Code":"019", "District":"Quận Nam Từ Liêm", "CityCode": "01","Lookup":"Quận Nam Từ Liêm,Nam Từ Liêm,Từ Liêm"}
    ];
    var x = JSON.parse(sessionStorage.getItem('information'));
    console.log(x);
    $('.name').append('<div class="col-10">'+x.name+'</div>');
    $('.email').append('<div class="col-10">'+x.email+'</div>');
    $('.password').append('<div class="col-10">'+x.password+'</div>');
    $('.phone').append('<div class="col-10">'+x.phone+'</div>');
    $('.sex').append('<div class="col-10">'+x.sex+'</div>');
    $('.age').append('<div class="col-10">'+x.age+'</div>');
    for(var i=0;i<CITYLIST.length;i++) {
        for(var j=0;j<DISTRICTLIST.length;j++) {
            if(CITYLIST[i].Code == x.city && DISTRICTLIST[j].Code == x.district) {
                $('.address').append('<div class="col-10 text-left">'+DISTRICTLIST[j].District+', '+CITYLIST[i].City+'</div>');
            } 
        }
    }
    $('.relatives').append('<div class="col-5 text-left">'+x.relatives+'</div>');
})