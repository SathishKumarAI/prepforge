---
qid: ing_5e399b3a87__think__local
question: 'Explain: Common Pitfalls — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 470
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:14:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is idempotency?* – A property that repeated identical operations have the same effect as a single one.  
- *Why does it matter in ML systems?* – Production ML pipelines, serving endpoints, and training jobs often run over unreliable networks or autoscale, leading to duplicate requests.  
- *Assume*: The audience knows basic distributed‑systems terms but not deep ML infra.

**2️⃣ Pick a mental model**  
Use the “request → state transition” diagram:  
```
client sends request → load balancer → service instance → database / cache → response
```  
Identify where duplicates can sneak in (network retries, multiple workers, autoscaling).  

**3️⃣ Step‑by‑step reasoning**  
1. List common duplicate triggers (HTTP retries, worker restarts, event replay).  
2. Map each trigger to the state transition it could affect (e.g., training job creation, model update).  
3. Explain how idempotent design removes side effects: use unique request IDs → store results → check before re‑executing.  
4. Show concrete ML infra patterns: SageMaker endpoint retries, Kafka replay for feature ingestion, Airflow DAG idempotency.

**4️⃣ Avoid common traps**  
- Don’t conflate *idempotent* with *stateless*.  
- Beware of “soft” idempotency (e.g., caching) vs. hard guarantees (persistent request‑ID table).  
- Don’t ignore eventual consistency: a model update may be visible only after propagation.

**5️⃣ Sanity‑check & communicate**  
- Ask: “If I send the same training job twice, will my dataset or weights double‑count?”  
- Use a quick mental test: pick a simple operation (e.g., label assignment) and walk through both idempotent vs. non‑idempotent flows.  
- Summarize with a bullet list of best practices: generate client‑side UUIDs, store in a write‑once table, return same response for repeats, audit logs.

This structured approach lets you explain the pitfalls clearly while grounding them in real ML system design patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
