---
qid: ing_f66215f4b9__eli5__local
question: 'Explain: Medusa & Multi-Token Heads — Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 217
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:04-05:00'
sources: []
---

Think of an AI like a chef in a kitchen who must decide what to serve next.  
The **medusa** is the “master recipe book” that holds all possible dishes (tokens). The chef can’t cook one by one; instead, he asks several sous‑chefs (**multi‑token heads**) to try out different ingredients at once. Each sous‑chef quickly sketches a short menu of five or ten items it thinks will taste good.  
The master recipe book reviews these quick sketches and picks the best‑rated ones. Those chosen snippets are then cooked in full, while the rest are discarded. This way the chef gets a richer meal (more tokens) faster than if he’d tasted each option one by one.

*Token*: a single word or piece of text that the AI predicts.  
*Speculative decoding*: letting many possible next words be guessed quickly and then selecting the best ones to speed up generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
