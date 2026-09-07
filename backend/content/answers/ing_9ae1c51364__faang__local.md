---
qid: ing_9ae1c51364__faang__local
question: 'Explain: Failure-mode taxonomy as the assertion surface'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 529
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:27-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *“failure‑mode taxonomy as the assertion surface”*—i.e., how we classify and expose failure modes when testing AI systems. I’ll assume: (1) we’re dealing with ML models deployed in production, (2) “assertion surface” refers to the set of checks/assertions that catch failures, and (3) the goal is to map each failure type to a corresponding assertion.

**Approach**  
1. Enumerate common AI failure modes.  
2. For each, identify observable signals (input anomalies, output drift, confidence).  
3. Match those signals to assertions in test suites or runtime monitors.  

**Depth**  
| Failure Mode | Typical Signal | Assertion Surface |
|--------------|----------------|-------------------|
| Data shift / covariate drift | Feature distribution change | `assert(feature_dist == expected)` |
| Concept drift | Label distribution shift over time | `assert(label_bias < threshold)` |
| Adversarial inputs | Unusually low confidence or misclassification | `assert(confidence > min_conf)` + `assert(pred != adversary_label)` |
| Model over‑confidence | Softmax outputs near 1 for wrong class | `assert(max_softmax < upper_bound)` |
| Catastrophic forgetting (continual learning) | Performance drop on legacy data | `assert(accuracy_on_old_data >= baseline - delta)` |
| System latency spikes | Response time > SLA | `assert(latency <= max_latency)` |
| Resource exhaustion | GPU/CPU utilization > 90% | `assert(cpu_util < 0.9 && gpu_util < 0.9)` |

Complexity: Assertions run in **O(1)** per inference; monitoring pipelines add negligible overhead but can be batched for throughput.

**Edge Cases**  
- Synthetic drift that mimics real data may bypass simple distribution checks.  
- Adversarial detection requires a labeled adversary set—hard to maintain.  
- Latency assertions fail under load spikes unless smoothed (exponential moving average).

**Optimize & Communicate**  
To improve, use *adaptive thresholds* learned online, and aggregate failure modes into a hierarchical alerting system (critical vs warning). When explaining, I’d emphasize that the taxonomy gives us a checklist of “what could go wrong” and the assertion surface provides a concrete guard for each. This structured mapping is what FAANG teams rely on to maintain AI reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
