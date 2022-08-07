<template name="modal">
<div class="modal-mask">
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-body" style="margin-top: 0; margin-bottom: 0; text-align: center">
        <p class="shc-sub-title">NFT를 발행 중 입니다.</p>
        <div>&nbsp;</div>
        <div class="loader"></div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
.loader {
  border: 16px solid #f3f3f3;border-top: 16px solid #1366FF;border-radius: 50%;width: 120px;height: 120px;animation: spin 2s linear infinite;
  margin-left: auto;margin-right: auto;margin-top: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
