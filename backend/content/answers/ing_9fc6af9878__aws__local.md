---
qid: ing_9fc6af9878__aws__local
question: 'Explain: Company events — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 516
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:25:58-05:00'
sources: []
---

**Situation (S)**  
At a mid‑size SaaS firm, our engineering team was tasked to launch an internal “Careers at Glean” portal that surfaced AI‑generated job matches for candidates and recruiters. The goal was to reduce time‑to‑hire by 30 % and increase candidate engagement.

**Task (T)**  
Design an end‑to‑end architecture that scales with millions of users, guarantees < 200 ms latency, and keeps operating costs under $10k/month while delivering highly relevant AI recommendations.

**Action (A)**  
1. **Data Layer** – Ingested 5 M resumes + job posts into Amazon S3 → processed by AWS Glue, stored in a partitioned Athena catalog for fast querying.  
2. **Feature Store** – Built an Amazon SageMaker Feature Store to cache embeddings (tf‑idf + BERT) with 99.9 % freshness SLA.  
3. **Model Serving** – Deployed a multi‑model endpoint on SageMaker hosting the matching model; used Lambda to orchestrate inference requests, ensuring < 200 ms latency via provisioned concurrency.  
4. **Observability & A/B Testing** – Employed CloudWatch metrics + Amazon Pinpoint for engagement tracking; ran controlled experiments (n=10k users) to measure click‑through and offer acceptance rates.  
5. **Cost Optimization** – Leveraged Spot Instances for training, reserved instances for serving, and S3 Intelligent-Tiering for storage.

**Result (R)**  
- Time‑to‑hire dropped from 12 days to 8.4 days (30 % reduction).  
- Candidate engagement rose 45 % (CTR from 2.1 % to 3.0 %).  
- Monthly cost stayed at $9.7k, below the $10k budget.

**Leadership Principles Highlighted**  
*Customer Obsession* – Built metrics around user satisfaction and real hiring outcomes.  
*Ownership & Dive Deep* – Took end‑to‑end responsibility, iterated on model accuracy and latency through deep data analysis.

**Bar‑raiser Takeaway**  
I demonstrated ownership by architecting a production‑grade AI pipeline, dove deep into performance trade‑offs, quantified impact with concrete KPIs, and learned from early latency spikes to refine provisioning strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
