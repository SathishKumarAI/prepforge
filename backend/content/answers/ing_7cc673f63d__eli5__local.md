---
qid: ing_7cc673f63d__eli5__local
question: 'Explain: F3: Adapter cache thrash under traffic spike'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 269
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:26-05:00'
sources: []
---

Imagine a library where every book has a small “index card” that tells you where to find it on the shelf. The index cards are kept in a quick‑access drawer (the **adapter cache**) so readers can locate books fast.  

During a normal day, people check out only a few books at a time; the drawer stays neat and the right card is always there.  

Now picture a sudden book fair: dozens of visitors arrive all at once, each asking for different titles. The library staff keeps pulling cards from the drawer, putting them back in random order, and sometimes even dropping one while grabbing another. Because the drawer is getting shuffled so rapidly—**cache thrashing**—the right card isn’t where it should be when someone needs it.  

In an AI system, the “adapter cache” holds pre‑computed pieces of a model that speed up inference. A traffic spike (many users sending requests) forces the system to constantly load and evict these pieces, so the cache keeps changing faster than it can serve requests, leading to delays or failures. The library analogy shows how too much shuffling of quick‑access items hurts performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
