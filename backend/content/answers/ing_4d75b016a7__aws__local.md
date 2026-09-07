---
qid: ing_4d75b016a7__aws__local
question: 'Explain: Company context — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 478
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:16-05:00'
sources: []
---

**Context & Impact – “Harvey” (AI‑Driven Customer Support)**  
*Leadership Principles: Customer Obsession, Ownership*

> **S**ituation: At Harvey, a fintech startup, the customer‑support ticket volume grew 4× in six months due to a new product launch. Response times lagged behind competitors, causing churn spikes.  
> **T**ask: Lead an AI‑powered chatbot that could triage tickets, auto‑resolve common issues, and route complex queries to humans.  
> **A**ction:  
> 1. Built a **self‑learning intent classifier** using Amazon SageMaker, training on 200k historical tickets (accuracy → 92%).  
> 2. Deployed the model in a **serverless Lambda + API Gateway** stack; each request processed < 300 ms.  
> 3. Integrated with **Amazon Connect** for hand‑off and used **SQS** to buffer high‑volume bursts, guaranteeing 99.9% availability.  
> 4. Implemented A/B testing via **Feature Flags** (LaunchDarkly) to measure impact before full rollout.  
> **R**esult: Within two months, ticket resolution time dropped from 12 h to 45 min (85% reduction), reducing churn by 3.2% and saving $120k/month in support costs. The model’s confidence‑based routing cut human effort by 60%.  

**What the Bar‑Raiser Listens For**

- **Ownership**: Took full accountability for cross‑team integration, from data prep to deployment.  
- **Dive Deep**: Analyzed error logs, discovered that 18% of false positives stemmed from synonym mismatches; added a custom thesaurus, bumping accuracy to 94%.  
- **Quantified Impact**: Tracked key metrics (resolution time, churn, cost) and presented dashboards in QuickSight.  
- **Learning from Failure**: First rollout hit latency spikes during peak hours; we switched from single‑region Lambda to multi‑region with CloudFront edge caching, improving SLA by 12%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
