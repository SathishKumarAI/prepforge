---
qid: vq_47860f911a__faang__local
question: What are the steps to create a pipeline in adf ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 528
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:08:22-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build an Azure Data Factory (ADF) ETL/ELT pipeline that extracts data from source X, transforms it, and loads into destination Y.  
*Assumptions to confirm:*  
- Source type (SQL DB, Blob, API).  
- Destination format & schema.  
- Frequency (batch vs streaming).  
- Governance needs (data lineage, monitoring).

**2️⃣ Approach**  
1. **Create ADF instance** in Azure portal.  
2. **Set up linked services** for source and sink.  
3. **Define datasets** describing data containers/structures.  
4. **Build pipeline activities:**  
   - *Copy Data* (source → sink).  
   - *Data Flow* or *Mapping Data Flow* for transformations.  
5. **Parameterize** the pipeline for reuse.  
6. **Add triggers** (schedule, tumbling window, event‑based).  
7. **Configure monitoring & alerts** via Azure Monitor.

**3️⃣ Depth**  
- **Copy Activity:** supports parallelism (`MaxConcurrentConnections`) and retry policies.  
- **Mapping Data Flow:** code‑free visual transformations; compiled Spark job under the hood. Complexity: O(N) on data size, but overhead of Spark cluster provisioning.  
- **Pipeline orchestration:** use `If Condition`, `ForEach`, and `Execute Pipeline` for modularity.  
- **Security:** Managed Identity + key vault integration for secrets.

**4️⃣ Edge Cases**  
- Schema drift → use schema auto‑detect or data flow schema evolution.  
- Large files > 2 GB → enable compression or split.  
- Failure of downstream sink → implement `Retry` and `Dead Letter Queue`.  
- Data latency > expected window → monitor trigger run times.

**5️⃣ Optimize & Communicate**  
- **Performance:** enable `Copy Activity` parallelism, use `Sink` batch size tuning.  
- **Cost:** pause compute resources after job completion; leverage Azure Spot for data flows.  
- **Narrative:** “I’ll start by provisioning ADF, then wire source/destination via linked services, build a copy activity with transformation in a mapping flow, parameterize inputs, and finally schedule the pipeline while setting up alerts.”  

This structure demonstrates clear problem framing, methodical planning, technical depth, edge‑case awareness, and concise optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
