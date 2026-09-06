---
qid: ing_cc0f3bd789__fp__local
question: 'Explain: Each service defines, manages, and enforces permissions differently'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 400
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:14-05:00'
sources: []
---

In the cloud, *permissions* are not a one‑size‑fits‑all knob but a set of **information flow constraints** that differ with the underlying resource model.  
At first principles, every ML service exposes an API that manipulates data objects (datasets, models, training jobs) and computation resources (GPUs, TPUs). The *entropy* of these objects—how many distinct users may observe or modify them—directly governs which access control policy is optimal.

1. **Data‑centric services** (e.g., BigQuery ML, SageMaker Studio notebooks) treat datasets as first‑class citizens. Their permissions mirror relational database ACLs: row‑level security and column masking are natural because data is the primary asset.  
2. **Compute‑centric services** (e.g., Lambda, Vertex AI pipelines) expose jobs that consume arbitrary inputs. Here permissions must be expressed over *execution contexts*—who may launch a job, what IAM role it assumes, and which network endpoints it can reach.  
3. **Model‑centric services** (e.g., TensorFlow Serving, AutoML Tables) focus on inference. Permissions become *model access policies*: who can query the endpoint, at what rate, and with what authentication token.

The deeper principle is that *the granularity of control must match the entropy budget of the resource*. A finer policy reduces unnecessary exposure but costs more in terms of policy evaluation overhead; a coarser policy saves compute but leaks information.  
**Non‑obvious insight:** Most providers embed a *policy‑inheritance* mechanism—permissions on datasets automatically propagate to downstream jobs, but not vice versa. This asymmetry is intentional: it reflects the causal direction of data flow and prevents circular dependencies that would otherwise force exponential policy checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
