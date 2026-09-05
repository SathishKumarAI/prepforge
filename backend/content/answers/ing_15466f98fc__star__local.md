---
qid: ing_15466f98fc__star__local
question: 'Explain: Capacity Planning — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:45-05:00'
sources: []
---

**Situation** – While leading the backend team at a mobile gaming startup, our global leaderboard hit a spike during the launch of a new seasonal event. The real‑time rank updates were dropping from 99.9% availability to 87%, and latency spiked to 750 ms on average.

**Task** – I had to design a capacity‑planning strategy that could sustain 3× peak traffic (≈200k concurrent users) without breaking the live update pipeline, while keeping infrastructure costs under $5K/month.

**Action** – First, I instrumented request patterns and used Kinesis Streams to buffer rank events, then applied sharding by player region to keep each shard <1 GB. For compute, I switched from a monolithic Go service to a micro‑service architecture on ECS with autoscaling policies tied to CPU/memory thresholds. To precompute ranks, I introduced Redis Streams for real‑time aggregation and scheduled nightly batch jobs in Spark that refreshed the global top‑10k leaderboard stored in DynamoDB (partitioned by game mode). Finally, I set up Prometheus alerts and a Chaos Monkey script to validate resilience.

**Result** – Post‑deployment, uptime rose to 99.97% during peak hours; average latency dropped from 750 ms to 120 ms. The sharding and autoscaling cut server spend by 38%, keeping the monthly bill at $4.3K. I learned that combining stream buffering with region‑based sharding can keep real‑time systems elastic while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
