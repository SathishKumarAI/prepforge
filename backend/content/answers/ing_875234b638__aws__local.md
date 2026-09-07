---
qid: ing_875234b638__aws__local
question: 'Q: How do you choose between a Vector DB and a Knowledge Graph for long-term
  memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:07-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing the “long‑term memory” layer for an AI assistant that needed to recall user preferences and domain knowledge across millions of sessions. The key decision: **Vector DB vs Knowledge Graph**.

**Action (Design)**  
1. *Requirements*: fast similarity search (latency < 20 ms), flexible schema, high write throughput, and strong consistency for user‑generated facts.  
2. *Choice*: Use **Amazon Neptune** (a managed knowledge graph) for structured relational data (user intents, entities) and **Pinecone** (managed vector store on AWS via VPC endpoints) for unstructured embeddings.  
3. *Integration*: A Lambda orchestrator merges results: graph traversal for explicit relations, vector similarity for latent context.  
4. *Scalability*: Neptune scales to 64 TB with read replicas; Pinecone offers auto‑sharding and GPU acceleration, keeping cost per query <$0.0001.  
5. *Availability & Cost*: Both services are multi‑AZ; we enable cross‑region read replicas for disaster recovery, costing ~30% more but meeting our SLA of 99.99 %.

**Result**  
After rollout, recall accuracy improved from **78 % to 92 %** on the internal benchmark, and latency dropped by **35 %** compared to a monolithic vector‑only approach.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline, dug deep into query patterns, and iterated based on real user telemetry—demonstrating *Ownership* and *Dive Deep*. The bar‑raiser would hear my data‑driven impact, trade‑off reasoning, and commitment to continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
