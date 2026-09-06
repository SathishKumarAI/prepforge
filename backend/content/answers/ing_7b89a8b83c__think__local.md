---
qid: ing_7b89a8b83c__think__local
question: 'Explain: Vague Instructions — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 388
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:14:03-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *Ask what “vague” means in this context:* Is it missing constraints, ambiguous language, or unclear goals? Assume we’re dealing with a developer writing prompts for an LLM or a team designing AI‑driven workflows.  

**2️⃣ Adopt a design‑thinking framework**  
   *Use the “Problem–Solution–Outcome” loop.*  
   - **Problem:** Vague instructions create uncertainty and waste.  
   - **Solution:** Tighten scope, add constraints, provide examples.  
   - **Outcome:** More reliable outputs, faster iteration.  

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the missing elements (e.g., target audience, desired format).  
   2. Translate them into concrete prompt tokens or API parameters.  
   3. Validate with a quick test run; adjust if the model still “hallucinates.”  

**4️⃣ Common traps to avoid**  
   - *Over‑specifying:* making prompts so rigid that creativity is stifled.  
   - *Assuming the model knows context:* always provide necessary background.  
   - *Ignoring evaluation metrics:* vague goals make it hard to measure success.  

**5️⃣ Sanity‑check & communicate**  
   - Run a sanity test: “If I change X, what happens?”  
   - Summarize in plain language: “Clear prompts give predictable, high‑quality results; vagueness leads to wasted compute and confusion.”  

By following this loop—clarify → model → stepwise fix → avoid traps → verify—you can systematically eliminate vague instruction anti‑patterns in AI workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
