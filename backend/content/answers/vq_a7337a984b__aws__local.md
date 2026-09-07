---
qid: vq_a7337a984b__aws__local
question: What is the use of ‘???’ in Scala-based Applications?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 585
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:30-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Use of `???` in Scala‑based applications?**  
> The `???` helper is a *stub* defined in `Predef`. It throws a `NotImplementedError` at runtime, letting developers leave methods unimplemented while keeping the code compiling. In production systems it should never be hit; instead we guard calls with proper validation or fallbacks.

### Situation
I was refactoring a data‑pipeline that ingested streaming logs into an S3 lake and later processed them in EMR. The original code had many `???` placeholders for transformation logic that hadn’t been written yet.

### Task
Replace those stubs with robust, testable functions while ensuring the pipeline remains scalable, highly available, and cost‑effective on AWS.

### Action
1. **Identify** every `???` in the DAG and categorize it as *critical* (affects data quality) or *non‑critical* (logging/metrics).  
2. For **critical stubs**, I:
   * Created pure functions with explicit input/output types, avoiding side effects.  
   * Wrote unit tests using ScalaTest + Scalatest‑Mock to cover edge cases.  
   * Added a fallback `Option` pattern that logs and returns a default value instead of throwing.  
3. For **non‑critical stubs**, I:
   * Replaced them with no‑ops or safe defaults, wrapped in a `Try` block to catch accidental execution.
4. Deployed changes via CI/CD (GitHub Actions → CodeBuild) and validated on a small EMR cluster before rolling out to production.

### Result
* **Zero runtime failures** from unimplemented methods across 3 million records per day.  
* Reduced pipeline latency by **12%** thanks to the new, deterministic logic.  
* Cost savings of ~₹15k/month by avoiding unnecessary retries on failed tasks.  

### Learnings
* Always guard `???` with defensive code—AWS Lambda’s “cold start” can mask missing implementations until late in production.  
* Embrace *Ownership*: I took full responsibility for the refactor, communicated risks to stakeholders, and documented the new contract in Confluence.

**Leadership Principles Highlighted:**  
- **Ownership** – owned the end‑to‑end fix, from code review to deployment.  
- **Dive Deep** – examined every placeholder, wrote tests, and profiled performance impact.  

This approach aligns with Amazon’s expectation that engineers deliver reliable, scalable solutions while continuously learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
