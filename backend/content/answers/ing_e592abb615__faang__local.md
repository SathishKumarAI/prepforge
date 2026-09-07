---
qid: ing_e592abb615__faang__local
question: 'Explain: So the seller has uploaded a product — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 491
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:05-05:00'
sources: []
---

**Clarify**

The interviewer asks you to explain *how to choose the best database* in a system‑design interview, assuming the seller has just uploaded a product listing and wants to store its metadata (seller info, pricing, inventory, etc.).  
Key assumptions:  
- Traffic is high‑read, low‑write.  
- Data must be highly available and horizontally scalable.  
- Consistency requirements are relaxed (eventual consistency acceptable).  

**Approach**

1. Identify **workload patterns** (reads vs writes, query types).  
2. Map those to database categories: SQL for strong ACID & complex joins; NoSQL (document, key‑value, column) for scale and flexible schema.  
3. Evaluate trade‑offs: latency, consistency, cost, operational overhead.  

**Depth**

- **Relational DB (e.g., PostgreSQL)** – great for transactions, foreign keys, and reporting. Requires sharding or read replicas to scale; strong consistency guarantees.  
- **Document Store (MongoDB, DynamoDB)** – schema‑less, good for product catalogs where attributes vary per item. Supports auto‑sharding, offers eventual consistency with tunable consistency levels.  
- **Key‑Value (Redis, Memcached)** – ultra‑fast reads for session or cache layers; not suitable for complex queries.  
- **Column Family (Cassandra)** – linear scalability, high write throughput, but limited join support.  

Pick a hybrid: use PostgreSQL for orders/transactions, MongoDB for product catalog, and Redis for caching.

**Edge Cases**

- Sudden traffic spikes → need auto‑scaling or sharding strategy.  
- Data migration between stores → maintain consistency with change data capture (CDC).  
- Schema evolution in NoSQL may break queries; versioning is essential.

**Optimize & Communicate**

Explain that the choice hinges on *read/write ratio, consistency needs, and operational complexity*. Highlight how a multi‑model architecture balances performance with developer productivity. End by summarizing: “For this seller’s product upload use MongoDB for flexibility, PostgreSQL for transactions, and Redis for caching—scalable, maintainable, and cost‑effective.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
