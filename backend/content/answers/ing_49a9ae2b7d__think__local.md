---
qid: ing_49a9ae2b7d__think__local
question: 'Explain: Why Systems Become Unreliable — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 452
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:17:14-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - Understand “systems become unreliable” in ML context: data drift, model decay, infrastructure failures.  
   - Assume we’re discussing production ML pipelines (training → serving).  
   - Focus on reliability from a system‑design perspective rather than algorithmic performance alone.

**2️⃣ Mental model / framework**  
   - Use the **four pillars of reliability**: *Availability*, *Durability*, *Consistency*, *Fault tolerance*.  
   - Map each pillar to ML pipeline stages (data ingestion, feature store, training, inference).  
   - Incorporate *Observability* (metrics, logs, alerts) as a cross‑cutting concern.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify failure modes: data quality loss, concept drift, model overfitting, resource exhaustion.  
   2. For each mode, map to a pillar—e.g., data corruption → *Durability*, latency spikes → *Availability*.  
   3. Propose design patterns: retry/back‑off for ingestion, versioned feature stores, canary releases for models, automated retraining triggers.  
   4. Define metrics (precision drop > 5%, latency > 1s) and alerting thresholds.

**4️⃣ Common traps to avoid**  
   - Assuming a single “one‑size‑fits‑all” solution; ML pipelines differ in data velocity and regulatory constraints.  
   - Ignoring the human factor: model owners may not monitor alerts if dashboards are opaque.  
   - Overlooking *data drift* as merely a training issue; it also breaks inference reliability.

**5️⃣ Sanity check & communication**  
   - Verify that each proposed pattern directly mitigates an identified failure mode.  
   - Present the answer in a concise table: Failure → Pillar → Mitigation Pattern → Metric.  
   - End with a brief “next steps” for operationalizing these patterns (e.g., CI/CD for model deployments, automated retraining pipelines).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
