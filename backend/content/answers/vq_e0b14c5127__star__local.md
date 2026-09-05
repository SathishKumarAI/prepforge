---
qid: vq_e0b14c5127__star__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 377
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:59-05:00'
sources: []
---

**Situation** – In my last role I was tasked with automating a nightly data pipeline that pulled transactional logs from an on‑prem SQL Server, transformed them in Azure Data Factory (ADF), and loaded the results into a Synapse Analytics warehouse for downstream BI reports. The schedule had to run every 2 hours during peak business hours, and any failure needed immediate notification.

**Task** – I needed to design a robust workflow that could handle conditional branching, error handling, retry logic, and parallel execution so the pipeline would be resilient, maintainable, and cost‑efficient.

**Action** – I built an ADF pipeline using several control flow activities:  
- **If Condition** to branch based on the presence of new data.  
- **ForEach** with “parallel” batch size set to 4 for loading multiple partitions simultaneously.  
- **Until** loops for retrying a failed copy activity up to three times, with exponential back‑off.  
- **Wait** activities to pause between retries and to synchronize downstream steps.  
- **Web** activity to call an Azure Function that logs status to an Application Insights dashboard.  
I also leveraged the built‑in **Set Variable** and **Add Parameter** activities to pass dynamic values across loops.

**Result** – The pipeline completed 95 % of runs within the allotted window, reduced failure rates from 12 % to 2 %, and cut overall run time by ~30 %. I learned how to combine control flow primitives strategically to create fault‑tolerant, scalable data pipelines in ADF.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
