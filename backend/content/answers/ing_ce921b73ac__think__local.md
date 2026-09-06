---
qid: ing_ce921b73ac__think__local
question: 'Explain: Failure Modes and Graceful Degradation — How to Prepare for System
  Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 420
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:36:04-05:00'
sources: []
---

**1️⃣ Clarify the ask & scope**  
- Confirm whether “failure modes” means *hardware*, *software*, or *data* failures (e.g., label noise, drift).  
- Decide on the system type: batch pipeline, online inference service, or both.  
- Assume interviewers want you to discuss *detecting*, *mitigating*, and *communicating* failures in ML systems.

**2️⃣ Adopt a layered mental model**  
- **Data layer:** integrity, drift, missingness.  
- **Model layer:** over‑fitting, concept shift, latency spikes.  
- **Infrastructure layer:** scaling, hardware faults, network partitions.  
- **Observability layer:** metrics, alerts, dashboards.

**3️⃣ Walk through each layer step‑by‑step**  
1. *Detection*: use statistical tests (KS test for drift), monitor error rates, set up health checks.  
2. *Mitigation*: fallback to simpler models, ensemble averaging, graceful degradation via confidence thresholds.  
3. *Recovery*: auto‑rollbacks, retraining triggers, circuit breakers.  
4. *Communication*: expose a “service health” endpoint, log incidents with root‑cause tags.

**4️⃣ Avoid common pitfalls**  
- Don’t conflate “model accuracy drop” with “system failure”; treat them separately.  
- Skip over‑engineering: focus on realistic edge cases (e.g., 5% data loss).  
- Resist the urge to write code; use diagrams or pseudocode instead.

**5️⃣ Sanity‑check & verbalize**  
- Ask yourself: *“Does each component have a clear failure mode, detection signal, and recovery path?”*  
- Summarize with a concise bullet list: data integrity → model fallback → circuit breaker → alert.  
- End by linking to design principles (e.g., “design for the worst case but optimize for the common case”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
