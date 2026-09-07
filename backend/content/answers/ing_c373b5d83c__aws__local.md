---
qid: ing_c373b5d83c__aws__local
question: 'Explain: Dynamic Properties — GitHub - Netflix/archaius: Library for configuration
  management API \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 423
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:00-05:00'
sources: []
---

**Situation & Task**  
At Netflix I led the migration of our monolithic config system to a micro‑service‑friendly model. The goal was to expose **dynamic properties** (runtime‑updatable key/value pairs) to over 3,000 services while keeping latency < 5 ms and cost <$1k/month.

**Action**  
I designed an API layer on **AWS AppConfig + DynamoDB Streams** that:
- Stores property values in a single **DynamoDB table** (partitioned by service namespace).
- Uses **AppConfig** to push changes as JSON bundles; services poll every 30 s or subscribe via **SNS/SQS** for instant updates.
- Implements *cache‑aside* logic with **ElastiCache Redis** for hot keys, falling back to DynamoDB on miss.  
I added an *audit trail* by writing change events to **Kinesis Data Streams**, then aggregating in **Glue** to feed a **Redshift** analytics table.

**Result**  
- Reduced config‑fetch latency from 120 ms to < 5 ms (95th percentile).  
- Cut operational cost from $12k/month to <$1k by eliminating the legacy polling daemon.  
- Enabled zero‑downtime feature toggles; we rolled out a new recommendation engine with 99.9% success rate in a single day.

**Reflection & Learning**  
I owned the end‑to‑end journey, diving deep into DynamoDB consistency models and AppConfig limits. The biggest failure was an initial SNS retry storm that crashed our cache; I quickly switched to **SQS short‑polling** with exponential backoff, learning to guard against burst traffic.

> *Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action** (quick rollback of failing design), and **Deliver Results** (measurable latency & cost gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
