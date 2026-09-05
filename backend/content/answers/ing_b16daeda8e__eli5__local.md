---
qid: ing_b16daeda8e__eli5__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 188
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:18:10-05:00'
sources: []
---

**Durability in an Instagram‑style system**

Think of a photo you upload as a postcard you hand to the post office. *Durability* means that once the post office (your storage layer) accepts it, the postcard will never disappear or get lost even if power goes out or a server crashes. In practice, your design must write each image and its metadata to at least two independent places—like sending copies to both a primary data center and a backup one. You also use a “write‑ahead log” (a safety net) so that if the system dies mid‑save, you can replay the last actions and finish the upload.

So, durability guarantees: **once Instagram says “saved,” the picture is forever stored safely, no matter what happens next.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
