---
qid: vq_abe54da2d5__star__local
question: What are the key components of Azure Data Factory pipeline ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 368
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:14-05:00'
sources: []
---

**Situation** – In my last role we had a quarterly sales report that was stuck in an on‑premise SQL Server and took hours to load into Power BI, causing delayed insights for the finance team.  

**Task** – I needed to automate extraction, transformation, and loading of the 12 million rows into Azure Synapse, cutting turnaround from 4 hours to under 30 minutes while keeping data quality intact.

**Action** – I built an ADF pipeline with the following key components:  
1. **Linked Services** for the on‑premise SQL Server (via Self‑Hosted Integration Runtime) and Synapse Analytics.  
2. **Dataset definitions** mapping source tables and target Parquet files in ADLS Gen2.  
3. **Copy Activity** configured with batch size 500 k rows, incremental refresh via watermarking, and retry logic.  
4. **Data Flow** for data cleansing: type casting, null handling, and calculated fields (profit margin).  
5. **Mapping Data Flow** to stage the cleaned data into Synapse staging tables, then a stored procedure activity to merge into fact tables.  
6. **Monitoring & Alerts** set up with Azure Monitor metrics and an email webhook for failures.

**Result** – The pipeline processed 12 million rows in 28 minutes, improved reporting accuracy by 99.9%, and freed the BI team from manual ETL chores. I learned that careful design of linked services, incremental logic, and integrated monitoring is what turns ADF into a production‑grade data engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
