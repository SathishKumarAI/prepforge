---
qid: ing_a95a8c0f4c__faang__local
question: 'Explain: Characteristic #2: It has a minimal amount of database tables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 558
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:04-05:00'
sources: []
---

**Clarify**  
You’re asking why an ideal machine‑learning system should keep the number of database tables as small as possible. I’ll assume you mean “relational schema” rather than NoSQL key‑value stores, and that we’re focusing on the data layer that feeds models (feature extraction, training, inference).

---

### Approach  
1. **Identify the purpose of tables** – staging, feature store, model artefacts, logs.  
2. **Consolidate where possible** – use wide rows or JSON columns instead of many normalized tables.  
3. **Leverage column‑store or data lake solutions** for raw/feature data.  
4. **Keep a minimal set of core tables**: `raw_data`, `features`, `model_versions`, and `metrics`.

---

### Depth  
- **Normalization vs. performance** – Excessive joins slow batch pipelines; denormalization reduces I/O but risks inconsistency.  
- **Feature store as single table** – Store all engineered features per entity in one wide row (e.g., user_id → {age, avg_session, click_rate…}). This supports both online inference and offline training with minimal schema changes.  
- **Model artefacts & metadata** – A lightweight `models` table stores UUID, algorithm, hyperparameters, and a link to the feature set used.  
- **Audit & lineage** – Optional `logs` or event tables capture provenance; they can be partitioned rather than fully normalized.

Complexity: O(1) lookups for inference, O(n) scans for batch training. Trade‑off: potential data duplication vs. reduced join overhead.

---

### Edge Cases  
- **Schema evolution** – Adding a new feature requires altering one wide table (not many).  
- **High cardinality features** – May necessitate separate tables; handle with partitioning or sharding.  
- **Multi‑tenant systems** – Tenant ID column in the same table keeps count low.

---

### Optimize & Communicate  
- **Use compression & vectorized storage** to keep wide rows efficient.  
- **Explain to interviewers** that a minimal table set reduces operational complexity, eases governance, and speeds up data pipelines—key for rapid ML iteration.  
- **Show trade‑offs**: less normalization can lead to duplicate data but dramatically cuts join latency, which is often the bottleneck in model serving.

By keeping the schema lean, we achieve faster ETL, simpler maintenance, and a clearer audit trail—all critical at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
