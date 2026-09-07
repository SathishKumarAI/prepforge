---
qid: ing_7a911d5b11__faang__local
question: 'Q21: How do you evaluate and compare embedding models?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 501
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:19-05:00'
sources: []
---

**Q21: How do you evaluate and compare embedding models?**

| Step | What I’d do | Why it matters |
|------|-------------|----------------|
| **1️⃣ Clarify** | • Restate the goal: *“We want to pick the best embeddings for downstream tasks (e.g., classification, retrieval).”*<br>• Confirm assumptions: type of data (text, image, graph), availability of labeled samples, evaluation budget, deployment constraints. | Sets scope and avoids blind spots. |
| **2️⃣ Approach** | 1. Define *metrics*: intrinsic (cosine similarity to human judgments, cluster purity) & extrinsic (task‑specific accuracy/recall).<br>2. Build a benchmark suite: synthetic datasets + real‑world tasks.<br>3. Automate evaluation pipelines with reproducible splits and seed control. | Gives a systematic path from data to numbers. |
| **3️⃣ Depth** | • **Intrinsic tests**: <br> - *Similarity* (STS, SimLex‑999).<br> - *Analogy* (Google Analogy, WordSim).<br>• **Extrinsic tests**:<br> - *Classification*: accuracy on sentiment or topic labels.<br> - *Retrieval*: MAP@k on search queries.<br>• Compute **statistical significance** (paired t‑test) to rule out chance differences. | Covers both theoretical quality and real‑world impact; ensures rigorous comparison. |
| **4️⃣ Edge Cases** | • Small labeled sets → use cross‑validation or bootstrapping.<br>• Domain shift → evaluate on held‑out domain data.<br>• Model size vs latency → add FLOP & inference time as constraints. | Highlights robustness and deployment feasibility. |
| **5️⃣ Optimize & Communicate** | • Rank models by a weighted score (e.g., 0.6 extrinsic, 0.4 intrinsic).<br>• Visualize trade‑offs with Pareto curves.<br>• Present findings in a concise slide deck: problem, methodology, key results, recommendation. | Demonstrates end‑to‑end thinking and clear storytelling—exactly what FAANG interviewers look for. |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
