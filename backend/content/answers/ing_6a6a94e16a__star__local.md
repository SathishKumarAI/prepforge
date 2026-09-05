---
qid: ing_6a6a94e16a__star__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 341
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:19-05:00'
sources: []
---

**Situation:**  
In my last role at a voice‑assist startup, we were rolling out a real‑time TTS feature for a live customer support chatbot. The requirement was to deliver spoken responses within 300 ms of the user’s query while keeping CPU usage below 20 % on our edge devices.

**Task:**  
I had to design a streaming pipeline that broke incoming text into manageable chunks, fed them to the neural TTS model, and buffered audio output without audible glitches.

**Action:**  
I first tokenized the input using a SentencePiece model with a max sentence length of 50 tokens; this kept GPU memory usage predictable. Each chunk was passed through a Tacotron‑2 encoder that produced mel spectrograms in parallel threads. For the jitter buffer, I calculated the average synthesis latency (≈120 ms) and added a safety margin equal to one standard deviation (≈30 ms), capping the buffer at 160 ms. The buffer fed into a WaveRNN vocoder with a real‑time factor of 0.8, allowing the decoder to keep up while smoothing frame drops.

**Result:**  
The final system achieved an end‑to‑end latency of 250 ms on average, dropped CPU usage from 35 % to 18 %, and reduced audible glitches by 90 %. I learned that a dynamic buffer—tuned to model latency statistics rather than fixed size—offers the best trade‑off between responsiveness and stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
