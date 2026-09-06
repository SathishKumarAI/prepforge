---
qid: ing_8e11ee23ed__think__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 428
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:26:48-05:00'
sources: []
---

**1️⃣ Clarify goals & constraints**  
   - What “quality” means for a contract‑review AI (accuracy, completeness, legal compliance)?  
   - Who are the domain experts? (Partner lawyers) and what is their bandwidth/price?  
   - Is there any existing data you can repurpose (e.g., past reviews, audit logs)?

**2️⃣ Adopt a layered framework**  
   - **Data sourcing** → gather raw contracts from internal repositories.  
   - **Pre‑labeling** → use semi‑automatic heuristics or crowd‑source to generate coarse tags.  
   - **Expert review** → allocate partner time for fine‑grained scoring on a representative subset.

**3️⃣ Step‑by‑step reasoning**  
   1. Pull a stratified random sample covering contract types, jurisdictions, sizes.  
   2. Run an automated rule‑based pass to flag obvious issues; label these as “easy” examples.  
   3. Feed the remaining “hard” set to partners for detailed evaluation (e.g., 5–10 contracts per partner).  
   4. Aggregate partner scores into a composite metric and use it to train/validate the model.  
   5. Iterate: refine heuristics, expand sample size until performance plateaus.

**4️⃣ Avoid common traps**  
   - Don’t assume all partners agree on definitions; standardize scoring rubrics.  
   - Beware of sampling bias—ensure diversity in contract features.  
   - Don’t over‑invest in labeling the entire corpus; focus on high‑impact cases.

**5️⃣ Sanity‑check & communicate**  
   - Cross‑validate partner scores with inter‑annotator agreement (e.g., Cohen’s κ).  
   - Present a pilot report: sample size, rubric, agreement statistics, and projected cost.  
   - Iterate based on feedback before scaling to the full evaluation set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
