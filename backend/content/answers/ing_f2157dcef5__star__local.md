---
qid: ing_f2157dcef5__star__local
question: 'Explain: Realtime and audio generation models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:22-05:00'
sources: []
---

**Situation:** In mid‑2024 I was leading the launch of an AI‑driven podcast editing tool at my startup. The product promised to automatically transcribe, summarize and generate voiceovers in real time for content creators who needed quick turnaround.

**Task:** My goal was to integrate OpenAI’s Realtime and Audio Generation models while keeping our monthly bill under $5 k and ensuring latency stayed below 300 ms per user session.

**Action:** I first benchmarked the `gpt-4o-realtime-preview` model with a 30‑second clip, noting a cost of roughly $0.0003 per token. To reduce spend, I implemented a two‑stage pipeline: a lightweight Whisper transcription (cost $0.006/ minute) followed by selective prompts to the Realtime API only for segments flagged as “high‑impact” by an in‑house classifier. For audio generation I used `audio-1-preview` with a 5 second voice prompt, limiting calls to no more than three per episode. I also introduced server‑side caching of repeated prompts and leveraged OpenAI’s pricing tiers (e.g., higher volume discounts) to negotiate a custom rate.

**Result:** The final integration cut the average cost per episode from $12 to $4.50, kept latency under 250 ms, and enabled us to serve over 3,000 users in the first month with zero outages. I learned that thoughtful prompt engineering combined with staged API calls can dramatically control costs while preserving real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
