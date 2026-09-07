---
qid: vq_e0b14c5127__aws__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 733
total_tokens: 965
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:16-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“In Azure Data Factory (ADF), the Control Flow layer orchestrates data movement and processing. The key control‑flow activities are:  
> 1️⃣ **If Condition** – evaluates a Boolean expression to branch pipelines.  
> 2️⃣ **ForEach** – iterates over a collection, launching child activities per item.  
> 3️⃣ **Until** – loops until a termination condition is met (e.g., polling for file arrival).  
> 4️⃣ **Switch** – multi‑branch routing based on a single expression’s value.  
> 5️⃣ **Wait** – introduces a delay or synchronizes downstream activities.  
> 6️⃣ **Web / Azure Function / Custom Activity** – invokes external services or custom code.  
> 7️⃣ **Execute Pipeline** – triggers nested pipelines for modularity.  
> 8️⃣ **Set Variable / Assign** – manages state within a pipeline.”*

---

### STAR (Customer Obsession + Ownership)

- **Situation:** A client needed to refresh a nightly data mart that consumed ~5 TB of raw logs, but the existing orchestration stalled at 4 TB due to hard‑coded limits.  
- **Task:** Redesign the pipeline to handle variable sizes and parallelize processing without manual intervention.  
- **Action:** Implemented an **If Condition** to detect file size > 4 TB, then used a **ForEach** over split chunks, each launching an **Azure Function** (Python) that streamed data into Snowflake via **Copy Into**. Added **Wait** for function completion and **Set Variable** to track progress.  
- **Result:** Throughput increased from 1 hour to 15 minutes (+90% speed), cost dropped by 35% (less compute time). The client reported a 25% faster reporting cycle, directly improving decision‑making speed.

---

### Technical Design & Trade‑offs

| Requirement | Service/Feature | Scalability | Availability | Cost |
|-------------|-----------------|------------|--------------|------|
| Parallel file ingestion | **ForEach + Azure Function** (serverless) | Auto‑scales to thousands of invocations | 99.95 % SLA | Pay per execution; lower idle cost |
| Conditional branching | **If Condition / Switch** | Stateless, no scaling limits | 100 % uptime | Negligible |
| Waiting for external trigger | **Wait** or **Until** (polling) | Single thread but can be scaled by parallel loops | 99.95 % SLA | Minimal |

> *Trade‑off:* Using Azure Functions adds cold‑start latency; mitigated by pre‑warming via Azure Logic Apps. The **If Condition** keeps the pipeline lightweight, avoiding unnecessary compute when data size is small.

---

### Bar‑raiser Signals

- Demonstrated **ownership**: redesigned end‑to‑end flow and documented it for ops.  
- Showed **depth (Dive Deep)** by explaining how each control activity maps to AWS equivalents (e.g., Step Functions, Lambda).  
- Quantified impact with real metrics (speedup, cost savings).  
- Reflected on failure: initial attempt caused “resource exhaustion” → learned to use *dynamic content* for sizing and introduced *retry policies*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
