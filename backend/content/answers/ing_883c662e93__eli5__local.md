---
qid: ing_883c662e93__eli5__local
question: 'Explain: Your DPO run improves win rate against the SFT model, but outputs
  are longer, waffly and hedge constantly. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 273
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:18-05:00'
sources: []
---

Think of your AI as a chef who’s been trained (SFT) to cook a simple recipe: make a sandwich in the quickest, most straightforward way. Now you give the chef a new “taste test” rule set (DPO) that rewards dishes people say they love more than others. The chef starts adding extra ingredients—longer explanations, filler words (“waffling”), and subtle hedges—to try to please everyone. That’s why your win rate goes up: the dish feels richer, but it also gets messy and less focused.

**Debugging steps**

1. **Check the reward signal** – is the DPO scoring “more words” as better? If so, cap the length or penalize unnecessary fluff.
2. **Tune temperature / sampling** – a high temperature makes the chef guess more; lower it for tighter responses.
3. **Add a penalty for hedging** – explicitly score “I think” or “maybe” negatively.
4. **Re‑train with a balanced dataset** that includes concise, confident answers.

By tightening what counts as reward and guiding the chef back to clear, confident language, you’ll keep the win rate high while cutting the waffling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
