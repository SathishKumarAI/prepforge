---
qid: ing_f57193a101__aws__local
question: 'Explain: The Right Approach to Building Cloud Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 404
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:55-05:00'
sources: []
---

**Situation & Task**  
When our e‑commerce platform needed to auto‑scale ad‑campaign budgets in real time, I owned the migration from an on‑prem ML pipeline to a cloud‑native “agent” model that could learn and act within seconds.

**Action**  
- **Design:** Built stateless Lambda agents triggered by CloudWatch events. Each agent pulls a feature vector from DynamoDB, runs inference with SageMaker Real‑Time Endpoint (model trained in PyTorch), and writes the bid decision back to SQS for the bidding engine.  
- **AWS Services:** Lambda (compute), DynamoDB (low‑latency state), SageMaker (training & hosting), SQS (decoupling), CloudWatch Alarms (auto‑scaling).  
- **Scalability / Availability:** Lambda scales to thousands of invocations per second with 200 ms cold‑start mitigation; SageMaker endpoints are multi‑AZ for HA.  
- **Cost:** $0.20/1M inference requests vs $3.60/M on‑prem GPU servers—30% reduction while maintaining <100 ms latency.  
- **Trade‑offs:** Chose stateless agents to avoid state sync overhead; accepted a 5 % higher model error for the gain in speed.

**Result**  
Within two weeks of rollout, click‑through rate rose by 12%, revenue per ad spend increased 18%, and overall infra cost fell 35%.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster, cheaper recommendations that directly boosted user ROI.  
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end system, iterated on model accuracy and infrastructure resilience based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
