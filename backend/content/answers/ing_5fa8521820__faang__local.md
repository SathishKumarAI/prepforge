---
qid: ing_5fa8521820__faang__local
question: 'Explain: We have repeatedly said that software engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:40-05:00'
sources: []
---

**Clarify**  
The interviewer wants us to explain why “software engineering” is a prerequisite for building robust ML systems—i.e., that ML is not just statistical modeling but a product‑engineering problem.  
Assumptions:  
- The audience knows basic ML concepts (model training, inference).  
- We’re discussing production‑grade pipelines, not research prototypes.

**Approach**  
1. Map the ML workflow to classic SE stages (requirements → design → implementation → testing → deployment).  
2. Highlight where typical engineering practices (version control, CI/CD, monitoring) intersect with ML artifacts (datasets, models, feature stores).  
3. Show concrete examples of failure modes when engineering is ignored.

**Depth**  
- **Data pipelines**: need reproducibility and idempotence; use Airflow/Dagster for orchestration.  
- **Model versioning & lineage**: tools like MLflow track hyper‑parameters, code hashes, and data provenance—essential for regulatory compliance.  
- **Testing**: unit tests for feature extraction, integration tests for model latency, sanity checks on drift metrics.  
- **Deployment**: containerization (Docker), observability (Prometheus + Grafana), rollback strategies via blue/green releases.  
Without these SE foundations, ML models become brittle, untraceable, and hard to scale.

**Edge cases**  
- Cold‑start data gaps → fallback rules.  
- Non‑deterministic training (GPU randomness) → fixed seeds.  
- Feature drift → automated retraining triggers.

**Optimize & Communicate**  
Emphasize that engineering reduces ML “model risk” by enforcing reproducibility, observability, and governance. Narrate with a brief real‑world example: a recommendation system crashed because the data pipeline failed to handle schema changes; proper versioning would have caught it early. This structure demonstrates clear reasoning, depth, and an appreciation for production realities—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
