---
qid: q033
question: "What is feature engineering and why is it important?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a ride-share demand model, we'd thrown raw columns at gradient boosting and plateaued at an RMSE that wasn't good enough to drive dispatch decisions. More model tuning wasn't moving the needle.

**Task** I needed a meaningful accuracy jump, and I was convinced the signal was in the features we weren't creating, not the algorithm.

**Action** I invested in feature engineering, which is transforming raw data into inputs that expose the underlying patterns to the model. I extracted hour-of-day and day-of-week from timestamps and encoded them cyclically with sine and cosine so 11pm and midnight were close. I added rolling 3-hour demand averages, holiday and weather flags, and interaction features like zone crossed with rush hour. I target-encoded high-cardinality neighborhood IDs and carefully avoided leakage by computing everything only from past data.

**Result** RMSE dropped 31%, a far bigger gain than any hyperparameter sweep had given us, and dispatch pre-positioning improved measurably. The lesson that stuck: the model can only learn from what you feed it, so thoughtful features often beat a fancier algorithm.
