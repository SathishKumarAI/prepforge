---
qid: ing_9276fb7d7c__faang__local
question: 'Explain: Configuration Management — How do we manage configurations in
  a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 497
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:07-05:00'
sources: []
---

**Clarify**  
We’re asked how a large‑scale ML platform keeps track of every hyperparameter, data split, model version, and deployment setting so that experiments are reproducible and rollouts safe. I’ll assume we need to cover both *experiment tracking* (what went where) and *infrastructure configuration* (where models run).

**Approach**  
1. **Central metadata store** – a relational DB or NoSQL table keyed by experiment ID, storing JSON blobs of all settings.  
2. **Versioned artifacts** – use object storage (S3/Blob) with a deterministic key that includes the hash of config + code.  
3. **Immutable pipelines** – build CI/CD steps that consume the config blob, run the training job in a container, and tag the resulting model artifact with the same version ID.  
4. **Dependency graph** – maintain a directed acyclic graph linking data snapshots → preprocessing scripts → feature store → model → serving endpoint.

**Depth**  
- Each experiment record includes: dataset hash, preprocessing script checksum, hyperparameters, seed, GPU type, training duration, and evaluation metrics.  
- When deploying, the config is locked to that exact record; the serving infra reads the same JSON to set environment variables.  
- Auditing uses immutable logs (e.g., CloudTrail) so any change is traceable.  
- Complexity: O(1) read for a single experiment; updates are append‑only, ensuring no lock contention.

**Edge Cases**  
- Data drift → re‑compute data hash and flag mismatch.  
- Configuration changes mid‑run → abort or checkpoint with the old config.  
- Concurrent experiments on same dataset → separate branches in the graph to avoid race conditions.

**Optimize & Communicate**  
To improve speed, cache frequently accessed configs in Redis; for large teams, expose a GraphQL API so analysts can query lineage quickly. I’d explain this pipeline verbally by walking through an example: “When we ran experiment X, we stored its config under key `exp/2026-09-07/uuid`, tagged the model as `v3.1`, and the serving service pulls that exact JSON to launch.” This demonstrates a clear, reproducible system—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
