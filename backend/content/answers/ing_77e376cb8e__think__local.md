---
qid: ing_77e376cb8e__think__local
question: 'Explain: Run custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 661
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:55:29-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * The user wants a “complete guide” for running a custom evaluator in the AI‑Evals framework, specifically with the **LangWatch** and **Langfuse** integrations.  
   * Assume they’re familiar with basic Python, have an OpenAI key, and can install packages locally or via Docker.

**2️⃣ Mental model / framework**  
   - **Workflow diagram**: (1) Prepare dataset → (2) Define evaluator function → (3) Configure LangWatch/Langfuse connectors → (4) Run evals → (5) Inspect results.  
   - Map each step to the corresponding API calls or CLI commands.

**3️⃣ Step‑by‑step reasoning**  

| # | Action | What to do | Why it matters |
|---|--------|------------|----------------|
| 1 | Install dependencies (`pip install ai-evals langwatch langfuse`) | Get the right libraries. | Without them you can’t run anything. |
| 2 | Set environment variables (`OPENAI_API_KEY`, `LANGWATCH_TOKEN`, `LANGFUSE_PROJECT_ID`, etc.) | Authenticates each service. | Needed for API calls and logging. |
| 3 | Prepare a dataset (JSONL or CSV) with prompts & expected answers | The data source for evaluation. | Determines what the evaluator will score. |
| 4 | Write a custom evaluator function (`def my_evaluator(response, ground_truth): …`) | Implements domain‑specific logic. | Allows metrics beyond simple accuracy. |
| 5 | Register evaluator in ai-evals config (YAML or Python dict) | Tells evals to use your function. | The engine needs to know which evaluator to invoke. |
| 6 | Create a LangWatch session & link Langfuse traces | Enables real‑time monitoring and trace correlation. | Gives visibility into each evaluation run. |
| 7 | Run the eval (`ai-evals run my_evaluator.yaml`) or via API | Executes the whole pipeline. | Produces metrics, logs, and trace data. |
| 8 | Inspect results in Langfuse UI & export CSV | Verify correctness & share with stakeholders. | Ensures transparency of outcomes. |

**4️⃣ Common pitfalls to avoid**  
   * Forgetting to set `OPENAI_API_KEY` → authentication errors.  
   * Using the wrong dataset format → parsing failures.  
   * Mis‑matching evaluator signature (e.g., missing parameters).  
   * Not linking LangWatch/Langfuse → lost traceability.

**5️⃣ Sanity‑check & communicate**  
   - Run a tiny test set locally to confirm the evaluator returns expected scores.  
   - Use `ai-evals --verbose` to see intermediate logs.  
   - Share the config file and sample dataset so others can replicate your run.  

By following this structured path—install, configure, prepare data, write/evaluate, integrate monitoring, execute, & review—you’ll have a robust custom evaluator pipeline that leverages LangWatch for live insight and Langfuse for traceability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
