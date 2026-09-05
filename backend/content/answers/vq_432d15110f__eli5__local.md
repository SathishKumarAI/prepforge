---
qid: vq_432d15110f__eli5__local
question: What are generators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 187
total_tokens: 340
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:27-05:00'
sources: []
---

Imagine you’re making a playlist for a long road trip. Instead of loading every song into memory at once, your phone keeps a list of songs but only pulls each track from the cloud when it’s time to play it. That way, you never run out of space and you can keep listening without waiting for everything to download.

In Python, a **generator** is like that playlist. It’s a special kind of function that *yields* one value at a time instead of returning a full list all at once. Each call to the generator gives you the next item, and it remembers where it left off, so it can continue from there later. Because it produces items lazily, generators save memory and let you work with very large or infinite sequences without storing everything in RAM.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
