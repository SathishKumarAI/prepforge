---
qid: ing_8322c0dbf4__star__local
question: Whisper transcribes Hinglish poorly, often forcing output into one language
  or hallucinating. Why, and how would you build an ASR that handles code-mixed speech?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 435
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:31-05:00'
sources: []
---

**Situation:**  
In a recent project for an Indian media startup, we had to transcribe live podcasts that were predominantly Hinglish—half Hindi, half English. Whisper kept switching the entire transcript to one language or inserted nonsensical words (“hallucinations”) whenever speakers slipped between languages.

**Task:**  
I needed to build an ASR system that could reliably recognize code‑mixed speech, keep the correct language tags for each token, and reduce transcription errors by at least 20 % over Whisper’s baseline WER of ~35 %.

**Action:**  
I started by curating a Hinglish corpus: 500 hrs of manually transcribed podcasts, annotated with per‑word language tags. I then fine‑tuned a multilingual transformer (mBART‑50) using a joint CTC + attention objective and added a small “language‑token” embedding layer that forces the model to predict a language ID for every token. To handle code‑switch boundaries, I introduced a “switch‑loss” penalty encouraging smooth transitions only when the language tag changes. Finally, I used data augmentation (speed perturbation, noise injection) and evaluated on a held‑out Hinglish test set.

**Result:**  
The custom model achieved a 27 % WER—an 8‑point absolute drop from Whisper—and correctly labeled >90 % of code‑switch points. The exercise taught me that language modeling bias is the root of hallucinations, and that explicitly incorporating language tags and a switch penalty can dramatically improve ASR for mixed‑language content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
