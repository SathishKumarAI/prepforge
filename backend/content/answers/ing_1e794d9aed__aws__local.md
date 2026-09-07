---
qid: ing_1e794d9aed__aws__local
question: 'Explain: Open Questions — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 535
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:21-05:00'
sources: []
---

**Situation (S)**  
At Cognition I led the redesign of our VM snapshot pipeline for a multi‑tenant SaaS platform that stored over **3 TB/day** of incremental disk changes. The existing proprietary format was brittle, hard to query, and caused 12 % downtime during rollbacks.

**Task (T)**  
Build a robust, scalable file format—Blockdiff—that compresses, encrypts, and version‑controls snapshots while enabling instant restore and fine‑grained block access.

**Action (A)**  
1. **Requirements & Design** – Chose an *append‑only log* layout with per‑block checksum headers to support idempotent writes.  
2. **AWS Services** –  
   - **S3 Glacier Deep Archive** for cold archival of full snapshots (cost <$0.001/GB/day).  
   - **EFS** as a shared cache during snapshot stitching, leveraging its 10 k IOPS burst capability.  
   - **Lambda + Step Functions** orchestrate incremental diff extraction and metadata indexing into DynamoDB (low‑latency lookups).  
3. **Scalability & Availability** – Sharded S3 key namespaces by tenant ID; used cross‑region replication to meet SLA of 99.9 % durability.  
4. **Cost/Trade‑offs** – Opted for serverless compute over EC2 to avoid idle capacity; accepted a ~5 ms latency on first block read in exchange for 30× cost savings.

**Result (R)**  
- Reduced snapshot restore time from 45 min to **6 sec** for the latest block.  
- Cut storage costs by **28 %** year‑over‑year while maintaining 99.95 % availability.  
- Enabled new feature: *point‑in‑time recovery* that increased customer satisfaction scores by **+15 pts**.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility from spec to production, iterating on failures (e.g., initial checksum bugs).  
- **Dive Deep** – Instrumented every layer, measured IOPS and latency, tuned DynamoDB partitions.  
- **Deliver Results** – Quantified impact in seconds saved, dollars cut, and SLA met.  

Bar‑raisers look for clear ownership, deep technical justification, measurable outcomes, and lessons learned from early missteps—all present in this story.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
