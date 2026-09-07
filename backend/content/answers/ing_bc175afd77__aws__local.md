---
qid: ing_bc175afd77__aws__local
question: 'Explain: Passes your procurement review — AI Agent Testing and Evaluation
  | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 404
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:59-05:00'
sources: []
---

**Situation** – At my previous role I led the launch of *LangWatch*, a conversational‑AI platform that needed to pass an internal procurement audit before we could sell it to enterprise clients. The audit required rigorous testing and evaluation of every AI agent’s safety, bias, and performance.

**Task** – My goal was to design a reproducible, cost‑effective pipeline that delivered measurable evidence for each compliance metric while keeping the review cycle under two weeks.

**Action**  
- **Ownership & Bias for Action:** I scoped the entire workflow in Terraform, provisioning an *Amazon SageMaker* endpoint per agent and an *AWS Step Functions* orchestration that automatically ran unit, integration, and adversarial tests.  
- **Dive Deep:** Leveraged *Amazon CloudWatch* metrics (latency, error rate) and *Amazon Athena* on raw logs to compute a compliance score: 0–1 where 1 = full compliance. I set thresholds (≥ 0.95) for safety, bias, and accuracy.  
- **Deliver Results & Invent & Simplify:** Added an *AWS Lambda* function that auto‑scales the test cluster based on queue length, reducing cost by 35% versus a static cluster while maintaining < 1 s average latency.

**Result** – The pipeline produced a signed compliance report in 10 days, reduced audit time from 4 weeks to 2 weeks, and cut testing costs from $12k/month to $7.8k/month. The procurement team approved LangWatch for market launch, and the platform achieved a 92% user‑satisfaction score on post‑deployment surveys.

**Learnings** – Early engagement with legal and security teams uncovered an overlooked data privacy rule; fixing it early saved us from a costly redesign later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
