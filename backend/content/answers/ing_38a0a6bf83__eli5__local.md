---
qid: ing_38a0a6bf83__eli5__local
question: 'Explain: For PMs/QAs: Your Error Analysis Checklist'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 294
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:54-05:00'
sources: []
---

Imagine a chef who wants every dish to taste perfect.  
Before the restaurant opens, she checks each recipe step—ingredients, timing, plating—to find where something might go wrong.  
That’s what an **Error Analysis Checklist** does for PMs and QAs working on AI products.

1. **Identify the problem** – What user complaint or metric drop is the issue?  
2. **Collect evidence** – Gather logs, screenshots, or sample inputs that reproduce it.  
3. **Isolate the cause** – Narrow down whether it’s data bias, model logic, integration bugs, or user‑side misuse.  
4. **Reproduce consistently** – Build a small test case that always triggers the error so you can debug reliably.  
5. **Measure impact** – Estimate how many users are affected and how severe the outcome is (e.g., wrong recommendation vs. crash).  
6. **Prioritize fixes** – Rank by urgency, cost of change, and risk.  
7. **Validate the fix** – Run regression tests and monitor after deployment to confirm it no longer happens.

Just like a chef tweaks a recipe until every bite delights, this checklist lets you systematically find, understand, and eliminate AI errors—making sure your product serves happy users every time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
