var button=$('button');
var input=$('#date-picker').datepicker({dateFormat: 'yy-mm-dd'});
var formArea=$('#form-container');
var imageArea=$('#image-container');


// console.log(input);
button.click(function(e){
    e.preventDefault();

    var date=input.val();

    if(date==""){
        alert("Please choose a valid date");
        return;
    }

    let url= "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";

    $.get(url,function(data){
        let photos=data.photos;

        if(photos.length==0){
            alert("No photos available fot this date");
        }

        $('#image-container img').remove();

        for (let photo of photos) {
            imageArea.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }

        // $(document.createElement('img').attr('src',imgsrc).appendTo('#imageArea'));

    })

})