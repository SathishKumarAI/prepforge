---
qid: ing_b67cdccc01__eli5__local
question: 'Two-part coding warm-up: given a stream of user actions, return the k most
  engaged-with items. Then: why might your heap solution be the wrong choice in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 256
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:40-05:00'
sources: []
---

Imagine you’re at a music festival and people are constantly tapping their phones to “like” songs on an app. You want to know, *in real time*, which **k** songs are getting the most likes right now.

A simple way is to keep a tiny list (a *min‑heap*) that always holds the top k songs seen so far. Each new like is compared with the song that has the fewest likes in that list; if it’s higher, you swap it out. This works fast and uses little memory because you only ever store k items.

But in a real festival, thousands of people tap at once, and some songs may get huge bursts of likes in a short span. A heap that updates one like at a time can lag behind—by the time your list catches up, a song that just shot to the top might already be falling out. Also, if many users are liking the same song simultaneously, you’ll need extra logic (like debouncing or batching) that a plain heap doesn’t handle well. So while the heap is great for quick demos, it can miss spikes and become inefficient when scaled up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
