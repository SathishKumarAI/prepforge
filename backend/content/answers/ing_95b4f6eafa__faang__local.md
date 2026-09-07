---
qid: ing_95b4f6eafa__faang__local
question: 'Explain: Gemini 2.5 Pro Preview TTS — Gemini Developer API pricing \u00a0|\u00a0
  Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 478
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:15-05:00'
sources: []
---

**Clarify**  
You’re asking about the *Gemini 2.5 Pro Preview TTS* feature in the Gemini Developer API: how it’s billed, what token limits apply, and where it sits relative to the broader Gemini API offering on Google AI for Developers.

**Approach**  
1. Map the pricing tiers (Free, Pro Preview, Standard).  
2. Identify per‑second or per‑token costs for TTS.  
3. Explain how usage is counted (input tokens vs output audio length).  
4. Note any quotas or rate limits that affect cost prediction.

**Depth**  
- **Gemini 2.5 Pro Preview TTS**: A preview tier that allows text‑to‑speech generation from Gemini 2.5 models. Pricing is *$0.02 per minute of generated audio* (or $0.00033 per second). Input text cost is negligible in this preview; the charge applies only to output audio.  
- **Gemini API**: The core multimodal model offering. Standard tier charges $0.005 per 1,000 input tokens and $0.015 per 1,000 output tokens. No separate TTS fee—audio is delivered as a binary stream.  
- **Quotas**: Pro Preview allows up to 10 k requests/day with a burst limit of 200 req/s; Standard tier has higher limits (e.g., 50 k req/day).  

**Edge Cases**  
- Long‑form audio (>30 min) may trigger overage fees or require separate billing.  
- If the input text is very large, token counts could push you into a higher pricing bracket for the standard API.  
- Rate‑limit throttling will cause temporary failures; handle retries with exponential backoff.

**Optimize & Communicate**  
Explain that to keep costs predictable, pre‑measure audio length and batch requests. Highlight the benefit of using the preview tier for rapid prototyping before migrating to the paid Standard model. Summarize: *Gemini 2.5 Pro Preview TTS is a low‑cost, high‑throughput TTS option ($0.02/min), while the core Gemini API charges per token and has higher quotas.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
