import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("select * from meals").all();
};

export { getMeals };
