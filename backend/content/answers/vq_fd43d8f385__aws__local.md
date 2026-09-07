---
qid: vq_fd43d8f385__aws__local
question: Difference between and singleton object and class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 465
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:07-05:00'
sources: []
---

**Situation & Task (S)**  
In a recent project we were refactoring a data‑pipeline service written in Scala that processed terabytes of log events nightly. The team was debating whether to expose the pipeline logic as a **singleton object** or a regular **class**, and the decision would impact testability, parallelism, and resource usage.

**Action (A)**  
I first clarified the requirements: each worker node must instantiate its own stateful cache, but we also needed a shared configuration. I proposed a **`PipelineConfig` singleton** for immutable settings (using `object PipelineConfig`) and a **stateful `class PipelineWorker`** that holds per‑instance caches and metrics.  
I sketched the design on whiteboard:  

- `object PipelineConfig` → `AWS SSM Parameter Store`, cached in memory, refreshed every 10 min.  
- `class PipelineWorker` → receives config via constructor, uses **Amazon Kinesis Data Streams** for input, writes results to **S3** (via multipart upload).  
I ran a small simulation: 50 workers each handling 1 M events per hour. The singleton avoided redundant SSM calls (saving ~30 % of API quota), while the class ensured isolation—no race conditions on cache updates.

**Result (R)**  
After deployment, we observed **25 % reduction in cold‑start latency** and a **15 % cost saving on SSM requests**. Unit tests improved by 40 % coverage because each worker could be instantiated with mock configs.  

**Leadership Principles**  
- *Ownership*: I owned the refactor from requirement gathering to production roll‑out.  
- *Dive Deep*: Quantified API usage, cache hit ratios, and cost impact.  
- *Deliver Results*: Delivered measurable performance and cost benefits within two sprints.

---

> **Bar‑raiser takeaway:** They’ll look for clear ownership, a data‑driven design rationale, and evidence that you can trade off between shared immutable state (singleton) and per‑instance mutable state (class) to meet scalability & cost goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
