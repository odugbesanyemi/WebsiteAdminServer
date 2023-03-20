import express from "express";
import { loginCtrl, getAllImages, saveGuestUserCtrl, refreshTokenCtrl } from "../controller/controller.js";
import { tokenAuth } from "../middlware/middleware.js";
import { getReport } from "../controller/googleAnalytics.js";
import {
  getAllPostsCtrl,
  getPostsByStatusCtrl,
  searchPostByTitleCtrl,
  initPostCtrl,
  getPostByIdCtrl,
  updatePostByIdCtrl,
  removePostCtrl,
  getPostCategoriesCtrl,
  getPostByTypeCtrl,
} from "../controller/posts.js";
import { activateUserCtrl, changePasswordCtrl, getAllSubscribersCtrl, getAllUsersCtrl, getUserByIdCtrl, setNewSubscriberCtrl, setNewUserCtrl, updateUsersCtrl } from "../controller/user.js";
import {
  getAllCategoriesCtrl,
  getCategoriesByIdCtrl,
  addCategoriesToPostCtrl,
  searchCategoriesCtrl,
  AddNewCategoryCtrl,
  removeCategoryCtrl,
  categoryPostsCtrl,
  categories_hasCategoriesCtrl,
} from "../controller/categories.js";
import { AddNewTagsCtrl, getAllTagsCtrl, removeTagsCtrl, searchTagsCtrl, TagsPostsCtrl } from "../controller/tags.js";
import { upload } from "../middlware/multer.js";
import { saveImagesCtrl, uploadProfileImageCtrl } from "../controller/uploadImage.js";
import { delFileCtrl, fileQuotaCtrl, getFilesCtrl } from "../controller/files.js";
import { addFormResponseCtrl, getAllFormsCtrl, getFormResponseCtrl } from "../controller/forms.js";
import { createNotificationCtrl, getUserNotificationCtrl, updateUserNotificationCtrl } from "../controller/notification.js";
import { delCommentCtrl, getAllCommentsCtrl, replyCommentCtrl, updateCommentCtrl } from "../controller/comments.js";
import { newsletter } from "../controller/mail.js";
import { getSitePreferenceCtrl, updateSitePreferenceCtrl } from "../controller/site_preferences.js";
import { changeDefaultCtrl, getAllTemplatesCtrl, getDefaultTemplateCtrl, getPostTypesCtrl, getPostTypesTemplatesCtrl, getTemplatesByIdCtrl } from "../controller/templates.js";
import { deleteGalleryImageCtrl, getAllGalleryImagesCtrl, getGalleryCategoriesByIdCtrl, getGalleryCategoriesCtrl, getGalleryImagesByIdCtrl, removeGalleryCategoryCtrl, setGallerycategoryCtrl, setGalleryImagesCtrl, updateGalleryCategoryCtrl } from "../controller/gallery.js";
import { createTokenCtrl, resetPasswordCtrl } from "../controller/reset_password.js";
import { addPostLikesCtrl, getPostLikesCtrl, removePostLikesCtrl } from "../controller/post_meta.js";
const router = express.Router();


router.get("/metrics", getReport);
router.post("/login", loginCtrl);
router.get("/isloggedin", tokenAuth);
router.get("/refresh-token",refreshTokenCtrl)
// users
router.get("/user/:id", getUserByIdCtrl);
router.get("/users",getAllUsersCtrl)
router.post("/user/guest",saveGuestUserCtrl);
router.post("/users",setNewUserCtrl)
router.post("/user/:id",updateUsersCtrl)
router.post("/user/profile/upload/:id",upload.single('file'),uploadProfileImageCtrl)
router.post("/user/password/:id",changePasswordCtrl)
router.post("/activate-user",activateUserCtrl)
// categories
router.get("/categories", getAllCategoriesCtrl);
router.get("/categories/:id", getCategoriesByIdCtrl);
router.get("/search/categories", searchCategoriesCtrl);
router.post("/categories", AddNewCategoryCtrl);
router.get("/categories/remove/:id", removeCategoryCtrl);
router.get("/categories-has-posts",categoryPostsCtrl)
router.get("/categories_hasCategories",categories_hasCategoriesCtrl)
// posts
router.post("/post/update/:id", updatePostByIdCtrl);
router.post("/post-has-categories/:id", addCategoriesToPostCtrl);
router.get("/post/remove/:id", removePostCtrl);
router.get("/posts",getPostCategoriesCtrl)
router.get("/post/:id", getPostByIdCtrl);
router.get("/getposts/all", getAllPostsCtrl);
router.post("/getpostsbystatus", getPostsByStatusCtrl);
router.get("/searchPostByTitle", searchPostByTitleCtrl);
router.post("/initpost", initPostCtrl);
router.post("/post/type",getPostByTypeCtrl)
// tags
router.get('/search/tags',searchTagsCtrl);
router.get('/tags',getAllTagsCtrl);
router.post("/tags",AddNewTagsCtrl);
router.get("/tags/remove/:id",removeTagsCtrl);
router.get("/tags-has-posts",TagsPostsCtrl);
// files
router.get("/images", getAllImages);
router.post("/uploadImages",upload.array('files'),saveImagesCtrl);
router.get("/files",getFilesCtrl);
router.get("/files/quota",fileQuotaCtrl),
router.post("/files/delete/:id",delFileCtrl)
// notifications
router.post("/notification/:id",updateUserNotificationCtrl)
router.post("/notification", createNotificationCtrl)
router.get("/notification/:id",getUserNotificationCtrl)
router.post("/notification/status/:id")
// forms
router.get("/forms",getAllFormsCtrl)
router.get("/forms/response/:tableName",getFormResponseCtrl)
router.post("/forms/:tableName",addFormResponseCtrl)
// comments
router.get("/comments",getAllCommentsCtrl)
router.post("/comments/update/:id",updateCommentCtrl)
router.post("/comments/delete/:id",delCommentCtrl)
router.post("/comments/reply",replyCommentCtrl)
// post_meta
router.get("/comments/likes/:id",getPostLikesCtrl)
router.post("/comments/likes",addPostLikesCtrl)
router.post("/comments/likes/remove/:id",removePostLikesCtrl)
// subscribers
router.get("/subscribers",getAllSubscribersCtrl)
router.post("/newsletter",newsletter)
router.post("/subscriber/new",setNewSubscriberCtrl)
// site preferences
router.get("/site-preferences/:id",getSitePreferenceCtrl)
router.post("/site-preferences/update/:id",updateSitePreferenceCtrl)
// templates
router.get("/templates/post-type",getPostTypesCtrl)
router.get("/templates/post-type/:id",getPostTypesTemplatesCtrl)
router.get("/templates/:type/:id",getTemplatesByIdCtrl)
router.get("/templates",getAllTemplatesCtrl)
router.post("/templates/default",changeDefaultCtrl)
router.post("/templates/default/get",getDefaultTemplateCtrl)
// gallery plugin
router.get('/gallery/categories',getGalleryCategoriesCtrl)
router.get("/gallery/categories/:id",getGalleryCategoriesByIdCtrl)
router.get("/gallery/:categoryid",getGalleryImagesByIdCtrl)
router.get("/gallery",getAllGalleryImagesCtrl)
router.post("/gallery/categories",setGallerycategoryCtrl)
router.post("/gallery/categories/delete/:id",removeGalleryCategoryCtrl)
router.post("/gallery/categories/update/:id",updateGalleryCategoryCtrl)
router.post("/gallery/:id",setGalleryImagesCtrl)
router.post("/gallery/delete/:id",deleteGalleryImageCtrl)

// password reset
router.post("/password-reset",createTokenCtrl)
router.post("/password-reset/update",resetPasswordCtrl)
// end of router links

export default router;
