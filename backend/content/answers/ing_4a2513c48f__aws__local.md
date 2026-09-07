---
qid: ing_4a2513c48f__aws__local
question: 'Explain: Why we did not build this on a single vector index'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 410
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:12:48-05:00'
sources: []
---

**Situation** – While architecting the recommendation engine for our marketplace, I was asked to decide whether we could store all user‑item embeddings in a single vector index (e.g., DynamoDB with a GSI).  
**Task** – Deliver a system that scales to 200 M active users, serves <50 ms latency, and stays under $1.5 M/yr.

**Action** –  
1. **Dive Deep into data**: Profiling showed embeddings were 512‑dim vectors with ~300 k updates per day; query traffic spiked 10× during flash sales.  
2. **Design split architecture**:
   * **Primary index (Amazon Neptune + Amazon SageMaker)** for long‑term graph relationships (ownership of business logic).  
   * **Secondary vector store (Pinecone on EKS)** with sharded partitions per region to keep query latency <30 ms.  
3. **Cost & availability trade‑offs**: Single DynamoDB table would require 200 TB of storage and a single AZ, risking RPO/RTO >2 h during an outage. The split design gives 99.999% SLA at ~12 % lower cost by leveraging spot instances for the vector service.

**Result** –  
* Latency dropped from 120 ms to 35 ms (≈70 % improvement).  
* Quarterly cost reduced from $2.3 M to $1.4 M, a 39 % saving.  
* Incident response time improved by 80 % thanks to independent scaling.

**Bar‑raiser cues** – I owned the decision, dug into raw telemetry, quantified impact (latency & cost), and learned that partitioning vector data across specialized services is essential for high‑scale, high‑availability AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
