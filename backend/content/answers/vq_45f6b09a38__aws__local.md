---
qid: vq_45f6b09a38__aws__local
question: What will you do when NameNode is down?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 457
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:59-05:00'
sources: []
---

**Situation (S)**  
At a streaming‑media company I was leading the Hadoop‑based ingestion pipeline that fed our recommendation engine. One night, the NameNode on our EMR cluster went down during peak traffic, threatening 12 h of data loss and a 15 % drop in downstream ad revenue.

**Task (T)**  
My goal: keep the pipeline running with zero data loss while minimizing cost and ensuring high availability for the next 48 h.

**Action (A)**  
1. **Immediate fallback** – I spun up an *Amazon EMR* cluster with a *High‑Availability (HA) NameNode* configuration, using two EC2 instances behind an Elastic Load Balancer and storing metadata in *Amazon S3* (EMRFS). This leveraged EMR’s *Auto Scaling* to keep the new cluster within 20 % of our baseline cost.  
2. **Data integrity** – I enabled *S3 Snapshot* on the original HDFS volume, then ran a *Spark* job that replayed all uncommitted blocks from S3 into the new cluster.  
3. **Monitoring & alerting** – I added CloudWatch alarms for NameNode CPU and disk usage, and set up an SNS topic to notify the ops team in real time.

**Result (R)**  
- Downtime reduced from 12 h to under 30 min.  
- No data loss; downstream models ran on fresh data within the SLA.  
- Cost increased by only 8 % for the incident, and we avoided a projected $3 k revenue hit.  

**Leadership Principles**  
- **Customer Obsession**: Delivered uninterrupted service to our advertisers.  
- **Ownership & Dive Deep**: Took full responsibility, investigated root causes (disk I/O bottleneck), and implemented an HA solution that scaled with traffic.

*Bar‑raiser takeaway:* The answer demonstrates ownership, a deep technical dive into EMR/HA design, quantified impact on revenue, and a learning loop to prevent future NameNode failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
