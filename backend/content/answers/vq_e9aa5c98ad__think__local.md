---
qid: vq_e9aa5c98ad__think__local
question: Handling nulls while importing data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 430
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:36:56-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - What data source (CSV, JSON, DB)?  
   - How is “null” represented (`NULL`, empty string, `NaN`)?  
   - Where will the data land (data lake, warehouse, streaming pipeline)?  
   - Is there a downstream consumer that tolerates missing values?

**2️⃣ Adopt a mental model: “Null‑Handling Pipeline”**  
   1. **Ingest** → raw format with raw null markers.  
   2. **Normalize** → standardize all representations to a single sentinel (e.g., `NULL`).  
   3. **Validate/Transform** → apply rules (default values, type casting).  
   4. **Persist** → store in target schema that explicitly marks nullable columns.

**3️⃣ Step‑by‑step reasoning**  
   - Identify all sources of nulls; map each to a canonical form.  
   - Decide on transformation logic:  
     * If column is mandatory, replace with business default or flag for rejection.  
     * If optional, keep `NULL`.  
   - Use ETL tools (Spark, dbt) or streaming operators (`Coalesce`, `NVL`) to apply the rules consistently.  
   - Record provenance of original nulls for audit.

**4️⃣ Common traps to avoid**  
   - Mixing empty strings with true `NULL`s—both can silently propagate errors.  
   - Over‑aggressive defaults that mask data quality issues.  
   - Forgetting to update downstream schema documentation when nullable flags change.

**5️⃣ Sanity‑check & communicate**  
   - Run a small sample through the pipeline and inspect counts of nulls before/after.  
   - Verify that the target system’s nullable metadata matches expectations.  
   - Summarize: “We standardize all null markers to `NULL`, apply business defaults only where required, and document column nullability in our data catalog.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
