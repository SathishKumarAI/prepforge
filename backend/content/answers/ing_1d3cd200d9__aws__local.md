---
qid: ing_1d3cd200d9__aws__local
question: 'Q: How do you optimize TTFT vs. TPOT? — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 437
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:20-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a server‑less recommendation engine that served 12 M requests/day. Our SLA demanded **TTFT ≤ 200 ms** while keeping **TPOT < 1 s** for the whole inference pipeline.

**Action**  
I applied *Customer Obsession* and *Dive Deep*:  

| Metric | Target | Result |
|--------|--------|--------|
| TTFT   | 200 ms | 185 ms (‑7.5%) |
| TPOT   | 1 s    | 0.92 s (‑8%) |

**Technical steps**

1. **Model & Feature pre‑warming** – Deployed the TorchScript model in a *Lambda@Edge* cache keyed on user segment, reducing cold‑start latency by 60 %.  
2. **Feature store** – Moved real‑time feature lookup to an *Amazon DynamoDB Accelerator (DAX)* cluster; read latency dropped from 25 ms → 4 ms.  
3. **Batch inference** – Offloaded heavy graph computations to a *Fargate* task that runs on GPU instances, scaling horizontally with a Step Function orchestrator.  
4. **Circuit‑breaker & fallback** – Implemented an OpenTelemetry‑based monitor; if the GPU pool is saturated, we fall back to a lighter ONNX model, keeping TPOT within limits.

**Result**  
TTFT improved by 7.5 % and TPOT decreased by 8 %, freeing 30 % of compute capacity and reducing monthly AWS spend from $120k → $84k.

**Learnings**  
The first failure was under‑estimating DAX read latency; after adding a secondary cache we hit the SLA without extra cost. I now always benchmark each layer separately before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
