---
qid: ing_7f6ff15794__star__local
question: 'Explain: Reference Work Credits — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 360
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:27-05:00'
sources: []
---

**Situation**  
In my last role as a data scientist at an autonomous‑vehicle startup, we were preparing for the quarterly safety audit. The audit required us to demonstrate that every model revision was fully traceable and compliant with ISO 26262. Our existing version control system logged code changes, but it didn’t automatically link those changes to the specific evaluation datasets or performance metrics used in each training cycle.

**Task**  
I had to build a “reference work credits” framework that would automatically record which dataset samples, hyper‑parameter settings, and model checkpoints contributed to each published evaluation result. This needed to be lightweight enough for nightly training pipelines yet robust enough to satisfy auditors’ reproducibility requirements.

**Action**  
I extended our CI pipeline with a custom metadata service: every training job now emits a JSON manifest containing the Git commit hash, dataset version ID, GPU usage, and evaluation score. I stored these manifests in an Elasticsearch index keyed by model tag. For audit purposes, I created a simple UI that queried the index to generate a credit report mapping each performance metric back to its source data and code revision. I also added automated checks that blocked merging if the manifest was missing or mismatched.

**Result**  
When the audit arrived, we produced a single‑click reproducibility report that traced every evaluation metric to its exact training run—no manual effort required. The auditors approved our compliance in record time, and the new system reduced downstream debugging time by 35 % because engineers could instantly see which data version caused a regression. I learned how to weave traceability into continuous ML workflows without sacrificing speed or developer ergonomics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
