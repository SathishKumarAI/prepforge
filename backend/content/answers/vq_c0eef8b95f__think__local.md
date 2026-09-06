---
qid: vq_c0eef8b95f__think__local
question: Explain the use of Integration Runtime (IR) in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 461
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:18:34-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Confirm the context: Azure Data Factory (ADF) and its integration with on‑premise or cloud data sources.  
   - Assume the reader knows basic ADF concepts but may not be familiar with “Integration Runtime” terminology.

**2️⃣ Adopt a mental model: “Data movement engine”**  
   - Think of IR as a *runtime environment* that executes copy, data flow, and pipeline activities.  
   - Distinguish between the three IR types (Azure, Self‑Hosted, SSIS) as different deployment contexts.

**3️⃣ Step‑by‑step reasoning toward an explanation**  
   1. **Purpose** – IR provides network connectivity, security, and compute for data movement/transformations.  
   2. **Types & placement** – Azure IR runs in Microsoft’s cloud; Self‑Hosted IR sits on user infrastructure; SSIS IR runs SQL Server Integration Services packages.  
   3. **Configuration** – Each IR has a linked service that defines its authentication, location, and performance settings.  
   4. **Execution flow** – When a pipeline triggers, ADF selects the appropriate IR to run the activity, handling data transfer or transformation logic.  
   5. **Scaling & cost** – Azure IR scales automatically; Self‑Hosted IR is limited by local resources.

**4️⃣ Common traps to avoid**  
   - Confusing IR with *linked services* (they’re separate entities).  
   - Assuming all IRs are automatically created; you must set them up explicitly.  
   - Overlooking security: self‑hosted IR requires firewall rules and authentication tokens.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this answer explain why we need an IR, what it actually does, and how we choose one?”  
   - Summarize in one sentence: *An Integration Runtime is the compute layer that ADF uses to move or transform data between sources and sinks, with variants for cloud, on‑premise, and SSIS workloads.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
