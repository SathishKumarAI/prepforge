---
qid: vq_320e4efa16__think__local
question: Explain List of Activities in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 456
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:23:00-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm that “ADF” refers to *Azure Data Factory* (not Amazon or other ADFs).  
   - Assume the question seeks a high‑level overview of the core activities you can create inside an ADF pipeline, not every single setting.  

**2️⃣ Adopt a mental model: “Pipeline → Activities → Execution Flow”**  
   - Think of a pipeline as a directed graph where nodes are *activities*.  
   - Activities are the workhorses that perform data movement, transformation, or control‑flow logic.  

**3️⃣ Reason step‑by‑step through the activity categories**  
   1. **Data Movement** – Copy, Data Flow, and Integration Runtime activities that transfer data between sources/destinations.  
   2. **Transformation** – Spark, HDInsight, Synapse SQL, or Data Flow activities that reshape data.  
   3. **Control‑flow** – If, Switch, ForEach, Until, Web, and Execute Pipeline to orchestrate logic.  
   4. **Wrappers/Helper** – Set Variable, Append Variable, Wait, and Azure Function activities for auxiliary tasks.  

**4️⃣ Avoid common traps**  
   - Don’t conflate *activities* with *datasets* or *linked services*.  
   - Remember that “Copy” is just one data‑movement activity; others exist (e.g., Blob to Data Lake).  
   - Beware of mixing ADF’s native activities with custom ones (like Azure Function) – they’re separate categories.  

**5️⃣ Sanity‑check & verbalize**  
   - Re‑explain the categories in plain language: “ADF pipelines are built from a handful of activity types—moving data, transforming it, and controlling flow.”  
   - Use an example: “A typical pipeline might copy data → run a Spark job → write results back → then send a notification via Web.”  

This structured thinking helps you answer the question clearly and avoid mis‑classifying ADF components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
