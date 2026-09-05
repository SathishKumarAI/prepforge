---
qid: vq_4b732973d1__fp__local
question: How do you handle schema evolution in ADF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 424
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:18-05:00'
sources: []
---

### Why schema evolution matters

When a data source changes—new columns appear, types shift, or values are renamed—the downstream pipeline must still run without manual intervention. If the transformation logic is hard‑wired to a fixed schema, any change breaks the job, violating *continuous availability*, a core principle of operational reliability.

### Deriving ADF’s solution

1. **Schema inference at runtime**  
   Instead of committing to a static definition, ADF reads the source metadata during each run. This mirrors statistical sampling: you observe enough rows to estimate the distribution and shape without knowing it beforehand.

2. **Dynamic mapping**  
   The data flow engine builds an internal *logical plan* that maps source columns to sink columns by name or position, ignoring any extra or missing fields. This is akin to *projection* in relational algebra—only requested attributes are retained, others are discarded automatically.

3. **Schema drift handling**  
   If a new column appears, ADF can either:
   - Add it to the sink with a default value (schema‑on‑read), or
   - Preserve it in an auxiliary column (`*_extra`) for later inspection.  
   This follows the principle of *information preservation*: you never lose data unless explicitly dropped.

### One non‑obvious insight

Most users only enable “auto‑detect schema” and assume all changes are harmless. In reality, **data type promotion** (e.g., `int` → `string`) can silently corrupt downstream analytics because the logical plan assumes the original type. ADF’s *type validation* step—comparing inferred types against a *baseline schema* stored in Azure Purview—provides an early warning that keeps pipelines safe while still allowing evolution.

---

> **Bottom line**: By inferring, projecting, and validating schemas at runtime, ADF turns schema drift from a catastrophic failure into a managed, observable event.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
