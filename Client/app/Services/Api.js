
// Using procesbacs.env variables
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;



export const SignupRoute = {
  signup: `${BACKEND_URL}v1/signup`,
};

export const generateVerifyOTP = {
  generateOTP: `${BACKEND_URL}v1/GetOtp`,
  verifyOTP: `${BACKEND_URL}v1/verifyOtp`,
  login: `${BACKEND_URL}v1/login`,
  DecodedApi: `${BACKEND_URL}v1/DecodToken`,
};

export const  ProjectApiDetail = {
  FetchProject: BACKEND_URL + "v1/projects/findProjects",
  FetchProjectById: BACKEND_URL + "v1/projects/findProjectById",
  addSavedProject:BACKEND_URL+"v1/addSavedProject",
  RemoveSavedProject:BACKEND_URL  +"v1/removeSavedProject",
  applyProject:BACKEND_URL  +"v1/projects/AppliedProject",
  addProject: BACKEND_URL+"v1/projects/AddProject",
  FetchProjectByEmail:BACKEND_URL+"v1/projects/findProjectByEmail",
  deleteProject:BACKEND_URL+"v1/projects/deleteProject"
};

export const  profileApiDetail={
  profileInfo:BACKEND_URL  +"v1/FindByEmail" ,
  DecodedApi:BACKEND_URL+"v1/DecodToken",
  UpdateProfilePic:BACKEND_URL  +"v1/updateProfilePicture",
  updateProfileData:BACKEND_URL  +"v1/updateProfile",
  updateResume:BACKEND_URL  +"v1/updateResume",
  deleteProfile:BACKEND_URL+"v1/deleteProfile"
}

export const RatingAndReviewApi={
    CreateRating:BACKEND_URL+"v1/createRating",
    getAllRating:BACKEND_URL+"v1/getRating",
    CheckSpecificUserRating:BACKEND_URL+"v1/CheckUserRating"
}