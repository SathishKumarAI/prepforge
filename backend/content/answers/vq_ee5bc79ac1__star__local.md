---
qid: vq_ee5bc79ac1__star__local
question: Define Ensemble Learning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 322
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:26:09-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the fraud‑detection module for a fintech startup. Our single‑model approach achieved an AUC of 0.82, but the regulatory audit required at least 0.88 to meet compliance thresholds.

**Task** – My goal was to boost predictive performance without overhauling the entire pipeline or adding prohibitive latency, and to do it within a two‑week sprint before the next audit cycle.

**Action** – I assembled an ensemble by stacking three complementary models: a gradient‑boosted tree (XGBoost) for structured features, a deep neural network for transactional sequences, and a logistic regression on engineered risk scores. Using scikit‑learn’s `StackingClassifier`, I trained each base learner on distinct cross‑validated folds to avoid data leakage, then fed their probability outputs into a meta‑learner (a simple linear model). To keep inference fast, I pruned the tree depth and quantized the neural network weights, ensuring total latency stayed under 150 ms per transaction.

**Result** – The stacked ensemble lifted our AUC from 0.82 to 0.90, surpassing the compliance target by 10 %. We also reduced false positives by 18 %, cutting manual review costs by $120K annually. This project taught me that a well‑structured stacking approach can amplify diverse model strengths while respecting operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
