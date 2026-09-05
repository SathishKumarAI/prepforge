---
qid: ing_a6bbb910f6__eli5__local
question: 'Explain: Problems with R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014
  Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 262
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:20-05:00'
sources: []
---

Imagine you’re trying to find a specific book in a huge library.  
With **R‑CNN** you first hand‑pick every shelf (region proposal), then scan each shelf separately with a slow scanner (the CNN). That’s accurate but painfully slow – you can’t check all shelves at once.

**Fast R‑CNN** keeps the same idea but does the heavy lifting only once for the whole page, then looks up the shelves. It’s faster but still needs the hand‑picked shelves first.

**Faster R‑CNN** learns to point out promising shelves on its own (region proposal network), so you no longer need a human to mark them. Still, it first draws many boxes and then classifies each one, which can be wasteful if most are empty.

**YOLO** is like a super‑fast librarian who reads the entire page in one glance, instantly telling where every book is. It’s much quicker but sometimes misses tiny books or mislabels similar titles because it only looks once.

So the evolution moves from slow, step‑by‑step scanning to a single, fast sweep—each trade‑off between speed and precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
