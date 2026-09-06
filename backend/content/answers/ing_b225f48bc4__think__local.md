---
qid: ing_b225f48bc4__think__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Comprehensive Study
  Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 473
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:46:13-05:00'
sources: []
---

**1️⃣ Clarify the task & set assumptions**  
- Identify what “iterating on your judge prompt” means in the context of AI evaluations (i.e., refining prompts that assess model outputs).  
- Assume we’re dealing with a typical evaluation pipeline: generate samples → apply a judge prompt → score or classify.  
- Note any constraints: limited compute, need for reproducibility, and potential bias in human-like judgments.

**2️⃣ Adopt a mental framework**  
Use the *prompt‑engineering cycle* as a scaffold:  
1. Define goal (what quality to measure).  
2. Draft initial prompt.  
3. Test on a validation set.  
4. Analyze errors & biases.  
5. Refine → repeat.

Overlay this with an *evaluation rubric*: clarity, precision, coverage of edge cases, and alignment with desired metrics.

**3️⃣ Step‑by‑step reasoning**  
- **Step A:** Start by listing the evaluation criteria (e.g., factual accuracy, relevance).  
- **Step B:** Write a baseline judge prompt that explicitly asks for each criterion.  
- **Step C:** Run a small pilot, collect human feedback or automated metrics.  
- **Step D:** Identify systematic misinterpretations (e.g., ambiguous wording).  
- **Step E:** Iterate: tweak phrasing, add examples, constrain response format.  
- **Step F:** Re‑evaluate to confirm improvement.

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: adding too many clauses makes the prompt hard to parse.  
- *Hidden bias*: using domain‑specific jargon that favors certain model outputs.  
- *Ignoring reproducibility*: not versioning prompts or test sets.  
- *Skipping validation*: assuming one run proves efficacy.

**5️⃣ Sanity‑check & communicate**  
- Compare scores before/after iterations; look for statistically significant changes.  
- Present a side‑by‑side table of prompt versions, key metrics, and observed errors.  
- Explain each change in plain language so stakeholders see the rationale, not just the numbers.  

By following this structured, iterative approach you’ll steadily converge on a robust judge prompt that reliably evaluates your AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
