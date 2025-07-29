const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is working!" });
});

// ✅ Bind to 0.0.0.0 for Replit
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});
