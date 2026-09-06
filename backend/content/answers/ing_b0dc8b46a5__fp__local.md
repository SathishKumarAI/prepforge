---
qid: ing_b0dc8b46a5__fp__local
question: 'Explain: Text normalisation is where TTS quality actually dies in production.
  Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 409
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:20:17-05:00'
sources: []
---

**Why text‑normalisation can kill a TTS system**

At its core, a TTS engine is an *information‑to‑speech* pipeline: it must map a string of symbols to acoustic trajectories that sound natural and intelligible. The mapping is highly data‑driven; the model learns a statistical correspondence between orthographic tokens (words, punctuation) and prosodic cues (pitch, duration, energy).  

**The problem**  
During training the network sees *clean*, fully‑expanded text: “I have 12 000 kWh of electricity.” In production we feed raw user input—URLs, phone numbers, abbreviations, emojis. If we leave this unprocessed, the model must infer expansions it never saw, which is a *distribution shift*. The acoustic predictions become noisy, prosody collapses, and intelligibility drops.

**Why normalisation is indispensable**  
Normalization is essentially a *feature‑engineering* step that projects raw text onto the distribution seen during training. It replaces numbers with spoken forms (“12 000 kWh” → “twelve thousand kilowatt‑hours”), expands abbreviations, corrects case, and removes non‑speech artifacts. By doing so we preserve the statistical assumptions of the learned model.

**Non‑obvious insight**  
Normalization is *not* merely a preprocessing convenience; it is an implicit regulariser that keeps the input within the manifold the network was trained on. When the normalisation fails (e.g., mis‑expanding “5G” as “five gigahertz” instead of “fifth generation”), the error propagates to prosody, causing *prosodic drift*—the voice suddenly sounds robotic or stilted. Thus, TTS quality hinges on a robust, context‑aware normalisation module that aligns production input with the training distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
