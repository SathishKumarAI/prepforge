---
qid: ing_5f78a8b821__aws__local
question: 'Explain: surprised to find that we''re moving all — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 498
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:59-05:00'
sources: []
---

**Situation**  
During my first quarter as a Solutions Architect, I was tasked with migrating a legacy transactional system to AWS. The client’s throughput had plateaued at ~5 k TPS and they expected 100 k TPS within six months.

**Task**  
I needed a database that could scale horizontally, maintain low latency, and avoid vendor lock‑in. My goal: design a solution that delivers <10 ms read latency at 200 k TPS while keeping cost below $50K/month.

**Action**  
1. **Dive Deep into DynamoDB** – I studied the 2018 re:Invent “Under the Hood” session (DAT321). Key takeaways:
   - *Partition key hashing* and *automatic partition scaling* eliminate hotspots.
   - *On‑demand capacity* + *Provisioned with auto‑scaling* keeps costs predictable.
   - *Global Secondary Indexes (GSIs)* allow flexible query patterns without compromising write throughput.

2. **Architecture**  
   - **DynamoDB** for core data, using a composite key (`PK=UserID#Timestamp`, `SK=EventType`).  
   - **Streams + Lambda** to sync audit logs to S3 for analytics.  
   - **API Gateway + Cognito** for secure REST endpoints.  
   - **CloudWatch Alarms** trigger auto‑scaling thresholds.

3. **Cost & Scalability Calculations**  
   - 200 k TPS ≈ 20 M writes/month → ~2 GB/Writes, costing ~$1,200/mo.  
   - Provisioned throughput + auto‑scale adds <10% overhead.  
   - S3 cold storage for logs keeps archival cost <$300/mo.

4. **Result**  
   - Achieved 95 % of requests under 8 ms latency; peak 12 ms during flash sales.  
   - Scaled to 250 k TPS in production with no outages.  
   - Reduced total monthly spend by 30 % compared to the legacy RDS cluster.

**Learning & Ownership**  
I documented a “Best‑Practice Playbook” for future migrations, which now serves as a reference across the org. This reflects *Customer Obsession* (meeting SLA) and *Ownership* (continuous improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
