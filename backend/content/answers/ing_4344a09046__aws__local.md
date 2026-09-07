---
qid: ing_4344a09046__aws__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:08-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During a recent model‑validation sprint I led the audit of our churn‑prediction labelers.  
**Situation:** Two senior data scientists independently annotated 4 000 user profiles; we calculated Cohen’s κ to assess inter‑annotator reliability.  
**Task:** The metric fell at **0.55**, below our internal threshold of **0.60** for “acceptable agreement.” I needed to rewrite the annotation guidelines and redesign the workflow so that downstream ML training would not inherit noisy labels.  

**Action (Dive Deep + Ownership):**  
1. *Root‑cause analysis* – logged each disagreement, discovered ambiguous terms (“high engagement”) and inconsistent use of “inactive.”  
2. *Redesign* – wrote a concise style guide, added a mandatory “context check” question in the annotation UI, and introduced a triage step for borderline cases.  
3. *Pilot & iterate* – ran a 200‑sample re‑annotation; κ rose to **0.68** (Δ + 0.13).  

**Result:** We saved ~30 % of label time, improved model AUC from 0.72 to 0.79, and reduced post‑deployment churn‑prediction errors by 22 %.  
*Learned:* Small process tweaks can yield outsized data quality gains—an essential lesson for any AI pipeline at scale.  

**Leadership Principles:** *Customer Obsession* (better predictions → happier users), *Ownership* (owning the end‑to‑end label quality loop).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
