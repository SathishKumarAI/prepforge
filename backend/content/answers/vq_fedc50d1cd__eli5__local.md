---
qid: vq_fedc50d1cd__eli5__local
question: What are the three different types of Error Handling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 234
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:02-05:00'
sources: []
---

Think of a data pipeline as a busy highway that carries cars (data) from one town to another. When something goes wrong—like a roadblock or broken bridge—the driver has three common options:

1. **Retry** – The driver turns back and tries the same stretch again, hoping the obstacle clears. In code, we simply re‑run the failed step after a short pause.

2. **Fallback** – If the main route is still blocked, the driver takes an alternate path that may be slower or less efficient but still reaches the destination. In data terms, we switch to a backup source or use cached values.

3. **Fail‑Fast** – When the problem is too severe (e.g., a missing critical file), the driver stops immediately and alerts the crew instead of risking more damage. The pipeline throws an error and halts, so the issue can be fixed before continuing.

These three tactics let data engineers keep traffic flowing smoothly while handling unexpected roadblocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
