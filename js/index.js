function toggleZoom() {
    var htmlElement = document.querySelector("html");

    if (htmlElement.classList.contains("zoom-disabled")) {
        htmlElement.classList.remove("zoom-disabled");
    } else {
        htmlElement.classList.add("zoom-disabled");
    }
}

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
            setTimeout(function(){
                startCountdown();
            }, 1500);
        }
    }
}

var currentPage = 0;
var doAnimantion = true;
function SurveyComponent() {
    const survey = new Survey.Model(json);

    survey.onComplete.add((sender, options) => {
        const data = sender.data;
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}/${month}/${year}`;

        const dataWithDate = {
            "Data": currentDate,
            ...data
        };

        const element = document.createElement("a");

        element.setAttribute("href", `data:text/csv;charset=utf-8,${json2csv.parse([dataWithDate])}`);
        element.setAttribute("download", "Avaliacao_Compreensao_Libras.csv");
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
            currentPage = options.newCurrentPage;
            sender.currentPage = options.newCurrentPage;
            doAnimantion = true;
        }, 4000);
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
        }, 1000);
        animate(true);
    });
    survey.onAfterRenderSurvey.add((sender, options) => {
        animate(true);
    });

    return (<SurveyReact.Survey model={survey} />);
}

const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);

/* function startCountdown() {
    var countdownElement = document.createElement("div");
    countdownElement.className = "countdown";
    countdownElement.innerText = "5";
    document.body.appendChild(countdownElement);

    var countdown = 5;
    var countdownInterval = setInterval(function () {
        countdown--;
        countdownElement.innerText = countdown.toString();

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(countdownElement);
            SurveyComponent().survey.nextPage();
        }
    }, 1000);
} */

function startCountdown() {
    var countdownContainer = document.createElement("div");
    countdownContainer.className = "countdown-container";
    document.body.appendChild(countdownContainer);

    var countdownElement = document.createElement("div");
    if (currentPage.num >= 4&& currentPage.num <= 20) {
        countdownElement.className = "countdown";
    } else {
        countdownElement.className = "countdown-teste";
    }
    countdownContainer.appendChild(countdownElement);

    var countdownFiller = document.createElement("div");
    if (currentPage.num >= 4&& currentPage.num <= 20) {
        countdownFiller.className = "filler";
    } else  {
        countdownFiller.className = "filler-teste";
    }
    countdownContainer.appendChild(countdownFiller);

    var countdownMask = document.createElement("div");
    countdownMask.className = "mask";
    countdownContainer.appendChild(countdownMask);

    var countdown = 3;
    var countdownInterval = setInterval(function () {
        countdown--;

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(countdownContainer);
            SurveyComponent().survey.nextPage();
        }
    }, 1000);
}
