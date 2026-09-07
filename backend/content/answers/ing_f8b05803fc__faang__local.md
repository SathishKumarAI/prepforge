---
qid: ing_f8b05803fc__faang__local
question: 'Explain: Error Taxonomy — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 530
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:06-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an *Error Taxonomy* focused on **Architecture Patterns** in AI systems. I’ll assume they want a systematic way to classify runtime failures (e.g., model drift, data pipeline faults) that arise from architectural choices—data ingestion, feature engineering, model serving, monitoring, and governance.

---

**Approach**  
1. Enumerate high‑level architecture layers.  
2. For each layer list common failure modes.  
3. Group those failures into a taxonomy (e.g., *Data*, *Model*, *Infrastructure*, *Governance*).  
4. Map patterns that mitigate or cause each error type.

---

**Depth**  

| Layer | Failure Mode | Typical Cause | Mitigation Pattern |
|-------|--------------|---------------|--------------------|
| **Data Ingestion** | Schema drift, missing values | Unvalidated source schema | *Schema Registry + Validation Pipeline* |
| **Feature Store** | Feature lag, stale cache | Asynchronous updates | *Event‑driven refresh + TTL* |
| **Model Training** | Hyperparameter explosion, overfitting | Poor search space | *AutoML pipelines + Bayesian Optimization* |
| **Serving** | Latency spikes, version conflict | Monolithic deployment | *Canary + A/B testing with model registry* |
| **Monitoring** | Concept drift detection lag | Insufficient alerts | *Real‑time drift metrics + automated retraining triggers* |
| **Governance** | Bias amplification, audit failure | Lack of lineage | *Data provenance + explainability layer* |

Complexity trade‑offs: tighter validation (Schema Registry) increases latency but reduces downstream errors; canary deployments add infra cost but cut catastrophic rollouts.

---

**Edge Cases**  
- Cold start in feature store → fallback to raw data.  
- Model retraining on imbalanced data → stratified sampling.  
- Regulatory changes mid‑deployment → dynamic policy engine.

Testing: simulate schema change, inject synthetic drift, run latency benchmarks under load.

---

**Optimize & Communicate**  
After presenting the table, I’d highlight how each pattern not only fixes a specific error but also improves observability and rollback speed—critical for production AI. I’ll conclude by stressing that this taxonomy guides both design reviews and automated alerting pipelines, ensuring we catch architectural faults early rather than at runtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
