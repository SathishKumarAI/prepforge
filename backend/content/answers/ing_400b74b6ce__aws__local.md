---
qid: ing_400b74b6ce__aws__local
question: Explain self-consistency. When is it worth the cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 548
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:42-05:00'
sources: []
---

**Self‑consistency** is a post‑processing technique for large language models that runs the same prompt multiple times with different random seeds and aggregates the outputs (e.g., majority vote or weighted average). It trades compute for higher answer fidelity.

| Situation | Why it pays off |
|-----------|-----------------|
| **High‑stakes decision support** (e.g., medical diagnosis, financial forecasting) | Even a 1 % error reduction can translate to millions in avoided liability. |
| **Regulated compliance queries** | Consistent outputs reduce audit risk; the cost of an extra 20 inferences is negligible compared to a non‑compliant incident. |
| **Low‑volume but critical pipelines** | When inference throughput is already low, adding a few extra passes doesn’t hurt latency budgets. |

**Design (AWS)**  
1. **SageMaker Endpoint** – host the LLM as an async endpoint.  
2. **Step Functions** orchestrate 10 parallel `InvokeEndpoint` tasks.  
3. **Lambda** aggregates results, applies majority vote, and writes to DynamoDB for audit trail.  

*Scalability*: Parallel invocations scale horizontally; Step Functions auto‑scales with concurrency limits.  
*Availability*: Use Multi‑AZ endpoints + health checks.  
*Cost*: 10× compute ≈ $0.01 per inference on a `ml.g5.xlarge`. If the model’s baseline error is 4 % and self‑consistency reduces it to 2 %, the cost per avoided error (~$50k) is $0.02—well worth it.

**STAR Example**  
*Situation*: Our fraud‑detection LLM had a 6 % false‑positive rate, costing ~\$1.2M annually.  
*Task*: Reduce errors without retraining.  
*Action*: Implemented self‑consistency (10 passes) via SageMaker + Step Functions.  
*Result*: False positives dropped to 3 %, saving \$600k/year while only adding $0.02 per inference—**a 50 % return on cost**.

**Bar‑raiser cues**: ownership of end‑to‑end pipeline, deep dive into trade‑offs (compute vs. accuracy), quantified impact, and lessons learned from a failed pilot that over‑estimated savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
