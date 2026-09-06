---
qid: ing_c3ab5cd960__fp__local
question: What is disaster recovery? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 473
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:58:17-05:00'
sources: []
---

**Disaster recovery in machine‑learning infrastructure is a formal protocol that guarantees the *state* of an ML pipeline can be restored after an arbitrary catastrophic failure—whether it be a data center outage, a corrupted model checkpoint, or a software bug.**

1. **Fundamental problem**  
   An ML system consumes immutable training data, applies deterministic transformations (feature engineering, augmentation), trains a parameterised model, and produces predictions. Any step can fail; if the system halts mid‑training, all progress is lost unless the intermediate state is preserved.

2. **Why it must work as it does**  
   *Determinism* demands that re‑executing the pipeline from scratch yields identical results. Therefore we must capture a *snapshot* of every mutable component: raw data, feature stores, model weights, hyperparameters, and environment metadata.  
   The snapshot is stored in a highly durable, geographically dispersed storage (e.g., Cloud Storage or BigQuery). Recovery simply re‑instantiates the pipeline from this snapshot, guaranteeing identical outputs.

3. **Connection to deeper principles**  
   *Information theory*: the snapshot compresses all necessary information about the system’s state into a minimal representation, preventing loss of entropy.  
   *Probability*: by ensuring that the recovered model’s posterior distribution over parameters matches the pre‑failure distribution, we preserve statistical guarantees (e.g., confidence intervals).  
   *Optimization*: the recovery process is itself an optimization problem—minimise downtime while minimising storage overhead.

4. **Non‑obvious insight**  
   Many practitioners focus on checkpointing *model weights* but ignore the *data lineage*. In distributed training, shuffling and caching can produce different data partitions after a failure, leading to subtle distribution shifts that invalidate the model’s performance. Proper disaster recovery must therefore include deterministic data sharding metadata or a versioned feature store.

In short, disaster recovery is not just “save‑and‑reload”; it is an engineered invariant that preserves *exactly* the probabilistic and computational state of an ML system, ensuring reproducibility and compliance even after total loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
