---
qid: vq_c8076813eb__aws__local
question: What are the types of UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 549
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we build tools that let analysts extract value quickly; *Dive Deep* – we dissect every layer of the UDF stack.

---

### 1️⃣ Situation & Technical Context  
At my last role I was tasked with reducing the time our data science team spent writing repetitive ETL logic in Spark. The team used custom **User‑Defined Functions (UDFs)** to transform raw logs into analytical tables, but each UDF was a monolithic Python script that ran inside the JVM, causing serialization overhead and blocking execution.

### 2️⃣ Task & Design  
I mapped out the **three primary UDF types** we could leverage:

| Type | When to Use | Key AWS Service |
|------|-------------|-----------------|
| **Scalar UDF** | One‑to‑one transformation of a single column. Ideal for simple string/date manipulation. | `AWS Glue` PythonShell or `Amazon Athena` scalar UDFs |
| **Aggregate UDF** | Compute a single result from many rows (e.g., custom median). Requires stateful execution. | `Glue Jobs` with Spark aggregate UDF, or `Athena` aggregate UDF |
| **Table‑valued UDF (TVF)** | Return multiple rows per input row—useful for expanding nested structures. | `AWS Athena` TVFs via `pyarrow` |

I also introduced a **UDF registry** in DynamoDB to track versioning and usage metrics, enabling governance.

### 3️⃣ Result & Impact  
- **Execution time dropped from 12 min → 2 min** on a 50‑TB dataset.  
- CPU utilization fell by **35%**, freeing cluster capacity for other jobs.  
- The UDF registry surfaced that *10* functions were obsolete; deprecating them saved ~$3k/month in Spark cluster costs.

### 4️⃣ Learning & Bar‑raiser Signals  
I documented the failure mode: when a scalar UDF was accidentally written as an aggregate, it caused **null propagation** across partitions. By adding automated unit tests and a pre‑deployment lint step, we reduced runtime errors by **90%**.  

> *Owner:* I took full ownership of the UDF strategy, drove cross‑functional adoption, and iterated on the design until it hit production SLA targets.  
> *Dive Deep:* My analysis uncovered hidden serialization costs and led to a measurable cost/scale win.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
