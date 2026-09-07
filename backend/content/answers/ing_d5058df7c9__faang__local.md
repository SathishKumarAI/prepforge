---
qid: ing_d5058df7c9__faang__local
question: 'Explain: Spot Instance Strategies — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:55:00-05:00'
sources: []
---

**Clarify**  
The question asks for a *cost‑optimization playbook* around AWS/Google Cloud spot (preemptible) instances. I’ll assume we’re building long‑running batch or micro‑service workloads that can tolerate interruptions, and that the goal is to keep compute costs low while maintaining SLA.

**Approach**  
1. Identify interruption tolerance (batch vs. stateful).  
2. Choose an instance mix: on‑demand for critical baseline, spot for bulk.  
3. Implement lifecycle hooks or autoscaling groups with Spot Fleet/Preemptible VMs.  
4. Add a cost‑aware scheduler that bids based on historic price trends.  
5. Persist state (S3/Cloud Storage, managed databases) to recover quickly.

**Depth**  
- *Spot Fleet* lets you request a target capacity and automatically replaces terminated instances; cost ~70–90% of on‑demand.  
- Use *capacity reservation* or *persistent reservations* for baseline needs.  
- Leverage *instance hibernation* (AWS) or checkpointing to resume work without recomputation.  
- Autoscaling policies can shift traffic from spot to on‑demand when interruption rates exceed a threshold.  
- Cost monitoring via CloudWatch/Stackdriver budgets triggers alerts.

**Edge Cases**  
- Sudden price spikes → sudden loss of capacity; mitigate with fallback queues.  
- Long‑running stateful services may suffer latency if preempted mid‑transaction.  
- Regional outages: spot pools can empty in a single AZ; use multi‑AZ or region spread.

**Optimize & Communicate**  
Iterate the bid strategy using reinforcement learning on historical data to reduce over‑bidding. Communicate results with dashboards showing “cost per job” and “interruption rate.” This structured playbook balances savings (~60% vs. on‑demand) against reliability, aligning with FAANG’s focus on scalable, cost‑effective infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
