---
qid: ing_14395c1880__aws__local
question: 'Explain: Now what is the third category? Let''s — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 615
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:40-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last interview I was asked: *“Now what is the third category? Let’s talk database design tips for choosing the best database in a system‑design interview.”*  
I framed it around **Ownership** and **Dive Deep**, because selecting a database isn’t just a “pick one” question—it’s about owning the data lifecycle and digging into trade‑offs.

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| I was evaluating a real‑world e‑commerce platform that had to support 50 k concurrent users while keeping latency < 30 ms. | Choose a primary database for transactional data (orders) and a secondary store for analytics. | • Adopt **Amazon Aurora Serverless** (MySQL‑compatible) for ACID transactions—auto‑scales, pay‑per‑second, 99.999% availability.<br>• Use **Amazon Redshift Spectrum** to run ad‑hoc analytical queries on S3 without moving data.<br>• Implement **DynamoDB Streams + Lambda** for real‑time inventory updates, ensuring eventual consistency with a single source of truth.<br>• Add **RDS Proxy** to reduce connection overhead and improve read‑throughput. | • Transaction latency dropped from 120 ms to 28 ms (≈ 78% improvement).<br>• Cost decreased by 35 % vs. a monolithic RDS cluster.<br>• Failure rate during load tests fell to < 0.1%. |

**Design rationale**

- **Scalability:** Aurora Serverless auto‑scales; Redshift Spectrum handles petabyte‑scale queries without provisioning clusters.<br>
- **Availability:** Multi‑AZ deployments, automated failover, and DynamoDB’s built‑in fault tolerance.<br>
- **Cost:** Pay‑per‑second for Aurora + serverless analytics vs. over‑provisioned warehouses.

**What a bar‑raiser hears**

1. *Ownership:* I framed the choice as a decision that impacts performance, cost, and future growth.<br>
2. *Dive Deep:* I broke down each AWS service’s pricing model, SLA, and failure modes.<br>
3. *Quantified impact:* I tied every change to measurable latency, cost, or error‑rate improvements.<br>
4. *Learning from failure:* I discussed how a prior monolithic RDS deployment caused 30 % higher read latency during traffic spikes, prompting the serverless shift.

By anchoring on **Customer Obsession** (fast, reliable service for shoppers) and **Invent & Simplify** (leveraging managed services to reduce operational burden), I demonstrated a holistic, data‑driven approach that aligns with Amazon’s leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
