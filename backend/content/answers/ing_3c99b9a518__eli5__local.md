---
qid: ing_3c99b9a518__eli5__local
question: 'Explain: Cfg0 Block — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 284
total_tokens: 450
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:11:57-05:00'
sources: []
---

Imagine a city’s subway system where each train car carries a specific type of passenger: some cars carry commuters, others cargo, and some are express cars that skip stops. In the **Cfg0 block** of an annotated ResNet‑50, the “train” is your input image features, and the block is one stop in the network.

A Cfg0 block has two parallel tracks:

1. **Shortcut (identity) track** – the train simply passes through unchanged, keeping its original shape.
2. **Residual track** – the train goes through a small station where it picks up extra information: first a 1×1 “compression” car (reduces dimensions), then a 3×3 “mixing” car (combines nearby pixels), and finally another 1×1 “expansion” car (restores dimensions).

After the mixing, the two tracks merge by adding their passengers together. This addition is like bringing the commuters back into the main flow while still carrying the extra cargo from the residual track.

The Cfg0 block’s role is to let the network learn **only what changes** are needed at that layer, while keeping the original information intact—just as a subway system can add express service without disrupting regular trains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
