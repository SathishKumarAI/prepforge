---
qid: ing_e8e5c58d43__think__local
question: 'Explain: ​ Evaluation types — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 478
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:23:51-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- The user wants an *explanation* of “Evaluation types – Evaluation concepts – Docs by LangChain.”  
- Assume they’re familiar with basic AI terminology but not the specifics of LangChain’s evaluation framework.  
- Aim to give a concise, high‑level overview that references the official docs without reproducing them verbatim.

**2️⃣ Adopt a mental model**  
Use a *taxonomy + workflow* lens:  
- **Taxonomy:** classify evaluation methods (e.g., unit tests, sanity checks, prompt‑specific metrics, chain‑level metrics).  
- **Workflow:** describe how LangChain organizes these into “evaluation concepts” and the documentation hierarchy.

**3️⃣ Step‑by‑step reasoning**  
1. Briefly recap what LangChain is and its focus on building LLM chains.  
2. Introduce the *Evaluation* sub‑module: purpose (measure correctness, safety, efficiency).  
3. List the core evaluation types:  
   - **Unit tests** for individual components.  
   - **Sanity checks** to catch obvious failures.  
   - **Prompt‑level metrics** (BLEU, ROUGE, etc.).  
   - **Chain‑level metrics** (end‑to‑end QA accuracy).  
4. Explain how these are documented: each type has its own page with API usage, examples, and best practices.  
5. Mention the “Evaluation concepts” section that ties them together—conceptual guides, design patterns, and troubleshooting.

**4️⃣ Avoid common traps**  
- Don’t assume every user knows what “prompt‑level” vs. “chain‑level” means; define clearly.  
- Resist overloading with code snippets unless asked; keep it conceptual.  
- Be careful not to misstate the hierarchy of docs—clarify that concepts sit above specific evaluation type pages.

**5️⃣ Sanity‑check & communicate**  
- Re‑read the answer, ensuring each bullet logically follows the previous one.  
- Verify terminology matches LangChain’s official docs (e.g., “EvaluationConcepts” vs. “EvaluationTypes”).  
- End with a quick recap or a prompt for follow‑up questions to keep the conversation open.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
