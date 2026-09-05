---
qid: ing_cfa5ca3cf2__eli5__local
question: 'Explain: Design the scheduler for a continuous-batching inference engine.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 270
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:07-05:00'
sources: []
---

Imagine a café that serves coffee in a single, huge pot instead of individual cups. Every customer who orders a cup joins a line and waits until the pot is ready to pour. The barista (the scheduler) decides when to start brewing based on how many people are waiting and how long each cup will take. If too few people are in line, the pot stays empty; if too many rush in at once, the pot overflows.

In a continuous‑batching inference engine, each “customer” is an incoming request for AI predictions. The scheduler’s job is to group (batch) these requests together, deciding how long to wait before running them through the model (the pot). It balances two goals:  
1. **Throughput** – batch many requests so the GPU does lots of work at once.  
2. **Latency** – keep waiting time short so each request gets answered quickly.

The scheduler watches the queue, counts how many pending requests, estimates the cost of processing them together, and then triggers a batch when it thinks the trade‑off is best. Just like the barista who pours coffee only when enough cups are ready to serve efficiently without making customers wait too long.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
