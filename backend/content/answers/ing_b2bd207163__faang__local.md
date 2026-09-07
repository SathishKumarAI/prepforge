---
qid: ing_b2bd207163__faang__local
question: 'Explain: Week 3: Data Definition and Baseline — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 543
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:24-05:00'
sources: []
---

**Clarify**

You’re asking for a concise overview of *Week 3: “Data Definition and Baseline”* from the Coursera ML‑in‑Production course.  
Key points to confirm:  
• Do you need only a high‑level narrative or code snippets?  
• Which platform (AWS, GCP, Azure) is your focus?  
I’ll assume a general audience wanting the core concepts and trade‑offs.

---

**Approach**

1. **Define data lifecycle stages** – ingestion → validation → storage → labeling.  
2. **Baseline model** – establish a simple “do‑nothing” benchmark (e.g., majority class, linear regression).  
3. **Metrics & monitoring** – choose precision/recall or MSE; set up dashboards.  
4. **Pipeline orchestration** – use Airflow/Dagster or Cloud Composer.

---

**Depth**

- *Data Definition*: Create a unified schema in a catalog (e.g., BigQuery, Snowflake). Enforce type checks and range constraints with automated tests (Great Expectations).  
- *Baseline*: Train a trivial model on the latest training split; compute baseline loss. This anchors future improvements and exposes data drift early.  
- *Monitoring*: Log input distribution and prediction statistics to Cloud Monitoring; trigger alerts if KL‑divergence > threshold.  
- *Versioning*: Store raw, curated, and feature datasets in Delta Lake or BigQuery tables with time‑travel.

*Complexity*: Ingestion O(N), validation O(N) but parallelizable. Baseline training is O(n·d). Storage cost grows linearly with data volume; compression (Parquet/ORC) mitigates this.

---

**Edge Cases**

- Missing or corrupted rows → fallback to imputation or row drop.  
- Concept drift in streaming data → schedule re‑baseline every X days.  
- Label noise → use robust loss functions or active learning loops.

---

**Optimize & Communicate**

- **Improvements**: Replace manual schema checks with automated contract tests; use feature stores (Tecton, Feast) for reuse.  
- **Narration**: “We first lock down the data shape so every downstream job has a stable contract, then we benchmark against a trivial model to expose any hidden biases or drifts before scaling.”  

This structured view aligns with FAANG expectations: clear framing, systematic plan, deep technical grounding, edge‑case awareness, and forward‑thinking optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
