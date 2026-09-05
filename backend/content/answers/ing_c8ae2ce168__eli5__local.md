---
qid: ing_c8ae2ce168__eli5__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 258
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:27-05:00'
sources: []
---

Imagine your AI is a busy bakery that must serve 100 customers each second during its busiest hour. Each customer brings a “recipe” (the ~2 000‑word input) and expects a finished cake of about 300 words.

**Step 1 – How many cakes can one oven bake at once?**  
A single GPU is like an oven that can finish one cake in, say, 0.5 seconds. That means it can handle roughly 2 cakes per second.  

**Step 2 – How many ovens do you need?**  
To keep up with 100 cakes every second, divide the demand by the oven’s capacity: 100 ÷ 2 = **50 GPUs**.

**Step 3 – Add a safety margin.**  
Real‑world ovens sometimes stall or need restocking. Add 10–20 % extra GPUs (≈5–10 more) to stay smooth during spikes or maintenance.

So, for your peak of 100 requests/sec with those token sizes, you’d plan **about 55–60 GPUs** in the fleet—just enough to keep every customer served on time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
