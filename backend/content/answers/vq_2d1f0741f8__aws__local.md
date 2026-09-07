---
qid: vq_2d1f0741f8__aws__local
question: What is function currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 426
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:45:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Ownership**, **Dive Deep**

---

### Situation  
While leading a data‑pipeline refactor at my previous company, I noticed that the ETL job scheduler was repeatedly passing the same configuration map to every transformation function. The codebase had grown brittle and testing each stage required recreating the entire context.

### Task  
I needed a cleaner way to inject shared config into many functions without cluttering their signatures or duplicating logic—ideally in a type‑safe, composable manner that would also make unit tests easier.

### Action  
I introduced **function currying** in Scala.  
- I rewrote each transformation as `def transform(config: Config)(input: DataFrame): DataFrame`.  
- The outer function receives the immutable config once and returns a new *curried* function that accepts only the input.  
- This allows us to create partially‑applied functions (e.g., `val clean = transform(commonConfig)`) and compose them with `andThen` or `compose`.  

I paired this with **AWS Glue** for the actual ETL execution, using **S3** for intermediate storage and **AWS Step Functions** to orchestrate stages. The curried design reduced boilerplate by 40 % (measured via code‑line metrics) and cut test setup time from 12 min to 2 min.

### Result  
The refactor led to a 25 % reduction in pipeline failures over the next quarter because each stage now had a single source of truth for configuration. Moreover, new developers could onboard faster—average onboarding time dropped by 30 %.  

**What a bar‑raiser will notice:** I took *ownership* of a systemic pain point, applied *dive deep* into Scala’s functional features, quantified the impact with real metrics, and learned that curried functions not only simplify code but also enhance testability in distributed data environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
