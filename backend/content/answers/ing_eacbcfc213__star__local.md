---
qid: ing_eacbcfc213__star__local
question: 'Explain: LinkedIn Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 336
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:48-05:00'
sources: []
---

**Situation:** During a recent FAANG interview, the hiring team presented us with a “LinkedIn Custom Problems” scenario: we had to design an algorithm that predicts which professional connections a user is most likely to engage with next, using LinkedIn’s massive graph data.

**Task:** My goal was to build a scalable recommendation model that could run in real‑time on a 100‑million node network while keeping latency under 50 ms and achieving at least a 15% lift over the baseline engagement metric.

**Action:** I chose a Graph Neural Network (GNN) approach. First, I extracted subgraphs around active users using a breadth‑first search limited to two hops, then applied a GraphSAGE layer to aggregate neighbor features (profile skills, recent posts). To reduce computation, I implemented negative sampling and used mini‑batch training with PyTorch Geometric. For deployment, I converted the model to ONNX, compressed it with TensorRT, and wrapped it in a FastAPI service behind an AWS Lambda edge function. I also added an A/B test harness that fed predictions back into our data pipeline for continuous evaluation.

**Result:** The prototype achieved a 22% increase in click‑through rate on engagement metrics, cut inference latency to 35 ms, and used only 40 MB of memory per request. I learned how to balance model expressiveness with real‑time constraints and the importance of end‑to‑end monitoring for ML systems at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
