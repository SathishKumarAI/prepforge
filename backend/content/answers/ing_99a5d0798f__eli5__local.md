---
qid: ing_99a5d0798f__eli5__local
question: 'Explain: Greedy Decoding — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 167
total_tokens: 324
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:24-05:00'
sources: []
---

Imagine you’re reading a mystery novel where every time you get to a cliff‑hanger, you instantly pick the next sentence that feels most exciting and continue from there—never looking back or considering other possibilities. That’s what greedy decoding does in AI language models: at each step it chooses the word with the highest probability (the “most likely” choice) and sticks with it for good. The inference pipeline is simply the set of steps the computer follows to generate that text: first it loads the trained model, then it feeds an initial prompt, repeatedly applies greedy decoding, and finally outputs the finished sentence or paragraph. Like a single‑path story, greedy decoding is fast but can miss richer, more surprising endings because it never explores alternatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
