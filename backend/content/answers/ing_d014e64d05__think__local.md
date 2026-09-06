---
qid: ing_d014e64d05__think__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 461
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:42:06-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
- *What is “iterating on your judge prompt”?* It’s the process of refining a prompt that evaluates model outputs.  
- *Assumptions:* The reader knows basic prompt‑engineering, has access to an eval platform (Langwatch/Langfuse), and wants a step‑by‑step guide.

**2️⃣ Choose a mental model**  
Use the **“Prompt → Output → Judge” loop**:  
1. Prompt → Model → Raw output  
2. Judge prompt → Judge model → Score/feedback  
Iterate by feeding the judge’s feedback back into the prompt design.

**3️⃣ Step‑by‑step reasoning**  
a. **Define evaluation criteria** (accuracy, safety, style).  
b. **Write an initial judge prompt** that asks the judge model to rate or flag each criterion.  
c. **Run a batch of samples**, collect scores and comments.  
d. **Analyze patterns**: where are scores low? Are prompts ambiguous?  
e. **Refine wording** (add examples, adjust temperature).  
f. **Repeat** until stability/desired metrics are reached.

Use Langwatch/Langfuse dashboards to track metric trends, visualize drift, and log prompt versions for reproducibility.

**4️⃣ Common traps to avoid**  
- *Over‑prompting:* too many instructions confuse the judge model.  
- *Circular feedback:* using the same model for both generation & judging can bias results.  
- *Ignoring data leakage:* test set outputs shouldn’t leak into training of the judge.  
- *Neglecting version control:* without a log, you lose what worked.

**5️⃣ Sanity‑check & communicate**  
- Run a sanity test: give the judge a known “good” and “bad” output to see if it scores correctly.  
- Summarize changes in a change‑log table (prompt text → metric shift).  
- Present findings in a slide deck or markdown report so stakeholders can review iterations.

Follow this cycle until your judge prompt consistently yields reliable, actionable scores—then you’ve mastered the iterative refinement process!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
