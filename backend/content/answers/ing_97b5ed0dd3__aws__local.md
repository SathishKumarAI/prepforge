---
qid: ing_97b5ed0dd3__aws__local
question: 'Explain: Characteristic #1: It doesn’t share database tables with another
  service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 406
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:37-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our recommendation engine to a new micro‑service architecture. One key requirement from the Product Owner was that each service must “not share database tables with another service.”  

**Action**  
1. **Dive Deep into Data Dependencies** – I mapped all read/write paths between services, identifying 12 shared tables in the monolith.  
2. **Design a Decoupled Schema** – For each table I created a *service‑owned* schema in RDS PostgreSQL and introduced an event‑driven sync layer using Amazon EventBridge and Lambda.  
3. **AWS Services** –  
   - **Amazon Aurora Serverless v2** for elastic scaling (up to 64 GB per cluster).  
   - **EventBridge** to publish domain events (`OrderCreated`, `UserUpdated`).  
   - **Lambda** with retry logic to apply changes to the new schemas.  
4. **Cost & Availability Trade‑offs** – EventBridge’s pay‑per‑event model kept costs < $0.10/1,000 events; Aurora Serverless eliminated idle capacity, saving ~30% on compute.  
5. **Testing & Rollout** – Implemented a canary release with feature flags and automated regression tests that validated data consistency within 2 seconds.

**Result**  
- Eliminated cross‑service table dependencies in 4 weeks, reducing deployment risk by 85%.  
- Achieved 99.999% availability for the recommendation service while keeping monthly database costs down to $1,200 (vs. projected $1,800).  
- The new event schema is now reusable for future services, demonstrating true ownership and scalability.

*Learning*: Early deep dives into data flow uncovered hidden coupling; adopting an event‑driven sync model provided a clean separation that aligns with Amazon’s “Ownership” and “Dive Deep” principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
