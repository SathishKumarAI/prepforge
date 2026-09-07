---
qid: ing_cceb5a7a86__faang__local
question: Why do you version an eval dataset, and what exactly belongs in the version?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:42-05:00'
sources: []
---

**Clarify**  
You’re being asked why we *version* evaluation datasets for ML models and what components should be tracked in each version. Key assumptions: the dataset is used repeatedly across training cycles, and downstream stakeholders rely on reproducibility.

**Approach**  
1. Treat the eval set like any production artifact—immutable, traceable, auditable.  
2. Identify constituents that affect metric stability (raw data, preprocessing, splits, labels).  
3. Implement a versioning workflow (e.g., MLflow Dataset or DVC) and document provenance.

**Depth**  
- **Raw data**: the exact rows/columns before any transformation; hash each file to guarantee integrity.  
- **Preprocessing pipeline**: code and parameters used for cleaning, normalization, feature engineering—captured as a “recipe” with version control.  
- **Train‑val‑test split logic**: seed, stratification criteria, and resulting indices so the same subset can be regenerated.  
- **Label definitions & mapping**: any human‑reviewed annotations or label smoothing rules must be frozen.  
- **Metadata**: size, class distribution, schema version, and any domain‑specific constraints (e.g., GDPR redaction).  
Versioning these ensures that a metric spike is attributable to model changes, not dataset drift.

**Edge Cases**  
- *Dynamic data sources*: re‑run preprocessing with the same seed.  
- *Label updates*: create a new minor version rather than patching in place.  
- *Large blobs*: use content‑addressable storage to avoid duplication.

**Optimize & Communicate**  
Introduce CI pipelines that automatically tag and publish dataset versions upon merge, and expose a “dataset lineage” view for auditors. Explain to interviewers that this practice yields reproducible experiments, audit trails for compliance, and faster debugging when metrics change unexpectedly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
