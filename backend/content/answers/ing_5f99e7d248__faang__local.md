---
qid: ing_5f99e7d248__faang__local
question: How do you evaluate an LLM workflow before and after giving it access to
  production operations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 442
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:40-05:00'
sources: []
---

**Clarify**  
We’re asked how to assess a large language model (LLM) pipeline *before* it runs in production versus *after* it’s deployed and integrated into live ops. Key assumptions: we have a test harness, metrics for quality/latency, and a monitoring stack that can surface drift or bias.

**Approach**  
1. **Define success criteria** – accuracy, throughput, cost per token, SLA compliance, safety signals.  
2. **Pre‑deployment audit** – unit tests, integration tests, synthetic data validation, adversarial robustness checks.  
3. **Canary rollout** – expose a small fraction of traffic to the new workflow, collect metrics in real time.  
4. **Observability hooks** – log prompts/outputs, capture confidence scores, monitor latency and resource usage.  
5. **Post‑deployment review** – compare against baseline, analyze drift, perform A/B testing, gather user feedback.

**Depth**  
- *Pre* : run MLOps pipelines that test model weights on a held‑out set, evaluate fairness metrics, simulate production load to measure latency under peak conditions. Complexity: O(n) over dataset size; trade‑off between thoroughness and time.  
- *Post* : continuous evaluation using online learning signals (e.g., error rate spikes). Use statistical process control charts to detect anomalies. If drift > threshold, trigger re‑training or rollback.

**Edge Cases**  
- Sudden traffic spikes causing timeout errors.  
- Prompt injection attacks altering model behavior.  
- Non‑English or low‑resource language inputs that degrade quality.  
Test by injecting synthetic adversarial prompts and throttling scenarios.

**Optimize & Communicate**  
Iteratively tighten thresholds for rollback, add automated retraining triggers when drift exceeds 2σ, and document the entire audit trail in a shared dashboard. Narrate results in concise metrics tables and root‑cause analyses so stakeholders can make data‑driven decisions. This structured loop aligns with FAANG expectations of rigorous testing, clear communication, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
