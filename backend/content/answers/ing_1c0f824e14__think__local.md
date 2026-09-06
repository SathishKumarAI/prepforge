---
qid: ing_1c0f824e14__think__local
question: 'Explain: Distributed Object Storage — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 477
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:33:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set boundaries**  
- Is the focus on *object‑level* storage (files only) or the whole Instagram stack?  
- Which metrics matter: latency, durability, scalability, cost?  
- Do we need to address multi‑region availability or just a single data center?  

**2️⃣ Adopt a system‑design framework**  
- **Requirements** → Functional vs non‑functional.  
- **Components** → Clients, API servers, storage layer, metadata service, CDN.  
- **Data flow & partitions** → Sharding strategy (user ID, media hash).  
- **Consistency model** → Strong vs eventual for user feeds vs media fetches.  

**3️⃣ Step‑by‑step reasoning**  
1. Define the object model (image/video + metadata).  
2. Choose a storage backend (S3‑compatible object store, erasure‑coded disks).  
3. Design a key namespace & partitioning scheme (e.g., `userID/hash`).  
4. Build a metadata catalog (PostgreSQL or DynamoDB) for lookup.  
5. Add replication and erasure coding for durability.  
6. Expose REST/GRPC APIs with rate limiting & auth.  
7. Hook CDN for low‑latency global delivery.  

**4️⃣ Common pitfalls to avoid**  
- Mixing storage concerns with application logic (e.g., putting media in a relational DB).  
- Ignoring cost of egress from object store; use CDN caching early.  
- Over‑optimizing latency at the expense of availability during failures.  

**5️⃣ Sanity checks & verbal walk‑through**  
- Ask “If I delete an object, what fails first?” → metadata vs data consistency.  
- Verify that scaling a new region doesn’t require re‑sharding existing keys.  
- Explain trade‑offs: e.g., erasure coding reduces cost but increases read latency.  

Use this scaffold to structure your answer, and iterate on each section while keeping the interviewer's focus in mind.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
