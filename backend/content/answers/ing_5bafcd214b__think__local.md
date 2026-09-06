---
qid: ing_5bafcd214b__think__local
question: 'Explain: Tagging Service — System Design Interview Cheat Sheet - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 494
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:02:21-05:00'
sources: []
---

**1. Clarify the scope & constraints**  
   * Ask whether “Tagging Service” means a generic tagging API (e.g., for images or text) or something specific like Instagram’s hashtag system.  
   * Define key metrics: read/write throughput, latency, consistency, and storage limits.  
   * Assume typical interview context: high‑scale, distributed, fault‑tolerant, with eventual consistency.

**2. Adopt a design framework**  
   * Start with **use‑cases** → CRUD on tags, search, autocomplete, analytics.  
   * Map to core components: API layer, service logic, data store(s), cache, message queue, monitoring.  
   * Consider trade‑offs: ACID vs CAP; relational vs NoSQL; single vs multi‑region.

**3. Reason step‑by‑step**  
   1. **API Gateway → Load Balancer → Stateless Tag Service instances** (Docker/K8s).  
   2. **Persist tags** in a distributed key‑value store (e.g., DynamoDB) keyed by tag text; secondary index for entity→tags mapping.  
   3. **Cache hot tags** with Redis for low‑latency autocomplete and counts.  
   4. Use a **message queue** (Kafka) to stream new/updated tags to analytics and search indexing services.  
   5. Design **sharding / partitioning** strategy: hash tag → shard; entity→tags can be stored in a separate table with composite key.

**4. Avoid common traps**  
   * Don’t over‑optimize early—start with a simple, correct design then iterate.  
   * Beware of assuming single‑region consistency when the system is global.  
   * Don’t ignore failure modes: eventual consistency, partial writes, and idempotent operations.

**5. Sanity‑check & verbalize**  
   * Verify that each requirement maps to a component (e.g., “autocomplete” → Redis).  
   * Explain trade‑offs: “We choose NoSQL for write scalability but accept eventual consistency.”  
   * Summarize with a concise diagram or bullet list, and be ready to justify each choice on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
