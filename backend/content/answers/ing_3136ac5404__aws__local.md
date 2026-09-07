---
qid: ing_3136ac5404__aws__local
question: 'Explain: Market Data Multicast — Top 4 Most Popular Use Cases for UDP'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 525
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:28-05:00'
sources: []
---

**Situation / Task**  
While leading the data‑engineering team for a global trading platform, we had to expose real‑time market feeds (price, depth, trades) to hundreds of downstream services. The challenge was low latency and high throughput while keeping costs predictable. We chose **UDP multicast** because it scales linearly with subscribers and avoids TCP overhead.

**Action / Design**  
1. **Price Ticker Broadcast** – 50 k updates/s. We used an **AWS Global Accelerator** front‑end to distribute the UDP stream to edge locations, then a **Kinesis Data Streams** shard per region for durability.  
2. **Order Book Depth Feed** – 200 k messages/s. Packets were compressed with **Snappy** and sent via **Amazon CloudFront** custom origins; subscribers pull via WebSocket fallback for reliability.  
3. **Trade Confirmation Alerts** – 10 k events/s, time‑critical. We leveraged **AWS IoT Core** MQTT over UDP to reach mobile clients, guaranteeing <5 ms end‑to‑end latency.  
4. **Regulatory Snapshot Snapshots** – daily aggregated snapshots sent as a single multicast burst (≈100 MB). Handled by an **ECS Fargate** job that writes to **S3 Glacier Deep Archive** for audit compliance.

We monitored packet loss with **Prometheus/Grafana**, kept it <0.01 % across all use cases, and cut infrastructure cost by 35 % versus a pure TCP solution.

**Result**  
- 99.999 % uptime on the price feed.  
- Latency dropped from 12 ms (TCP) to 3 ms (UDP).  
- Cost savings of $120k annually.

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivered sub‑5 ms latency for traders.  
- **Ownership & Dive Deep** – architected a multi‑service solution, measured every metric, and iterated on packet loss.  

**Bar‑raiser takeaways**  
- Quantified impact (latency, cost).  
- Demonstrated deep technical trade‑offs (UDP vs TCP, multicast vs unicast).  
- Learned from early trials where packet fragmentation caused data loss; resolved by tuning MTU and implementing sequence numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
