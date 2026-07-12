---
qid: q051
question: "What are the main stages of a typical data science project lifecycle?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I joined a startup where "data projects" meant someone jumping straight to modeling, and a demand-forecasting effort had already stalled twice because nobody had pinned down the actual business question.

**Task** As the first data hire I needed to give the team a repeatable lifecycle so projects stopped dying mid-flight.

**Action** I laid out the standard stages and made us follow them. First, business understanding, defining the forecasting goal and success metric with stakeholders. Then data collection and cleaning, followed by EDA to understand distributions and relationships. Next, feature engineering and modeling, then rigorous evaluation against the metric we'd agreed on, and finally deployment and monitoring. I put each stage on a shared board and made "problem definition signed off" a gate before any modeling.

**Result** The forecasting model shipped in six weeks instead of stalling, and our MAPE landed at 11%, good enough for planning. The lesson: the lifecycle isn't bureaucracy, it's what keeps you from solving the wrong problem beautifully.
