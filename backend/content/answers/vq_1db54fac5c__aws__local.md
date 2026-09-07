---
qid: vq_1db54fac5c__aws__local
question: Q2). What are processing tools in Azure Data Factory ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 501
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:27-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:*  
At my previous role we had to modernize a legacy data pipeline that fed our BI dashboards. The existing ETL ran on on‑premise SSIS and was brittle—each change required a full redeploy, and errors were hard to trace.

*Task:*  
I led the migration to **Azure Data Factory (ADF)** and needed to identify the right processing tools within ADF to make the pipeline reliable, observable, and cost‑effective.

*Action:*  
1. **Data Flow** – I replaced SSIS data transformations with *Mapping Data Flows*. By using the built‑in Spark engine, we cut transformation time from 15 min to 3 min per batch and eliminated the need for a separate Databricks cluster.  
2. **Wrangling Data Flow** – For semi‑structured logs I leveraged *Wrangling Data Flows* (Power Query style) to clean and shape data on‑the‑fly, reducing our Python UDF code by 70 %.  
3. **Data Lake Analytics / HDInsight** – For heavy analytics jobs that required custom Spark code, we orchestrated ADF pipelines to submit notebooks to Azure Databricks clusters, keeping compute tightly scoped and spot‑priced.  
4. **ADF Triggers & Webhooks** – I set up event‑driven triggers that fired on new blob uploads, ensuring near‑real‑time processing with <5 min latency.  
5. **Monitoring & Logging** – Integrated *Azure Monitor* and *Log Analytics* to capture pipeline run metrics (success rate, duration) and auto‑alert on failures.

*Result:*  
- 80 % reduction in operational overhead (no manual redeploys).  
- 60 % lower cost by shifting from always‑on SSIS to spot‑priced Spark clusters.  
- 90 % improvement in data freshness for dashboards, boosting user satisfaction scores from 3.2/5 to 4.6/5.

*Reflection:*  
I learned that *Choosing the right tool within a service ecosystem is as critical as choosing the ecosystem itself.* The migration taught me to balance performance, cost, and maintainability—principles I’ll bring to any AWS data‑engineering challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
