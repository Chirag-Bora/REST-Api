const db = require("../config/db");

// All Student Data
const studentData = async (req, res)=>{
    try{
        const data  =  await db.query("SELECT * FROM student")
        if(!data){
            return  res.status(404).send({
                    success:false,
                    message:'No Record Found'
                    });
        }
        res.status(200).send({
            success:true,
            message:"All Student Records",
            data: data[0],
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Get All student Api',
            error:error
        });
    }
}

//Get Student by Id
const getStudentById = async(req, res)=>{
    try{
        const studentId = req.params.id
        console.log(studentId);
        if(!studentId){
            return res.status(404).send({
                success:false,
                message:'inaviald student id or provide student id'
            })
        }
        const data = await db.query('SELECT * FROM student WHERE id=?',[studentId])
        if (!data){
            return res.status(404).send({
                success:false,
                message:'No Records found'
            })
        }
        res.status(200).send({
            success:true,
            studentDetails:data[0],
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get  student by id API',
            error
        })
    }
}


const createStudent = async(req, res)=>{
    try{
        const {name, branch, email} = req.body;
        console.log(req.body);
        if(!name || !branch || !email){
            return res.status(500).send({
                success:false,
                message:'Please Provide All Fields'
            });
        }
        const data =  await db.query("INSERT INTO STUDENT (name, branch, email) Values (?,?,?)",[name,branch,email]);
        if(!data){
            res.status(404).send({
                success: false,
                message:'Error in INSERT QUERY',
            })
        }
        res.status(201).send({
            sucess:true,
            message:'New Student Record Added',
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Create Student API',
            error
        })
    }
}
module.exports = {studentData,getStudentById, createStudent};