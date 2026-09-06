---
qid: vq_abe54da2d5__faang__local
question: What are the key components of Azure Data Factory pipeline ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 547
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:38-05:00'
sources: []
---

**Clarify**  
The question asks for the *key components* that make up an **Azure Data Factory (ADF) pipeline**—the logical units that orchestrate data movement and transformation. I’ll assume we’re focusing on the core objects exposed in the ADF UI/JSON, not on ancillary services like Data Lake or Synapse.

---

**Approach**  
1. List the high‑level building blocks: *Pipelines*, *Activities*, *Datasets*, *Linked Services*, *Triggers*.  
2. For each block, describe its purpose and typical attributes.  
3. Mention how they interrelate (e.g., a pipeline references datasets/activities; triggers fire pipelines).  

---

**Depth**

| Component | Role & Key Properties |
|-----------|-----------------------|
| **Pipeline** | Orchestrates execution flow; contains activities in a sequence or branch. Has parameters, variables, and optional *pipeline runs* metadata. |
| **Activity** | Unit of work (e.g., `Copy`, `Data Flow`, `Databricks Notebook`, `Stored Procedure`). Each has inputs/outputs, dependencies (`dependsOn`), retry policy, timeout. |
| **Dataset** | Schema‑aware reference to data in a store; defines format, partitioning, and column mapping. Can be parameterized for dynamic paths or file names. |
| **Linked Service** | Connection info (connection string, authentication) to external resources (Blob, SQL DB, ADLS). Acts as the “credential” layer for datasets. |
| **Trigger** | Scheduler that fires pipelines (`Schedule`, `Event`, `Custom`). Can pass trigger‑time parameters into pipelines. |

These five components form the minimal set needed to design, deploy, and monitor a functional ADF pipeline.

---

**Edge Cases**

* Missing or stale linked service credentials → run failures.  
* Activity dependencies mis‑ordered → deadlock or infinite loop.  
* Parameter mismatch between pipeline and trigger → runtime errors.  

Testing should cover: connection validation, activity success/failure paths, retry logic, and parameter propagation.

---

**Optimize & Communicate**

- **Modularize** pipelines (small reusable pieces) to improve maintainability.  
- Use *parameterization* and *dynamic content* to avoid hard‑coding paths.  
- Leverage *data flow debugging* for transformations before full deployment.  

Explain this hierarchy clearly during an interview, emphasizing how each component plugs into the others—exactly what FAANG interviewers look for in structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
