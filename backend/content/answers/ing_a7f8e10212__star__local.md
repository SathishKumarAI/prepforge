---
qid: ing_a7f8e10212__star__local
question: 'Explain: The Decoder Side — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 320
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:57-05:00'
sources: []
---

**Situation** – In my last role as an NLP engineer at a fintech startup, we were building a real‑time transaction fraud detector that needed to predict the next action in a user’s sequence of transactions. The training data consisted of long sequences (up to 256 tokens) and our model had to generate a probability distribution over possible next actions.

**Task** – I was tasked with designing the decoder part of a Transformer so it could produce accurate next‑token predictions while keeping latency under 50 ms per inference on a single GPU.

**Action** – First, I implemented the standard masked multi‑head self‑attention to ensure each position only attended to earlier positions. I added a cross‑attention layer that fed in encoder outputs (the user’s transaction history) so the decoder could condition its predictions on context. To keep it fast, I pruned attention heads after profiling and replaced GELU with ReLU where the impact on accuracy was negligible. Finally, I used beam search (beam width = 4) during inference to balance speed and quality.

**Result** – The updated decoder reduced per‑inference latency from 120 ms to 35 ms while improving next‑token accuracy by 3.8 percentage points (from 82.1% to 85.9%). I learned that careful profiling and selective pruning can make a theoretically heavy model production‑ready without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
