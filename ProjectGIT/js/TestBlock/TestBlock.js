class TestBlock {

    render(id) {
        let variants_li = '',
            SelectClass = ""
        
        // Выводим вопрос
        const questionTitle = document.querySelector("#question_title")
        questionTitle.innerHTML = tests[id].question

        // Записываем варианты ответов в переменную
        tests[id].options.forEach((element, i) => {

            // Проверяем записан ли этот вопрос в хранилище
            if (element === localStorage.getItem(id)){
                SelectClass = "variant_block_Selected"
            } else {
                SelectClass = ""
            }
            
            variants_li += `<li id="variant_${i}" class="variant_block ${SelectClass}">${element}</li>`
        });

        const List_questions_ol = document.querySelector("#variants_list")
        List_questions_ol.innerHTML = variants_li

        const options = document.querySelectorAll(".variant_block")
        
        options.forEach(element => {
            element.addEventListener('click', () => {
                SelectClass = "variant_block_Selected"
                options.forEach(element => {
                    element.classList.remove(SelectClass)
                });
                element.classList.add(SelectClass)
                LocalStorageUtils.putAnswer(id, element.textContent)
                new questionsNav().render()
            })
        });
    }
}

new TestBlock().render(0)