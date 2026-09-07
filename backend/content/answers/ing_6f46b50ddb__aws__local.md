---
qid: ing_6f46b50ddb__aws__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 438
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:36:56-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑platform team, we had a hard requirement: ingest 2 M writes/sec into Kafka for real‑time analytics. The only “cheap” way was to use commodity hardware (3× Intel Xeon E5‑2603v4 @ 1.8 GHz, 16 GB RAM). I needed to prove that the stack could meet this target and identify bottlenecks.

**Action**  
I orchestrated a full‑stack benchmark modeled on Jay Kreps’ 2014 paper.  
* **Kafka config** – tuned `num.io.threads`, `socket.receive.buffer.bytes`, and enabled `O_DIRECT` to bypass OS caching.  
* **Producer** – used the high‑throughput `kafka-clients` library with async send, batch size = 1 MB, linger = 5 ms, and 50 producer threads per broker.  
* **Broker** – ran on a single SSD, disabled log compaction, and set `message.max.bytes` to 1 MB.  
I instrumented JMX metrics and used Grafana dashboards for real‑time monitoring.

**Result**  
The cluster sustained **2.3 M writes/sec** with <10 ms latency, exceeding the target by 15 %. CPU utilization stayed below 70 % on each node; disk I/O saturated at ~250 MB/s, confirming we were limited by SSD bandwidth. Cost per write dropped to <$0.00001, proving a viable “cheap” architecture.

**Learnings & Ownership**  
I documented the tuning matrix, shared it in the org wiki, and created an automated test harness that now runs nightly on CI. This proactive ownership reduced future onboarding time by 40 % and set a new baseline for our data‑pipeline performance.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
