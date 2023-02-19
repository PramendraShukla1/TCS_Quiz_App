import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, {answers} from "../database/data.js"




export async function getQuestions(req,res){
   try {
    const q =await Questions.find();
    res.json(q)
   } catch (error) {
    res.json({error})
   }
}

/**insert questions */
export async function insertQuestions(req,res){
   try {
    Questions.insertMany({ questions, answers}, function(err, data){
        res.json({msg : "Data Saved Successfully"})
    })
   } catch (error) {
    res.json({error})
   }
}

/**Delete all Questions */
export async function dropQuestion(req,res){
    try {
        await Questions.deleteMany();
        res.json({msg : "Question Deleted Successfully!"})
    } catch (error) {
        res.json({error})
    }
}

/**get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({error})
    }
}

/**Post all Results */
export async function storeResult(req,res){
    try {
        const {username, result, attempts, points, achived} = req.body;
        if(!username && !result) throw Error("Data not Provided!");
        Results.create({username, result, attempts, points, achived}, function(err,data){
            res.json({msg : "Result saved Successfully!"})
        })
    } catch (error) {
        res.json({error})
    }
}

/**Delete all result */

export async function dropResult (req, res){
try {
    await Results.deleteMany();
    res.json({msg : "Result deleted successfully!"})
} catch (error) {
    res.json({error})
}
}