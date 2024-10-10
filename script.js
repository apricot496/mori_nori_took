$(function () {
    var area = $('#area');

    // JSONファイルを取得してデータを処理
    $.getJSON("took.json", function (data) {
        // 配列をループして、各オブジェクトの内容を出力
        data.forEach(function (item) {
            var took = item.took.replace(/\n/g, '<br>'); // 改行をHTMLの<br>タグに変換

            // 各会社のデータを .company-box というクラスで囲む
            var content = '<div class="company-box">' + took + '</div>';

            // positionに基づいてコンテナを選択
            if (item.position === "left") {
                $(area).append('<div class="left-container">' + content + '</div>');
            } else {
                $(area).append('<div class="right-container">' + content + '</div>');
            }
        });
    });
});
