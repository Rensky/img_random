(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


function setDeceleratingTimeout( callback, factor, times )
{
  var internalCallback = function( t, counter )
  {
    return function()
    {
      if ( --t > 0 )
      {
        window.setTimeout( internalCallback, ++counter * factor );
        callback();
      }
      
    }
  }( times, 0 );

  window.setTimeout( internalCallback, factor );
};

// console.log() requires firebug    
// setDeceleratingTimeout( function(){ console.log( 'hi' );}, 10, 10 );
setDeceleratingTimeout( function(){ console.log( 'bye' );}, 100, 10 );

