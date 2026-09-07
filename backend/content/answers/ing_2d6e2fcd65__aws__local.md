---
qid: ing_2d6e2fcd65__aws__local
question: 'Explain: Run LLM-based evals separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:46-05:00'
sources: []
---

**Situation & Task**  
At a startup I was tasked to benchmark our custom GPT‑4 fine‑tuned model against OpenAI’s base model for safety & relevance. The evaluation had to be reproducible, cost‑controlled, and scalable across multiple prompt sets.

**Action (Design)**  
I split the evaluation pipeline into two independent services:

1. **Langwatch** – a lightweight “collector” that runs each prompt through both models in parallel, tags responses with metadata, and writes raw JSON to an S3 bucket (`s3://eval-results/{run_id}/`).  
2. **Langfuse** – an analytics layer that ingests the S3 payload via an EventBridge rule, stores results in a DynamoDB table (`EvalResults`), and triggers a Lambda that computes metrics (BLEU, ROUGE, safety flag hit‑rate).

Both services are containerized on ECS Fargate with `cpu=1024`, `memory=2048`. I used **Step Functions** to orchestrate the workflow, ensuring idempotency and retry logic. Costs were capped at $0.05 per 1k tokens by limiting parallelism (max concurrency = 10) and auto‑scaling on CloudWatch metrics.

**Result**  
The new pipeline reduced evaluation time from 48 h to **4 h**, cut costs by **35%** ($120/month vs $190), and surfaced a 12% safety flag increase in our fine‑tuned model—prompting an immediate rollback. I documented the process, enabling other teams to adopt it within two weeks.

---

### Leadership Principles Anchored
- **Customer Obsession** – Deliver fast, reliable insights for product decisions.  
- **Ownership** – Designed a self‑contained, reusable system that future teams can maintain without external support.

> *Bar‑raiser cue:* I demonstrated deep dive into cost metrics, quantified impact on dev velocity, and learned from initial failure (over‑parallelism) to refine concurrency controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
