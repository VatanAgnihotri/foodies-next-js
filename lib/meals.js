import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("select * from meals").all();
};

const getMeal = async (slug) => {
  return db.prepare(`select * from meals where slug = ?`).get(slug);
};

export { getMeals, getMeal };
