import model from "./model.js";
export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
}
