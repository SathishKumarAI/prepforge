---
qid: ing_f0a5ba923c__faang__local
question: 'Explain: in particular, they''ll all crash and your'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 584
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:58:53-05:00'
sources: []
---

## Clarify  
The interviewer seems to be asking **why many machine‑learning systems fail (“crash”)** during deployment or inference, and what we can do to avoid that.

Assumptions to confirm:  
- “Crash” refers to runtime errors or catastrophic failures (not just low accuracy).  
- The models are already trained; the issue is in production.  
- We’re concerned with reproducibility, robustness, and safety.

## Approach  
1. Identify common failure modes.  
2. Map each to root causes (data drift, resource limits, code bugs).  
3. Propose mitigations at data, model, and system levels.  

## Depth  

| Failure | Typical Cause | Fix |
|---------|---------------|-----|
| **NaN / Inf predictions** | Unbounded activations, missing input scaling | Validate inputs; add guard clauses; clip outputs |
| **Out‑of‑memory (OOM)** | Large batch size or model > GPU memory | Use mixed precision, gradient checkpointing, dynamic batching |
| **Model not found / path errors** | Deployment path misconfigurations | Versioned containers, CI/CD checks, environment variables |
| **Data drift / concept shift** | Production data distribution differs from training | Continuous monitoring (e.g., KS test), online retraining pipelines |
| **Race conditions in multi‑thread inference** | Shared mutable state | Stateless services, thread‑local caches |
| **Security vulnerabilities** | Insecure deserialization of model weights | Use vetted libraries, hash verification |

- **Complexity trade‑offs**: Adding runtime checks increases latency but saves catastrophic failures.  
- **Safety nets**: Circuit breakers, fallback models, and graceful degradation.

## Edge Cases  

- Extremely noisy inputs (e.g., corrupted images).  
- Sudden spikes in traffic causing OOM.  
- Model updates that break backward compatibility with downstream services.

Testing strategies: unit tests for input validation, integration tests simulating data drift, load‑testing inference servers.

## Optimize & Communicate  

1. **Prioritize** fixes by impact: e.g., data drift can silently degrade performance; OOM crashes stop the service.  
2. Document each mitigation in a runbook.  
3. Explain trade‑offs: “Adding input validation adds 5 ms latency, but prevents 90% of NaN crashes.”  

Narrative style: “First we guard against malformed inputs… then we make inference stateless… finally we monitor for drift so the model stays reliable.”

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
