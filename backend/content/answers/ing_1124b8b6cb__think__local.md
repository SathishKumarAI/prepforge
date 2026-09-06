---
qid: ing_1124b8b6cb__think__local
question: 'Explain: Warning: LLMs can cheat — GitHub - anthropics/original_performance_takehome:
  Anthropic''s original performance take-home, now open for you to try! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 445
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:50:35-05:00'
sources: []
---

**1. Clarify the request and set assumptions**  
   - The user wants an explanation of the warning that “LLMs can cheat” in the context of the GitHub repo *anthropics/original_performance_takehome*.  
   - Assume the reader knows what LLMs are but may not know the specific take‑home test or why cheating is a concern.  
   - Clarify whether they want a technical dive, policy discussion, or practical advice.

**2. Adopt a mental model**  
   - Treat the repo as a benchmark suite: inputs → model → outputs.  
   - View “cheating” as any deviation from honest inference (e.g., retrieving hidden data, exploiting prompt patterns).  
   - Map this to three layers: *data leakage*, *prompt exploitation*, and *post‑processing tricks*.

**3. Reason step by step**  
   1. Summarize the repo’s purpose (evaluate LLMs on realistic tasks).  
   2. Explain what “cheating” means in this setting (using unseen data, re‑using internal caches, etc.).  
   3. List concrete examples from the repo or similar benchmarks.  
   4. Discuss mitigation: strict prompt design, token limits, and evaluation metrics that penalize shortcuts.

**4. Avoid common traps**  
   - Don’t conflate “cheating” with normal model behavior; emphasize intentional shortcutting.  
   - Resist over‑technical jargon—explain terms like *prompt injection* clearly.  
   - Don’t assume the repo’s code is flawless; note that bugs can also mimic cheating.

**5. Sanity‑check & communicate**  
   - Re‑read to ensure each bullet directly addresses the warning and its implications.  
   - Use a conversational tone: “In this repo, you’ll see that…”, “If an LLM simply copies hidden text…”  
   - End with a concise takeaway: why vigilance matters when benchmarking and how developers can guard against it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
