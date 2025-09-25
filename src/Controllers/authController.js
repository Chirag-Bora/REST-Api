const db = require("../config/db");

// All Student Data  || GET
exports.studentData = async (req, res)=>{
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

//Get Student by Id  || POST
exports.getStudentById = async(req, res)=>{
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

//Create Student || POST
exports.createStudent = async(req, res)=>{
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

//Update student data || PUT
exports.updateStudent = async (req,res)=>{
  try{
    const studentId = req.body.id;
    if(!studentId){
        return res.status(404).send({
            success:false,
            message:'Invalid Id or provide id'
        });
    }
    const {name, branch, email } = req.body;
    const data = await db.query('UPDATE student SET name = ?, branch = ?, email = ? WHERE id=?',[name, branch, email,studentId]);
    if(!data){
        return res.status(500).send({
            success:false,
            message:'Error in Update data'
        })
    }
    res.status(200).send({
        success:true,
        message: 'Student Details Updated ',
        data
    })

  }catch(error){
    console.log(error);
    res.status(500).send({
        success: false,
        message:'Error in update data',
        error
    })
  }
}

//DELETE DATA || DELETE
exports.deleteStudent = async (req,res)=>{
    try {
        const studentId = req.params.id;
        if(!studentId){
            return res.status(404).send({
                success:false,
                message:'Please provide student id',
            })
        }
        await db.query('DELETE FROM student WHERE id=?',[studentId])
        res.status(200).send({
            success:true,
            message:'Student Deleted Successfully'
        })       
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in delete student api',
            error
        })        
    }
}
