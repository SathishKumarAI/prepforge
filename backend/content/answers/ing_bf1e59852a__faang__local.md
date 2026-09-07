---
qid: ing_bf1e59852a__faang__local
question: 'Explain: Too expensive to grade everything — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 511
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:40-05:00'
sources: []
---

**Clarify**  
The question asks why “too expensive to grade everything” is a problem for *Luna Evaluation Models* in the context of **Cloud Observability** at Splunk.  
Assumptions:  
1. “Grade” means compute‑time or resource cost of running ML inference on every log event/metric.  
2. The goal is to detect anomalies or generate insights in real time across a multi‑tenant cloud platform.

**Approach**  
1. Identify the cost drivers (CPU, memory, storage I/O).  
2. Quantify per‑event latency vs. throughput requirements.  
3. Propose sampling / selective inference strategies that keep total compute within budget while maintaining detection quality.

**Depth**  

| Cost Driver | Why it matters | Mitigation |
|-------------|----------------|------------|
| **CPU/TPU usage** | Complex models (e.g., deep nets) require many FLOPs per event. | Use lightweight feature‑extractors + shallow classifiers; quantize weights; employ model distillation. |
| **Memory footprint** | Large embeddings or stateful RNNs inflate RAM, limiting concurrency. | Switch to stateless architectures or use streaming inference engines that reuse buffers. |
| **Data movement** | Pulling raw logs from many shards adds network I/O cost. | Pre‑aggregate features at ingestion (e.g., using Flink) so only summaries reach the model. |
| **Storage for predictions** | Persisting every prediction increases write amplification. | Store only alerts or summary statistics; use TTL on raw logs. |

**Edge cases**  
- Sudden traffic spikes → model queues back‑pressure, causing missed detections.  
- Model drift → frequent re‑training adds compute cycles.  
- Multi‑tenant isolation → shared GPU resources may lead to noisy‑neighbor effects.

**Optimize & communicate**  
1. **Sampling**: 10 % random or importance‑based sampling reduces load by ~90 % while preserving high‑impact events.  
2. **Feature caching**: Cache frequent feature vectors; reuse for similar events.  
3. **Dynamic scaling**: Spin up GPU pods only when throughput exceeds threshold.  

Explain to interviewers that balancing *precision* vs. *cost* is a classic resource‑budget problem in observability pipelines, and the proposed layered optimization keeps detection quality high while staying within operational budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
