---
qid: ing_358af54580__eli5__local
question: 'Explain: Context Window Management for Long-Running Agents: Strategies
  and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 289
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:30-05:00'
sources: []
---

Imagine a long‑running robot that must remember everything it learns while it works—like a librarian who keeps adding new books to a shelf but can only hold so many at once.  
**Context Window** is the shelf space: the portion of past information the agent can “see” when making decisions.  

* **Sliding window** – the librarian discards the oldest book whenever a new one arrives, keeping the most recent knowledge fresh. It’s simple and fast but loses early lessons that might still be useful.  
* **Hierarchical summarization** – every few books are condensed into a short “summary book.” The robot keeps both the current shelf and these summaries, trading some detail for longer memory.  
* **Selective retention** – the librarian tags important books (e.g., rare topics) to keep permanently. This uses more storage but preserves critical knowledge.

Each strategy balances *memory size*, *speed of access*, and *quality of past information*. A sliding window is quick but forgetful; summarization expands reach at the cost of nuance; selective retention keeps key facts but needs extra space and decision rules. The right mix depends on how long the agent must remember and how precise its future actions need to be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
