---
qid: ing_1f69f20e26__faang__local
question: 'Explain: Latency-tolerant vs. latency-sensitive services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 483
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:46-05:00'
sources: []
---

**Clarify**  
The question asks how we differentiate *latency‑tolerant* from *latency‑sensitive* ML services and why that matters for system design.

**Approach**  
1. Define latency tolerance in terms of user impact.  
2. Map typical ML workloads to those categories.  
3. Discuss architectural choices (batch vs. real‑time, caching, model size).  
4. Highlight trade‑offs and metrics.

**Depth**  

| Service | Typical Use Case | Latency Impact | Architecture |
|---------|------------------|----------------|--------------|
| **Latency‑sensitive** | Real‑time fraud detection, autonomous driving perception, recommendation at click time | < 10 ms to 100 ms required; user perceives delay | Low‑latency inference engine (GPU/FPGA), model quantization, edge deployment |
| **Latency‑tolerant** | Model training, offline feature engineering, batch scoring for nightly reports | Seconds to hours acceptable | Distributed data pipelines (Spark/Hadoop), GPU clusters, scheduled jobs |

*Why it matters*:  
- *Throughput vs. latency*: high‑latency services can batch requests and amortize compute costs; low‑latency services must prioritize speed over cost.  
- *Consistency models*: tolerant systems can use eventual consistency; sensitive ones often need strict ACID guarantees.

**Edge cases**  
- A recommendation system that is “mostly” batch but occasionally serves real‑time ads (hybrid).  
- Model drift: a latency‑tolerant service may tolerate stale weights, whereas a sensitive one must refresh frequently.  
- Failures in edge nodes can disproportionately affect low‑latency services.

**Optimize & communicate**  
Explain that we first quantify *user‑experience cost* of delay, then choose the right compute tier and data flow. For example, moving inference to an FPGA can shave 5 ms but increases hardware cost by 20 %. Communicate trade‑offs clearly: “We’ll accept a 30 % higher GPU utilization to keep latency under 50 ms for fraud detection.” This structured reasoning shows we understand both the business impact and technical constraints, aligning with FAANG’s emphasis on clear communication, deep analysis, and pragmatic optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
