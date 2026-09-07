---
qid: ing_76e7e29de7__aws__local
question: 'Explain: Financial Market Data Feeds — What are WebSockets and Why are
  they Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 444
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:18-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I joined the Quant Platform team, we were asked to ingest real‑time market data for a high‑frequency trading engine that had to stay under 1 ms latency.  
**Situation:** The legacy system pulled CSV snapshots every 10 s, causing stale quotes and missed arbitrage windows.  
**Task:** Design a low‑latency feed that could push millions of ticks per second while keeping costs in check.  
**Action:** I championed **WebSocket** connections over HTTP polling because WebSockets are full‑duplex, keep the TCP connection alive, and eliminate the overhead of repeated handshakes—critical for sub‑millisecond delivery.  

Implementation:  
- **Amazon API Gateway + Lambda Authorizer** to secure client auth.  
- **AWS IoT Core** (or Kinesis Data Streams) as a broker that accepts WebSocket connections from market data providers and fan‑outs events to subscribed workers.  
- Each worker is an **EC2 Spot instance** in a **private subnet**, scaling via Auto Scaling based on incoming event rate; we hit 1 M events/s with < 800 ms latency, 99.9% availability, and $0.45/hr per instance.  

**Result:** The new feed reduced data staleness by **94%** (from 10 s to ~5 ms) and increased trade execution rate by **35%**, directly boosting P&L by $2.1M annually.  
**Learnings:** We initially over‑provisioned the IoT Core throughput, incurring unnecessary costs; after monitoring, we tightened limits—demonstrating *Ownership* and *Dive Deep*.  

**Leadership Principles Highlighted:** Customer Obsession (fast data for traders), Ownership (end‑to‑end solution ownership), Dive Deep (profiling latency), Bias for Action (rapid prototype), Deliver Results (measured revenue lift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
