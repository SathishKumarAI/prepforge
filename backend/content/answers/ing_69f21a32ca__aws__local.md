---
qid: ing_69f21a32ca__aws__local
question: 'Q71: How do you build a production LLM evaluation pipeline using LLM-as-a-Judge?
  What are the failure modes?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 489
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:23:51-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to launch a *production LLM evaluation pipeline* that could automatically rate model outputs using an **LLM‑as‑a‑Judge**. The goal: reduce manual QA by 70 % and cut evaluation latency to <2 s per prompt, while keeping costs under $0.01/ eval.

**Action (Design)**  
1. **Data Ingestion** – Store prompts & responses in *Amazon S3*; trigger a *Lambda* on new objects.  
2. **Evaluation Service** – A *Fargate* task spins up an OpenAI‑compatible inference container, calls the judge model via *AWS Bedrock*.  
3. **Result Aggregation** – Use *DynamoDB* (auto‑scaling) to persist scores; a *Kinesis Data Firehose* streams metrics to *Amazon CloudWatch* for real‑time dashboards.  
4. **Scalability & Cost** – Fargate autoscaling on CPU/Memory + Spot pricing reduces spend by 35 %.  
5. **Reliability** – Multi‑AZ deployment, Circuit Breaker pattern in Lambda, and a retry policy (exponential backoff) keep SLA >99.9 %.

**Result**  
- Evaluation throughput increased from 200 to 1,400 evals/min.  
- Manual QA time dropped 68 %, freeing 12 FTEs.  
- Cost per evaluation fell from $0.02 to $0.008.

**Failure Modes & Mitigation**  
| Mode | Impact | Fix |
|------|--------|-----|
| Judge drift (model changes) | Wrong scores | Version‑tagging + A/B test new judge before rollout |
| API throttling | Latency spikes | Implement request batching, cache common prompts |
| Data schema mismatch | Ingestion errors | Strict JSON schema validation in Lambda |

**Reflection**  
I *owned* the end‑to‑end flow, *dived deep* into performance metrics, and learned that continuous monitoring of judge drift is critical. This aligns with **Customer Obsession** (accurate scores) and **Ownership** (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
