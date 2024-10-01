import app from "./app";
import { getGoal } from "./controller";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    getGoal()
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
