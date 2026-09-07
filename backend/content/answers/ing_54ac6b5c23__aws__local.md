---
qid: ing_54ac6b5c23__aws__local
question: 'Explain: Tiered Pricing — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 443
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:41-05:00'
sources: []
---

**Situation / Task**  
While leading the “AI‑Inference Platform” for a global e‑commerce client, I was asked to design a cost model that would make GPU usage predictable and attractive for both internal teams and external partners.

**Action (Design)**  
I proposed a **tiered pricing** scheme:

| Tier | Monthly GPU Hours | Price/Hour | Target Users |
|------|-------------------|------------|--------------|
| Basic | 0–200 h | $1.00 | SMEs, prototypes |
| Standard | 201–2 000 h | $0.90 | Mid‑market SaaS |
| Enterprise | >2 000 h | $0.80 | Large retailers |

Implementation used **AWS Spot Instances** for the Basic tier (high discount, lower availability) and **Reserved Instances** for Enterprise (guaranteed capacity). I built a cost‑tracking microservice on **Lambda + DynamoDB** that aggregates usage per tenant, triggers alerts via **SNS**, and automatically switches tiers when thresholds are crossed.  

**Result**  
Adoption grew 4× in six months; monthly spend dropped 18% for clients who moved to Enterprise, while we captured an additional $2 M ARR from new SaaS customers. Our system achieved 99.9% availability and kept EC2 cost per inference at < $0.001, a 30% improvement over the previous flat‑rate model.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Pricing matched real usage patterns, reducing churn.  
- **Ownership & Dive Deep** – Built end‑to‑end telemetry and iterated on tier thresholds based on data.  

*Bar‑raiser note:* I demonstrated ownership by owning the entire cost pipeline, deep technical knowledge of Spot vs. Reserved Instances, quantified impact (ARR lift, cost savings), and learned from early failures when the Basic tier over‑provisioned GPUs—prompting a quick policy tweak.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
