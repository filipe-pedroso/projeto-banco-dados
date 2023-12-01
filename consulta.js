// Filipe Bruhns Pio Pedroso - 22.121.053-7

db.student.aggregate([
    {
        $lookup: {
            from: "advisor",
            localField: "id",
            foreignField: "s_id",
            as: "advisor"
        }
    },
    { $unwind: "$advisor" },
    {
        $lookup: {
            from: "instructor",
            localField: "advisor.i_id",
            foreignField: "id",
            as: "instructor"
        }
    },
    { $unwind: "$instructor" },
    {
        $lookup: {
            from: "takes",
            localField: "id",
            foreignField: "id",
            as: "takes"
        }
    },
    { $unwind: "$takes" },
    {
        $lookup: {
            from: "course",
            localField: "takes.course_id",
            foreignField: "course_id",
            as: "course"
        }
    },
    { $unwind: "$course" },
    {
        $project: {
            "Estudante": "$name",
            "Instrutor": "$instructor.name",
            "Disciplina": "$course.title"
        }
    }
]);

db.classroom.aggregate([
    {
        $lookup: {
            from: "section",
            localField: "room_number",
            foreignField: "room_number",
            as: "section"
        }
    },
    { $unwind: "$section" },
    {
        $lookup: {
            from: "teaches",
            localField: "section.course_id",
            foreignField: "course_id",
            as: "teaches"
        }
    },
    { $unwind: "$teaches" },
    {
        $lookup: {
            from: "instructor",
            localField: "teaches.id",
            foreignField: "id",
            as: "instructor"
        }
    },
    { $unwind: "$instructor" },
    {
        $project: {
            "name": "$instructor.name",
            "building": 1,
            "room_number": 1
        }
    },
    {
        $group: {
            _id: { "name": "$name", "building": "$building", "room_number": "$room_number" },
            uniqueIds: { $addToSet: "$_id" },
            count: { $sum: 1 }
        }
    },
    {
        $match: {
            count: { $gt: 1 }
        }
    }
]);

db.department.aggregate([
    {
        $lookup: {
            from: "student",
            localField: "dept_name",
            foreignField: "dept_name",
            as: "students"
        }
    },
    { $unwind: "$students" },
    {
        $lookup: {
            from: "instructor",
            localField: "dept_name",
            foreignField: "dept_name",
            as: "instructors"
        }
    },
    { $unwind: "$instructors" },
    {
        $group: {
            _id: "$dept_name",
            count: { $sum: 1 },
            avgSalary: { $avg: "$instructors.salary" }
        }
    },
    {
        $project: {
            dept_name: "$_id",
            budget: 1,
            studentCount: "$count",
            averageSalary: "$avgSalary"
        }
    }
]);