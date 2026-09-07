---
qid: ing_7cfc029584__aws__local
question: Why Shard? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 375
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:08:05-05:00'
sources: []
---

**Why shard?**  
*Customer Obsession + Ownership*

**S**ituation – I led the redesign of our recommendation engine for a global e‑commerce platform that was hitting 200 k QPS and experiencing 3 s latency spikes during peak sales.  
**T**ask – Scale the model inference layer while keeping cost under $1M/month and ensuring 99.9 % uptime.  
**A**ction – I introduced horizontal sharding of the model weights across AWS SageMaker endpoints, coupled with Amazon ElastiCache Redis for a shared feature store. Each shard handled ~25 k QPS, so we deployed 8 endpoints behind an Application Load Balancer with weighted routing. I added auto‑scaling policies based on CloudWatch metrics and used Spot Instances to reduce compute spend by 35 %.  
**R**esult – Latency dropped from 3 s to 350 ms (95th percentile), throughput scaled to 1.2M QPS, and monthly cost fell from $1.4M to $0.98M—an 30 % savings that was reinvested into data‑quality pipelines.

**Dive Deep** – I profiled memory usage per shard, identified a bottleneck in the feature extractor, and refactored it into a stateless Lambda layer (cost: < $10/month).  
**Learning** – The first iteration underestimated the cold‑start impact of new shards; after adding warm‑up logic we cut 0.2 s startup latency per shard.

*Key AWS services:* SageMaker, Elasticache Redis, ALB, CloudWatch, Spot Instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
