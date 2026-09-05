---
qid: ing_f177960f07__eli5__local
question: Why do we obsess over P99 latency rather than the average, and what causes
  tail latency in LLM serving specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 257
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:56:56-05:00'
sources: []
---

Think of a library that answers questions.  
If you ask *“What’s the tallest building?”* and most librarians give an answer in two seconds, but one librarian takes ten minutes, your experience feels slow—especially when you’re on a tight schedule. The **average** (mean) time hides that long‑tail delay; the **P99 latency** is the 99th percentile, telling us how bad the worst 1 % of requests can get. In AI, we care about P99 because users expect quick responses; even a few slow calls can ruin trust.

In large‑language‑model (LLM) serving, tail latency comes from several “slow‑downs” that rarely happen but are severe when they do:  
* **Sparse data bursts** – a rare input forces the model to look up many tokens.  
* **Hardware hiccups** – a GPU stall or memory page fault momentarily stalls computation.  
* **Queue backlogs** – a sudden spike of requests pushes some behind others.

These rare events make P99 higher than the mean, so we focus on them to keep every user’s experience snappy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
