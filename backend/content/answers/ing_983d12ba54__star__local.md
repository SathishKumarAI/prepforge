---
qid: ing_983d12ba54__star__local
question: 'Explain: Together AI System Design — Ai Companies Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 374
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:37:06-05:00'
sources: []
---

**Situation**  
At my previous startup we were building a recommendation engine for an e‑commerce platform that had just hit 1 million monthly active users. The existing model was a simple collaborative filter and it couldn’t scale past 100k requests per hour without latency spikes.

**Task**  
I needed to design an end‑to‑end AI system that could handle 10× the traffic, reduce response time below 120 ms, and keep the recommendation quality (NDCG@10) above 0.32.

**Action**  
1. I chose a hybrid architecture: a lightweight Transformer encoder for feature extraction + a Factorization Machine backend for ranking, trained in PyTorch on 4 GPU nodes.  
2. To meet latency, I built a TensorRT‑optimized inference pipeline and deployed it behind an Envoy edge cache that cached top‑10 results per user segment.  
3. For real‑time updates, I set up a Kafka stream of click events feeding into a Spark Structured Streaming job that updated the model weights every 15 minutes using online learning.  
4. I introduced A/B testing with canary releases and used Prometheus/Grafana to monitor latency, CPU usage, and NDCG in real time.

**Result**  
The new system handled 1.2 million requests per hour with <110 ms latency, boosted NDCG@10 from 0.28 to 0.34, and cut GPU inference cost by 35%. I learned the importance of marrying model fidelity with deployment‑level optimizations and continuous monitoring for production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
