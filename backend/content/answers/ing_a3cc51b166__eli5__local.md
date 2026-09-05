---
qid: ing_a3cc51b166__eli5__local
question: 'Explain: AP (Availability and Partition Tolerance)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 188
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:58-05:00'
sources: []
---

Think of a library that can be reached from two different streets—one street is always open, the other sometimes closes because of traffic jams. **AP (Availability + Partition Tolerance)** means the library keeps serving books no matter which street is blocked, but if the road between the library and one branch gets cut off, the two parts must temporarily disagree on what’s in stock.

**Availability**: every request to borrow a book always gets an answer—“yes, here it is” or “sorry, out of stock.”  
**Partition Tolerance**: even when the connection (the road) between branches breaks, each branch can still operate independently.

In short, AP guarantees that the system stays up and responds quickly, but during a network split the data may not be perfectly synchronized across all parts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
