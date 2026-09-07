---
qid: ing_2e6ed44e28__aws__local
question: 'Explain: Vertical Scaling — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 533
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:03-05:00'
sources: []
---

**Situation – Leadership Principles:**  
While leading the data‑platform team for our e‑commerce analytics product, we hit a wall: a single PostgreSQL instance couldn’t handle the 10 M reads per day from our ML pipelines. We needed to **scale vertically** without breaking the “Customer Obsession” promise of near‑real‑time insights and “Ownership” of uptime.

**Task – Design & Execution:**  
I scoped a solution that would (1) add compute, memory, and I/O capacity; (2) keep latency < 200 ms for ML inference queries; and (3) stay under $30k/month.  

- **AWS services chosen:**  
  - *Amazon RDS PostgreSQL* on an **i3en.large** instance (high‑I/O NVMe storage).  
  - *Elastic Block Store (EBS) gp3* with 2 TB, provisioned IOPS of 16k.  
  - *RDS read replicas* for offloading reporting.  
  - *Amazon CloudWatch* and *RDS Performance Insights* for monitoring.

**Action – Dive Deep & Bias for Action:**  
1. **Baseline profiling** (pg_stat_statements) revealed a 70 % CPU bottleneck during peak ML inference.  
2. Switched to the i3en family, increasing CPU from 4 vCPU → 8 and RAM 16 GiB → 32 GiB.  
3. Tuned `max_connections` & `work_mem` per connection; added connection pooling via **pgbouncer** on an EC2 spot instance.  
4. Set up automated scaling of the read replica pool based on CloudWatch metrics.

**Result – Deliver Results:**  
- Latency dropped from 350 ms to **165 ms** (45% improvement).  
- Query throughput rose from 3,000 QPS to **9,500 QPS**.  
- Cost increased by only **12 %** ($27k → $30k/month) while maintaining 99.95 % availability.

**Reflection – Learning & Bar‑Raiser Signals:**  
I documented the failure modes (CPU saturation during batch jobs), iterated on monitoring thresholds, and shared the playbook with the team. The bar‑raiser looked for ownership in owning both the design and rollback plan, deep dive into performance metrics, and clear quantification of impact—all delivered above Amazon’s high standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
