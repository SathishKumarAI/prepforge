---
qid: ing_bca981a363__aws__local
question: 'Explain: Monitoring — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 464
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:23-05:00'
sources: []
---

**Situation / Task**  
At a fast‑growth fintech, our PostgreSQL cluster on **Amazon RDS** was hitting 95 % CPU during peak trading windows, causing latency spikes that hurt customer experience. I owned the remediation and built a *cheat‑sheet* of monitoring best practices to keep performance in check.

**Action**  
1. **Instrumentation** – Enabled **RDS Enhanced Monitoring** (OS metrics) + **Performance Insights** for query‑level data; set up **CloudWatch Alarms** on `CPUUtilization`, `ReadLatency`, `WriteLatency`, and `FreeableMemory`.  
2. **Alerting & Automation** – Created a **Lambda** that auto‑scales the instance class (from db.t3.medium to db.m5.large) when CPU > 80 % for 5 min, and sends an SNS alert with root‑cause analysis.  
3. **Dashboards** – Built a Grafana dashboard (via CloudWatch API) that visualises query plans, wait events, and replication lag in real time.  
4. **Testing & Validation** – Ran **pgbench** to simulate 10 k QPS; the new alerts prevented any latency >200 ms during peak.

**Result**  
- Reduced average query latency from **250 ms → 48 ms** (≈80 % drop).  
- Cut CPU‑related outages by **100 %**, keeping SLA at 99.99 %.  
- Cost of monitoring stack stayed under **$15/month**; auto‑scaling saved ~$200/month vs. over‑provisioning.

**Leadership Principles Anchored**  
- *Customer Obsession*: Ensured low latency for traders.  
- *Ownership*: Took end‑to‑end responsibility, from metrics to automation.  

**Bar‑raiser focus** – Demonstrated deep dive into performance data, quantified impact, and continuous learning (iterating on alarm thresholds).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
