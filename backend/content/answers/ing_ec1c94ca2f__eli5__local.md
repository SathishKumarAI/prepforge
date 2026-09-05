---
qid: ing_ec1c94ca2f__eli5__local
question: 'Q: How do you prevent memory poisoning when agents can write to their own
  long-term store?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 220
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:25-05:00'
sources: []
---

Imagine each agent as a gardener who owns a personal garden (its long‑term store). If the gardener lets any plant grow unchecked, weeds—bad or corrupted data—can take over the whole plot; that’s “memory poisoning.”  
To keep the garden healthy, the gardener follows three simple rules:

1. **Plant only what you know is safe** – before adding new information, the agent checks it against trusted sources (like a list of verified seeds).  
2. **Mark the borders** – the agent keeps a clear boundary between its own “seed bank” and other agents’ data, so one gardener’s weeds can’t spill into another’s soil.  
3. **Regular pruning** – the agent routinely reviews what it has stored and removes any plant that looks suspicious or out of place.

By treating long‑term memory like a carefully tended garden—only planting vetted seeds, keeping borders clear, and pruning regularly—you prevent harmful data from taking root and corrupting the whole system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
