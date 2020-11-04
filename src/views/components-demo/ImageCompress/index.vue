<template>
  <div class="components-container">
    <p>{{message}}</p>
    <input id="file" type="file">
  </div>
</template>

<script>
export default {
  name: 'image-compress',
  data() {
    return {
      message: '使用纯原生js的方法来实现图片压缩功能',
    };
  },
  mounted() {
    const ACCEPT = ['image/jpg', 'image/png', 'image/jpeg']; // 图片类型
    const MAXSIZE = 5 * 1024 * 1024; // 图片大小1024 * 1024 = 1MB
    const MAXSIZE_STR = '5MB';
    const fileEle = document.getElementById('file');

    function convertImageToBase64(file, callback) {
      let reader = new FileReader();
      reader.addEventListener('load', (e) => {
        const base64Image = e.target.result;
        reader = null; // reader指向null用于内存回收
        return callback && callback(base64Image);
      });
      reader.readAsDataURL(file);
    }

    // 核心算法
    // 1. 拿到base64创建img标签, 获取图片的宽高进行压缩
    // 2. 使用canvas进行绘制图片, 使用canvas api toDataUrl 输出画布上的 base64url
    // 3. 压缩两个方向, 图片的尺寸、图片的质量
    function compress(base64Image, callback) {
      const image = new Image();
      // 图片加载完成调用该事件
      image.addEventListener('load', () => {
        // console.log('image 已经挂载完成了');
        let maxWeight = 1024;
        let maxHeight = 1024;
        let ratio; // 图片压缩比
        let needCompress = false; // 是否需要压缩

        // console.log(image.naturalWidth, image.naturalHeight);

        if (image.naturalWidth > maxWeight) {
          needCompress = true;
          ratio = image.naturalWidth / maxWeight;
          maxHeight = image.naturalHeight / ratio;
        }

        if (image.naturalHeight > maxHeight) {
          needCompress = true;
          ratio = image.naturalHeight / maxHeight;
          maxWeight = image.naturalWidth / ratio;
        }

        // 如果不需要压缩，需要获取图片的实际尺寸
        if (!needCompress) {
          maxWeight = image.naturalWidth;
          maxHeight = image.naturalHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.setAttribute('id', '__compress__');
        canvas.width = maxWeight;
        canvas.height = maxHeight;
        canvas.style.visibility = 'hidden';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        // 清除画布
        ctx.clearRect(0, 0, maxWeight, maxHeight);
        // 图片压缩
        ctx.drawImage(image, 0, 0, maxWeight, maxHeight);
        // 压缩后的图片转base64 url

        /* canvas.toDataURL(mimeType, qualityArgument)
           mimeType 默认值是'image/png';
           qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92
        */
        const compressImage = canvas.toDataURL('image/jpeg', 0.1);

        // const internalImage = new Image();
        // internalImage.src = compressImage;
        // document.body.appendChild(internalImage);
        // console.log(compressImage);
        canvas.remove();
        // console.log(`压缩比：${image.src.length / internalImage.src.length}`);
        return callback && callback(compressImage);
      });
      image.src = base64Image; // 图片的onload事件会监听img.src
      document.body.appendChild(image);
    }

    function uploadToServer(compressImage) {
      console.log('upload to serve ...', compressImage);
    }

    fileEle.addEventListener('change', (event) => {
      const [file] = event.target.files;

      if (!file) {
        return;
      }

      const { type: fileType, size: fileSize } = file;

      // 图片类型检查
      if (ACCEPT.indexOf(fileType) < 0) {
        console.log(`不支持${fileType}文件类型!`);
        fileEle.value = '';
        return;
      }

      // 图片容量检查
      if (fileSize > MAXSIZE) {
        console.log(`文件超出${MAXSIZE_STR}!`);
        fileEle.value = '';
        return;
      }

      // 图片转换到base64
      convertImageToBase64(file, (base64Image) => compress(base64Image, uploadToServer));
    });
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
