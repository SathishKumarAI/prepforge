---
qid: ing_aa8230ce37__eli5__local
question: GLM-4.5 is a "hybrid reasoning" model with a thinking mode and a direct-response
  mode. How do you build one model that does both, and what are the training and serving
  implications?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 250
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:08:06-05:00'
sources: []
---

Imagine a chef who can both **plan** a menu (thinking) and **serve** it immediately (direct‑response).  
A “hybrid reasoning” language model works the same way: it has one part that **thinks**—it drafts ideas, checks facts, and plans an answer in several steps; another part that **serves**—it takes a finished plan and turns it into the final sentence you see.

To build such a model, developers first train a *reasoning backbone* on long, step‑by‑step tasks (like solving math problems or explaining science). They then add a *response head* that learns to translate those internal steps into concise language. During training, both heads share the same hidden layers so the thinking informs the answering.

When serving, the system can choose either mode:  
• **Thinking first** gives deeper, more accurate answers but takes longer and uses more compute.  
• **Direct‑response** is fast but may miss nuance.  

Balancing them lets a single model adapt to user needs—just as a chef might sketch a menu before plating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
