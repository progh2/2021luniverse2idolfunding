<template name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header" style="border-color: #1366FF">
          <slot name="footer">
            <div class="shc-title" style="font-size: large; font-weight: bold;">
              NFT 발행 데모 환경을 위해<br>
              메타마스크 설치가 필요합니다.
            </div>
            <button class="btn modal-default-button" @click="$emit('close-modal')">
              X
            </button>
          </slot>
        </div>

        <div class="modal-body" style="margin-top: 0; margin-bottom: 0">
          <slot name="body">
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chrome-ntp-icon">
              <div class="btn modal-item" @click="$emit('close-modal')" style="margin-top: 10px;"><span class="t_dgray" style="font-size: x-large; font-weight: bold">metamask 설치</span></div>
            </a>
            <br>
            <div class="btn modal-item" style="margin-top: 10px;" @click="$emit('close-modal')"><span class="t_dgray" style="font-size: x-large; font-weight: bold">연결하지 않고 둘러보기</span></div>
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>
