// Instagram.com/kamyar_lajani
// https://github.com/KamyarLajani
var ctx, canvas;
new Vue({
    el: '#app',


    // Assigning canvas element
    mounted() {
        canvas = this.$refs.canvas;
        ctx = canvas.getContext('2d');
    },
    data: {
        x: 0,
        y: 0,
        mDown: false,
        pen: true,
        penSizeShow: false,
        penSize: 5,
        clean: false,
        cleanSize: 20,
        color: 'black',
        save: false,
        imageType: 'image/jpg',
        dataUrl: ''


    },
    methods: {

        mouseDown: function () {
            this.mDown = true;
            ctx.beginPath();
            ctx.lineWidth = this.penSize;
            ctx.strokeStyle = this.color;
            this.x = e.offsetX;
            this.y = e.offsetY;
            ctx.moveTo(this.x, this.y);

        },

        mouseUp: function () {
            this.mDown = false

        },

        mouseMove: function (e) {
            // Mouse down should be fire before mouse move
            if (this.mDown) {
                this.x = e.offsetX;
                this.y = e.offsetY;

                if (this.clean) {

                    ctx.clearRect(this.x, this.y, this.cleanSize, this.cleanSize);

                }
                else {
                    ctx.lineTo(this.x, this.y);
                    ctx.stroke();
                }
            }

        },
        // reset all
        clear: function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
        // canvas to Data URL (base64) then adding it in href of download button to be downloadable with base64
        saving: function () {
            this.dataUrl = canvas.toDataURL(this.imageType);
            console.log(this.dataUrl);
        }
    }
});

