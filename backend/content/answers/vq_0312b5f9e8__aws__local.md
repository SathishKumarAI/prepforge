---
qid: vq_0312b5f9e8__aws__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:36:29-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑engineering team that built a real‑time analytics pipeline for an e‑commerce platform. One day the data‑science squad asked whether we could switch from our existing **call‑by‑value** approach in Spark UDFs to a more lazy **call‑by‑name** style so they could defer expensive aggregations until absolutely needed. I had to explain the difference, evaluate risks, and quantify the impact on cost and latency.

**Action**  
I first clarified the semantics:  
- *Call‑by‑value* evaluates an argument once before passing it to a function; this guarantees no side‑effects but can waste resources if the value is never used.  
- *Call‑by‑name* passes the expression itself, evaluating it each time it’s referenced, enabling lazy evaluation and potential short‑circuiting.

I designed a prototype in AWS Glue (Spark) using `@dynamic` UDFs to simulate call‑by‑name. I compared execution times on a 5 TB dataset:  
- Call‑by‑value: **12 min** CPU time, $0.48 cost.  
- Call‑by‑name (lazy): **8 min**, $0.32 cost—a **33% speedup** and **30% cost saving**.

I also built a monitoring dashboard in CloudWatch to track CPU and memory usage per job, ensuring no hidden spikes.

**Result**  
After deployment, we saw a 25% reduction in nightly ETL runtime across all pipelines, freeing up Spot Instances for other workloads. The team adopted call‑by‑name for optional aggregations, cutting our AWS bill by $1.2 k/month.  

**Leadership Principles Highlighted**  
- **Ownership**: I owned the decision from research to rollout.  
- **Dive Deep**: I dissected execution plans and quantified trade‑offs with real metrics.  
- **Bias for Action**: Delivered a working prototype in under 48 h, avoiding prolonged deliberation.

---

*Key AWS services used:* AWS Glue (Spark), CloudWatch Metrics & Alarms, Spot Instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
