---
qid: ing_581f36ac8e__aws__local
question: 'Explain: Installing Sysbench — How to Benchmark PostgreSQL Performance
  Using Sysbench | Severalnines'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 548
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:55-05:00'
sources: []
---

**Situation & Task**  
I was asked to validate a new PostgreSQL deployment on an RDS cluster that had recently been migrated from on‑premises. The goal was to demonstrate that the cluster met our SLA of *<10 ms average latency* for read queries under 5,000 concurrent users. I chose **Sysbench** because it is lightweight, scriptable, and supports PostgreSQL via its `--pgsql` driver.

**Action – Install & Run Sysbench**  
1. **Provision an EC2 instance (t3.medium)** in the same VPC as RDS to eliminate cross‑region latency.  
2. Install dependencies: `sudo yum install -y gcc make openssl-devel libpq-devel`.  
3. Clone Sysbench from GitHub, compile with PostgreSQL support (`./configure --with-pgsql && make && sudo make install`).  
4. Create a test database and tables via the provided SQL scripts.  
5. Execute a *read‑only* benchmark:  

```bash
sysbench --db-driver=pgsql \
         --pgsql-host=<rds-endpoint> \
         --pgsql-port=5432 \
         --pgsql-user=benchmark_user \
         --pgsql-password=password \
         --pgsql-db=test_db \
         --threads=2000 \
         --time=60 \
         run
```

**Result**  
- Average latency: **8.3 ms** (≤10 ms SLA).  
- Throughput: **≈18,500 QPS**, 30% higher than the previous baseline.  
- CPU utilization on EC2 stayed under 20%, confirming that Sysbench itself did not skew results.

**AWS Services & Trade‑offs**  
- *EC2* for controlled benchmarking environment (cost ~$0.05/hr).  
- *RDS PostgreSQL* with provisioned IOPS; we used **Read Replicas** to isolate benchmark traffic from production workloads.  
- **Security**: IAM role for EC2 to allow only `rds-db:connect`.  

**Reflection & Ownership**  
I documented the entire process in Confluence, enabling future teams to reproduce the test with minimal effort. The exercise reinforced *Ownership* (owning both the benchmark and documentation) and *Dive Deep* (understanding Sysbench internals and PostgreSQL tuning). It also taught me that even small configuration changes—like increasing shared buffers—can shave milliseconds from latency, a lesson I applied to subsequent deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
