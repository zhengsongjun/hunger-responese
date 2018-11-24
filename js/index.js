var EventCenter = {
    on: function(type, handler){
      document.addEventListener(type, handler)
    },
    fire: function(type, data){
      return document.dispatchEvent(new CustomEvent(type, {
        detail: data
      }))
    }
  }
  


var main = {

}

var Footer = {
    init:function(){
        var _this = this;
        this.$foot = $('footer')
        _this.render();
    },
    bind:function(){

    },
    render:function(){
        var _this = this;
        $.getJSON('http://api.jirengu.com/fm/getChannels.php')
        .done(function(ret){
            _this.renderFooter(ret.channels)
        }).fail(function(){
            console.log('error')
        })
    },
    renderFooter:function(channels){
        var html = ''
        channels.forEach(function(channels){
            html += `<li data-channels-id="${channels.channel_id}">
                    <div class="cover" style="background-image:url(${channels.cover_small})"></div>
                    <h3>${channels.name}</h3>
                    </li>`
        })
        this.$foot.find('ul').append(html)
        console.log(html)
        // this.setStyle()
    },
    setStyle:function(){

    }
}

Footer.init()