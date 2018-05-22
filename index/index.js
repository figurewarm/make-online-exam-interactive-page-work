function allTheAnswer() {
    return {
        gapFillingAnswer: [
            ['统一建模语言'],
            ['封装性', '继承性', '多态性']
        ],
        choiceQuestionAnswer: ['B', 'A'],
        multipleChoiceQuestionAnswer: ['ABD', 'ABC'],
        trueOrFalseQuestionsAnswer: ['wrong', 'right'],
        shortAnswerQuestionAnswer: '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达方式。可以是物理实体；可以是某种图形；或者是一种数学表达式'
    }
}

function gapFillingScore() {
    var socre1 = 0;
    var rightAnswer = allTheAnswer();
    var answer1 = document.getElementById('question1');
    if (answer1.value == rightAnswer.gapFillingAnswer[0][0])
        socre1 += 5;
    var answer2FirstFilling = document.getElementById('question2FirstFilling');
    var answer2SecondFilling = document.getElementById('question2SecondFilling');
    var answer2ThirdFilling = document.getElementById('question2ThirdFilling');
    for (let i = 0; i < 3; i++) {
        if (answer2FirstFilling.value == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (answer2SecondFilling.value == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (answer2ThirdFilling.value == rightAnswer.gapFillingAnswer[1][i]) {
            socre1 += 5;
            rightAnswer.gapFillingAnswer[1].splice(i, 1)
            break;
        }
    }
    return socre1;
}

function choiceQuestionScore() {
    var score2 = 0;
    var rightAnswer = allTheAnswer();
    var answer1 = document.getElementsByName('question3');
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) {
            if (answer1[i].value == rightAnswer.choiceQuestionAnswer[0])
                score2 += 10;
        }
    }
    var answer2 = document.getElementsByName('question4');
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked) {
            if (answer2[i].value == rightAnswer.choiceQuestionAnswer[1])
                score2 += 10;
        }
    }
    return score2;
}

function multipleChoiceQuestionScore() {
    var score3 = 0;
    var answer1 = document.getElementsByName('question5');
    var rightAnswer = allTheAnswer();
    var str1 = ''
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked)
            str1 += answer1[i].value;
    }
    if (str1 == rightAnswer.multipleChoiceQuestionAnswer[0])
        score3 += 10;
    var str2 = ''
    var answer2 = document.getElementsByName('question6');
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked)
            str2 += answer2[i].value;
    }
    if (str2 == rightAnswer.multipleChoiceQuestionAnswer[1])
        score3 += 10;
    return score3
}

function trueOrFalseQuestionsScore() {
    var score = 0
    var rightAnswer = allTheAnswer()
    var answer1 = document.getElementsByName('judge1');
    for (let i = 0; i < answer1.length; i++) {
        if (answer1[i].checked) {
            if (answer1[i].value == rightAnswer.trueOrFalseQuestionsAnswer[0])
                score += 10;
            //console.log(rightAnswer.trueOrFalseQuestionsAnswer[0])
        }
    }
    var answer2 = document.getElementsByName('judge2')
    for (let i = 0; i < answer2.length; i++) {
        if (answer2[i].checked) {
            if (answer2[i].value == rightAnswer.trueOrFalseQuestionsAnswer[1])
                score += 10;
        }
    }
    return score;
}

function shortAnswerQuestion() {
    var score = 0;
    var rightAnswer = allTheAnswer();
    var answer = document.getElementById('lastQuestion');
    if (answer.value == rightAnswer.shortAnswerQuestionAnswer)
        score += 20;
    return score
}

function calculateScore() {
    var score = 0;
    score += gapFillingScore();
    score += choiceQuestionScore();
    score += multipleChoiceQuestionScore()
    score += trueOrFalseQuestionsScore();
    score += shortAnswerQuestion();
    document.getElementById('score').innerHTML = score
    var name = document.getElementById('name').value;
    var idNumber = document.getElementById('idNumber').value;
    var theClass = document.getElementById('class').value;
    var str = '';
    str += '班级：' + theClass + '\n学号：' + idNumber + '\n姓名：' + name + '\n成绩为：' + score;
    alert(str)
}