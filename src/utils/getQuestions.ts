// https://api.devo.learningclues.com/adaptive_learning/get_questions
// default courseId to 37 and userId to 9



export const getQuestions = async ({courseId = '37', userId = '9'}: {courseId: string, userId: string} ) => {
  const response = await fetch(
    `https://api.devo.learningclues.com/adaptive_learning/get_questions?course_id=${courseId}&user_id=${userId}`
  );
  const data = await response.json();
  return data;
};