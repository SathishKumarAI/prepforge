---
qid: ing_94f90d4ddc__star__local
question: 'Explain: Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 392
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:46-05:00'
sources: []
---

**Situation** – At my last company we were building an internal knowledge‑base chatbot for the sales team. The existing FAQ bot was brittle: it returned the same canned response no matter what the user asked, and our metrics showed a 45 % drop in first‑contact resolution after a recent product update.

**Task** – I was tasked with redesigning the bot so that it could understand intent from free‑text queries and pull contextually relevant information from multiple internal documents while keeping latency under 1.5 seconds for live calls.

**Action** – I chose Microsoft’s Semantic Kernel as the foundation because it lets you combine LLM prompts with function calling and external knowledge sources. I first created a “document retriever” plug‑in that wrapped Azure Cognitive Search, indexing all product spec PDFs and release notes. Then I built an “intent‑extractor” plug‑in that used GPT‑4 to parse user input into high‑level intents (e.g., “pricing details,” “feature comparison”). The kernel orchestrated these plugs: it retrieved the top 3 documents for a given intent, generated a concise answer with context from those docs, and exposed an API endpoint in FastAPI. I also added telemetry via Application Insights to track prompt tokens and response times.

**Result** – After deployment, first‑contact resolution rose from 55 % to 78 %, and average response latency stayed below 1.2 seconds. The project also cut engineering time for future updates by 30 % because the kernel’s plug‑in architecture made it easy to swap in new LLMs or add more data sources. I learned that a well‑structured semantic framework can dramatically improve both user experience and developer productivity when building AI‑powered assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
