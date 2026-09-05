---
qid: ing_04acf9cf01__eli5__local
question: 'Explain: Wrapping Up — Context Window Management for Long-Running Agents:
  Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 260
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:43:00-05:00'
sources: []
---

Imagine a long‑term detective who can only keep a handful of clues in his mind at once—this limited “memory” is the **context window**. When the case stretches over many days (a *long‑running agent*), he must decide which clues to remember, which to set aside, and when to bring fresh evidence into focus.

**Strategies**

1. **Sliding window** – keep only the most recent clues; older ones fade automatically.  
2. **Chunking** – group related clues into a single “summary” so several pieces fit in one slot.  
3. **Selective recall** – store key facts on a notepad (external memory) and pull them back when needed.

**Tradeoffs**

- *Sliding window* is fast but risks losing early‑case context.  
- *Chunking* saves space but may blur details if the summary is too coarse.  
- *External memory* preserves everything, yet retrieving it takes time and can slow the detective’s reasoning.

By mixing these tactics, a long‑running agent balances speed and completeness, just as our detective keeps the case solvable without forgetting crucial evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
