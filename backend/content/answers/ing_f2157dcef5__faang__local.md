---
qid: ing_f2157dcef5__faang__local
question: 'Explain: Realtime and audio generation models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 509
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:24-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of how OpenAI prices real‑time (streaming) vs. non‑real‑time audio generation using the ChatGPT/Audio APIs, and what factors influence cost. I’ll assume you’re interested in *text‑to‑speech* (TTS) and *audio‑to‑text* (STT) endpoints for a production system.

**Approach**  
1. List the two pricing models: per‑token or per‑second.  
2. Show the rate differences between “standard” and “streaming” modes.  
3. Explain how audio length, sampling rate, and model choice affect billable units.  
4. Mention volume discounts and enterprise plans.

**Depth**  
| Endpoint | Unit | Rate (USD) | Notes |
|----------|------|------------|-------|
| **Audio Generation (TTS)** | Per second of output | $0.02 / sec (standard) | 24 kHz, 16‑bit, mono. |
| | Streaming | $0.015 / sec | Lower latency; same audio quality. |
| **Speech Recognition (STT)** | Per second of input | $0.006 / sec | Standard model. |
| | Streaming | $0.0045 / sec | Real‑time transcription, lower cost per sec. |

*Key trade‑offs*:  
- **Latency vs. Cost**: Streaming saves ~25% but requires a persistent WebSocket and handles chunked input.  
- **Model size**: Larger models (e.g., GPT‑4o for multimodal) are pricier; TTS uses smaller acoustic models, so price stays constant.

**Edge Cases**  
- Very short audio (< 1 sec) still incurs the per‑second charge—no minimum threshold.  
- Batch processing can reduce overhead but loses real‑time benefits.  
- Inconsistent network may cause reconnection costs if using streaming.

**Optimize & Communicate**  
To keep spend low: batch non‑critical requests, use the “streaming” endpoint for live apps, and cache frequently requested voices. I’d explain to stakeholders that while per‑second pricing is straightforward, the real savings come from choosing the right mode based on latency needs and batching strategy. This balances cost with user experience in a scalable way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
