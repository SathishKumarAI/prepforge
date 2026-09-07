---
qid: vq_a059566b19__aws__local
question: WHOW DOES INDEXING IMPROVE PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 608
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:39-05:00'
sources: []
---

**Question:** *How does indexing improve performance?*  

---

### Situation  
In my last role I led the redesign of a legacy e‑commerce catalog service that was experiencing 6 s query latency for product searches. The primary bottleneck was the lack of indexes on the `Products` table, which had over **12 M rows** and was queried on `category_id`, `price_range`, and full‑text `description`.  

### Task  
My goal was to cut search latency below **200 ms** while keeping cost < 10 % of the previous spend.

### Action  
1. **Dive Deep into Workload** – Collected query logs, identified the top 3 predicates (`category_id`, `price_range`, `description LIKE`), and measured their selectivity.  
2. **Design & Implement Indexes** – Created a composite B‑tree index on `(category_id, price_range)` and a GIN index for full‑text search on `description`.  
3. **AWS Services** – Deployed the schema changes in an RDS PostgreSQL instance (Multi-AZ for high availability). Leveraged **Aurora Serverless v2** to auto‑scale read replicas during traffic spikes, ensuring consistent performance.  
4. **Cost & Trade‑offs** – Added 20 GB of index storage (~$30/month) but reduced IOPS by 70 %, saving ~$200/month on provisioned throughput.  
5. **Testing** – Ran a canary deployment with 10 k concurrent users, measuring latency via CloudWatch metrics.

### Result  
- **Latency dropped from 6 s → 180 ms** (97% improvement).  
- **Query throughput increased by 4×**, enabling the catalog to handle a projected 50 % traffic growth without new instances.  
- **Cost savings of $230/month** while maintaining 99.99 % availability.

---

### Reflection & Amazon Leadership Principles  

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the catalog’s performance, from root‑cause analysis to deployment and monitoring. |
| **Dive Deep** | Conducted granular query profiling, measured selectivity, and chose the optimal index strategy. |
| **Bias for Action** | Implemented indexes in a short sprint, validated with canary tests, and rolled out to production quickly. |
| **Deliver Results** | Achieved measurable latency reduction, throughput increase, and cost savings—all directly tied to business metrics (conversion rates & revenue). |

Bar‑raisers listen for: *clear ownership, depth of analysis, quantified impact, and lessons learned from failures.* In this case, the failure mode was a mis‑estimated selectivity that could have led to wasted index space; we mitigated it by continuous monitoring and iterative tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
