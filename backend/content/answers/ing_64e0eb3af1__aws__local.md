---
qid: ing_64e0eb3af1__aws__local
question: 'Explain: Evaluation plan — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 575
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:57-05:00'
sources: []
---

**Evaluation Plan – Text‑to‑SQL Agent**

*Leadership Principles*: **Customer Obsession & Ownership**  
I own the end‑user journey: from natural‑language query to accurate SQL execution.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| **S** – Our data analysts complained that manual query writing took 30 min per report. | **T** – Build a pilot Text‑to‑SQL agent that reduces time by ≥50%. | **A** – 1) Define success metrics (accuracy, latency, adoption). 2) Collect 5k labeled QA pairs from analysts. 3) Train an LLM (e.g., GPT‑4‑Turbo via Amazon Bedrock) fine‑tuned on our schema. 4) Deploy behind API Gateway + Lambda, cache results in DynamoDB for repeated queries. 5) Run A/B test: control group uses manual SQL; treatment uses the agent. 6) Measure: query latency (≤500 ms), accuracy (>95% F1), adoption rate (≥70% of analysts). | **R** – In 4 weeks, adoption hit 72%, query time dropped to 12 s on average (‑96%), and F1 rose to 97%. Cost per request <$0.02, under the $5K/month budget.*

**Technical/System Design**

- **Requirements**: Schema‑aware generation, safe execution, audit trail.  
- **Services**: Bedrock for inference, API Gateway + Lambda for stateless compute, DynamoDB for caching, CloudWatch for metrics, IAM roles for least privilege.  
- **Scalability**: Auto‑scaling Lambda (max 1k concurrent), cache hit rate >80% keeps costs low.  
- **Availability**: Multi‑AZ deployment; failover via Route 53 latency routing.  
- **Cost Trade‑offs**: Opted for on‑demand Bedrock to avoid upfront GPU reservations; evaluated spot vs reserved but settled on on‑demand due to high request variability.

**Bar‑raiser Focus**

- Demonstrated *ownership* by defining metrics and driving the pilot end‑to‑end.  
- Showed *deep dive* through schema‑aware fine‑tuning and detailed cost/latency trade‑offs.  
- Quantified impact (time saved, accuracy).  
- Learned from initial low adoption: added a UI prompt to clarify ambiguous queries, boosting F1 by 2%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
