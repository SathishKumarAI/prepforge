---
qid: ing_143712ed94__faang__local
question: 'Explain: Problem Statement — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 446
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:30:03-05:00'
sources: []
---

**Clarify**  
Whiteboard exercises are interviewers’ way of probing your *problem‑solving* process rather than the final code. The core task is: given a description of an AI problem (e.g., “design a recommendation engine for 10M users”), articulate assumptions, constraints, and an end‑to‑end solution that balances accuracy, latency, and scalability.

**Approach**  
1. **Restate the goal** – what metric do we optimize?  
2. **Identify inputs/outputs** – data types, volume, freshness.  
3. **Choose a model family** – supervised vs unsupervised, collaborative filtering, neural nets, etc.  
4. **Sketch the pipeline** – ingestion → feature engineering → training → serving.  
5. **Quantify trade‑offs** – compute cost (FLOPs), storage, latency.

**Depth**  
- *Model*: matrix factorization with SGD for cold start + a small MLP on side features.  
- *Training*: mini‑batch updates, learning rate decay; use distributed Spark or TensorFlow.  
- *Serving*: cache top‑k recommendations per user in Redis; fall back to batch recompute nightly.  
- Complexity: training O(n·r) where r is rank; inference O(k).  

**Edge Cases**  
- Sparse user–item matrix → add popularity baseline.  
- Real‑time updates → incremental learning or online SGD.  
- Cold users/items → fallback to content‑based vectors.  

**Optimize & Communicate**  
Explain how batching reduces GPU utilization, why caching top‑k keeps latency <50 ms, and how A/B testing validates gains. End with a quick sanity check: “If we double users, what part of the pipeline will need horizontal scaling?” This narrative demonstrates clear thinking, technical depth, and awareness of production constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
