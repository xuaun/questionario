function animate(show) {
    const element = document.getElementById("surveyElement");
    if (!!element) {
        const list = element.classList;
        if (!list.contains("expandable")) {
            list.add("expandable");
        }
        if (show) {
            list.add("expandable_show");
        } else {
            list.remove("expandable_show");
        }
    }
}

var doAnimantion = true;
function SurveyComponent() {
    const survey = new Survey.Model(json);

    survey.onComplete.add((sender, options) => {
        const data = sender.data;

        const fields = ['Nome', 'Idade', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15'];

        const element = document.createElement("a");

        element.setAttribute("href", `data:text/csv;charset=utf-8,${json2csv.parse(data,{fields})}`);
        element.setAttribute("download", "filename.csv");
        element.style.display = "none";

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });

    survey.onCurrentPageChanging.add(function (sender, options) {
        if (!doAnimantion) return;
        options.allowChanging = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.currentPage = options.newCurrentPage;
            doAnimantion = true;
        }, 500);
        animate(false);
    });
    survey.onCurrentPageChanged.add(function (sender) {
        animate(true);
    });
    survey.onCompleting.add(function (sender, options) {
        if (!doAnimantion) return;
        options.allowComplete = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.doComplete();
            doAnimantion = true;
        }, 500);
        animate(true);
    });
    survey.onAfterRenderSurvey.add((sender, options) => {
        animate(true);
    });
    
    return (<SurveyReact.Survey model={survey} />);
}

const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);