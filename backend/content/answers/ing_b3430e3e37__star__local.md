---
qid: ing_b3430e3e37__star__local
question: 'Explain: Characteristic #3: It’s thoughtfully stateful or stateless'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 355
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:16-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with building a real‑time fraud detection pipeline for credit card transactions that had to process ~30 k events per second while keeping latency under 100 ms.

**Task:**  
Decide whether the model inference service should be stateful (maintaining user session context) or stateless, and design it accordingly so we could scale horizontally without sacrificing accuracy.

**Action:**  
I benchmarked two approaches: a stateless Flask API that loaded the model fresh on each request, and a stateful gRPC microservice that kept a per‑user sliding window of recent transaction features in Redis. I profiled CPU, memory, and response time under load. The stateful design used an LRU cache for the last 10 transactions per user, enabling the model to use sequence embeddings; it reduced inference time by ~35 % and improved AUC from 0.81 to 0.86 because temporal patterns were captured. I added circuit‑breaker logic so if Redis lagged, the service gracefully fell back to stateless mode.

**Result:**  
The stateful pipeline met latency targets while boosting fraud detection accuracy by 5 pp. The trade‑off was a modest increase in memory usage (≈150 MB per node), but it allowed us to scale out with Kubernetes pods without losing context. I learned that thoughtful statefulness can dramatically improve model performance when temporal dependencies matter, but requires careful fallback strategies for robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
