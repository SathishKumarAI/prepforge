---
qid: ing_1106d31ddb__think__local
question: 'Explain: X. Dev/Prod Parity — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 456
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:49:52-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   * Ask whether “X” refers to a specific ML concept (e.g., feature scaling) or is just a placeholder for “any ML topic.”  
   * Assume the audience knows basic ML terminology but may not be familiar with 12‑Factor Apps.  
   * Note that Dev/Prod parity means the same code runs in both environments without changes.

**2. Choose a mental model**  
   * Use the **12‑Factor App framework** as a checklist: each factor (codebase, dependencies, config, backing services, build/run stages, process isolation, logs, admin processes).  
   * Map ML pipeline stages onto these factors (data ingestion, training, serving).

**3. Reason step by step**  
   1. **Codebase & Dependencies** – Keep the same repository; use a `requirements.txt`/`Pipfile`.  
   2. **Config via env vars** – Model hyper‑parameters and storage paths as environment variables.  
   3. **Backing services** – Treat model artifacts, datasets, and inference endpoints as external services.  
   4. **Build & Release** – Separate training (build) from serving (release).  
   5. **Process isolation** – Run training jobs in one container, inference in another.  
   6. **Logs** – Emit structured logs for both training and serving; no file‑based persistence.

**4. Avoid common traps**  
   * Don’t hard‑code dataset paths or model versions.  
   * Don’t mix dev and prod config files; use the same env var schema.  
   * Avoid keeping stateful data in containers; rely on external storage (S3, GCS).

**5. Sanity‑check & communicate**  
   * Verify that a single Dockerfile can be used for both training and inference by swapping entrypoints.  
   * Explain to stakeholders: “By following 12‑Factor principles we can push the same model code from dev to prod without rewriting or reconfiguring, reducing bugs and deployment time.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
