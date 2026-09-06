---
qid: ing_0f667bba12__think__local
question: 'Explain: ​ LLM-as-judge — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 466
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:44:02-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   *What is “LLM‑as‑Judge” and how does it differ from standard LLM inference?*  
   Assume the reader knows what an LLM is, but not the evaluation pipeline that LangChain proposes for using an LLM to score or judge other model outputs.  

**2️⃣ Adopt a mental model: “evaluation as a loop of prompts → scores → aggregation”**  
   Treat the process like any supervised metric: you feed the LLM a *prompt* (the task + candidate answer), receive a *raw judgment* (numeric or textual), and then *aggregate* across examples.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Prompt design** – craft a prompt that asks the LLM to rate or compare outputs on specific criteria.  
   2. **Response parsing** – extract the numeric score or qualitative verdict from the LLM’s text.  
   3. **Normalization** – map raw responses onto a common scale (e.g., 0–5).  
   4. **Aggregation** – compute mean, median, or weighted scores across a validation set.  
   5. **Calibration & bias checks** – compare against human labels or known benchmarks to spot systematic over‑/under‑scoring.  

**4️⃣ Common traps to avoid**  
   * Relying on the LLM’s own confidence as a metric (confusion with calibration).  
   * Ignoring prompt variability; small wording changes can flip scores.  
   * Treating a single run as ground truth—always average over many runs or seeds.  

**5️⃣ Sanity‑check & verbalize**  
   • Verify that higher scores correlate with better human judgments on a held‑out subset.  
   • Explain the pipeline aloud: “We ask the LLM to judge each answer, parse its numeric reply, normalize it, then average across many examples—this gives us an objective metric for model quality.”  

Follow this checklist whenever you need to explain or implement an LLM‑as‑Judge evaluation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
