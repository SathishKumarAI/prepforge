---
qid: q003
question: "Explain the difference between supervised, unsupervised, and reinforcement learning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a fraud-detection team at a fintech, we had three separate problems on the table at once and a junior data scientist asking which learning paradigm fit each. I'd been tasked with the modeling strategy for the quarter.

**Task** I needed to pick the right learning approach for each problem and justify it clearly to non-ML stakeholders.

**Action** For flagging fraudulent transactions, we had 200k labeled examples, so I used supervised learning, training an XGBoost classifier on the labeled fraud/not-fraud outcomes. For discovering unknown patterns in merchant behavior with no labels, I used unsupervised learning, running k-means and DBSCAN clustering to surface anomalous groups. For our automated case-routing system that learned from feedback over time, I framed it as reinforcement learning, where an agent took routing actions and received reward signals based on resolution speed.

**Result** The supervised model hit 0.91 AUC, clustering surfaced two new fraud rings we'd missed, and the RL router cut average case time by 18%. The lesson: the presence and type of labels drives the paradigm choice.
