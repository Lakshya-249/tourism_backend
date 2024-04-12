const run = require("./Utils/gemni_api");

const getGenerativeEvents = async (req, res) => {
  const { state } = req.params;
  const prompt = `Give me upcomming events/festivals in ${state} for this week`;
  const data = await run(prompt);
  if (data !== null) {
    return res.status(200).json({ data });
  }
  return res.status(500).json({ message: "Internal server error" });
};

module.exports = getGenerativeEvents;
