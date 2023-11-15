// import "./styles.css";

const onClickAdd = () => {
    //入力を受け取り初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value ="";
    createIncompleteList(inputText);
};
    
//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target)
};

//未完了のリストに追加する関数
const createIncompleteList = (text) => {
    //divタグの生成
    const div = document.createElement("div")
    div.className = "list-low"

    //liタグの生成
    const li = document.createElement("li")
    li.innerText = text

    //buttonタグの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //未完了リストから要素を削除
        deleteFromIncompleteList(completeButton.parentNode)
        //完了リストに追加する
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;
        //divvタグを初期化
        addTarget.textContent = null

        //liタグの生成
        const li = document.createElement("li");
        li.innerText = text

        // //buttonタグの生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";

        backButton.addEventListener("click", () => {
            //戻したタスクを完了リストから削除
            const backButtonTaret = backButton.parentNode;
            document.getElementById("complete-list").removeChild(backButtonTaret);

            //完了したタスクを戻す
            const text = backButtonTaret.firstElementChild.innerText;
            createIncompleteList(text)


        })


        // //完了リストに追加するdivを生成
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        document.getElementById("complete-list").appendChild(addTarget)

    })

    //削除タグの生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //削除ボタンの親タグ(div)を未完了リストから削除
        //const deleteTaret = deleteButton.parentNode;
        //document.getElementById("incomplete-list").removeChild(deleteTaret)
        deleteFromIncompleteList(deleteButton.parentNode)
    })

    //divタグの下にliタグを生成
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //ulタグの下に未完了のリストを追加
    document.getElementById("incomplete-list").appendChild(div)
};


document.getElementById("add-button").addEventListener("click",() => onClickAdd());



