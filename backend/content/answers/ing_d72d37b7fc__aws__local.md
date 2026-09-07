---
qid: ing_d72d37b7fc__aws__local
question: 'Explain: Webinar: Product recommendations with mongoDB and Neo4j'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 461
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:00-05:00'
sources: []
---

**Situation** – While leading the **Product Discovery** team at a SaaS e‑commerce platform, we needed to deliver real‑time personalized webinar recommendations during high‑traffic launch events. The data was unstructured (user clickstreams) and graph‑centric (co‑purchase networks).  

**Task** – Build an end‑to‑end recommendation pipeline that scales to 200k concurrent viewers, reduces latency below 100 ms, and drives a 12% lift in webinar sign‑ups.

**Action** –  
1. **Data ingestion**: Kinesis Data Streams → Lambda → **MongoDB Atlas** (clustered by region) for fast writes of session logs; Lambda also pushes a subset to **Amazon Neptune** for graph modeling.  
2. **Graph model**: Users ↔️ Products ↔️ Webinars, enriched with *co‑view* edges. Use **Neo4j Aura** for iterative training (embedding via Node2Vec) and periodic sync to Atlas.  
3. **Recommendation engine**: Lambda pulls user embedding from Neptune, queries Atlas for top 5 webinars using a hybrid content + collaborative filter, and caches results in **ElastiCache‑Redis**.  
4. **Serving layer**: API Gateway → Lambda → CloudFront edge caching; response <80 ms under peak load.  

**Result** – Achieved a 12% increase in webinar registrations (≈ 5k extra sign‑ups), cut latency from 250 ms to 75 ms, and reduced infrastructure cost by 18 % through serverless compute and managed databases.  

> **Leadership Principles**: *Customer Obsession* (tailored recommendations that boost engagement) & *Ownership* (full lifecycle from ingestion to serving).  
> **Bar‑raiser cues**: clear ownership of each component, depth in data modeling choices, quantified impact, and post‑mortem on a 15 % latency spike that led to the switch from EC2 to Lambda.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
