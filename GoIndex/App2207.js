document.write(`
<style>
*{box-sizing:border-box}
h1{border-bottom:1px solid silver;margin-bottom:10px;padding-bottom:10px;white-space:nowrap}
table{border-collapse:collapse;font-family:Consolas,monaco,monospace}
th{font-weight:700}
.file-name{text-align:left}
.file-type{text-align:center}
.file-size{padding-left:5em}
.file-date-created,
.file-date-modified{text-align:end;padding-left:5em}
.file-date-created,
.file-date-modified,
.file-size{text-align:end;white-space:nowrap}
.icon{padding-left:1.5em;text-decoration:none}
.icon:hover{text-decoration:underline}
.icon-file{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABHUlEQVR42o2RMW7DIBiF3498iHRJD5JKHurL+CRVBp+i2T16tTynF2gO0KSb5ZrBBl4HHDBuK/WXACH4eO9/CAAAbdvijzLGNE1TVZXfZuHg6XCAQESAZXbOKaXO57eiKG6ft9PrKQIkCQqFoIiQFBGlFIB5nvM8t9aOX2Nd18oDzjnPgCDpn/BH4zh2XZdlWVmWiUK4IgCBoFMUz9eP6zRN75cLgEQhcmTQIbl72O0f9865qLAAsURAAgKBJKEtgLXWvyjLuFsThCSstb8rBCaAQhDYWgIZ7myM+TUBjDHrHlZcbMYYk34cN0YSLcgS+wL0fe9TXDMbY33fR2AYBvyQ8L0Gk8MwREBrTfKe4TpTzwhArXWi8HI84h/1DfwI5mhxJamFAAAAAElFTkSuQmCC) left top no-repeat}
.icon-dir{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mFYu0OFhBxCFDdbIgKuIoVSyChdJWaNXB5NI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Ik6OToouU+F1SaBHjHcc9vPe9L3ffAUKzylQzMAGommWkE3Exl18Ve18RoDmIMIISM/VkZjELz/F1Dx/f72I8y7vuzxFWCiYDfCLxHNMNi3iDeGbT0jnvE0dYWVKIz4nHDbog8SPXZZffOJccFnhmxMim54kjxGKpi+UuZmVDJZ4mjiqqRvlCzmWF8xZntVpn7XvyF4YK2kqG67RGkMASkkhBhIw6KqjCQox2jRQTaTqPe/iHHX+KXDK5KmDkWEANKiTHD/4Hv3trFqcm3aRQHOh5se2PUaB3F2g1bPv72LZbJ4D/GbjSOv5aE5j9JL3R0aJHQP82cHHd0eQ94HIHGHrSJUNyJD8toVgE3s/om/LAwC3Qt+b2rX2O0wcgS71avgEODoGxEmWve7w72N23f2va/fsBB0ByfJ0/evMAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBAQVNiXjFuYKAAAAq0lEQVQ4y+2VwQ3CMAxFn1E3cmYKM9UzxTN9DtCCKjWFtgcksGQ5B+vlJbISaxJnxoWTY5gWxayr2iR7G1jMpDZ2G81M70AN2ITNzeW6aT8ARAS11i4sIljb+NV+AKi1EhFdYG/DsTrlAf3oyGvmAJGQmcfHZml+GLi8qr/hzxnOQ/pBXRpakyhmGqvvt8x7zcw7cHrC3PdDMxN3hybNCWhvurua9DT82j/lBm8Ce28d5ByDAAAAAElFTkSuQmCC) left top no-repeat}
.icon-up{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAQAAADcrC56AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBAQUMiGB1Y0gAAAAAW9yTlQBz6J3mgAAAdpJREFUKM9lkr1PU3EUhp9zP1qgt6ShpJi2UosoQaksjJoYNV0YHDTxDzBxUGP8T4yLg4ODcXB0IjFuTVU0xq8oQgQ1QKVQ+iHYe3vvbe/PobbB+L7Tyfvk5M3JEf7qJkrX4vbYctgZlq9U8fG7idFDYuiGe9y9KAnSFFlii2Xq+AeQKCFpDMsMKbLMss93nlLgI80+olBKKengA3HipJhijnss9pE2SKCUj4cCwCRJHsTqIwOEVUtkkCh6f3E4mPVu90ZsRvVWtGlWOu3DDIqn+bIbfKivbGd7iKyHSkG2trNad8TSQ/JtoDJUKr/bOOKc6CGjzNRbrxv3nS+1Til2yN6yXS9XztnHiHa7jDDPOR6nPj/I+nObaWt6d7QakpinK0CAGPPcYJKX5s7YuHmyEmlHOmb3tIIOxLlCEZeApuwZLVNpir4H1FEF1yjgov63KEOlmpdWDPJMEeIfCRpaYLgJN/Mq/sjgIYo8w91QwyRwVGtERbc7n3LliQXrucEz9tG4QIRfeEOStP331bVxL7e2Xkzunane8Q0cFtHQOcWCrFoy3bTeFjYTndP21eYEPyliAA4v0DnPE5YsMv5dexKfGm/4wWVuIf13SbMhvzPkOUuD6wfK/wHBCcZftDFjfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0wNFQyMDo1MDozMyswMDowMB6bUgYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMDRUMjA6NTA6MzMrMDA6MDBvxuq6AAAAAElFTkSuQmCC) left top no-repeat}
</style>`);

function init(){
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
    <h1 id="heading">Disk <?php echo urldecode($path);?></h1>
    <table id="table">
    </table>
	`;
    $('body').html(html);
}

function render(path){
	if(path.indexOf("?") > 0){
		path = path.substr(0,path.indexOf("?"));
	}
    title(path);
    nav(path);
    if(path.substr(-1) == '/'){
    	list(path);
    }else{
	    file(path);
    }
}

function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName);
}

function nav(path){
	path = decodeURI(path);
    $('#heading').html('Disk '+path);
}

function list(path){
	var content = `
<tr><th class="file-name">Name</th><th class="file-size">Size</th><th class="file-date-modified">Date</th></tr>
	`;

	if(path != '/'){
		var up = path.split('/');
		up.pop();up.pop();
		up = up.join('/')+'/';
		content += `
<tr>
	<td class="file-name">
		<a class="icon icon-up folder" href="${up}">...</a>
	</td>
	<td class="file-size"></td>
	<td class="file-date-modified"></td>
</tr>
		`;	
	}
	$('#table').html(content);
	
    var password = localStorage.getItem('password'+path);
	
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("password","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                history.go(-1);
            }
        }else if(typeof obj != 'null'){
            list_files(path,obj.files);
        }
    });
}

function list_files(path,files){
    html = "";
    for(i in files){
        var item = files[i];
        if(item['size']==undefined){
            item['size'] = "";
        }
        item['modifiedTime'] = utc2beijing(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
        	var p = path+item.name+'/';
            html +=`
				<tr>
					<td class="file-name"><a class="icon icon-dir folder" href="${p}">${item.name}/</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        } else{
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-file" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
                    <td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        }
    }
    $('#table').append(html);
}

function utc2beijing(utc_datetime) {
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0,T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    var new_datetime = year_month_day+" "+hour_minute_second;

    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    var unixtimestamp = timestamp+8*60*60;

    var unixtimestamp = new Date(unixtimestamp*1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
}

function formatFileSize(bytes) {
    if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
    else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
    else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
    else if (bytes>1)           {bytes=bytes+' bytes';}
    else if (bytes==1)          {bytes=bytes+' byte';}
    else                        {bytes='';}
    return bytes;
}

window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}

$(function(){
    init();
    var path = window.location.pathname;
    $("body").on("click",'.folder',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    render(path);
});
