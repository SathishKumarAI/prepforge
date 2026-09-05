---
qid: ing_03338bc402__eli5__local
question: 'Explain: Ryan Drapeau — How we built it: Stripe Radar | Stripe Dot Dev
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 281
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:40:03-05:00'
sources: []
---

Imagine your bank account is a bustling city and every transaction is a tiny delivery truck that passes through the main highway (your ledger). Some trucks are harmless, others carry contraband. Stripe Radar is like an intelligent traffic‑control tower that watches each truck in real time, deciding whether to let it pass or send it for inspection.

The tower uses a “machine‑learning model” – think of it as a seasoned traffic officer who has seen millions of past trucks and knows patterns: speed, destination, driver’s history. When a new truck arrives, the officer instantly evaluates its features (amount, country, device) and assigns a risk score. If the score is low, the truck moves on; if high, Stripe flags it for review or blocks it.

Building this tower required:
1. **Collecting data** – millions of past transactions with labels “fraud” or “legit”.
2. **Training the model** – feeding those labeled examples into an algorithm that learns the subtle differences.
3. **Deploying and monitoring** – running the model live, continuously updating it as new patterns emerge.

So Stripe Radar is simply a smart traffic‑control system that keeps your financial city safe by learning from history and acting instantly on every incoming transaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
