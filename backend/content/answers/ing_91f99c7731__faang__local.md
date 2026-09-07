---
qid: ing_91f99c7731__faang__local
question: 'Explain: Feature Engineering for Speed — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:01-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how feature engineering can be optimized for *speed* in a real‑time fraud detection system—i.e., features that are both highly predictive and cheap/fast to compute at inference time.

**Approach**  
1. Identify the latency budget (e.g., < 10 ms per transaction).  
2. List candidate feature families: raw attributes, aggregated statistics, and engineered transforms.  
3. For each family, evaluate computational cost vs. marginal AUC gain.  
4. Keep only those with low‑cost, high‑impact features; pre‑compute heavy aggregates offline.

**Depth**  
- **Raw fields** (amount, country) are zero‑overhead.  
- **Simple transforms**: log(amount), bucketed time of day—computed in a few cycles.  
- **Aggregated stats**: per‑user transaction count in the last 24 h or rolling mean amount. Compute these via incremental counters stored in Redis or a streaming window; avoid scanning logs at runtime.  
- **Vector embeddings** (e.g., user embedding from historical behavior) can be pre‑computed nightly and cached; only a lookup is needed.  
- Avoid heavy NLP or graph traversals during inference.  
- Use model quantization/booster trees that accept sparse feature vectors to keep inference lightweight.

Complexity: Feature extraction O(1) per transaction after pre‑computations; overall system latency < 10 ms achievable with in‑memory stores and batched updates.

**Edge Cases**  
- New users lacking history → fall back to default aggregates.  
- Rapid spikes in traffic could exhaust cache bandwidth; add throttling or approximate counters (HyperLogLog).  
- Feature drift: monitor AUC drop and retrain weekly.

**Optimize & Communicate**  
Explain that we trade off a modest 1–2 % loss in predictive power for orders‑of‑magnitude speed gains, ensuring real‑time decisions. Highlight the end‑to‑end pipeline: ingestion → lightweight transforms → cached aggregates → model inference. This showcases structured thinking, communication clarity, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
