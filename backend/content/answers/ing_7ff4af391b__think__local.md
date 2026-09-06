---
qid: ing_7ff4af391b__think__local
question: 'Explain: Relevant source and signals — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 432
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:27:29-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify that the user wants a *conceptual explanation* of “Relevant source and signals” within Neo Kim & Bouchard’s AI Coding Workflow, not a literal quote.  
- Assume they’re familiar with basic ML pipelines but not this specific framework.  

**2️⃣ Adopt a mental‑model map**  
- Treat the workflow as a **pipeline**:  
  1. *Data acquisition* → 2. *Feature engineering* → 3. *Model training* → 4. *Deployment*.  
- Within each stage, “relevant source” = where data/knowledge originates; “signals” = measurable indicators that guide decisions.  

**3️⃣ Step‑by‑step reasoning**  
1. **Source**: In the first phase it’s the raw datasets (public corpora, proprietary logs).  
2. **Signal**: Statistics like class imbalance, missing‑value rates, or domain‑specific heuristics that signal which preprocessing steps are needed.  
3. Repeat for each pipeline step—e.g., during feature engineering, a source is a pre‑trained embedding; the signal might be cosine similarity thresholds to decide inclusion.  

**4️⃣ Avoid common pitfalls**  
- Don’t conflate *source* with *model*.  
- Beware of over‑interpreting “signal” as a single metric; it’s often a composite (confidence, drift).  
- Resist simplifying: signals guide but don’t dictate the entire workflow.  

**5️⃣ Sanity‑check & verbalize**  
- Test the explanation by mapping a concrete example (e.g., sentiment analysis) onto the stages.  
- Speak it out loud as “The source is X; the signal is Y that tells us to do Z.”  
- Verify that each statement aligns with the original paper’s terminology.  

Follow this scaffold whenever dissecting any workflow component—clarify, model, reason, guard against traps, and confirm by example.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
