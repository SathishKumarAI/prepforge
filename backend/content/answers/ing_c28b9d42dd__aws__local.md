---
qid: ing_c28b9d42dd__aws__local
question: 'Explain: Heartbeat with Timestamps — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:00-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that built a high‑availability recommendation engine on Amazon ECS. Our service ran hundreds of stateless workers across two AZs and needed to detect node failures within **<5 s** so we could spin up replacement containers without user impact.

**Action – Design**  
*Heartbeat with Timestamps* became the core monitoring loop. Each worker sent a signed JSON payload (`{nodeId, ts, health: true}`) to an Amazon Kinesis Data Stream every 2 s.  
1. **Ingestion** – Kinesis shards (10 per stream) ensured sub‑millisecond latency and linear scalability as we grew from 200 to 5,000 workers.  
2. **Processing** – A Lambda function, triggered by the stream, updated a DynamoDB “liveness” table (`nodeId → latestTs`). The function ran in <20 ms per record, keeping costs <$0.01/hr per shard.  
3. **Detection** – A separate Lambda (every 1 s) scanned the table; if `now - latestTs > 4 s` it flagged the node as dead and invoked an ECS task autoscaling policy to replace it.  

We also added a CloudWatch alarm on the “dead‑node” metric, so Ops received real alerts within 2 s.

**Result**  
After deployment, mean time to detect (MTTD) dropped from **30 min** (pre‑design) to **3 s**, and mean time to recover (MTTR) fell to **<10 s**. The system handled a simulated 20 % node churn without any user‑visible latency spikes.

**Reflection**  
*Ownership*: I championed the solution end‑to‑end, from requirement scoping to cost modeling.  
*Dive Deep*: We benchmarked Lambda cold starts and DynamoDB read capacity to fine‑tune thresholds.  
*Learned*: Early prototypes used SNS for heartbeats, which introduced 1 s message loss under load; switching to Kinesis solved this.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Zero downtime for users.  
- **Ownership** – Took full responsibility from design to ops monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
