---
qid: ing_20543bed6b__star__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 380
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:02-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with revamping the nightly data‑pipeline that processed terabytes of sensor logs for a smart‑city platform. The previous single‑node scheduler kept crashing when jobs exceeded their time limits or hit transient network glitches, dropping 12% of daily jobs and causing downstream analytics to stall.

**Task:**  
I had to design a fault‑tolerant distributed job scheduler that could automatically retry failed tasks, balance load across worker nodes, and guarantee at‑least‑once execution without duplicating state.

**Action:**  
I chose Apache Airflow for orchestration but extended it with a custom “JobHealthMonitor” microservice. The monitor subscribed to Kafka job‑events, kept a Redis-backed ledger of task states, and used leader election (via ZooKeeper) to elect a coordinator that would re‑enqueue any failed or timed‑out tasks after exponential backoff. I also added a lightweight sidecar on each worker that reported heartbeat metrics to Prometheus; Grafana dashboards triggered alerts if a node’s latency spiked. For idempotency, every job wrote its output key into DynamoDB before committing results so retries could detect and skip already processed batches.

**Result:**  
After deployment, the scheduler handled 1.2 million tasks per night with a 99.8% success rate; failed‑job churn dropped from 12% to <0.3%. The system also cut average job turnaround time by 18%, and I documented the retry logic in our internal wiki so new engineers could onboard quickly. This experience taught me how to blend open‑source tooling with custom resilience layers to meet strict uptime SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
