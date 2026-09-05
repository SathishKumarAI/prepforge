---
qid: ing_bdfae487d0__eli5__local
question: A conversation runs past the context window. What do you keep, and how do
  you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 235
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:13-05:00'
sources: []
---

Imagine a long story that’s too big for a single picture book page (the “context window”). When the book runs out of space, we have to choose which parts of the tale to keep on the page so the reader can still understand what’s happening.

**What do you keep?**  
We usually keep the most recent sentences—those that directly influence the next line of dialogue. They’re like the last few chapters that set up the current scene. If something older is crucial (a character’s name or a past event that’s referenced again), we replace an older, less relevant sentence with it.

**How do you decide?**  
The system scores each sentence by how “useful” it is for predicting what comes next: sentences that mention key actors, describe actions, or set up questions get higher scores. It then keeps the highest‑scoring ones until the window is full. Think of it as a librarian who reads the story and keeps only the pages that will help the reader follow along without losing context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
