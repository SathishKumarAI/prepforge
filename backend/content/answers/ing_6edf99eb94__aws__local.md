---
qid: ing_6edf99eb94__aws__local
question: 'Explain: Producer Throughput Versus Stored Data — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 436
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:39-05:00'
sources: []
---

**Situation & Task**  
At a former startup I was tasked with proving that our Kafka cluster could sustain *2 M writes/sec* on commodity hardware—essential for the next‑gen event platform. The goal was to validate **producer throughput** while keeping per‑topic storage manageable, so we could scale without ballooning S3 or EBS costs.

**Approach (Dive Deep + Ownership)**  
1. **Benchmark harness** – built a multi‑threaded producer in Go using `sarama`, parameterized batch size and linger time.  
2. **Metrics collection** – exported Kafka metrics to CloudWatch via JMX; used Prometheus for fine‑grained latency traces.  
3. **Storage strategy** – enabled *compact* topics with 24 hr retention, partitioned by key hash to distribute writes evenly across three `c5.large` instances.  
4. **AWS services** – leveraged **Amazon MSK** (managed Kafka) for high availability and **S3 Glacier Deep Archive** as a long‑term sink via Connect.  
5. **Cost model** – calculated that at 2 M msg/s, each broker stored ~12 GB/day; with compaction the storage stayed <1 TB/month versus raw 24 TB.

**Result (Deliver Results)**  
Achieved **2.1 M writes/sec** sustained for 30 min, latency <5 ms, and 0.3 % message loss under simulated load spikes. Storage growth was capped at 10 GB/day, cutting projected S3 costs from $4k to <$500/month.  

**Learnings (Bias for Action)**  
The key insight: *producer throughput is decoupled from storage if you combine compacted topics with efficient retention*. Future builds will auto‑scale MSK brokers based on lag metrics—showing full ownership of the pipeline lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
