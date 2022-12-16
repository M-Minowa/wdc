
'use strict';

// modal
// ---------------------------------------- //
console.info("modal")

const btns = document.querySelectorAll(".modal-btn")
const modal = document.querySelector("#modal")
const close = document.querySelectorAll(".modal-close")
const modalBody = document.querySelectorAll('.modal__body');

// モーダルを開く
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.add('active');
        const target = btn.dataset.target
        document.getElementById(target).classList.add('active');
    });
});

// モーダルを閉じる
close.forEach((close) => {
    close.addEventListener("click", () => {
        modalBody.forEach((modalBody) => {
            modalBody.classList.remove('active')
        });
        modal.classList.remove('active');
    });
});

// モーダルコンテンツ以外がクリックされた時
document.addEventListener('click', (e) => {
    // .modal-inner と .modal-btn のいずれかを含む要素以外がクリックされた場合に処理を行う
    if(!e.target.closest('.modal-inner') && !e.target.closest('.modal-btn')) {
        // modal 変数が指す要素が active クラスを持っているかどうかを判定します。そして、条件式の結果が false の場合、return 文が実行される
        // return 文により、if 文の後続の処理が中断されます。つまり、modal 変数が指す要素が active クラスを持っていない場合、その後続の処理は実行されない
        if(!modal.classList.contains('active')) return;
        modalBody.forEach((modalBody) => {
            modalBody.classList.remove('active')
        });
        modal.classList.remove('active');
    }
});