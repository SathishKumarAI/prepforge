---
qid: ing_aa442a8ec6__aws__local
question: You have four hours to build and demo a working AI-powered product. How
  do you spend them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:11-05:00'
sources: []
---

**Situation & Task (S)**  
I was given 4 hours to prototype an AI‑powered recommendation widget for a retail site that could be demoed live to stakeholders.

**Action (A)**  
1. **Ownership & Bias for Action** – I scoped the MVP: product‑level recommendations using user click history, no data‑labeling needed.  
2. **Dive Deep on Tech** – Chose Amazon Personalize (managed ML) for quick model training; S3 to store raw logs; Lambda for ingestion; API Gateway + CloudFront to expose a REST endpoint.  
3. **Design & Scalability** – Lambda concurrency 50, Personalize batch inference < 2 s, CloudFront caching 1‑hour TTL → 99.9 % availability at $0.005 per request.  
4. **Demo Prep** – Built a lightweight React front‑end that calls the API and displays top‑3 items; added simple A/B test overlay to show future growth.

**Result (R)**  
- Trained & deployed the model in 90 min, demoed live with < 1 s latency.  
- Stakeholders approved the prototype; projected cost $0.25/month for 10k requests, vs. $2/month if we built a custom inference service.  
- Learned that “pick the simplest AWS service first” saves time and reduces risk.

**Bar‑raiser cues** – clear ownership, rapid iteration, quantifiable impact (latency & cost), and reflective learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
