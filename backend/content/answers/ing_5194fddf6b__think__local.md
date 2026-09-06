---
qid: ing_5194fddf6b__think__local
question: 'Explain: Create custom evaluator — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 477
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:24:01-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
- Identify the core concepts: *custom evaluator*, *AI Evals*, *LangWatch*, *Langfuse*.  
- Assume the user wants a practical, step‑by‑step guide that ties together these tools for evaluating language model outputs.  
- Note that “complete guide” implies covering installation, data prep, evaluation logic, and reporting.

**2. Adopt a mental framework**  
1. **Contextualize each component** – what it is and why it matters.  
2. **Pipeline architecture** – data → LangWatch ingestion → custom evaluator (AI Evals) → Langfuse dashboard.  
3. **Implementation layers** – code snippets, config files, API calls, and best‑practice patterns.

**3. Reason through the answer step‑by‑step**  
- Start with prerequisites: Python environment, API keys for LangWatch/Langfuse, AI Evals package.  
- Show how to ingest prompts/results into LangWatch.  
- Build a custom evaluator class that inherits from `ai_evals.Evaluator` (or similar), implementing `evaluate()` logic using Langfuse metrics or external scoring functions.  
- Register the evaluator with LangWatch’s evaluation registry.  
- Run a batch eval, collect results, and push them back to Langfuse for visualization.  
- Provide sample code, config examples, and explain error handling.

**4. Avoid common pitfalls**  
- Mixing up LangWatch vs. Langfuse APIs; keep clear boundaries.  
- Forgetting to normalize scores before pushing to Langfuse.  
- Over‑engineering the evaluator – start simple then iterate.  
- Ignoring rate limits or credential security.

**5. Sanity‑check and verbalize**  
- Run through a quick mental test: “If I had a CSV of prompts/results, can I follow these steps?”  
- Read back each section to ensure it flows logically (setup → ingest → eval → report).  
- Highlight where the user might need extra context (e.g., installing `ai-evals` via pip, setting environment variables).

By following this structured thought process you’ll produce a clear, actionable guide that covers every component from scratch to deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
