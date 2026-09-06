---
qid: ing_911512cf81__think__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 459
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:41:11-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is being asked?*  The student wants an explanation of “Characteristic #5: It’s a single source of truth” in ML contexts (e.g., data pipelines, model governance).  
   - *Assumptions:* They already know the other characteristics and are focusing on data integrity/consistency.  

**2️⃣ Pick a mental model / framework**  
   - Use **data‑management principles**: *Single Source of Truth (SSOT)* is a foundational concept in database design, ETL pipelines, and MLOps.  
   - Map SSOT to ML lifecycle stages: data ingestion → preprocessing → feature store → training → serving.  

**3️⃣ Reason step by step toward the answer**  
   1. Define SSOT in plain terms (one authoritative location).  
   2. Explain why it matters for ML: reproducibility, auditability, consistency across experiments.  
   3. Illustrate with a concrete example—e.g., a feature store that all models read from, not ad‑hoc scripts pulling raw data each time.  
   4. Mention tooling: versioned datasets (Delta Lake), data catalogs, lineage tracking.  
   5. Conclude with the benefit: reduced drift, easier debugging, faster model iteration.  

**4️⃣ Avoid common traps**  
   - Don’t conflate SSOT with “single database”; it’s about a *trusted reference* that can be versioned and shared.  
   - Resist oversimplifying: in practice you may need multiple curated datasets but they all originate from the same raw source.  
   - Beware of implying that the single source is immutable—rather, it’s consistently managed and version‑controlled.  

**5️⃣ Sanity‑check & communicate**  
   - Re‑read the explanation to ensure no jargon without definition.  
   - Use a quick analogy (e.g., a “master copy” in a collaborative document).  
   - End with a question: “Can you think of an ML project where lacking SSOT caused bugs?” to engage and confirm understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
