// Filipe Bruhns Pio Pedroso - 22.121.053-7

use('mongodbVSCodePlaygroundDB');

db.getCollection('classroom').insertOne(
    {"building": "Packard", "room_number": 101, "capacity": 500}
);
db.getCollection('classroom').insertOne(
    {"building": "Painter", "room_number": 514, "capacity": 10}
);
db.getCollection('classroom').insertOne(
    {"building": "Taylor", "room_number": 3128, "capacity": 70}
);
db.getCollection('classroom').insertOne(
    {"building": "Watson", "room_number": 100, "capacity": 30}
);
db.getCollection('classroom').insertOne(
    {"building": "Watson", "room_number": 120, "capacity": 50}
);
db.getCollection('department').insertOne(
    {"dept_name": "Biology", "building": "Watson", "budget": 90000}
);
db.getCollection('department').insertOne(
    {"dept_name": "Comp. Sci.", "building": "Taylor", "budget": 100000}
);
db.getCollection('department').insertOne(
    {"dept_name": "Elec. Eng.", "building": "Taylor", "budget": 85000}
);
db.getCollection('department').insertOne(
    {"dept_name": "Finance", "building": "Painter", "budget": 120000}
);
db.getCollection('department').insertOne(
    {"dept_name": "History", "building": "Painter", "budget": 50000}
);
db.getCollection('department').insertOne(
    {"dept_name": "Music", "building": "Packard", "budget": 80000}
);
db.getCollection('department').insertOne(
    {"dept_name": "Physics", "building": "Watson", "budget": 70000}
);
db.getCollection('course').insertOne(
    {"course_id": "BIO-101", "title": "Intro. to Biology", "dept_name": "Biology", "credits": 4}
);
db.getCollection('course').insertOne(
    {"course_id": "BIO-301", "title": "Genetics", "dept_name": "Biology", "credits": 4}
);
db.getCollection('course').insertOne(
    {"course_id": "BIO-399", "title": "Computational Biology", "dept_name": "Biology", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "CS-101", "title": "Intro. to Computer Science", "dept_name": "Comp. Sci.", "credits": 4}
);
db.getCollection('course').insertOne(
    {"course_id": "CS-190", "title": "Game Design", "dept_name": "Comp. Sci.", "credits": 4}
);
db.getCollection('course').insertOne(
    {"course_id": "CS-315", "title": "Robotics", "dept_name": "Comp. Sci.", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "CS-319", "title": "Image Processing", "dept_name": "Comp. Sci.", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "CS-347", "title": "Database System Concepts", "dept_name": "Comp. Sci.", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "EE-181", "title": "Intro. to Digital Systems", "dept_name": "Elec. Eng.", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "FIN-201", "title": "Investment Banking", "dept_name": "Finance", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "HIS-351", "title": "World History", "dept_name": "History", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "MU-199", "title": "Music Video Production", "dept_name": "Music", "credits": 3}
);
db.getCollection('course').insertOne(
    {"course_id": "PHY-101", "title": "Physical Principles", "dept_name": "Physics", "credits": 4}
);
db.getCollection('instructor').insertOne(
    {"ID": "10101", "name": "Srinivasan", "dept_name": "Comp. Sci.", "salary": 65000}
);
db.getCollection('instructor').insertOne(
    {"ID": "12121", "name": "Wu", "dept_name": "Finance", "salary": 90000}
);
db.getCollection('instructor').insertOne(
    {"ID": "15151", "name": "Mozart", "dept_name": "Music", "salary": 40000}
);
db.getCollection('instructor').insertOne(
    {"ID": "22222", "name": "Einstein", "dept_name": "Physics", "salary": 95000}
);
db.getCollection('instructor').insertOne(
    {"ID": "32343", "name": "El Said", "dept_name": "History", "salary": 60000}
);
db.getCollection('instructor').insertOne(
    {"ID": "33456", "name": "Gold", "dept_name": "Physics", "salary": 87000}
);
db.getCollection('instructor').insertOne(
    {"ID": "45565", "name": "Katz", "dept_name": "Comp. Sci.", "salary": 75000}
);
db.getCollection('instructor').insertOne(
    {"ID": "58583", "name": "Califieri", "dept_name": "History", "salary": 62000}
);
db.getCollection('instructor').insertOne(
    {"ID": "76543", "name": "Singh", "dept_name": "Finance", "salary": 80000}
);
db.getCollection('instructor').insertOne(
    {"ID": "76766", "name": "Crick", "dept_name": "Biology", "salary": 72000}
);
db.getCollection('instructor').insertOne(
    {"ID": "83821", "name": "Brandt", "dept_name": "Comp. Sci.", "salary": 92000}
);
db.getCollection('instructor').insertOne(
    {"ID": "98345", "name": "Kim", "dept_name": "Elec. Eng.", "salary": 80000}
);
db.getCollection('section').insertOne(
    {"course_id": "BIO-101", "sec_id": "1", "semester": "Summer", "year": 2017, "building": "Painter", "room_number": 514, "time_slot_id": "B"}
);
db.getCollection('section').insertOne(
    {"course_id": "BIO-301", "sec_id": "1", "semester": "Summer", "year": 2018, "building": "Painter", "room_number": 514, "time_slot_id": "A"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "building": "Packard", "room_number": 101, "time_slot_id": "H"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-101", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Packard", "room_number": 101, "time_slot_id": "F"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-190", "sec_id": "1", "semester": "Spring", "year": 2017, "building": "Taylor", "room_number": 3128, "time_slot_id": "E"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-190", "sec_id": "2", "semester": "Spring", "year": 2017, "building": "Taylor", "room_number": 3128, "time_slot_id": "A"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-315", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Watson", "room_number": 120, "time_slot_id": "D"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-319", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Watson", "room_number": 100, "time_slot_id": "B"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-319", "sec_id": "2", "semester": "Spring", "year": 2018, "building": "Taylor", "room_number": 3128, "time_slot_id": "C"}
);
db.getCollection('section').insertOne(
    {"course_id": "CS-347", "sec_id": "1", "semester": "Fall", "year": 2017, "building": "Taylor", "room_number": 3128, "time_slot_id": "A"}
);
db.getCollection('section').insertOne(
    {"course_id": "EE-181", "sec_id": "1", "semester": "Spring", "year": 2017, "building": "Taylor", "room_number": 3128, "time_slot_id": "C"}
);
db.getCollection('section').insertOne(
    {"course_id": "FIN-201", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Packard", "room_number": 101, "time_slot_id": "B"}
);
db.getCollection('section').insertOne(
    {"course_id": "HIS-351", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Painter", "room_number": 514, "time_slot_id": "C"}
);
db.getCollection('section').insertOne(
    {"course_id": "MU-199", "sec_id": "1", "semester": "Spring", "year": 2018, "building": "Packard", "room_number": 101, "time_slot_id": "D"}
);
db.getCollection('section').insertOne(
    {"course_id": "PHY-101", "sec_id": "1", "semester": "Fall", "year": 2017, "building": "Watson", "room_number": 100, "time_slot_id": "A"}
);
db.getCollection('teaches').insertOne(
    {"ID": "10101", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "10101", "course_id": "CS-315", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "10101", "course_id": "CS-347", "sec_id": "1", "semester": "Fall", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "12121", "course_id": "FIN-201", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "15151", "course_id": "MU-199", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "22222", "course_id": "PHY-101", "sec_id": "1", "semester": "Fall", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "32343", "course_id": "HIS-351", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "45565", "course_id": "CS-101", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "45565", "course_id": "CS-319", "sec_id": "1", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "76766", "course_id": "BIO-101", "sec_id": "1", "semester": "Summer", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "76766", "course_id": "BIO-301", "sec_id": "1", "semester": "Summer", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "83821", "course_id": "CS-190", "sec_id": "1", "semester": "Spring", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "83821", "course_id": "CS-190", "sec_id": "2", "semester": "Spring", "year": 2017}
);
db.getCollection('teaches').insertOne(
    {"ID": "83821", "course_id": "CS-319", "sec_id": "2", "semester": "Spring", "year": 2018}
);
db.getCollection('teaches').insertOne(
    {"ID": "98345", "course_id": "EE-181", "sec_id": "1", "semester": "Spring", "year": 2017}
);
db.getCollection('student').insertOne(
    {"ID": "00128", "name": "Zhang", "dept_name": "Comp. Sci.", "tot_cred": 102}
);
db.getCollection('student').insertOne(
    {"ID": "12345", "name": "Shankar", "dept_name": "Comp. Sci.", "tot_cred": 32}
);
db.getCollection('student').insertOne(
    {"ID": "19991", "name": "Brandt", "dept_name": "History", "tot_cred": 80}
);
db.getCollection('student').insertOne(
    {"ID": "23121", "name": "Chavez", "dept_name": "Finance", "tot_cred": 110}
);
db.getCollection('student').insertOne(
    {"ID": "44553", "name": "Peltier", "dept_name": "Physics", "tot_cred": 56}
);
db.getCollection('student').insertOne(
    {"ID": "45678", "name": "Levy", "dept_name": "Physics", "tot_cred": 46}
);
db.getCollection('student').insertOne(
    {"ID": "54321", "name": "Williams", "dept_name": "Comp. Sci.", "tot_cred": 54}
);
db.getCollection('student').insertOne(
    {"ID": "55739", "name": "Sanchez", "dept_name": "Music", "tot_cred": 38}
);
db.getCollection('student').insertOne(
    {"ID": "70557", "name": "Snow", "dept_name": "Physics", "tot_cred": 0}
);
db.getCollection('student').insertOne(
    {"ID": "76543", "name": "Brown", "dept_name": "Comp. Sci.", "tot_cred": 58}
);
db.getCollection('student').insertOne(
    {"ID": "76653", "name": "Aoi", "dept_name": "Elec. Eng.", "tot_cred": 60}
);
db.getCollection('student').insertOne(
    {"ID": "98765", "name": "Bourikas", "dept_name": "Elec. Eng.", "tot_cred": 98}
);
db.getCollection('student').insertOne(
    {"ID": "98988", "name": "Tanaka", "dept_name": "Biology", "tot_cred": 120}
);
db.getCollection('takes').insertOne(
    {"ID": "00128", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "00128", "course_id": "CS-347", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "A-"}
);
db.getCollection('takes').insertOne(
    {"ID": "12345", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "C"}
);
db.getCollection('takes').insertOne(
    {"ID": "12345", "course_id": "CS-190", "sec_id": "2", "semester": "Spring", "year": 2017, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "12345", "course_id": "CS-315", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "12345", "course_id": "CS-347", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "19991", "course_id": "HIS-351", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "B"}
);
db.getCollection('takes').insertOne(
    {"ID": "23121", "course_id": "FIN-201", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "C+"}
);
db.getCollection('takes').insertOne(
    {"ID": "44553", "course_id": "PHY-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "B-"}
);
db.getCollection('takes').insertOne(
    {"ID": "45678", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "F"}
);
db.getCollection('takes').insertOne(
    {"ID": "45678", "course_id": "CS-101", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "B+"}
);
db.getCollection('takes').insertOne(
    {"ID": "45678", "course_id": "CS-319", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "B"}
);
db.getCollection('takes').insertOne(
    {"ID": "54321", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "A-"}
);
db.getCollection('takes').insertOne(
    {"ID": "54321", "course_id": "CS-190", "sec_id": "2", "semester": "Spring", "year": 2017, "grade": "B+"}
);
db.getCollection('takes').insertOne(
    {"ID": "55739", "course_id": "MU-199", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "A-"}
);
db.getCollection('takes').insertOne(
    {"ID": "76543", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "76543", "course_id": "CS-319", "sec_id": "2", "semester": "Spring", "year": 2018, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "76653", "course_id": "EE-181", "sec_id": "1", "semester": "Spring", "year": 2017, "grade": "C"}
);
db.getCollection('takes').insertOne(
    {"ID": "98765", "course_id": "CS-101", "sec_id": "1", "semester": "Fall", "year": 2017, "grade": "C-"}
);
db.getCollection('takes').insertOne(
    {"ID": "98765", "course_id": "CS-315", "sec_id": "1", "semester": "Spring", "year": 2018, "grade": "B"}
);
db.getCollection('takes').insertOne(
    {"ID": "98988", "course_id": "BIO-101", "sec_id": "1", "semester": "Summer", "year": 2017, "grade": "A"}
);
db.getCollection('takes').insertOne(
    {"ID": "98988", "course_id": "BIO-301", "sec_id": "1", "semester": "Summer", "year": 2018}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "00128", "i_ID": "45565"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "12345", "i_ID": "10101"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "23121", "i_ID": "76543"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "44553", "i_ID": "22222"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "45678", "i_ID": "22222"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "76543", "i_ID": "45565"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "76653", "i_ID": "98345"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "98765", "i_ID": "98345"}
);
db.getCollection('advisor').insertOne(
    {"s_ID": "98988", "i_ID": "76766"}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "A", "day": "M", "start_hr": 8, "start_min": 0, "end_hr": "8", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "A", "day": "W", "start_hr": 8, "start_min": 0, "end_hr": "8", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "A", "day": "F", "start_hr": 8, "start_min": 0, "end_hr": "8", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "B", "day": "M", "start_hr": 9, "start_min": 0, "end_hr": "9", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "B", "day": "W", "start_hr": 9, "start_min": 0, "end_hr": "9", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "B", "day": "F", "start_hr": 9, "start_min": 0, "end_hr": "9", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "C", "day": "M", "start_hr": 11, "start_min": 0, "end_hr": "11", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "C", "day": "W", "start_hr": 11, "start_min": 0, "end_hr": "11", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "C", "day": "F", "start_hr": 11, "start_min": 0, "end_hr": "11", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "D", "day": "M", "start_hr": 13, "start_min": 0, "end_hr": "13", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "D", "day": "W", "start_hr": 13, "start_min": 0, "end_hr": "13", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "D", "day": "F", "start_hr": 13, "start_min": 0, "end_hr": "13", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "E", "day": "T", "start_hr": 10, "start_min": 30, "end_hr": "11", "end_min": 45}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "E", "day": "R", "start_hr": 10, "start_min": 30, "end_hr": "11", "end_min": 45}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "F", "day": "T", "start_hr": 14, "start_min": 30, "end_hr": "15", "end_min": 45}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "F", "day": "R", "start_hr": 14, "start_min": 30, "end_hr": "15", "end_min": 45}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "G", "day": "M", "start_hr": 16, "start_min": 0, "end_hr": "16", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "G", "day": "W", "start_hr": 16, "start_min": 0, "end_hr": "16", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "G", "day": "F", "start_hr": 16, "start_min": 0, "end_hr": "16", "end_min": 50}
);
db.getCollection('time_slot').insertOne(
    {"time_slot_id": "H", "day": "W", "start_hr": 10, "start_min": 0, "end_hr": "12", "end_min": 30}
);
db.getCollection('prereq').insertOne(
    {"course_id": "BIO-301", "prereq_id": "BIO-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "BIO-399", "prereq_id": "BIO-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "CS-190", "prereq_id": "CS-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "CS-315", "prereq_id": "CS-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "CS-319", "prereq_id": "CS-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "CS-347", "prereq_id": "CS-101"}
);
db.getCollection('prereq').insertOne(
    {"course_id": "EE-181", "prereq_id": "PHY-101"}
);