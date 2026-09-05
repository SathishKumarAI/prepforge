---
qid: ing_a260a881b4__star__local
question: 'Explain: Measuring Hallucinations — BigLaw Bench: Hallucinations | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 371
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:25-05:00'
sources: []
---

**Situation:**  
At my previous firm we built an AI assistant to draft discovery documents for the litigation team. Early beta testing revealed that the model was “hallucinating” facts—generating claims about statutes or case law that didn’t exist—which could jeopardize client confidentiality and damage our reputation.

**Task:**  
I had to design a systematic evaluation framework to quantify hallucinations, reduce them below 2 % of generated content, and provide actionable feedback for the data‑engineering pipeline.

**Action:**  
1. Created an annotated “Hallucination Benchmark” dataset: 5,000 excerpts from actual briefs, tagged by legal experts as factual or fabricated.  
2. Built a multi‑modal scoring engine combining (a) a semantic similarity model (Sentence-BERT) against a curated legal knowledge base, and (b) a rule‑based fact‑check filter that cross‑references statutes in our internal database.  
3. Integrated the scorer into our CI pipeline; every new model version ran an automated test producing a Hallucination Rate (HR).  
4. Conducted ablation studies to tweak temperature, nucleus sampling, and fine‑tuning on domain‑specific corpora, iterating until HR fell below 1.8 %.

**Result:**  
The final system cut hallucinations from 7.5 % down to 1.6 %, earning the litigation team a 20 % increase in trust scores during internal audits. I learned that combining expert‑labeled benchmarks with automated semantic checks is essential for trustworthy legal AI, and that continuous monitoring turns a qualitative risk into a measurable KPI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
