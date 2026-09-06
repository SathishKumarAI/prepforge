---
qid: vq_abe54da2d5__think__local
question: What are the key components of Azure Data Factory pipeline ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 482
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:11:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The question is about *Azure Data Factory* (ADF), so we’re dealing with its pipeline concept, not generic data‑engineering terms.  
   - Assume the reader knows basic ADF terminology but wants a concise list of “key components” that make up a pipeline.

**2️⃣ Choose a mental model**  
   - Think of an ADF pipeline as a directed graph: **activities → triggers → linked services & datasets → parameters & variables → error handling & monitoring**.  
   - Use the *“components”* framework: definition, execution, orchestration, and observability.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the *core building block*: **Activities** (copy, data flow, stored procedure, etc.).  
   2. Consider how those activities are **connected**: *Dependencies* (precedence constraints).  
   3. Recognize the **data sources/sinks** they touch: *Linked Services* + *Datasets*.  
   4. Note the **configuration layer**: *Parameters*, *Variables*, and *Expressions*.  
   5. Think about how a pipeline starts: *Triggers* (schedule, tumbling window, event).  
   6. Don’t forget the *control flow*: *If/ForEach*, *Switch*, *Web*, etc.  
   7. Finally, wrap it with **monitoring** (pipeline runs, output logs) and **error handling** (try/catch, retry policies).

**4️⃣ Avoid common traps**  
   - Mixing *pipeline* vs. *activity* concepts.  
   - Overlooking the role of *Linked Services* as the “connection” glue.  
   - Forgetting that *triggers* are not part of a pipeline definition but drive its execution.

**5️⃣ Sanity‑check & verbalize**  
   - Re‑count: activities, dependencies, linked services/datasets, parameters/variables, triggers, control flow, monitoring/error handling.  
   - Explain each in one sentence to confirm you’ve covered all angles before finalizing the answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
