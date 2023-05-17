function SurveyComponent() {
    const survey = new Survey.Model(json);
    survey.onComplete.add((sender, options) => {
        const data = sender.data;
        console.log(data);

        const fields = ['Nome', 'Idade', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15'];

        const element = document.createElement("a");

        element.setAttribute("href", `data:text/csv;charset=utf-8,${json2csv.parse(data,{fields})}`);
        element.setAttribute("download", "filename.csv");
        element.style.display = "none";

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
    return (<SurveyReact.Survey model={survey} />);
}

const root = ReactDOM.createRoot(document.getElementById("surveyElement"));
root.render(<SurveyComponent />);