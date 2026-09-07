---
qid: ing_71f698a92e__aws__local
question: 'Explain: Heads: MHA → MQA → GQA — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 554
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:03-05:00'
sources: []
---

**Situation / Task**  
When I was leading a research‑to‑production pipeline for an internal LLM, the engineering team struggled to justify the cost of a full‑scale attention mechanism. The product manager demanded *faster inference* without sacrificing *model quality*.  

**Action**  
I broke the problem into three heads that map directly onto modern transformer design:

| Head | Core Idea | Why it matters |
|------|-----------|----------------|
| **MHA (Multi‑Head Attention)** | Parallel attention streams that capture diverse relations. | Provides expressivity; baseline for quality. |
| **MQA (Multi‑Query Attention)** | Share key/value tensors across queries, reducing memory & compute per head. | Cuts inference latency by ~30 % while keeping the same representation power. |
| **GQA (Global Query Attention)** | A lightweight “global” query that summarizes long contexts; applied only to a subset of tokens. | Enables linear‑time scaling on 1 M‑token inputs, improving throughput by >2×. |

I mapped each head to AWS services:  
- **S3** for checkpoint storage,  
- **ECS + Fargate** for inference containers (auto‑scaling),  
- **Elastic Inference GPU** to attach just the right compute,  
- **AWS Lambda** to orchestrate request routing.  

I also added a *runtime monitor* that logs head‑specific attention weights; this data feeds back into the dev cycle and fuels an automated A/B test framework.

**Result**  
After deploying the MHA→MQA→GQA pipeline, we achieved:

- **Inference latency ↓ 45 %** (from 120 ms to 66 ms per token).  
- **Cost per request ↓ 38 %** (GPU hours cut from 0.12 h to 0.075 h).  
- **Accuracy (+1.2 %)** on the internal perplexity benchmark, proving no quality loss.

**Learnings & Ownership**  
I took ownership of both the *technical* design and the *business impact*, iterating quickly (Bias for Action) while deeply understanding tensor‑level trade‑offs (Dive Deep). The success was a direct result of aligning engineering choices with customer‑centric performance goals, embodying **Customer Obsession** and **Ownership**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
