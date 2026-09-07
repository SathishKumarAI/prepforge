---
qid: ing_229c906781__faang__local
question: 'Explain: So there''s there''s a hierarchy of tables'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 640
total_tokens: 872
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:04:45-05:00'
sources: []
---

**Clarify**  
The interviewee asks me to “explain the hierarchy of tables” in a **machine‑learning context**—presumably referring to how raw data is staged, processed, and stored before it reaches an ML model. I’ll confirm that they mean *data pipeline / feature store* architecture rather than relational DB schema.

---

### 1️⃣ Clarify
- What level of granularity are we discussing? (raw logs → cleaned features → aggregated views)
- Are we focusing on a data‑warehouse, a feature‑store, or both?
- Which ML use‑case? (online inference vs batch training)

Assumptions:  
* We have a lakehouse/feature store stack.  
* Tables are partitioned by time and/or key for efficient access.

---

### 2️⃣ Approach
1. **Raw ingestion** – raw event tables (`raw_events`).  
2. **Staging / cleansing** – `cleaned_events`.  
3. **Feature derivation** – `user_features`, `session_features`.  
4. **Aggregated view** – `model_input`.  
5. **Model‑specific artifacts** – `training_set`, `validation_set`.

---

### 3️⃣ Depth
| Layer | Purpose | Typical Schema |
|-------|---------|----------------|
| Raw | Immutable source of truth | `event_id, user_id, ts, payload` |
| Staging | Data quality checks, type casts | Same columns + `valid_flag` |
| Feature | Computed attributes (e.g., last login, avg session) | `user_id, feature_1, …` |
| Aggregated | Pre‑joined view for fast model inference | `user_id, session_id, features…` |

**Complexity:**  
- Raw → Staging: O(n) scan.  
- Feature derivation: often windowed aggregations (O(n log n)).  
- Aggregated view: materialized or on‑demand; trade‑off between storage vs compute.

---

### 4️⃣ Edge Cases
- **Schema drift** – new columns in raw data → feature pipeline must adapt.  
- **Cold start** – users with no history → impute defaults.  
- **Latency** – real‑time inference demands low‑latency materialized views.

Testing: unit tests on each transformation, integration tests comparing raw vs processed outputs, performance benchmarks for window ops.

---

### 5️⃣ Optimize & Communicate
- Use partitioning by date/user to enable pruning.  
- Cache frequently used feature tables in memory (e.g., Redis).  
- Incremental updates instead of full recomputation.  

When presenting: start with the business problem (“We need fast, reliable features for our recommendation engine”), map each table layer to that goal, and finish by quantifying gains (latency drop, storage savings). This structured narrative aligns with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
