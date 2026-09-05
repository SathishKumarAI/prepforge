---
qid: ing_464b00924c__think__local
question: 'Explain: Step 2: Plan Before You Code — AI Coding Workflow - by Neo Kim
  and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 385
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:10:07-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- The user wants an explanation of *Step 2: Plan Before You Code* from a specific AI coding workflow article.  
- Assume they’re familiar with basic AI concepts but need a clear, concise walkthrough of this planning phase.

**2. Mental model / framework**  
Use the classic “Plan → Code → Test” cycle, but tailor it to AI:  
- *Problem definition* (what you want to solve)  
- *Data & resources assessment* (datasets, compute, libraries)  
- *Model strategy selection* (architecture, loss, metrics)  
- *Experiment design* (splits, baselines, reproducibility)

**3. Reason step‑by‑step**  
1. Restate the purpose of planning: avoid wasted experiments and ensure reproducibility.  
2. Break down each sub‑step from the article, mapping it onto the framework above.  
   - Define objectives & success criteria.  
   - Gather data sources and check quality/size.  
   - Choose a baseline model and set hyperparameter ranges.  
   - Draft an experiment tracking plan (e.g., MLflow).  
3. Highlight how these choices influence downstream coding: clearer code, fewer iterations.

**4. Common traps to avoid**  
- Skipping objective definition → endless “just try something.”  
- Overlooking data biases → models that look good but fail in practice.  
- Ignoring reproducibility → impossible to debug or share results.

**5. Sanity‑check & communicate clearly**  
- Verify each planning element logically leads to a coding decision.  
- Use bullet points and short sentences for readability.  
- End with a quick “why this matters” note: solid planning saves time, resources, and improves model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
