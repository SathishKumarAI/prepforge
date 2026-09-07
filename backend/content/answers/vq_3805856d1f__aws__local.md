---
qid: vq_3805856d1f__aws__local
question: Is Scala an Expression-Based Language or Statement-Based Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 471
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:58-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Scala is fundamentally an **expression‑based language** – every construct evaluates to a value.”*  

---

### Situation & Task  
In 2023 I led the migration of our on‑prem Spark jobs to **AWS Glue** + **EMR** for a data lake that served 12 business units. The existing Scala ETL scripts were written in a mixed style; some developers used side‑effects (e.g., `foreach` with mutable state), which caused hard‑to‑debug bugs during incremental releases.

### Action  
I organized a **code‑review sprint** focused on enforcing the expression‑based paradigm:

1. Replaced all `foreach { … }` with functional transformations (`map`, `flatMap`, `filter`) that return new RDD/DataFrame objects.  
2. Introduced the **“Stateless”** style guideline and added a pre‑commit hook using **Scalafix** to flag stateful mutations.  
3. Built an automated test harness on **AWS CodeBuild** that ran unit tests against each commit, capturing execution time and memory usage.

### Result  
- Reduced runtime errors in production by **78 %** (from 14 incidents/month to 3).  
- Cut average job duration from 18 min to 12 min, saving ~$2k/month on EMR spot instances.  
- Improved developer velocity: merge requests went from an average of 7 days to 3 days.

---

### Technical Takeaway  
*Expression‑based code* yields **referential transparency**—every function’s output depends only on its inputs, making reasoning, testing, and parallel execution straightforward. In a distributed environment like EMR or Glue, this reduces data shuffling and improves fault tolerance (no hidden mutable state to recover).

---

### Leadership Principles Highlighted  
- **Ownership & Deliver Results:** Took initiative to clean up the codebase, directly impacting reliability and cost savings.  
- **Dive Deep & Bias for Action:** Diagnosed root causes via logs and metrics, then acted swiftly with automated tooling.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
