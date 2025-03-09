const schedule = {
    "Day 1": ["CLOUD COMP 802", "DSA Practice", "SQL Practice", "Sales Project", "OPEN E", "SOFTWARE LAB", "FORAGE - Banking", "FORAGE - Goldman Sachs", "Reinforcement Learning", "Snacks / Break", "FORAGE - PWC BI", "Attendance", "BCG Strategy Consulting", "Dinner", "Reinforcement Learning"],
    "Day 2": ["DSA Practice", "FORAGE - Goldman Sachs", "Internship Work", "SOFTWARE", "Internship Work", "OPEN E 403", "AWS Cloud Educate", "Accenture Analytics", "SHE for AI", "Snacks / Break", "AWS Cloud Educate", "Attendance", "AWS Cloud Educate", "Dinner", "SHE for AI"],
    "Day 3": ["IMG VDO 301", "CLOUD", "RLT", "AWS Cloud Educate", "FORAGE - PWC Power BI", "Internship Work", "SQL + DSA", "Sales Project", "Sales Project", "Snacks / Break", "Internship Tasks", "Attendance", "Internship Work", "Dinner", "Sales Project"],
    "Day 4": ["REINFORCE LAB", "AWS Cloud Educate", "BCG Strategy Consulting", "RLT", "SOFTWARE", "CN", "FORAGE - TATA Viz", "BCG Strategy Consulting", "Internship Work", "Snacks / Break", "Internship Tasks", "Attendance", "Sales Project", "Dinner", "Internship Tasks"],
    "Day 5": ["CN", "IMG VDO", "DSA Practice", "Internship Work", "DSA Practice", "AWS Cloud Educate", "Internship Work", "PWC Power BI", "Internship Work", "Snacks / Break", "AWS Cloud Educate", "Attendance", "Internship Work", "Dinner", "Internship Tasks"],
    "Saturday": ["(College)", "(College)", "(College)", "(College)", "(College)", "Lunch", "Internship Work", "Internship Work", "BCG Strategy Consulting", "Snacks", "Internship Work", "Attendance", "AWS Cloud Educate", "Dinner", "BCG Strategy Consulting"],
    "Sunday": ["Self-Study", "Self-Study", "Self-Study", "Self-Study", "Self-Study", "Lunch", "BCGX Data Science", "AWS Cloud Educate", "AWS Cloud Educate", "Snacks", "AWS Cloud Educate", "Attendance", "AWS Cloud Educate", "Dinner", "AWS Cloud Educate"]
};

function showSchedule() {
    const day = document.getElementById("daySelector").value;
    const table = document.getElementById("scheduleTable");
    table.innerHTML = "<tr><th>Time Slot</th><th>Activity</th></tr>";
    
    const timeSlots = [
        "08:00 - 08:50", "08:50 - 09:40", "09:40 - 10:35", "10:35 - 11:30", "11:30 - 12:25", "12:25 - 01:20", "01:20 - 02:15", "02:15 - 03:10", "03:10 - 04:30", "04:30 - 05:30", "05:30 - 06:50", "06:50 - 07:00", "07:00 - 08:00", "08:00 - 09:00", "09:00 - 11:00"
    ];
    
    schedule[day].forEach((activity, index) => {
        let row = table.insertRow();
        row.insertCell(0).innerText = timeSlots[index];
        row.insertCell(1).innerText = activity;
    });
}

showSchedule();
