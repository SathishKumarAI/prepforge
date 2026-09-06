---
qid: ing_cd92c78beb__fp__local
question: 'Explain: Types of Failover Configurations: Active-Active vs Active-Passive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 481
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:37-05:00'
sources: []
---

**Why do we need failover at all?**  
In a distributed system the *service* is a stochastic process: requests arrive randomly, servers can crash or become overloaded, network links may drop packets. The objective of reliability engineering is to keep the *expected response time* below a threshold while minimizing cost (hardware, energy, maintenance). This turns into an **optimization problem** over two variables: redundancy level and allocation strategy.

### Active‑Passive  
One node (*active*) serves all traffic; a second (*passive*) stays idle until failure detection triggers a switchover.  
- **Cost‑efficiency:** Only one server consumes resources under normal load, minimizing energy and hardware wear.  
- **Simplicity of consistency:** Since only the active updates state, there is no need for complex replication protocols; eventual consistency problems vanish.  
- **Risk profile:** The system tolerates *one* failure; if the passive also fails before activation, downtime occurs.

### Active‑Active  
Both nodes handle traffic simultaneously (often via load balancers).  
- **Throughput maximization:** By sharing the load, you reduce queuing delays and increase aggregate capacity.  
- **Fault isolation:** If one node drops out, its share of requests is immediately rerouted; the other continues without interruption.  
- **Complexity cost:** Maintaining a coherent state across nodes (e.g., shared caches, transactional logs) requires distributed consensus or conflict‑free replicated data types, adding latency and failure modes.

### Non‑obvious insight  
The *optimal* configuration is not “more active nodes = better”; it depends on the *entropy* of the workload. If request arrivals are highly bursty (high variance), an active‑active setup spreads risk and reduces tail latency, even though each node may be underutilized on average. Conversely, if traffic is smooth (low entropy), passive standby achieves a lower cost/latency trade‑off because the extra server rarely sees work.

Thus, choosing between Active‑Active and Active‑Passive is an information‑theoretic decision: you allocate redundancy where it reduces uncertainty in service time most effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
