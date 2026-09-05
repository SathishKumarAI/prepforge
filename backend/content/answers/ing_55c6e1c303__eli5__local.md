---
qid: ing_55c6e1c303__eli5__local
question: 'Explain: Sliding Windows — Context Window Management for Long-Running Agents:
  Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 365
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:47-05:00'
sources: []
---

Imagine you’re writing a long story on a notebook that only has 10 lined pages, but the story could be hundreds of pages long. You can’t keep every page in front of you forever, so you decide to read and write in *sliding windows*—you look at a chunk of 10 pages, then move the window one page forward, discarding the oldest page and adding the new one.

In machine‑learning agents that run for a long time (like chatbots or robotic helpers), they need to remember past actions and observations. A **context window** is the part of their memory that’s actively used at any moment—just like your 10-page notebook. When the agent has more history than fits, it *slides* the window: old information is dropped while new data enters.  

**Strategies**

1. **Fixed‑size sliding** – keep a constant number of recent steps; simple but may lose important early facts.
2. **Dynamic resizing** – grow the window when needed (e.g., when a question requires earlier context) and shrink it to save resources.
3. **Chunked summarization** – instead of dropping raw data, replace older chunks with a short summary that fits in the window.

**Trade‑offs**

- *Memory vs. accuracy*: Larger windows remember more but cost more compute and memory.
- *Speed vs. completeness*: Smaller windows are faster but may miss crucial context, leading to mistakes.
- *Complexity*: Dynamic or summarized windows add code complexity but can keep performance high for long tasks.

Just as a writer chooses how many pages to keep in view while drafting, an agent must decide how wide its sliding window should be to balance remembering enough and staying efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
