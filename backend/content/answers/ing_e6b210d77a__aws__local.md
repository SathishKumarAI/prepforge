---
qid: ing_e6b210d77a__aws__local
question: Interested in more? — How to Choose the Number of Topics/Partitions in a
  Kafka Cluster? | Confluent
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 591
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:45-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I was tasked with scaling a real‑time analytics pipeline that ingested 3 M events/s from IoT devices into Amazon Managed Streaming for Apache Kafka (MSK). The ingestion layer had to guarantee <50 ms latency while the downstream ML model training on EMR required partitioned data streams to parallelize feature extraction. I needed to decide how many partitions per topic would hit both throughput and low‑latency goals.

**Action (A)**  
1. **Data‑driven analysis** – I sampled 24 h of traffic, measuring average record size (280 B) and peak burst rate (~200 k events/s).  
2. **Capacity planning** – Using Kafka’s *partition throughput* formula:  
   \[
   \text{Throughput per broker} = \frac{\text{Broker RAM}}{(\text{Record Size}+16)}\times 1\,000
   \]  
   I projected that each broker could handle ~1.2 M events/s, so a single topic would need at least **4 partitions** to spread load across the 3‑broker cluster and avoid head‑of‑line blocking.  
3. **Fault‑tolerance & availability** – I set *replication factor* to 3 (the minimum for MSK) and enabled *inter‑broker leader election* to reduce downtime.  
4. **Cost vs. performance trade‑off** – Adding partitions increases broker CPU usage but reduces per‑partition latency. I ran a cost model in the AWS Cost Explorer, estimating that 4 partitions would add ~12 % extra broker capacity, translating to ~$1k/month versus ~30 % savings if I capped at 2 partitions and risked >200 ms latency.

**Result (R)**  
After implementation:  
- **Throughput** hit 3.2 M events/s with <40 ms end‑to‑end latency during peak bursts.  
- The ML training job on EMR processed each partition in parallel, cutting feature extraction time from 45 min to 12 min (a 73 % reduction).  
- Operational cost increased by only 10 %, staying within the $15k/month budget.

**Learning & Bar‑raiser insight**  
I learned that *dive deep* into broker metrics and *ownership* of end‑to‑end latency is critical. The bar‑raiser will look for: a clear data‑driven decision, explicit trade‑off analysis (cost vs. performance), quantified impact on both ingestion and ML training, and evidence of iterative learning from the pilot run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
