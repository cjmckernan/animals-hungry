import mongoConnect from '../../../utils/mongoConnect'
import Animal from '../../../models/Animal'
mongoConnect();

export default async (req, res) => {
    const {method } = req;

    switch(method){
        case 'GET':
            try {
                const animals = await Animal.find({})
                res.status(200).json({success: true, data: animals})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'POST':
            try {
                const animal = await Animal.create(req.body)
                res.status(201).json({success: true, data: animal})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }
}