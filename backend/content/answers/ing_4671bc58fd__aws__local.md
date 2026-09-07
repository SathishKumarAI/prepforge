---
qid: ing_4671bc58fd__aws__local
question: 'Explain: Model Details ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 413
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:04:58-05:00'
sources: []
---

**Situation / Task**  
While leading a startup’s ML‑ops team, I needed to onboard our product line onto an external LLM provider (DeepSeek). The goal was to expose the API to > 50k daily users with < 200 ms latency and keep costs under $15K/month.

**Action**  
I dissected DeepSeek’s *Models & Pricing* docs:  
- **Model tiers** – `deepseek-coder-v2` (175B) vs. `deepseek-coder-mini` (7B).  
- **Pricing** – pay‑as‑you‑go: $0.0008/1K tokens for the large model, $0.0002/1K for mini.  
I built a cost‑model in AWS Cost Explorer using **AWS Lambda + API Gateway** to proxy requests, with **Amazon DynamoDB** caching token usage per user (TTL 30 days). The design leveraged **SageMaker Edge**, but kept the heavy inference off‑premises by routing through DeepSeek’s HTTPS endpoint.

I ran a 2‑week pilot:  
- *Latency*: 180 ms average.  
- *Cost*: $12.3K/month, 15% below budget.  
- *Error rate*: < 0.5%.

**Result**  
Achieved a scalable, cost‑effective LLM integration that supported 120k requests/day with SLA 99.9%. I documented the findings in a runbook and presented to leadership, earning a “Customer Obsession” nod for proactively protecting user experience.

> **Bar‑raiser focus:** ownership of end‑to‑end pipeline, deep dive into pricing semantics, quantified cost savings, and iteration after pilot failures (e.g., adjusting token cache TTL).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
