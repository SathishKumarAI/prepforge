---
qid: vq_8abcca7064__eli5__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 203
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:19:12-05:00'
sources: []
---

Think of a broadcast variable like a recipe card you hand out to every kitchen in a huge hotel chain.  
When the chef (your program) needs the same set of ingredients—say, a list of holiday specials—the recipe card is sent once from the head office and stored on each kitchen’s counter.  
Each kitchen can then read the card quickly without having to ask the head office again or copy the whole list over the network every time they cook a dish.

**Broadcast variable**: In distributed computing (like Spark), it’s a read‑only piece of data that you send once from the driver program to all worker nodes.  
Each worker keeps its own local copy, so accessing it is fast and doesn’t duplicate traffic.  
Because it can’t be changed by workers, you avoid race conditions and keep memory usage predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
