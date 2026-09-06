---
qid: ing_93e73e9c62__think__local
question: 'Explain: What Information to Capture — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 514
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:52:21-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- *What is being asked?* The user wants a “complete guide” on **which information to capture during AI evaluations**, specifically referencing **Langwatch** and **Langfuse**.  
- *Assumptions:* They are familiar with LLM evaluation basics, want practical details (metrics, logs, contexts), and expect concrete examples from Langwatch/Langfuse.

**2️⃣ Mental model / framework**  
Use the classic *Evaluation Lifecycle*:
1. **Define Objectives** → What do we want to measure?  
2. **Design Evaluation** → Select metrics, tasks, datasets.  
3. **Collect Data** → Capture logs, context, user interactions.  
4. **Analyze & Iterate** → Aggregate, interpret, refine.  
Map each stage to Langwatch/Langfuse capabilities (e.g., Langwatch for real‑time monitoring, Langfuse for structured evaluation data).

**3️⃣ Step‑by‑step reasoning toward the answer**  
- Start with *Objectives*: safety, usefulness, bias, latency.  
- For each objective list *key metrics* (BLEU, ROUGE, F1, latency, cost).  
- Explain *what to capture*: raw prompt, system messages, context length, token counts, timestamps, user feedback.  
- Show how Langwatch logs real‑time request/response cycles, and how Langfuse stores evaluation runs with tags and annotations.  
- Provide a sample schema (JSON) that both tools can ingest.  
- Discuss *post‑processing*: aggregation in Langfuse dashboards, anomaly detection via Langwatch alerts.

**4️⃣ Common traps to avoid**  
- Forgetting to capture **context length** → misinterprets performance drops.  
- Ignoring **system messages** → misses instruction influence.  
- Overloading logs with unnecessary data → slows storage and analysis.  
- Assuming one tool covers everything → need both for live monitoring (Langwatch) and structured evaluation (Langfuse).

**5️⃣ Sanity‑check & communicate clearly**  
- Verify each metric maps to an actionable insight.  
- Use a concise table: Metric | Why it matters | Where captured (Langwatch/Langfuse).  
- End with best‑practice checklist for teams.  

Follow this structure and the answer will be thorough, practical, and aligned with Langwatch/Langfuse usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
