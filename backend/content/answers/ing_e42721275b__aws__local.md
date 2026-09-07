---
qid: ing_e42721275b__aws__local
question: 'Explain: So not you know not a very — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 485
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:45-05:00'
sources: []
---

**Situation & Task**  
When I joined the YouTube Video Recommendation team, we were hitting a 30 % latency spike during peak hours because our real‑time inference pipeline (TensorFlow Serving) could not keep up with 200 k concurrent user requests per second.

**Action – Technical Design**  
1. **Decouple model serving from request routing** – introduced an AWS Elastic Load Balancer in front of a *dedicated* Auto Scaling group of EC2 Spot Instances running TensorFlow Serving containers.  
2. **Model caching & batching** – added Redis (AWS ElastiCache) to cache the top 10 % most‑requested feature vectors, and leveraged TensorRT to batch 128 requests per inference call.  
3. **Observability & autoscaling policy** – instrumented Prometheus metrics to a CloudWatch dashboard; set target CPU utilization at 70 % with cooldown of 60 s.  

*Trade‑offs*: Spot instances reduce cost by ~50 %, but we added a fallback on On‑Demand nodes for the last 5 %. Redis cache introduces stale‑data risk, mitigated by a TTL of 1 s.

**Result**  
- Latency dropped from **350 ms → 85 ms** (avg) during peak.  
- Throughput increased to **280 k req/s** while keeping CPU < 65 %.  
- Cost per inference fell from **$0.00012 → $0.00007**, saving ~$120K/month.

**Reflection & Ownership**  
I took full ownership of the end‑to‑end pipeline, iterating on the batch size and cache TTL until we hit the SLA. The failure mode (cache miss burst) taught me to monitor edge metrics early; I now routinely add a “watchdog” Lambda that auto‑scales Spot capacity when miss rates exceed 2 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a smoother viewing experience for millions of users.  
- **Ownership & Dive Deep**: From profiling to choosing the right AWS services, I owned every layer and dug into bottlenecks until resolved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
