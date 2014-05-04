iFrameBox
=========

Simple cross-browser jQuery LightBox alternative to use inside iFrame

Usage:

Include `iFrameBox.jQuery.js` inside of your iFrame:

``` HTML
<script src="path/to/iFrameBox.jQuery.js"></script>
```

Wrap thumbs in your iFrame with links to images:

``` HTML
<a href="/images/myImage.jpg" class="iframe-box">
  <img src="/images/myImageThumb.jpg" alt="My super cute image">
</a>
```

Now you can use it:

``` JavaScript
$('.iframe-box').ifbox();
```
