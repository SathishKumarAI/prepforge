---
qid: ing_1fa14693a6__think__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 598
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:46:53-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- The user wants a *guide* on “Week 2: Code‑Based Evals” for AI evaluation, specifically mentioning **Ai Evals**, **Langwatch**, and **Langfuse**.  
- Assume the audience is familiar with basic prompt‑engineering concepts but new to structured evaluation pipelines.  
- We’ll treat each tool as a distinct component of an end‑to‑end workflow.

---

**2️⃣ Adopt a “pipeline” mental model**

1. **Data ingestion** → 2. **Prompt generation** → 3. **Model inference** → 4. **Evaluation scoring** → 5. **Result analysis & reporting**  
   - Map Ai Evals to step 4, Langwatch to monitoring/analysis (step 5), and Langfuse to orchestration (steps 1–3).

---

**3️⃣ Step‑by‑step reasoning**

- **Step 1: Prepare the code‑based prompt set.** Explain how to structure test cases in JSON/YAML that include input, expected output, and optional metadata.  
- **Step 2: Use Langfuse to launch the evaluation job.** Detail API calls or CLI commands, including batch size, temperature settings, and concurrency controls.  
- **Step 3: Ai Evals computes metrics automatically.** List supported metrics (BLEU, ROUGE, accuracy) and show how custom functions can be plugged in via a `scoring.py`.  
- **Step 4: Langwatch visualizes results.** Illustrate dashboards for trend analysis, drift detection, and A/B comparison across model versions.  
- **Step 5: Iterate.** Emphasize feedback loops: refine prompts → re‑run Ai Evals → observe changes in Langwatch charts.

---

**4️⃣ Common pitfalls to avoid**

- *Hardcoding* prompt templates instead of parameterizing them.  
- Forgetting to register custom scoring functions before the run.  
- Ignoring rate limits on Langfuse API calls when scaling batches.  
- Misinterpreting aggregate metrics without context (e.g., high BLEU but low user‑study satisfaction).

---

**5️⃣ Sanity checks & verbal communication**

- **Check consistency:** Verify that every prompt has a corresponding expected output; missing pairs break Ai Evals.  
- **Cross‑validate metrics:** Run a subset manually to confirm Ai Evals outputs match hand calculations.  
- **Explain aloud:** “We first batch the prompts, then Langfuse dispatches them to the LLM, Ai Evals scores each response, and finally Langwatch aggregates the scores into actionable dashboards.”  

By following this structured reasoning, the guide will be clear, reproducible, and ready for deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
