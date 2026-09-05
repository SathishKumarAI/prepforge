---
qid: ing_b34f8e1389__eli5__local
question: 'Explain: llms.txt — Pydantic AI | Pydantic Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 247
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:21:14-05:00'
sources: []
---

Think of **`llms.txt`** as the “menu” that a smart kitchen (Pydantic AI) shows you before you order a dish.  
In this menu, each line lists an available **LLM (Large Language Model)**—the different “cooks” the kitchen can bring to your table: GPT‑4, Claude, Gemini, etc. The file tells the software which models it can talk to and how to address them (their names or URLs).  

Just like a waiter needs to know every chef in the kitchen to take an order correctly, Pydantic AI reads `llms.txt` so it knows which LLMs it can request help from when you ask a question. If a model is missing from the menu, the system will simply say “I don’t have that cook on hand.”  

So, `llms.txt` is a simple list of available language‑model “cooks,” making sure your AI kitchen knows exactly who’s in the pantry before it starts cooking answers for you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
