import { bodyStats, exercises, meals } from "./db";
import { Resolvers } from "./resolvers-types.generated";

export const resolvers: Resolvers = {
  Query: {
    exercises: () => exercises,
    meals: () => meals,
    bodyStats: () => bodyStats,
  },
  Mutation: {
    async addExercise(_, { title, kcal, time }) {
      const id = exercises.length + 1;
      const exercise = { title, kcal, time, id };
      exercises.push(exercise);
      return exercise;
    },
    async addMeal(_, { title, kcal }) {
      const id = meals.length + 1;
      const meal = { title, kcal, id };
      meals.push(meal);
      return meal;
    },
    async addBodyStats(_, { weight, height }) {
      bodyStats.weight = weight;
      bodyStats.height = height;
      bodyStats.bmi = weight / (height / 100) ** 2;
      return bodyStats;
    },
    async editExercise(_, { id, title, kcal, time }) {
      const index = exercises.findIndex((exercise) => exercise.id === id);
      if (index === -1) {
        throw new Error("Exercise not found");
      }
      const exercise = exercises[index];

      exercise.title = title ?? exercise.title;
      exercise.kcal = kcal ?? exercise.kcal;
      exercise.time = time ?? exercise.time;

      return exercise;
    },
    async editMeal(_, { id, title, kcal }) {
      const index = meals.findIndex((exercise) => exercise.id === id);
      if (index === -1) {
        throw new Error("Exercise not found");
      }
      const meal = meals[index];

      meal.title = title ?? meal.title;
      meal.kcal = kcal ?? meal.kcal;

      return meal;
    },
    async editBodyStats(_, { weight, height }) {
      bodyStats.weight = weight ?? bodyStats.weight;
      bodyStats.height = height ?? bodyStats.height;
      bodyStats.bmi = bodyStats.weight / (bodyStats.height / 100) ** 2;
      return bodyStats;
    },
    async deleteExercise(_, { id }) {
      const index = exercises.findIndex((exercise) => exercise.id === id);
      if (index === -1) {
        throw new Error("Exercise not found");
      }
      const [exercise] = exercises.splice(index, 1);
      return exercise;
    },
    async deleteMeal(_, { id }) {
      const index = meals.findIndex((meal) => meal.id === id);
      if (index === -1) {
        throw new Error("Meal not found");
      }
      const [meal] = meals.splice(index, 1);
      return meal;
    },
    async resetBodyStats() {
      bodyStats.weight = 0;
      bodyStats.height = 0;
      bodyStats.bmi = 0;
      return bodyStats;
    },
  },
};
