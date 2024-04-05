class questionsNav {

    Render_question(id) {
        new TestBlock().render(id)
    }


    render() {
        let answeredCube = "",
            questions_blocks = ""

        const selector = document.querySelector("#questions_flexBlock"),
            questionLeft = document.querySelector("#question_left")

        // Пишем сколько осталось ответить вопросов
        questionLeft.innerHTML = `${localStorage.length}/${tests.length}`


        for (let index = 0; index < tests.length; index++) {
            if (localStorage.getItem(index) != null) {
                answeredCube = "choice_question_answered"
            } else {
                answeredCube = ""
            }

            questions_blocks += `
                <div class="choice_question center ${answeredCube}" onclick="questNavClass.Render_question(${index})">${index+1}</div>
            `
        }
        selector.innerHTML = questions_blocks
    }
}
const questNavClass = new questionsNav()
questNavClass.render()