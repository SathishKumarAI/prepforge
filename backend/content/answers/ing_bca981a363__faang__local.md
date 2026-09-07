---
qid: ing_bca981a363__faang__local
question: 'Explain: Monitoring — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 635
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:40-05:00'
sources: []
---

## Clarify  
We’re asked to give a *cheatsheet* on **monitoring database performance** for a production system (SQL/NoSQL).  
Assumptions I’d confirm:  
1. The DB is in a distributed, cloud‑native environment.  
2. We have a monitoring stack (Prometheus + Grafana, CloudWatch, etc.).  
3. Alerting and auto‑scaling are required.

## Approach  
Create a concise reference that:  

- Lists key metrics per tier (connection, query, storage).  
- Maps each metric to an actionable threshold or trend.  
- Suggests dashboards, alert rules, and diagnostic steps.  

## Depth  

| Tier | Metric | Typical Units | Why It Matters | Alert / Action |
|------|--------|---------------|----------------|----------------|
| **Connection** | `active_connections` | count | Hot‑spot on worker threads | >80% of max → scale up nodes |
|  | `wait_time_ms` | ms | Queue latency | >200 ms → investigate lock contention |
| **Query** | `query_latency_avg` | ms | Overall throughput | >500 ms average → index review |
|  | `slow_query_count / total_queries` | ratio | Hot queries | >1% → analyze execution plans |
|  | `cache_hit_ratio` | % | Disk I/O vs RAM | <70% → add replicas or increase memory |
| **Storage** | `disk_usage_pct` | % | Capacity risk | >90% → trigger storage expansion |
|  | `iops` / `throughput_MBps` | ops/s, MB/s | I/O bottleneck | >80 % of provisioned → upgrade disks |
| **Replication** | `replica_lag_ms` | ms | Data freshness | >5 s → network or node health check |
|  | `replication_status` | enum | Sync health | OFFLINE → failover test |

*Dashboards*: one per tier, with trend lines and drill‑downs.  
*Alerting*: silence on maintenance windows; use anomaly detection for bursty workloads.

## Edge Cases  
- **Spikes from background jobs**: differentiate via tags.  
- **Cold starts in auto‑scaling**: monitor `warm_up_time`.  
- **Multi‑tenant isolation**: per‑user metrics to detect noisy neighbors.

## Optimize & Communicate  
- **Batch metric collection** to reduce overhead.  
- Use **sampling** for high‑cardinality queries.  
- Document *why* each threshold was chosen (service level, cost).  

Narrate the cheat sheet as a living document: update thresholds post‑deployment and correlate alerts with incidents. This structure shows clear problem framing, actionable insight, and scalability—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
