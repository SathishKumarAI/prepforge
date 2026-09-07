---
qid: ing_d03303a808__aws__local
question: 'Explain: Graph Use Cases — MongoDB: The World\u2019s Leading Modern Data
  Platform | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 503
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:49-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a migration of our recommendation engine from a legacy relational stack to MongoDB, driven by the need for flexible graph‑like relationships between users, products and interactions.

**Action**  
I scoped the use case: *“Graph Use Cases – MongoDB”* and mapped it to **Customer Obsession** (understand user journey) and **Ownership** (own full pipeline).  
1. **Requirements & Design** – Each node (user, product) was a collection; edges were stored as sub‑documents in a single `relationships` collection using the *adjacency list* pattern with compound indexes on `(from_id, to_type)` for fast traversal.  
2. **AWS Services** –  
   - **Amazon EC2 + Auto Scaling** for MongoDB shards (replica sets) → 99.999% availability.  
   - **Amazon EBS GP3** for low‑latency storage; provisioned IOPS matched our peak write rate (~10k ops/s).  
   - **AWS Lambda + Step Functions** orchestrated ETL jobs, scaling to 1k concurrent invocations.  
   - **CloudWatch & X-Ray** monitored query latency and traced failures.  
3. **Scalability / Cost Trade‑offs** – Sharded cluster achieved linear read scaling; we capped the number of shards at 8 to keep inter‑shard joins minimal, keeping costs under $12k/month while maintaining <50 ms average query time.

**Result**  
Post‑migration, recommendation hit‑rate rose from **23% → 38%** (15% lift), and latency dropped by **70%**. The team reduced operational overhead by 40% thanks to automated scaling and self‑healing clusters. I documented the architecture in a living wiki; after internal review, we adopted it for three additional product lines, saving an estimated $250k annually.

*What a bar‑raiser looks for:*  
- **Ownership**: full responsibility from design through ops.  
- **Dive Deep**: concrete indexing strategy and cost calculations.  
- **Quantified Impact**: clear metrics on lift & savings.  
- **Learning**: post‑mortem identified that early monitoring of inter‑shard traffic would have pre‑empted a spike, leading us to refine our shard key policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
