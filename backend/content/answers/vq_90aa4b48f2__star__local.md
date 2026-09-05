---
qid: vq_90aa4b48f2__star__local
question: How can I see what the uptime for my database is?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 325
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:45-05:00'
sources: []
---

**Situation:**  
At my last role I was responsible for a PostgreSQL cluster that served our e‑commerce platform during peak holiday sales. Just before the launch, our monitoring dashboard flagged an unusual spike in latency and a warning that one of the replicas had fallen behind.

**Task:**  
I needed to verify whether the primary database had actually gone offline or if it was just a lagging replica, and determine how long the outage—or lag—had lasted so we could adjust the alert thresholds.

**Action:**  
First, I queried the `pg_stat_activity` view on each node to see active connections and `pg_last_xact_replay_timestamp()` on the replicas for real‑time lag. Then I used `pg_isready -q` in a loop every 10 seconds from a separate monitoring VM to log connection success/failure, storing timestamps in an InfluxDB series. Finally, I parsed the logs with a short Python script that calculated downtime by measuring gaps where `pg_isready` returned failure.

**Result:**  
The script revealed a 4‑minute outage on the primary that was missed by our alerts because they only checked replication lag. After adjusting the alerting rule to include primary connectivity checks, we reduced false positives by 35% and improved SLA compliance from 99.92 % to 99.99 %. I learned that proactive uptime monitoring requires both database‑level queries and external heartbeat checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
