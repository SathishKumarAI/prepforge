---
qid: ing_5a46ba6bed__star__local
question: 'Q: When would you choose local or on-device inference over a cloud API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 306
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:16-05:00'
sources: []
---

**Situation:** While leading the mobile app for a health‑tech startup, we had to integrate real‑time speech‑to‑text for our voice‑command feature. The target market included users in rural areas with unreliable cellular coverage and strict privacy regulations.

**Task:** I needed to decide whether to offload inference to our cloud API or run it on the device, balancing latency, data security, and battery life.

**Action:** First, I profiled the model’s size (≈30 MB) and runtime (~120 ms per utterance on an iPhone 14). I benchmarked network round‑trip times in low‑bandwidth zones—often >800 ms—and measured privacy risk by simulating data leaks. After evaluating trade‑offs, I chose on‑device inference using Core ML with quantization to 8‑bit weights, which cut the model size to 12 MB and preserved accuracy within 1.5%. I also implemented a hybrid fallback: if local inference failed or the battery fell below 20%, it would queue requests for cloud processing.

**Result:** Latency dropped from ~1 s to under 200 ms, user satisfaction scores rose by 18% in field tests, and we avoided any regulatory concerns over transmitting sensitive audio. I learned that a rigorous profiling‑first approach lets you make data‑driven decisions between local and cloud inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
