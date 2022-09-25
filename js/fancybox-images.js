$(document).ready(function () {
  window.onload=function(){
    $('#article img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return;
      if ($(this).hasClass('nofancybox')) return;
      var alt = this.alt;
      var src_thumb = $(this).attr('data-original') == null ?this.src:$(this).attr('data-original');
      $(this).wrap(
        '<a href="" data-src="' + src_thumb.replace("thumbs2", "images2").replace("_t", "_o") + '" title="' + alt + '" data-thumb="' + src_thumb + '" class="fancybox" data-fancybox="fancybox-gallery-img"></a>');
    });
    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article');
    });
  }
});