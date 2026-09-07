---
qid: ing_7338c9271f__faang__local
question: 'Explain: Redis - Diagnosing latency issues — Redislatencybenchmarking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 502
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:57-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise explanation of how to spot and measure latency problems in Redis, especially when running load tests (e.g., `redis-benchmark`).  
Assumptions: we’re dealing with a single‑node or cluster setup, using standard TCP sockets, and the goal is to identify bottlenecks that affect request/response times.

**Approach**

1. **Baseline metrics** – CPU, memory, I/O, network latency.  
2. **Redis INFO** – check `latency` section (`commandstats`, `keyspace_hits/misses`).  
3. **redis‑benchmark** – run with realistic workloads and capture per‑op latency percentiles.  
4. **Profiling** – enable `latency-monitor-threshold` or use `LATENCY DOCTOR`.  
5. **Correlate** – align Redis stats with OS metrics to pinpoint root causes.

**Depth**

- Run `redis-benchmark -t set,get -n 1M -q | awk '{print $2}' > lat.txt`.  
- Compute percentiles (`awk 'NR>0{a[NR]=$1} END{for(p in c){printf "%.3f\n", a[int(c[p]*NR)]}}'`).  
- `INFO latency` shows `latency: 0.00ms`, `commandstats SET:calls=1000000,usec_per_call=5`.  
- If `LATENCY DOCTOR` reports “Command set took 8.2 ms”, it’s a hot spot.  
- Check OS: `top -p $(pgrep redis)` for CPU spikes, `iostat` for disk I/O, `netstat -s` for packet loss.

**Edge Cases**

- High latency only under burst traffic (queueing).  
- Latency spike after memory pressure → eviction policy.  
- Network partition or DNS resolution delay.  
- Incorrect clock skew between client and server.

**Optimize & Communicate**

Explain that reducing `latency-monitor-threshold` to 1 ms surfaces micro‑slows, while increasing it hides noise. Suggest tuning `maxclients`, sharding data, or upgrading hardware if CPU >80% during spikes. Conclude by emphasizing continuous monitoring (Prometheus + Grafana) and alerting thresholds based on percentile curves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
