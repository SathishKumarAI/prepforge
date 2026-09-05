---
qid: ing_74451498a7__eli5__local
question: 'Explain: Write a parser that consumes a streamed LLM response (server-sent
  events) arriving in arbitrary network chunks and yields complete JSON events.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 254
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:03-05:00'
sources: []
---

Imagine you’re listening to a radio show that drops tiny sound clips (the “network chunks”) and you want to hear only the full songs (the complete JSON events). A **parser** is like a smart listener that keeps track of what it has heard so far, knows when a song starts and ends, and then hands the whole song over for you to enjoy.

In this case, the radio show is an LLM sending data as **server‑sent events**—small pieces of text that arrive one after another. The parser collects these pieces in order, watches for the JSON “opening” (`{`) and “closing” (`}`) marks, and only when it has a balanced pair does it output the whole JSON object. It can handle any chunk size, even if a single piece contains half of a sentence or just a few words, because it keeps an internal buffer until the next closing bracket arrives. The result is a clean stream of complete, parseable JSON events ready for further processing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
