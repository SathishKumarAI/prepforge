---
qid: ing_b0dc8b46a5__eli5__local
question: 'Explain: Text normalisation is where TTS quality actually dies in production.
  Walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 247
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:17:24-05:00'
sources: []
---

Imagine a chef who wants to cook a perfect soup (the spoken output). The recipe book (the raw text) is written in many different styles: some lines use abbreviations, others mix uppercase and lowercase, and a few even contain emojis or strange punctuation. Before the chef can start cooking, she must clean up every line—remove the “@”, replace “Dr.” with “Doctor,” convert “3” to “three”—so that the ingredients are clear and consistent.

Text normalisation is exactly that cleaning step for TTS (text‑to‑speech). It takes raw written input and turns it into a uniform, predictable form: all abbreviations expanded, numbers spelled out, symbols removed or replaced. If this step is sloppy—if the chef leaves an “@” in the soup—the machine will read it awkwardly, stutter, or mispronounce words, making the voice sound robotic or broken. In production, a poor normalisation pipeline becomes the biggest bottleneck for speech quality, because even the best neural voices can only work with clean, well‑formatted text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
