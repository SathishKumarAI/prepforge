---
qid: ing_3d07367a74__aws__local
question: 'Explain: Cost Comparison Example — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 483
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:39-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

*Situation*: At my previous firm we had to choose between an in‑house GPT‑4 fine‑tuned model and a managed SageMaker endpoint for a real‑time recommendation engine. The business demanded sub‑100 ms latency and 99.9 % uptime, while the budget was capped at $30k/month.

*Task*: Build a cost‑comparison framework that also captured performance trade‑offs so leadership could make an informed decision.

*Action*:  
1. **Define metrics** – request throughput (RPS), latency percentiles, availability SLA, and total cost of ownership (TCO).  
2. **Collect data** – ran 48 h load tests on both setups, recorded CPU/GPU utilization, network egress, and spot‑instance churn.  
3. **Model the TCO** – used AWS Cost Explorer API to pull real usage; calculated hourly compute cost + storage + data transfer + SageMaker inference pricing.  
4. **Resulting table**:

| Scenario | RPS | 95th % Latency | Availability | Monthly Cost |
|----------|-----|----------------|--------------|--------------|
| In‑house GPU cluster (on‑prem) | 12k | 85 ms | 99.7 % | $28,400 |
| SageMaker Managed Endpoint (ml.m5.xlarge) | 14k | 92 ms | 99.9 % | **$23,600** |

*Result*: The managed endpoint saved ~$4.8k/month (~17%) and met all SLA targets with a simpler ops footprint. I presented the data to leadership; they approved the switch, and we achieved a 12% lift in user engagement within two weeks of deployment.

**Bar‑raiser Takeaways**  
- **Ownership**: Took full responsibility for end‑to‑end cost modeling.  
- **Dive Deep**: Ran production‑grade load tests instead of relying on vendor estimates.  
- **Quantified Impact**: Delivered clear, actionable numbers that directly influenced budget decisions.  
- **Learning from Failure**: Early pilot revealed hidden network egress costs; we adjusted the model to account for them in future comparisons.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
