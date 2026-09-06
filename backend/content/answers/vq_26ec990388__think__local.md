---
qid: vq_26ec990388__think__local
question: How do you manage metadata in Azure Data Lake?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 499
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:18:35-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Assume “metadata” refers to schema, lineage, access control, and descriptive tags for data stored in an ADLS Gen2 container.  
   - Assume you’re using Azure’s native services (Data Lake Storage Gen2, Azure Purview/Databricks, Azure Data Factory).  

**2️⃣ Mental model / framework**  
   - *Cataloging* → *Governance* → *Discoverability* → *Lifecycle management*.  
   - Treat metadata as a first‑class asset that lives in a dedicated catalog (Purview) but is also stored locally (e.g., file properties, delta lake transaction logs).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Ingest**: When data lands, attach basic tags/attributes via Data Factory or Databricks (e.g., source system, ingestion timestamp).  
   2. **Catalog**: Use Azure Purview to scan the ADLS container; let it auto‑discover schemas and generate a catalog entry.  
   3. **Governance**: Apply row‑level or column‑level security via Purview policies and link them back to the storage ACLs.  
   4. **Lineage & lineage**: Configure Purview connectors (ADF, Synapse, Databricks) so every transformation emits lineage events.  
   5. **Versioning & evolution**: Store schema changes in Delta Lake’s transaction log; keep older schemas as separate folders or use time‑travel queries.  

**4️⃣ Common traps to avoid**  
   - *Ignoring ACLs*: Purview metadata alone doesn’t enforce access—ensure ADLS ACLs match catalog policies.  
   - *Overloading tags*: Too many ad‑hoc tags clutter the catalog; define a controlled taxonomy.  
   - *Missing lineage on custom code*: If you write Spark jobs, remember to emit lineage events manually.  

**5️⃣ Sanity‑check & communicate**  
   - Verify that every new file triggers a metadata refresh in Purview.  
   - Demonstrate a sample query: `SELECT * FROM <Purview> WHERE source = 'CRM'`.  
   - Explain the flow from ingestion → catalog → governance → consumption, emphasizing how each component ensures data quality and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
