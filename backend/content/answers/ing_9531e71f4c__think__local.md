---
qid: ing_9531e71f4c__think__local
question: 'Explain: By Constraint — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 400
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:57:50-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “constraint” means (data size, compute budget, latency, interpretability, etc.).  
   - Assume the user has a clear task (classification, regression) and wants to pick a model that satisfies those constraints.  

**2️⃣ Adopt a systematic framework**  
   - Use the *Constraint–Capability* matrix: list each constraint on one axis, model capabilities (accuracy, speed, memory, explainability) on the other.  
   - For each candidate model, score how well it meets every constraint.  

**3️⃣ Step‑by‑step reasoning**  
   1. Enumerate all feasible models (e.g., linear, tree‑based, shallow NN, transformer).  
   2. For each model, gather empirical or theoretical estimates of required resources and performance.  
   3. Rank models by weighted sum of constraint satisfaction (weights reflect user priorities).  
   4. Perform a quick sanity check: does the top choice still satisfy hard limits?  

**4️⃣ Avoid common traps**  
   - Don’t ignore *hard* constraints that can’t be relaxed (e.g., maximum latency).  
   - Beware of “best‑in‑class” bias; a slightly less accurate model may be preferable if it meets constraints.  
   - Don’t overlook the cost of hyper‑parameter tuning—some models require extensive search to reach their peak.  

**5️⃣ Sanity‑check & communicate**  
   - Re‑examine the top candidate against each constraint; confirm no hidden assumptions (e.g., data distribution).  
   - Summarize: “Given your 1 s inference budget and limited GPU, a distilled BERT or MobileNet would be optimal.”  

Follow this loop for any AI model selection under constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
