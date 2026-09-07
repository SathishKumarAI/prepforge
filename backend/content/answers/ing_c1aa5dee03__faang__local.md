---
qid: ing_c1aa5dee03__faang__local
question: 'Explain: What to Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 501
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:25-05:00'
sources: []
---

**What to Cache – “What Is Caching?” (System‑Design Lens)**  

| **Section** | **Key Points** |
|-------------|----------------|
| **Clarify** | *Problem:* A ML inference service receives millions of requests per day for model predictions. Latency and cost must stay low. <br>*Assumptions to confirm:* 1) Prediction latency target (e.g., <50 ms). 2) Model size & memory footprint. 3) Data distribution: is it stationary or drifting? 4) Cost of pulling data from storage vs. keeping it in RAM. |
| **Approach** | 1. Identify *hot* items that dominate traffic (top‑k predictions, frequently queried feature vectors). <br>2. Decide cache granularity: *feature cache*, *model cache*, or *prediction cache*. <br>3. Choose storage tier (in‑memory vs. SSD) and eviction policy (LRU, LFU, time‑based). |
| **Depth** | - **Feature Cache:** Store pre‑computed embeddings for raw inputs; reduces feature extraction cost. <br>- **Model Cache:** Keep the latest model weights in memory to avoid disk I/O during inference. <br>- **Prediction Cache:** Memorize recent query–output pairs; effective if many duplicate queries. <br>Complexity: O(1) lookup with hash tables; eviction is O(log N). Trade‑offs: larger cache → higher RAM cost vs. lower latency. |
| **Edge Cases** | • Cold start when a new feature appears → fall back to recompute. <br>• Model drift → stale predictions; implement TTL or version tags. <br>• Memory pressure → spillover to disk or evict low‑access items. |
| **Optimize & Communicate** | Start with a small LRU cache for predictions (size ~10 k). Measure hit ratio; if >70 %, scale linearly. For feature extraction, use a Bloom filter to pre‑check existence before expensive computation. Explain that caching is a trade‑off: we’re moving from *compute‑heavy* to *memory‑heavy* to meet SLA and cost targets. This narrative shows clear reasoning, design choices, and a path for iteration—exactly what FAANG interviewers look for. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
