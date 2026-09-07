---
qid: ing_a83fd7e47e__aws__local
question: We set temperature to 0. The outputs are deterministic now, right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 395
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:13-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science sprint for the new “Smart FAQ” feature on our e‑commerce platform. The team needed to guarantee that every user query produced the same response so we could audit compliance and measure customer satisfaction accurately.

**Action**  
I introduced a deterministic GPT‑style inference pipeline by setting *temperature = 0* in the prompt engine. I wrapped the model behind an **Amazon SageMaker endpoint** with a **Lambda edge function** to enforce idempotency: each request hash → cached response for 24 h (using **ElastiCache‑Redis**) so we avoided redundant calls to the expensive GPU instance. To maintain high availability, I deployed the endpoint across two AZs and used **AWS Global Accelerator** for low latency.

I also added a **CloudWatch metric** that logged “deterministic hit rate” (cache hit / total). The KPI was 95 % deterministic output within the first week, improving from 70 % in the prototype.

**Result**  
Determinism cut GPU usage by 40 %, slashing inference cost from $0.10 to $0.06 per request. Customer support tickets dropped 12 % because users no longer received conflicting answers. The feature achieved a **99.9 % SLA** for latency, and the team’s confidence in auditability increased, enabling us to comply with new regulatory requirements.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered consistent answers that improved user trust.  
- *Ownership & Dive Deep*: Designed end‑to‑end solution, tuned cost, and monitored metrics.  

Bar‑raisers look for clear ownership, depth of technical design, quantified impact (cost savings, SLA), and learning from the early 70 % hit‑rate failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
