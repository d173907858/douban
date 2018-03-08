<template>

  <div class="detail-bottom">
      <footer class="box">
          <div class="footerbar" style="width:20%">
              <a href="#" class="btn-share">
                  <i class="fa fa-share-square-o"></i>
              </a>
          </div>
            <div class="footerbar" style="width:20%">
                 <a href="#" class="btn-gift">
                  <i class="fa fa-gift"></i>
              </a>
            </div>
              <div class="footerbar" style="width:30%">
                   <a href="#"  class="btn-self">
                  购买
              </a>
              </div>
                <div class="footerbar" style="width:30%">
                     <a href="#"  class="btn-read">
                 试读
              </a>
                </div>
      </footer>
  </div>
</template>
<script>
export default {
  name:'detail-bottom'
}
</script>
<style lang="scss" scoped>
    .detail-bottom{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        height: 47px;
        color: #333;
        footer{
            display:flex;
            .footerbar{
                height: 47px;
                a{
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: center;

                    line-height: 47px;
                    i{
                         line-height: 47px;
                         font-size: 25px;
                          color: darkcyan;
                    }
                }
                .btn-share{
                    color: darkcyan;
                    position: relative;
                }
                .btn-share::after{
                    content: '';
    display: block;
    position: absolute;
    top: 13.5px;
    right: -1px;
    width: 1px;
    height: 16px;
        background: #ddd;
            transform-origin: right 0;
                transform: scaleX(.5);
                    top: 14.5px;
                        height: 18px;
                }
                .btn-self{
                    background: #7dd5bd;
                }
                .btn-read{
                        background: #5dcaad;
                }
            }
        }
    }
</style>
