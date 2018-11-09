$('.J_add').on('click', () => {
    let val = $('.J_input-word').val();
    if ($.trim(val) === '') {
        alert('不能为空');
        return;
    }
    $('.J_items').append(`<li class="item J_item">${val}</li>`);
})