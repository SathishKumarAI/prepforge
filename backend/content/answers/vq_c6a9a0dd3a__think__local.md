---
qid: vq_c6a9a0dd3a__think__local
question: How do you implement schema drift handling in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 640
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:20:47-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - *What is “schema drift” for this user?*  (e.g., new columns, dropped columns, type changes).  
   - *Which ADF components are involved?*  (Copy Activity, Data Flow, Synapse pipelines).  
   - *What downstream systems must stay consistent?*  (Data Lake, warehouse, BI).  
   - Assume the user wants an automated, repeatable solution in Azure Data Factory.

**2️⃣ Mental model / framework**  
   Use a **detect‑transform‑load** loop:  
   1. Detect drift → compare source schema to a stored reference.  
   2. Transform the data to match the target (add defaults, cast types).  
   3. Load into the destination and update the reference.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Tool/Feature |
|------|--------|--------------|
| **a. Capture source schema** | Run a *Get Metadata* activity on the source dataset (e.g., Blob, SQL). | GetMetadata |
| **b. Store reference** | Persist the schema JSON in Azure Table Storage or an ADLS file. | Azure Table / ADLS |
| **c. Compare schemas** | Use a Data Flow or custom script (Python/Databricks) to diff current vs stored schema. | Data Flow, Databricks Notebook |
| **d. Decide on changes** | If new columns: add with defaults; if missing: drop or flag; if type change: cast or log error. | Conditional Split / Derived Column |
| **e. Apply transformations** | In a Data Flow, map source to sink schema, using *Derived Column* for casts and *Sink Settings* (allowInsertOnly). | Data Flow |
| **f. Load data** | Copy/Databricks job writes to the target (ADLS, Synapse). | Copy Activity / Databricks |
| **g. Update reference** | After successful load, overwrite stored schema with the new one. | Azure Table / ADLS |

**4️⃣ Common traps & how to avoid them**  
- *Assuming schema changes are rare*: always enable drift detection; set a threshold for alerts.  
- *Hard‑coding column lists*: use dynamic content (`@activity('GetMetadata').output.schema`) instead of static columns.  
- *Ignoring data type incompatibilities*: add explicit casts and validate with sample rows before full load.  
- *Not versioning schemas*: keep a history table to roll back if needed.

**5️⃣ Sanity‑check & communicate**  
- Run the pipeline on a test dataset first; verify that new columns appear with defaults and old ones are preserved.  
- Log drift events in Azure Monitor or send an email via Logic App.  
- Explain to stakeholders: “We detect schema changes automatically, transform data on‑the‑fly, load it safely, and keep a versioned record of every schema change.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
