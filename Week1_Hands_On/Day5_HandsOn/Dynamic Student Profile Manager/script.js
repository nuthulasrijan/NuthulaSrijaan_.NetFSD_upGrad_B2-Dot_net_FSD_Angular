let student = {
    name: "Srijaan",
    rollNo: 1,
    marks: 89
};

function updateStudentProfile(studentObj) {
    let box = document.getElementById("Box");

    box.innerHTML =
        "Name: " + studentObj.name + "<br>" +
        "Roll No: " + studentObj.rollNo + "<br>" +
        "Marks: " + studentObj.marks;
}

function updateMarks(newMarks) {
    student.marks = newMarks;   
    updateStudentProfile(student); 
}

let btn = document.getElementById("updateBtn");

btn.addEventListener("click", function () {
    let newMarks = document.getElementById("marksInput").value;
    updateMarks(newMarks);
});

updateStudentProfile(student);