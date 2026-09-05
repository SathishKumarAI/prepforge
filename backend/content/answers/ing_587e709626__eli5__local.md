---
qid: ing_587e709626__eli5__local
question: 'Q: LangChain is often criticized for being "too bloated." How do you architect
  a lean production system with it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 237
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:43-05:00'
sources: []
---

Think of LangChain like a giant toolbox that can build almost any kind of AI “house.” The criticism of being “too bloated” is simply saying the toolbox has many extra tools you never use. To keep your production system lean, treat it like a well‑organized workshop:

1. **Choose only the needed tools** – Pick just the LangChain modules that match your task (e.g., retrieval, prompt templating, or specific LLM wrappers).  
2. **Remove unused parts** – Disable or uninstall the rest of the package so they don’t sit in memory or slow down startup.  
3. **Bundle what you keep** – Build a small Docker image containing only those modules and their minimal dependencies.  
4. **Keep a single entry point** – Write one small script that imports those modules, sets up your chain, and runs it; avoid importing the whole LangChain library in every file.

By trimming the toolbox to only what you actually use, you keep the system fast, easy to maintain, and ready for production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
