---
qid: ing_0ba4749cda__think__local
question: 'Explain: Register custom metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 578
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:29:01-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
- *What is being asked?*  The user wants a step‑by‑step explanation of how to “register custom metrics” for AI evaluations, specifically within the **Langwatch** framework that uses **Langfuse** as its evaluation backend.  
- *Assumptions:*  
  - The reader has basic familiarity with Langfuse and Langwatch.  
  - They know what a metric is (e.g., BLEU, ROUGE) but not how to plug one into the system.  

**2️⃣ Adopt a mental model**  
Think of the process as a pipeline: **Data → Evaluation Service (Langfuse) → Metric Registration → Results**.  
- *Components:* input data (prompts & responses), Langfuse evaluation job, metric definition file or API call, storage/visualisation layer in Langwatch.  

**3️⃣ Step‑by‑step reasoning**  
1. **Identify the metric’s mathematical definition** – e.g., “Exact Match” returns 1 if strings are identical, else 0.  
2. **Create a Python function** that implements it and adheres to Langfuse’s expected signature (takes `ground_truth` & `prediction`).  
3. **Register the function in Langfuse**: either via the UI under “Custom Metrics” or programmatically using the SDK (`langfuse.register_metric(name, fn)`).  
4. **Attach the metric to an evaluation job** when you create it (specify the metric name).  
5. **Run the evaluation** – Langfuse calls your function for each example and stores the score.  
6. **Visualise in Langwatch** – ensure the dashboard is configured to pull the custom metric field from the results store.  

**4️⃣ Common traps to avoid**  
- *Wrong signature:* forgetting to return a numeric value or returning `None`.  
- *Name collisions:* using a metric name that already exists in Langfuse.  
- *Performance issues:* metrics that are computationally heavy can slow down the evaluation pipeline.  
- *Data type mismatches:* passing JSON objects instead of plain strings can break your function.  

**5️⃣ Sanity‑check & communicate**  
- Run a unit test with a small dataset to confirm scores match manual calculations.  
- Verify that Langwatch’s UI actually displays the new metric column.  
- Explain the flow verbally: “We define the metric in Python, register it with Langfuse, then reference it when creating an evaluation job so Langwatch can pull and display the results.”  

This structured approach lets anyone reproduce custom‑metric registration in Langwatch/Langfuse without getting lost in implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
