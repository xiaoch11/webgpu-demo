/// <reference types="@webgpu/types" />

async function init() {
  if (!navigator.gpu) {
    console.error('WebGPU：您的浏览器暂不支持WebGPU API。');
  }
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    console.error('WebGPU：无法获取GPUAdapter。');
  } else {
    console.log(adapter);
    const device = await adapter.requestDevice();
    if (!device) {
      console.error('WebGPU：无法获取GPUDevice。');
    } else {
      console.log(device);
    }
  }
}

init();
