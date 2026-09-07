---
qid: ing_6f905aaedf__aws__local
question: 'Explain: Tier 2 - LLM judge with policy-as-prompt'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:19-05:00'
sources: []
---

**Situation / Task**  
When our content‑moderation team faced a spike in user‑generated text, we needed a fast, policy‑compliant LLM judge that could scale to millions of requests per day while keeping latency under 200 ms.

**Action**  
I took ownership and scoped the solution around **Amazon SageMaker + Lambda + API Gateway**.  
1. **Model** – fine‑tuned GPT‑4 on our proprietary policy dataset, wrapped in a “policy‑as‑prompt” template that injects the latest compliance rules each request.  
2. **Serving** – deployed the model as an endpoint behind **Amazon SageMaker Runtime**, exposed through **API Gateway** and throttled by a custom **Lambda authorizer** that checks user roles.  
3. **Scalability & Cost** – used SageMaker’s **multi‑model endpoints** to share GPU resources across 5 policy variants, cutting GPU hours by 60 %. Auto‑scaling on request latency keeps the endpoint always responsive; spot instances reduce cost by 35 % compared to on‑demand.  
4. **Observability** – integrated CloudWatch metrics (latency, error rate) and X-Ray tracing; set up a CI/CD pipeline that retrains the model every week with new policy updates.

**Result**  
The judge handled **1.2 M requests/day** with **<180 ms** average latency, reducing manual review time by 70 % (from 4 hrs to 1 hr per batch). Cost dropped from $12k/month to $7.5k/month.  

**Reflection**  
I learned that “policy‑as‑prompt” lets us iterate policy changes without redeploying models—an example of *Invent & Simplify*. The bar‑raiser will hear the deep dive into model serving, quantified impact on latency and cost, and a clear ownership narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
