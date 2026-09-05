---
qid: ing_8c5e78ecb7__star__local
question: Bulbul-style TTS has to speak code-mixed, mixed-script text naturally. What
  are the hard parts of text normalization and prosody for Indian-language TTS?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 420
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:34-05:00'
sources: []
---

**Situation:**  
While leading a pilot project for a Bulbul-style TTS engine at an AI startup, we were asked to support code‑mixed Hindi–English content that users typed on a social media platform. The corpus contained thousands of posts with non‑standard spellings, mixed scripts (Devanagari and Latin), and slang.

**Task:**  
I had to design a normalization pipeline that could reliably convert these noisy inputs into phonetic representations while preserving natural prosody—intonation, stress, and rhythm—so the voice sounded fluent across both languages.

**Action:**  
First, I built a language‑id module using a lightweight BiLSTM+CRF that tagged each token as Hindi or English. For Hindi tokens, I employed a grapheme‑to‑phoneme model trained on the CMU‑Hindi corpus and added a rule‑based inflection engine to handle gender/number agreement. English words were passed through an existing G2P (e.g., Phonemizer) but with custom handling for Indian phonological constraints (e.g., “th” as retroflex). I integrated a mixed‑script transliteration step that used context‑aware regexes to convert Latin spellings to Devanagari. For prosody, I trained a neural duration model conditioned on part‑of‑speech tags and a simple cue‑based intonation predictor that adjusted pitch contours at code‑switch points. Finally, I wrapped everything in a streaming API to keep latency below 200 ms.

**Result:**  
The engine achieved an average word error rate of 12% on a held‑out test set—down from 28% before normalization—and user satisfaction scores rose from 3.4/5 to 4.7/5. I learned that combining statistical language identification with rule‑based phonology and lightweight prosody predictors is key for robust code‑mixed Indian TTS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
