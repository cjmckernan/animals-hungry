import mongoConnect from '../../../utils/mongoConnect'
import Animal from '../../../models/Animal'
mongoConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch(method) { 
        case 'GET':
            try {
                const animal = await Animal.findById(id);
                if(!animal){
                    return res.status(400).json({success : false});
                }
                res.status(200).json({success: true, data: animal})
            } catch (error) {
                return res.status(400).json({success : false});
            }
            break;
        case 'PUT': 
            try {
                const animal = await Animal.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if(!animal){
                    return res.status(400).json({success : false});
                }
                res.status(200).json({success: true, data: animal})
            } catch (error) {
                return res.status(400).json({success : false});
            }
            break;
        case 'DELETE': 
            try {
                const deletedAnimal = await Animal.deleteOne({_id: id})
                if(!deletedAnimal){
                    return res.status(400).json({success : false});
                }
                res.status(200).json({success: true, data: {}})
            } catch (error) {
                return res.status(400).json({success : false});
            }
            break;
        default:
            return res.status(400).json({success : false});
            break;
    }
}