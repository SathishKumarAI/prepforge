---
qid: ing_2bef999354__eli5__local
question: 'Explain: Latency Budget — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 239
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:45:06-05:00'
sources: []
---

Imagine you’re ordering pizza in a hurry. You have **a strict time limit** (the *latency budget*)—you must get the pizza hot and fresh before your friends arrive. To meet that deadline, you split the job into two parts:  

1. **Fast, small‑scale search** – like calling a local pizzeria that can prepare a quick slice in seconds.  
2. **Thorough, larger‑scale search** – like checking several chain restaurants online to find the best deal and quality.

In AI “Hybrid Search,” the system first does the fast lookup (quick but maybe rough answers). If that’s not enough, it immediately dives into the deeper, slower search (more data, higher accuracy). The whole process must finish before the **latency budget** expires; otherwise, the user gets no answer.  

So, *latency budget* is the maximum time you allow for a response, and *hybrid search* balances speed and depth to stay within that limit while still giving useful results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
