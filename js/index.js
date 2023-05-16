function SurveyComponent() {
    const survey = new Survey.Model(json);
    survey.onComplete.add((sender, options) => {
        const data = sender.data;
        const element = document.createElement("a");

        element.setAttribute("href", `data:text/csv;charset=utf-8,${json2csv.parse(data)}`);
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