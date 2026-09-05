---
qid: ing_b0dc8b46a5__star__local
question: 'Explain: Text normalisation is where TTS quality actually dies in production.
  Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 345
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:27-05:00'
sources: []
---

**Situation** – In my last role at a voice‑assist platform, we rolled out a new multilingual TTS engine for our mobile app. Early user feedback showed that the English “Hey Siri” prompt sounded robotic and unnatural, especially when users typed informal commands.

**Task** – I had to investigate why the synthesized speech quality dropped in production and deliver a solution that kept latency under 200 ms while improving intelligibility by at least 20 %.

**Action** – First, I compared the pre‑processing pipeline used in our dev environment with the one deployed on the CDN edge nodes. I discovered that the normalization step was stripping out punctuation, emojis, and user‑generated slang without applying language‑specific rules. I rewrote the normalizer to:  
1) Use ICU’s `BreakIterator` for sentence boundaries;  
2) Apply a rule‑based mapping for common contractions (e.g., “gonna” → “going to”) and emoji expansion (😊 → “smiling face”);  
3) Cache normalized strings in Redis to avoid recomputation.  
I then ran A/B tests on 10,000 utterances, measuring MOS scores.

**Result** – The new normalizer lifted the average MOS from 2.8 to 4.1, a 46 % improvement, and reduced average latency by 15 ms. I also documented best‑practice guidelines for future TTS releases, which cut onboarding time for new languages by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
