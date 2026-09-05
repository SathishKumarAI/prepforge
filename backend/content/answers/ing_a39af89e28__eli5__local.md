---
qid: ing_a39af89e28__eli5__local
question: 'Explain: Self-Hosting with Docker Compose (for Local Development & Testing)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 238
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:23-05:00'
sources: []
---

Imagine your computer is a tiny kitchen where you want to bake a special cake (your AI app). Instead of buying every ingredient separately, you use **Docker Compose**—a recipe book that lists all the “bake‑in‑one” containers (ingredients) and how they mix together.  
*Self‑hosting* means you keep this kitchen in your own home instead of ordering from a bakery (cloud service). With Docker Compose, you write a single file (`docker-compose.yml`) telling each container what it should do: one holds the AI model, another stores data, and maybe a third shows results on a web page. When you run `docker compose up`, all containers start together like ingredients pouring into the same pot, sharing a private kitchen network so they can talk safely to each other.  
This lets you develop, tweak, or test your AI locally—no internet required—before deciding if you want to move it to a larger, shared kitchen (the cloud).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
