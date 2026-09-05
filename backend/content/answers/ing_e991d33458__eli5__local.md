---
qid: ing_e991d33458__eli5__local
question: 'Explain: not tested under simulation is the part — \"Testing Distributed
  Systems w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 217
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:45:00-05:00'
sources: []
---

Imagine you’re building a giant LEGO city where each block (a computer) talks to the others over invisible wires. “Testing Distributed Systems” means checking that every block can follow the city’s rules—send messages, handle traffic jams, and recover from broken blocks—without actually dropping them in real water.

A *deterministic simulation* is like a video game where every block’s moves are recorded exactly: if you replay the same start‑up screen, you’ll see the exact same traffic patterns. It guarantees that any bug you find will happen again under the same conditions, just as if you had run it on real hardware.

So “not tested under simulation” means those parts of the city haven’t been run in this repeatable video‑game world yet. They might still work fine, but without a deterministic sandbox we can’t be sure—they’re unverified until we play them back and watch every block behave exactly as expected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
