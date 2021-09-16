const Hook = require('../../models/Hook')

exports.create = async (req, res) => {
    try {
        const hook = new Hook({})
        hook.url = hook._id
        await hook.save()
        return res.sendStatus(200)
    } catch (error) {
        res.send({error: `error in create hook: ${error}`})
    }
}

exports.read = async (req, res) => {
    try {
        let hooks = await Hook.find({})
        return res.send({body: hooks})
    } catch (error) {
        res.send({error: `error in read hooks: ${error}`})
    }
}

exports.delete = async (req, res) => {
    try {
        let hook = await Hook.findById(req.params.id)
        if(!hook){
            return res.sendStatus(404)
        }
        await hook.delete()

        return res.sendStatus(200)
    } catch (error) {
        res.send({error: `error in delete hook: ${error}`})
    }
}
