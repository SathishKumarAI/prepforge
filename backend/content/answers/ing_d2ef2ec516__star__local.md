---
qid: ing_d2ef2ec516__star__local
question: 'Explain: Evaluation Methodology — Introducing BigLaw Bench to Evaluate
  LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 364
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:18-05:00'
sources: []
---

**Situation**  
At a mid‑size law firm, we were migrating from manual document review to an AI‑assisted contract analysis pipeline. Our legal team was skeptical because the vendor’s claims about accuracy sounded vague, and our compliance budget required hard proof that the LLM would reduce errors by at least 30 %.  

**Task**  
I had to design a rigorous evaluation framework that could be repeated quarterly, quantify model performance on real‑world legal text, and demonstrate clear ROI for senior leadership.  

**Action**  
I built the “BigLaw Bench,” a benchmark suite of 5,000 anonymized clauses sourced from our own database and public case law. Each clause was labeled by three experienced attorneys for issues like indemnification scope, jurisdiction choice, and termination language. I implemented a multi‑metric scoring system: precision/recall for each label, a weighted F1 that reflected business impact (e.g., higher weight on liability clauses), and an “explainability” score from the model’s attention maps. The benchmark was run nightly against the vendor’s LLM, and results were fed into a Tableau dashboard that automatically flagged regressions or improvements.  

**Result**  
After three months of iterative tuning, the LLM achieved 92 % precision on high‑risk clauses—up from the initial 78 %—and reduced manual review time by 35 %. The executive team approved an additional $120k in AI funding and we rolled out the model to 12 practice groups. I learned that a transparent, data‑driven evaluation pipeline not only builds trust but also provides actionable insights for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
