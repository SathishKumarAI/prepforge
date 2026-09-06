---
qid: ing_196b650a82__think__local
question: How many examples? — Few Shot And Icl
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 480
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:24:39-05:00'
sources: []
---

### 1️⃣ Clarify the question & set assumptions  
- **What exactly is “how many examples?”** Are we asking about the *optimal* number of demonstrations, a rule‑of‑thumb, or the upper limit before performance degrades?  
- Assume we’re speaking to an audience that knows what few‑shot learning and ICL are but wants practical guidance.  

### 2️⃣ Adopt a framework for reasoning  
- **Data‑efficiency spectrum**: from zero‑shot → few‑shot (1–10) → many‑shot (>20).  
- **Task complexity axis**: simple classification vs. multi‑step reasoning.  
- **Model capacity axis**: small models vs. LLMs like GPT‑4.

### 3️⃣ Step‑by‑step logic toward an answer  
1. *Start with empirical evidence*: most papers report good results with 5–10 examples for classification, 3–7 for generation.  
2. *Consider diminishing returns*: beyond ~20 examples the marginal gain shrinks and prompt size balloons.  
3. *Factor in model size*: larger LLMs can handle longer contexts, so they tolerate more examples; small models hit token limits quickly.  
4. *Account for task type*: complex reasoning may need 10–15 demos to capture pattern nuances.  

### 4️⃣ Avoid common pitfalls  
- **Confusing “examples” with “tokens”**: remember each example can be many tokens, so prompt length matters.  
- **Assuming more is always better**: ignore over‑fitting to the few demonstrations.  
- **Ignoring task variance**: a one‑size‑fits‑all rule rarely holds.

### 5️⃣ Sanity‑check & communicate clearly  
- Re‑examine the numbers against recent benchmarks (e.g., GPT‑4 few‑shot on MMLU).  
- Summarize succinctly: “For most LLMs, 3–7 demos work well; increase to ~10 for harder tasks, but don’t exceed token limits.”  

This structured approach ensures you give a reasoned, evidence‑based answer that’s easy to adapt and explain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
