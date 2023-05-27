const json = {
    title: "", showProgressBar: "", goNextPageAutomatic: true, showNavigationButtons: true,

    pages: [
        {
            "name": "page1",
            "clearInvisibleValues": "onHidden",
            "elements": [
                {
                    "type": "text",
                    "name": "Nome",
                    "title": "Nome",
                },
                {
                    "type": "text",
                    "name": "Idade",
                    "title": "Idade",
                    "inputType": "number",
                },
                {
                    "type": "radiogroup",
                    "name": "Comecar-teste",
                    "title": false,
                    "choices": ["Começar"],
                    "visibleIf": "{Idade} >= 0 and {Nome} != ''",
                },
                {
                    "visibleIf": "{Idade} >= 0 and {Nome} != '' and {Comecar-teste} = 'checked'",
                    "isRequired": true
                }
            ]
        },
        {
            "title": "Questão teste",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "T1",
                    "title": "1",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "title": "Questão teste",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "T2",
                    "title": "2",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "title": "Questão teste",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "T3",
                    "title": "3",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P1",
                    "title": "1",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P2",
                    "title": "2",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P3",
                    "title": "3",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P4",
                    "title": "4",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P5",
                    "title": "5",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P6",
                    "title": "6",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P7",
                    "title": "7",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P8",
                    "title": "8",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P9",
                    "title": "9",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P10",
                    "title": "10",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P11",
                    "title": "11",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P12",
                    "title": "12",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P13",
                    "title": "13",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P14",
                    "title": "14",
                    "choices": ["A", "B", "C"]
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "P15",
                    "title": "15",
                    "choices": ["A", "B", "C"]
                }
            ]
        }
    ],
    completedHtml: "Obrigado por participar!"
    /* <p>Respostas:</p><p>1: <b>{P1}</b>.</p><p>2: <b>{P2}</b>.</p><p>3: <b>{P3}</b>.</p><p>4: <b>{P4}</b>.</p><p>5: <b>{P5}</b>.</p><p>6: <b>{P6}</b>.</p><p>7: <b>{P7}</b>.</p><p>8: <b>{P8}</b>.</p><p>9: <b>{P9}</b>.</p><p>10: <b>{P10}</b>.</p><p>11: <b>{P11}</b>.</p><p>12: <b>{P12}</b>.</p><p>13: <b>{P13}</b>.</p><p>14: <b>{P14}</b>.</p><p>15: <b>{P15}</b>.</p> */
};
