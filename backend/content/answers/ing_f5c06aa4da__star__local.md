---
qid: ing_f5c06aa4da__star__local
question: 'Q: Cascaded pipeline or speech-to-speech: how do you choose?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 392
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:39:50-05:00'
sources: []
---

**Situation**  
In mid‑2023 my team at a consumer audio startup was tasked with launching a real‑time voice translation feature for our smart speaker. The product spec demanded end‑to‑end latency below 300 ms and 95%+ intelligibility in noisy environments.

**Task**  
I had to decide whether to build a cascaded pipeline—ASR → MT → TTS—or a direct speech‑to‑speech (S2S) transformer model, balancing latency, accuracy, and development effort.

**Action**  
First, I benchmarked open‑source ASR models on our device’s ARM Cortex‑A55. Whisper‑Tiny gave 0.7 s inference but high word error rate (WER ≈ 28%) in background noise. Switching to a lightweight QuartzNet lowered WER to 18% and cut latency to 180 ms. I then paired this with an LSTM‑based MT module, achieving BLEU = 32 on our test set, and finally used Tacotron‑2 + WaveGlow for TTS, adding only 60 ms.  
For the S2S baseline, I fine‑tuned a 1B parameter Speech-Transformer on our dataset; it reached WER ≈ 20% but required 500 ms inference due to its larger encoder/decoder stacks. I ran a cost‑benefit analysis: the cascaded stack used fewer GPU hours during training and offered modular rollback points.

**Result**  
The cascaded pipeline delivered 270 ms total latency, 18% WER, and BLEU 32—meeting specs with 30% less compute than S2S. I learned that early profiling on target hardware is critical; a modular approach often yields faster time‑to‑market while still meeting performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
