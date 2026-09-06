---
qid: vq_ab54d1d43d__think__local
question: Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 423
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:11:12-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Is the user asking for a *definition*, *architecture*, *use‑cases*, or *how‑to*?  
   - Assume they’re new to ADF but have basic Azure familiarity.  
   - Note: ADF is a cloud ETL/ELT orchestrator, not a database.

**2️⃣ Adopt the “ADF‑pipeline → dataflow → integration runtime” mental model**  
   - Pipeline = workflow container (activities + triggers).  
   - Data flow = visual ETL logic.  
   - Integration Runtime (IR) = compute layer: self‑hosted, Azure, or SSIS.

**3️⃣ Step‑by‑step reasoning**  
   1. Start with the high‑level purpose: move/transform data across sources.  
   2. Explain key components (datasets, linked services).  
   3. Walk through a simple example: copy from ADLS to Synapse.  
   4. Highlight triggers (schedule, event, tumbling window).  
   5. Mention monitoring (runs, metrics) and debugging.

**4️⃣ Common traps to avoid**  
   - Mixing ADF with Azure Data Lake Storage concepts.  
   - Forgetting that “copy activity” is the default ETL tool.  
   - Overlooking cost of IRs (Azure vs self‑hosted).  
   - Assuming ADF can run arbitrary code—use Databricks or Azure Functions instead.

**5️⃣ Sanity‑check & verbalize**  
   - Verify each component’s role and data flow direction.  
   - Ask the user: “Does this align with your scenario?”  
   - Conclude with a quick recap of benefits (serverless, visual, managed).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
