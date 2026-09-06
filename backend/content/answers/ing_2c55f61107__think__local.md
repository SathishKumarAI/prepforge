---
qid: ing_2c55f61107__think__local
question: 'Explain: Data Synthesis & Curation — Your AI Product Needs Evals \u2013
  Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 411
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:35:44-05:00'
sources: []
---

**1. Clarify the goal and assumptions**  
   *Ask what “Data Synthesis & Curation” means in the context of AI products—generating synthetic data vs. cleaning real data—and why evaluation (“evals”) is emphasized.*  
   *Assume the audience knows basic ML but not necessarily the latest synthesis tools or evaluation frameworks.*

**2. Adopt a mental model**  
   *Think of the AI pipeline as: (a) Data acquisition → (b) Curation/synthesis → (c) Model training → (d) Evaluation → (e) Deployment.*  
   *Place “evals” at the center of (b) and (c), because they guide what data to create or clean.*

**3. Step‑by‑step reasoning**  
   1. Outline why raw data alone is often insufficient (bias, scarcity).  
   2. Explain how synthetic data can fill gaps but must be realistic.  
   3. Show that curation (labeling, filtering) improves quality.  
   4. Argue that without systematic evals you risk overfitting to artifacts or missing real‑world failures.  
   5. Tie it back to product outcomes: reliability, safety, compliance.

**4. Common traps to avoid**  
   *Assuming synthetic data is always better.*  
   *Neglecting domain expertise during curation.*  
   *Treating evals as a one‑off checkpoint instead of an iterative loop.*

**5. Sanity‑check & verbalize**  
   *Re‑read the outline against the question: does it cover synthesis, curation, and the “needs evals” claim?*  
   *Summarize in plain language: “You need to build a feedback loop where every data tweak is measured by real metrics before it reaches training.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
