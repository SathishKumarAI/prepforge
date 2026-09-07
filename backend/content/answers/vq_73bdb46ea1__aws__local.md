---
qid: vq_73bdb46ea1__aws__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 492
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession & Ownership* – I always start by clarifying the customer’s pain point: “Do we need deterministic copy behavior or do we want memory‑efficient shared objects?”  
> 
> **Situation:** A data‑engineering team was refactoring a pipeline that processed millions of rows. They observed subtle bugs where modifying a dictionary inside a function mutated the original object, breaking downstream stages.  
> 
> **Task:** Explain how Python passes arguments and propose a robust design.  
> 
> **Action:**  
> * **Technical clarification** – In CPython, names are references to objects; assignment creates new references (pass‑by‑reference). Immutable types (`int`, `str`) behave like pass‑by‑value because reassigning them inside the function creates a new object. Mutable types (`list`, `dict`) can be mutated in place, so callers see changes unless we explicitly copy (`obj.copy()` or `copy.deepcopy()`).  
> * **Design** – Wrap data structures in an immutable container (e.g., `typing.NamedTuple` or `dataclasses.dataclass(frozen=True)`) for pipeline stages that must not alter input. Use AWS Glue’s **Spark** jobs with **PySpark UDFs** to enforce immutability; each UDF receives a serialized copy via Kryo, guaranteeing isolation.  
> * **AWS services** – Store raw data in S3, trigger Glue crawlers, and write outputs to Redshift. Use **S3 Object Lock** to protect immutable inputs during processing.  
> 
> **Result:** After refactor, pipeline failures dropped from 12 % to <1 %, saving ~40 hrs of debugging per week. The team adopted the immutable‑wrapper pattern across all ETL jobs, improving maintainability and enabling autoscaling on Glue with predictable cost ($0.45/hr).  
> 
> **Learnings:** Always surface side‑effects early; unit tests that mutate shared objects revealed hidden bugs. Future iterations will incorporate static type checking (mypy) to catch accidental in‑place modifications before runtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
