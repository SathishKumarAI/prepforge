---
qid: ing_077829c6e2__think__local
question: How do you design a good rubric for model-graded evals, and where does chain-of-thought
  fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 520
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:12:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “model‑graded”*: a system that uses a language model to score responses automatically.  
- *Target use*: educational assessment, coding tasks, or open‑ended writing?  
- *Desired properties*: fairness, interpretability, low bias, and scalability.  
Assume the evaluator has access to the same prompts and answer texts, plus any additional context (e.g., rubric items).

**2️⃣ Adopt a layered framework**  
1. **Domain‑level criteria** – e.g., accuracy, completeness, creativity.  
2. **Behavioral indicators** – concrete observable features for each criterion (e.g., “provides correct formula” vs. “mentions related concept”).  
3. **Scoring scale** – numeric or ordinal mapping to the rubric items.  
4. **Calibration signals** – exemplars, anchor points, and inter‑rater agreement metrics.

**3️⃣ Step‑by‑step reasoning toward a robust rubric**  
- *Map learning objectives → criteria.*  
- *Define each criterion in plain language; avoid jargon that may bias the model.*  
- *Create exemplar responses for each score level to serve as calibration anchors.*  
- *Write prompts that ask the model to first enumerate relevant indicators (chain‑of‑thought) and then assign a score.*  
- *Iteratively test on a validation set, compute reliability (Cronbach’s alpha), and adjust wording or scale.*  

**4️⃣ Avoid common traps**  
- **Overly vague criteria** → leads to inconsistent scoring.  
- **Implicit bias in language** → e.g., “creative” may be gendered.  
- **Chain‑of‑thought too long** → model hallucination; keep it concise and grounded.  
- **Ignoring calibration** → no anchor points, so scores drift over time.

**5️⃣ Sanity‑check & communicate clearly**  
- Run the rubric on a held‑out set and compare model scores to human graders (compute MAE, ICC).  
- Present the rubric as a table: Criterion | Indicator | Score 1–5.  
- Highlight where chain‑of‑thought is invoked: “Explain why you assigned this score before giving the final number.”  

By iterating through these steps and keeping calibration front‑and‑center, you build a transparent, reproducible rubric that leverages chain‑of‑thought to improve model reasoning while maintaining fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
