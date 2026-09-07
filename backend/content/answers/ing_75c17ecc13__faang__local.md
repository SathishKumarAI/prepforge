---
qid: ing_75c17ecc13__faang__local
question: 'Explain: Ignoring Cost Optimization — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 536
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:12-05:00'
sources: []
---

## Clarify  
The interviewer asks you to explain *why* ignoring cost optimization leads to **cloud‑native anti‑patterns**—unwanted architectural or operational practices that erode the benefits of cloud computing (elasticity, scalability, resilience). Assume we’re dealing with a typical multi‑service micro‑services stack on a public cloud.

## Approach  
1. Identify common anti‑patterns tied to cost mismanagement.  
2. Explain each pattern’s origin and impact.  
3. Show how proper cost discipline eliminates them.

## Depth  

| Anti‑Pattern | Root Cause (Cost Ignorance) | Consequence | Mitigation |
|--------------|----------------------------|-------------|-----------|
| **Over‑provisioned VMs** | Failure to right‑size or use spot/pre‑emptible instances. | Idle compute, high bill. | Auto‑scaling + instance‑type matching; monitoring utilization. |
| **Monolithic “all‑in‑one” services** | Desire for simplicity → deploy everything together. | Hard to scale parts independently → overpaying. | Decompose into micro‑services with separate scaling policies. |
| **Unbounded data replication** | No cost model for storage/transfer. | Excess egress, duplicated storage. | Use tiered storage; enforce retention policies. |
| **Neglected auto‑shutdown of dev/test environments** | Assume “free” dev boxes. | 24/7 running leads to wasted spend. | Tagging + automated stop/start via CI/CD pipelines. |
| **Manual scaling decisions** | Lack of monitoring dashboards. | Human error → over/under provisioning. | Implement metrics‑driven autoscaling rules. |

### Complexity & Trade‑offs  
- Autoscaling introduces slight latency but saves money (O(1) per request).  
- Spot instances risk interruption; mitigate with checkpointing.

## Edge Cases  
- **Burst traffic**: auto‑scale thresholds must allow short spikes without overpaying.  
- **Compliance data**: cannot move to cheaper regions—must balance cost vs. regulation.  

Test by simulating load, measuring utilization, and verifying that scaling events trigger only when thresholds cross.

## Optimize & Communicate  
When presenting, start with the business value of cost‑aware cloud design, then walk through each anti‑pattern, showing a before/after diagram. Emphasize that disciplined cost governance (tags, budgets, alerts) transforms ad‑hoc patterns into predictable, scalable services—exactly what FAANG teams expect from a senior engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
