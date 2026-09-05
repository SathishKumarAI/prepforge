---
qid: ing_e21224253a__star__local
question: 'Explain: The First Architectural Decision: Docker Before Kestra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 333
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:52-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we had an urgent need to prototype a fraud‑detection model for a regulatory audit due within two weeks. The team was spread across three time zones and each developer used different local Python setups.

**Task:**  
I had to deliver a reproducible, containerized environment that could be spun up by any engineer or CI pipeline, while keeping the setup lightweight enough for quick iteration.

**Action:**  
Instead of jumping straight into Kestra’s orchestration layer, I first built a minimal Docker image using `python:3.10-slim`, pinned dependencies in a `requirements.txt`, and exposed a single entrypoint script that ran the model training notebook via Jupyter‑Hub. I leveraged Docker Compose to spin up a shared Redis cache for feature extraction logs, so developers could see consistent outputs without installing Redis locally. Once the containerized workflow was stable, I integrated it into Kestra as a “Docker” task, allowing us to schedule nightly retraining and trigger downstream data‑quality checks.

**Result:**  
We reduced environment setup time from 45 minutes per developer to under 5 seconds of `docker compose up`. The model achieved a 0.92 F1 score on the audit dataset in just three days. This experience taught me that anchoring the stack with Docker first ensures reproducibility, speeds onboarding, and makes later orchestration layers like Kestra plug‑in rather than rebuild.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
