---
qid: vq_99f600a830__think__local
question: What are Dataset, Linked Service and IR ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 481
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:05:35-05:00'
sources: []
---

We must give numbered thought-process for candidate. Include clarification, mental model (data integration concepts), step-by-step reasoning, traps, sanity-check. 150-220 words.**1️⃣ Clarify the context & assumptions**  
   - Ask: *Are we talking about Azure Data Factory (ADF) or another platform?*  
   - Assume ADF/Power BI terminology unless told otherwise.

**2️⃣ Map the mental model**  
   - Think of a data pipeline as **“source → transform → destination.”**  
   - *Dataset* = description of data you’ll read/write.  
   - *Linked Service* = credentials + connection info to that source/destination.  
   - *Integration Runtime (IR)* = compute engine that actually moves/executes the work.

**3️⃣ Reason step‑by‑step**  

| Concept | Purpose | Typical usage |
|---------|--------|---------------|
| **Dataset** | Schema & location of a data entity | Define tables, files, or blobs you’ll read from/write to. |
| **Linked Service** | Connection string / auth for a store | Point ADF to ADLS, SQL DB, Cosmos, etc. |
| **IR** | Execution context (compute) | Decide where the copy/transform runs – Azure‑hosted, self‑managed, or on‑prem. |

1. Identify the data source → create *Linked Service*.  
2. Define what you’ll read/write → create *Dataset* referencing that service.  
3. Choose where the activity runs → pick / configure an *IR*.

**4️⃣ Common traps to avoid**  

- Mixing up “dataset” with “linked service.”  
- Assuming IR is always Azure‑hosted; remember self‑managed for on‑prem.  
- Forgetting that a dataset can reference any linked service, not just one type.

**5️⃣ Sanity‑check & verbalize**  

- “If I want to copy from ADLS Gen2 to SQL, I’ll need an ADLS Linked Service, a SQL Linked Service, datasets for both tables/files, and run the copy on an Azure IR.”  
- If the explanation feels circular or missing a piece, revisit step 3.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
