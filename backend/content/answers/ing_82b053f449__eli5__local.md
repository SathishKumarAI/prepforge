---
qid: ing_82b053f449__eli5__local
question: 'Explain: Infrastructure cost — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 235
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:58-05:00'
sources: []
---

Think of your data as a library book you want to read everywhere in a city. **Data replication** is like making copies of that book so people can borrow it from any branch without waiting for the original.

There are two main types:

1. **Synchronous (real‑time) replication** – every time you write a page, the copy in another branch updates at the same instant. It guarantees all branches see the exact same version, but the first branch has to wait for the network to finish sending the change. Use this when accuracy matters more than speed—like bank account balances.

2. **Asynchronous (delayed) replication** – changes are sent later, so the original can continue working without delay. The copies may lag a few seconds or minutes. This is fine for things like news feeds or product catalogs where a slight delay doesn’t hurt.

In practice, big systems mix both: critical data stays synchronous across a few key servers; less urgent logs and analytics data travel asynchronously to many storage nodes, keeping the whole city of services fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
