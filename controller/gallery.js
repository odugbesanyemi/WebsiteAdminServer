import { getAllGalleryImages, getCategories, getGalleryImagesById, removeGalleryCategory, setGallerycategory, updateGalleryCategory, getGalleryCategoriesById, setGalleryImages, deleteGalleryImage } from "../model/gallery.js"

export const getGalleryCategoriesCtrl = (req, res) => {
    getCategories((err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.send(results)
        }
    })
}

export const getGalleryImagesByIdCtrl = (req, res) => {
    const id = req.params.categoryid
    getGalleryImagesById(id, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.send(results)
        }
    })
}

export const getAllGalleryImagesCtrl = (req, res) => {
    getAllGalleryImages((err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.send(results)
        }
    })
}

export const setGallerycategoryCtrl = (req, res) => {
    const data = req.body
    setGallerycategory(data, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.sendStatus(200)
        }
    })
}

export const removeGalleryCategoryCtrl = (req, res) => {
    const id = req.params.id
    console.log(id)
    removeGalleryCategory(id, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.sendStatus(200)
        }
    })
}

export const updateGalleryCategoryCtrl = (req, res) => {
    const id = req.params.id
    const data = req.body
    updateGalleryCategory(id, data, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.sendStatus(200)
        }
    })
}

export const getGalleryCategoriesByIdCtrl = (req, res) => {
    const id = req.params.id
    getGalleryCategoriesById(id, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.send(results)
        }
    })
}

export const setGalleryImagesCtrl = (req, res) => {
    const id = req.params.id
    const payload = req.body
    let successCount = 0
    for (const item of payload) {
        const data = { category_id: id, img_name: item }
        setGalleryImages(data, (err, results) => {
            if (err) {
                console.error(err) // log the error to the console
                return res.status(500).send('Internal server error') // send an error response
            }
            successCount++
            if (successCount === payload.length) {
                return res.status(200).send('Gallery images updated successfully') // send a success response once all iterations have completed
            }
        })
    }

}

export const deleteGalleryImageCtrl = (req, res) => {
    const id = req.params.id
    deleteGalleryImage(id, (err, results) => {
        if (err) {
            res.sendStatus(400)
        } else {
            res.sendStatus(200)
        }
    })
}