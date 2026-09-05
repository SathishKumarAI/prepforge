---
qid: ing_e8f206f473__eli5__local
question: 'Explain: Tracing ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 235
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:08-05:00'
sources: []
---

Imagine you’re baking a giant, multi‑layered cake (your Generative AI model) and you want to know exactly how each ingredient was added, when it baked, and how much heat the oven used. **Tracing** in MLflow 3 is that recipe notebook: it records every step of your training “baking” process on Databricks running on AWS.

- **Trace** = a detailed log of one run (like a single cake batch).  
- **Step** = a specific action, e.g., loading data, feeding it to the model, adjusting parameters.  
- **Span** = a block of time for that step, showing start and finish times.  

With tracing you can replay the entire baking process, spot where a “spike” in loss happened (maybe too much sugar), and compare two batches side‑by‑side. It gives you clear, human‑readable breadcrumbs so every experiment on Databricks is transparent and reproducible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
