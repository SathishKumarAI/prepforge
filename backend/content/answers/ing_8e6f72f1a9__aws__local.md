---
qid: ing_8e6f72f1a9__aws__local
question: 'Explain: User Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 538
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:58-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional squad at a startup that wanted to launch an *Instagram‑style* photo‑sharing app within six months. The goal was to serve 1 M active users by launch and grow to 10 M in two years, while keeping latency under 200 ms for feed rendering.

**Task (T)**  
Architect a scalable, highly available backend that ingests media, stores metadata, generates thumbnails, and serves personalized feeds with minimal operational overhead.

**Action (A)**  
- **Storage & Processing:** Off‑loaded uploads to Amazon S3 (object storage) and triggered Lambda functions for transcoding (AWS Elastic Transcoder).  
- **Metadata & Search:** Used DynamoDB tables (Users, Posts, Likes) with Global Secondary Indexes for fast feed queries. Employed AWS AppSync + GraphQL to expose a unified API.  
- **Feed Generation:** Deployed an Amazon Kinesis Data Streams pipeline feeding into a Lambda‑based “feed worker” that writes aggregated posts into Redis‑Cache (Amazon ElastiCache).  
- **CDN & Caching:** Served media via CloudFront, caching thumbnails for 24 h; used signed URLs to protect private content.  
- **Observability:** Integrated Amazon CloudWatch + X-Ray; set up automated scaling rules on Lambda and DynamoDB provisioned throughput.

**Result (R)**  
The system handled 2 M concurrent uploads per day with <0.5 s average latency for feed rendering, supporting 1 M DAUs at launch. By year‑two, we scaled to 10 M users while keeping monthly cloud spend under $200k—30% below the initial budget estimate.

---

**Leadership Principles Highlighted**

- **Ownership:** Took end‑to‑end responsibility from design through deployment, driving cost‑efficiency and reliability.  
- **Dive Deep:** Probed every component (S3 lifecycle policies, DynamoDB partition keys) to uncover bottlenecks before they hit production.  

**Bar‑raiser takeaways**

- Demonstrated measurable impact with real metrics (latency, user count, cost).  
- Showed depth by selecting appropriate AWS services and justifying trade‑offs (e.g., serverless vs. EC2 for compute).  
- Learned from early failures: a mis‑tuned Lambda timeout caused feed delays; we remedied it by implementing exponential backoff in the worker pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
