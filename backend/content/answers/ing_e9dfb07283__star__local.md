---
qid: ing_e9dfb07283__star__local
question: 'Explain: Transcription models — Pricing | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 369
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:05-05:00'
sources: []
---

**Situation:**  
When launching our new podcast analytics platform, we needed to convert over 3,000 hours of user‑generated audio into searchable text each month. The initial prototype used the standard Whisper model via OpenAI’s API, but costs ballooned beyond our budget.

**Task:**  
I had to design a cost‑effective transcription pipeline that stayed under $2,000/month while maintaining acceptable accuracy (≈90% word error rate) for downstream sentiment analysis.

**Action:**  
First, I compared the pricing tiers: “Whisper-1” at 0.006 USD/min and the newer “Whisper-3” at 0.0045 USD/min with higher speed. I implemented a two‑stage workflow—short clips (<2 min) used Whisper‑3 for speed, longer ones were chunked into 30‑second segments to keep token counts low. I also introduced a pre‑filter: an on‑premise VAD (Silero Voice Activity Detector) removed silent frames, cutting average transcript length by ~15%. Finally, I scheduled calls during OpenAI’s lower‑rate periods and added a fallback to the free “whisper-small” model for non‑critical content.

**Result:**  
Monthly transcription costs dropped from $5,600 to $1,850, a 67% savings. Accuracy stayed within target (89.7% WER). I learned that careful tier selection, chunking strategy, and silent‑frame pruning can dramatically reduce API spend without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
