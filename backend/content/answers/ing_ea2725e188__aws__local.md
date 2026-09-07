---
qid: ing_ea2725e188__aws__local
question: 'Q: Explain the difference between bi-encoders, cross-encoders, and late
  interaction models. When would you choose each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 565
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:47-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we built a semantic search product for an enterprise knowledge base. The team needed to decide whether to use bi‑encoders, cross‑encoders, or late‑interaction models for ranking queries against 5 M documents.

**Action**  
I first scoped the requirements: real‑time latency <200 ms per query, cost ≤$0.05/query, and an accuracy lift of at least 10 % over our baseline BM25.  

| Model | Architecture | Typical AWS services | When to pick |
|-------|--------------|----------------------|--------------|
| **Bi‑encoder** | Encode query & document separately → dot product | `SageMaker` inference endpoints, `Elasticsearch` for vector search | Low latency, high throughput; suitable when you can pre‑compute document vectors (e.g., nightly batch). |
| **Cross‑encoder** | Concatenate query+doc → single transformer pass | `EC2 Spot + SageMaker Batch Transform` | Highest accuracy; use for a small set of top‑k candidates or in a re-ranking stage where latency is less critical. |
| **Late‑interaction (e.g., ColBERT)** | Encode separately but compute token‑wise similarity at inference | `Lambda` with `EFS` for embeddings, `Kinesis` for streaming updates | Balances speed & accuracy; ideal when you need sub‑200 ms latency but still want richer interaction than bi‑encoders. |

I implemented a two‑stage pipeline:  
1. **Stage 1 – Bi‑encoder** on SageMaker RealTime endpoints to fetch top‑50 candidates (≈10 ms).  
2. **Stage 2 – Late‑interaction** on Lambda for token‑wise scoring (≈80 ms), achieving 12 % NDCG lift over BM25 while keeping cost at $0.04/query.

**Result**  
Latency dropped from 1.5 s to <200 ms, traffic handled 3× more queries per second, and user satisfaction scores rose by 18 %. I documented trade‑offs (batch size vs. GPU memory) and added automated monitoring in CloudWatch, ensuring the system stayed within SLAs.

**Reflection**  
I practiced *Ownership* by owning the entire end‑to‑end pipeline, *Dive Deep* through metric‑driven tuning, and *Bias for Action* by prototyping on AWS quickly. The bar‑raiser would note my clear justification of model choice, quantified impact, and lessons learned from initial latency spikes that led to the two‑stage design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
