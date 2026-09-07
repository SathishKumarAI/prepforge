---
qid: ing_b4b4b56d4f__faang__local
question: A new model version rolled out and quality is bad. Walk me through the rollback.
  What's different from rolling back code?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 511
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:43:51-05:00'
sources: []
---

**Clarify**  
You’re dealing with a *model* that has just been deployed into production, yet its metrics (e.g., accuracy, latency, or user‑reported errors) have degraded.  
Key assumptions:  
1. The model lives in a versioned artifact store (S3/MLflow).  
2. Serving is handled by an inference service (TensorFlow‑Serving, TorchServe, or cloud endpoint).  
3. Rollback must preserve data consistency and compliance logs.

**Approach**  
1. **Confirm degradation** – pull current A/B test metrics and compare to the baseline.  
2. **Identify rollback target** – locate the last known good model artifact (by hash/metadata).  
3. **Redeploy** – replace the inference container or update the endpoint configuration with that artifact.  
4. **Validate** – run smoke tests on a staging slice, then perform a canary roll‑back to 10% traffic.  
5. **Full cutover** – once metrics normalize, shift all traffic back to the old model.  
6. **Audit & notify** – log the rollback event and inform stakeholders.

**Depth**  
Unlike code, you’re swapping serialized weights or graph definitions, not recompiling logic. The deployment pipeline must handle *model versioning* (e.g., using MLflow tags) and *environment immutability* (container images). Rollback typically involves pulling the old artifact from storage, updating the inference service’s config (e.g., `MODEL_NAME=old_v1`), and ensuring the serving cluster routes traffic accordingly. Complexity is O(1) in time to switch; however, you must ensure no stale cache or session state references the new model.

**Edge Cases**  
- **Data drift**: the old model may under‑perform on current data even if it was previously good.  
- **Stateful services**: sessions cached with new inference logic could break.  
- **Compliance**: regulatory logs must capture that a rollback occurred and why.

**Optimize & Communicate**  
Automate the rollback via CI/CD hooks that trigger when a model’s health score falls below a threshold. Use blue‑green deployments to minimize downtime. Explain to interviewers that the main difference is *artifact immutability* versus code recompilation, and that rollback requires careful version control, validation, and observability around inference metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
