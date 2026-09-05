---
qid: ing_08f9d84e1d__star__local
question: 'Explain: Kibana Deployment ¶ — ELK Stack + Kafka End to End Practice \u2014
  Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 391
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:59-05:00'
sources: []
---

**Situation:**  
In my last role at a SaaS company, we were ingesting millions of logs daily from microservices spread across three regions. Our monitoring stack was fragmented: each service pushed to its own Logstash instance, Kafka topics were duplicated, and Kibana dashboards were stale because data lagged behind by up to 15 minutes.

**Task:**  
I had to design a unified ELK + Kafka pipeline that consolidated logs into a single searchable index, reduced ingestion latency below five seconds, and kept the architecture cost‑effective while ensuring high availability for Kibana.

**Action:**  
1. Replaced individual Logstash pods with a single Kafka Connect cluster using the `logstash-sink` connector, which pulled from all service topics and forwarded to a central Elasticsearch index (`app-logs-*`).  
2. Configured Kafka’s MirrorMaker to replicate logs from remote regions into our primary data center, guaranteeing data locality for Kibana.  
3. Deployed Beats on each host to forward raw logs directly to Kafka, bypassing Logstash overhead.  
4. Implemented a daily index lifecycle policy in Elasticsearch to rollover every 30 GB and delete indices older than 90 days.  
5. Set up Kibana as an HAProxy‑fronted cluster with read replicas, using the same index pattern for all dashboards.

**Result:**  
Log ingestion latency dropped from ~15 minutes to under 4 seconds; Elasticsearch storage grew by 30% but remained within budget thanks to lifecycle policies. Dashboard refresh rates improved, enabling real‑time alerting that cut incident response time by 40%. I learned the importance of aligning Kafka’s topic design with ELK’s indexing strategy and how Beats can dramatically simplify log pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
