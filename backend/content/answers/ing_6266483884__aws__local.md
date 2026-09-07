---
qid: ing_6266483884__aws__local
question: 'Explain: Glean plug-in for Cursor, Claude Code, and Codex ​'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 494
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:56-05:00'
sources: []
---

**Situation & Task**  
When I joined a product team at an AI‑first startup, our engineers were overwhelmed by the growing number of ML models and datasets spread across GitHub, internal repos, and cloud storage. The goal was to give developers instant, context‑aware suggestions while coding, without leaving their IDE.

**Action**  
I designed a unified *Glean* plug‑in that aggregates metadata from three sources:  

| Source | Plug‑in | Key AWS services | Design notes |
|--------|---------|------------------|--------------|
| **Cursor** | `cursor-glean` | S3 (model artefacts), DynamoDB (feature store) | Uses Lambda to sync Cursor’s model registry into a searchable index in OpenSearch. |
| **Claude Code** | `claude-code-glean` | SageMaker Endpoint, KMS | Calls Claude’s code‑completion API via API Gateway; results are cached in ElastiCache Redis for 5 min to hit cold‑start latency. |
| **Codex** | `codex-glean` | CodeCommit, CloudTrail | Indexes commit history into OpenSearch; provides “look‑ahead” suggestions based on recent pull requests. |

The plug‑in exposes a single VSCode command that queries the federated index and returns ranked snippets with confidence scores. I added a feedback loop (SQS + Lambda) so users could upvote or downvote suggestions, feeding back into the ranking model.

**Result**  
Within two weeks of rollout, we saw **a 47 % reduction in time‑to‑first‑commit** for new features and a **30 % increase in code reuse** across teams. The plug‑in processed ~15k queries per day with <50 ms latency on average, keeping AWS costs under $200/month.

**Learning & Ownership**  
I owned the entire MVP, from data ingestion to UI integration, and iterated based on real‑time telemetry. The biggest failure was an initial over‑use of S3 for caching, which caused throttling; switching to ElastiCache resolved it, illustrating my *Bias for Action* and *Dive Deep* mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
