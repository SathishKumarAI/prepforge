---
qid: ing_32667a166e__aws__local
question: 'Explain: LLM Evaluation and Guardrails — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 441
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:03-05:00'
sources: []
---

**Situation – Task**  
While leading a cross‑functional ML team at a fintech startup, we launched an internal LLM to auto‑generate compliance reports. Within two weeks, auditors flagged several hallucinated facts, threatening regulatory penalties.

**Action – Ownership & Dive Deep**  
I assembled a “Guardrail Sprint” that re‑architected the evaluation pipeline:

1. **Data‑driven metrics** – built a test harness in SageMaker Studio to run 5 k prompts against a curated benchmark set, measuring *Precision@1*, *Hallucination Rate*, and *Response Time*.  
2. **Guardrails** – added a custom Lambda layer that wraps the Bedrock model, intercepting outputs that violate domain rules (e.g., “no financial advice”) and routing them to an SQS queue for manual review.  
3. **Continuous Evaluation** – scheduled nightly SageMaker Pipelines to re‑run the benchmark; any drift >2% triggers an SNS alert.  

**Result – Deliver Results & Customer Obsession**  
Within 48 h we reduced hallucination rate from 18 % to <1 %, cut manual review time by 70 %, and kept latency under 200 ms (95th percentile). The cost of the added guardrails was <$50/month, a 0.3 % increase over baseline.

**Bar‑raiser focus**  
- Ownership: I owned the end‑to‑end pipeline redesign.  
- Dive Deep: I quantified hallucination and latency; used SageMaker Pipelines for repeatable evaluation.  
- Impact: 1 % accuracy uplift translates to ~$2M in avoided compliance fines annually.  
- Learning: Post‑mortem revealed that earlier inclusion of a domain filter would have saved the sprint.

**Key AWS services:** SageMaker Studio, Bedrock, Lambda, SQS, SNS, CloudWatch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
