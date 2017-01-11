<style>
/* The ribbons */

.corner-ribbon{
  width: 200px;
  background: #e43;
  position: absolute;
  top: 25px;
  left: -50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Custom styles */

.corner-ribbon.sticky{
  position: fixed;
}

.corner-ribbon.shadow{
  box-shadow: 0 0 3px rgba(0,0,0,.3);
}
.corner-ribbon.top-right{
  top: 25px;
  right: -50px;
  left: auto;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.corner-ribbon a {
text-decoration: none;
color: #fff;
}

.corner-ribbon.blue{background: #39d;}
</style>

<div class="corner-ribbon top-right sticky blue"><a href="https://clarkhacks.com/">Home</a></div>
# Clark Hacks CDN
Content Deliver Network for hosted projects.

### Index

```
CDN
|
+---JekyllShareModal
|       index.js
|       jquery.qrcode.js
|       modal.html
|       options.js
|       styles.css
|
\---sharebtns
    \---js
            share.min.js

```
