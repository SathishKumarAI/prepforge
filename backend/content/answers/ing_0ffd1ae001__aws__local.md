---
qid: ing_0ffd1ae001__aws__local
question: 'Explain: Week 2: Real PRs with Agents — Cursor Software Engineer Interview:
  Process, Questions, and Prep Guide (2026) | Interview Coder'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 659
total_tokens: 911
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:31-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession* – building solutions that users actually need and use.  
*Dive Deep* – understanding every layer of the stack to deliver reliable, scalable ML pipelines.

---

### Situation  
I was tasked with designing a production‑grade “Real PRs with Agents” feature for Cursor’s code‑review platform: automatically generate pull‑request comments using a fine‑tuned LLM, trigger on merge events, and surface suggestions in the UI. The goal was to reduce reviewer effort by 30 % within three months.

### Task  
Implement an end‑to‑end pipeline that pulls PR diffs, runs inference, writes back comments, and logs metrics—all while keeping latency < 2 s per PR and staying under $0.50/PR inference cost.

### Action  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| **Event ingestion** | EventBridge + Lambda | Serverless trigger on GitHub webhooks; scales to 10k events/day with zero ops. |
| **Diff processing & feature extraction** | ECS Fargate (Python) | Containerized, autoscaled for CPU‑heavy parsing; 3× faster than pure Lambda. |
| **Inference** | SageMaker Endpoint (Multi‑Model) + GPU instances | Low‑latency, auto‑scaling, cost‑optimized by batching up to 8 PRs. |
| **Comment posting** | API Gateway + Lambda | Secure, throttled write back to GitHub; retries on failures. |
| **Observability** | CloudWatch + X-Ray | End‑to‑end tracing; custom metrics (`pr_inference_latency`, `comment_success_rate`). |

- Implemented a retry & circuit‑breaker pattern (AWS Step Functions) to handle transient LLM throttling, reducing failure rate from 7 % to < 0.5 %.  
- Added automated A/B testing via feature flags (AppConfig), measuring reviewer time savings.

### Result  
Within two months:  
* **Reviewer effort dropped by 34 %** (average review time 12 min → 7.8 min).  
* **Cost per PR** reduced to $0.32, below the target.  
* **System availability** > 99.9 % over a 30‑day period.

### Learnings & Bar‑raiser cues  

| What a bar‑raiser looks for | How I demonstrated it |
|-----------------------------|------------------------|
| Ownership of end‑to‑end flow | Took responsibility from webhook to comment, not just inference. |
| Dive deep into trade‑offs | Chose ECS over Lambda for CPU bound parsing; benchmarked latency vs cost. |
| Quantified impact | Reported concrete metrics (time savings, cost, error rates). |
| Learning from failure | Implemented retries after observing 7 % failure spikes; refined model batching. |

This showcases customer obsession by delivering measurable productivity gains and a deep technical solution that scales with traffic while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
