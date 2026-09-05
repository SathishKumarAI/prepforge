---
qid: ing_74bb48edb6__star__local
question: Why Kafka for Ingestion? — Real Time Search
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 345
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:03-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time product recommendation engine that pulled user click streams from thousands of web pages. Our analytics dashboard needed live updates every few seconds, but the existing log ingestion pipeline (batch FTP pulls) lagged 15–20 minutes behind.

**Task:**  
I was tasked with redesigning the ingestion layer so that new events appeared in the search index within two seconds and could scale to 50k events per second without data loss or bottlenecks.

**Action:**  
I chose Apache Kafka as the backbone. I set up a cluster of three broker nodes, configured topic partitions equal to the number of event producers (30), and enabled replication factor 2 for fault tolerance. Using the Kafka Connect framework, I built a source connector that streamed raw click JSON directly into Kafka, then wrote a lightweight consumer in Go that applied minimal transformation and pushed records into Elasticsearch via its bulk API. To guarantee ordering per user, I used key‑based partitioning. I also implemented backpressure handling by adjusting consumer poll intervals and using the “at least once” delivery semantics.

**Result:**  
The new pipeline cut ingestion latency from 20 minutes to under two seconds, increased throughput to 60k events/s, and reduced search lag to less than one second. The system handled a traffic spike during a flash sale without any data loss or service interruption. I learned that Kafka’s partitioned, replicated architecture is essential for real‑time search workloads where speed, scalability, and reliability are non‑negotiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
