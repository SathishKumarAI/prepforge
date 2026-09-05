---
qid: ing_2cab688142__star__local
question: How does modern TTS work, and what makes speech generation hard in a real-time
  product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 353
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:57:20-05:00'
sources: []
---

**Situation:**  
When I joined the audio team at a fintech startup, we were tasked with adding an “AI‑powered read‑aloud” feature to our mobile app so that users could listen to account statements while commuting. The deadline was tight: two months before the next quarterly release.

**Task:**  
I had to design and ship a real‑time text‑to‑speech (TTS) system that could run on both iOS and Android, deliver natural-sounding voice at 16 kHz, and stay under 200 ms latency per utterance so it felt instant to the user.

**Action:**  
I started by evaluating modern neural TTS pipelines. I chose a two‑stage architecture: a FastSpeech2 encoder that predicts mel‑spectrograms in parallel (reducing synthesis time) and a WaveGlow vocoder for waveform generation. To keep latency low, I quantized the models to 8‑bit weights and deployed them with TensorFlow Lite on mobile devices. I also implemented a caching layer that stored recent spectrograms for repeated phrases, cutting inference time by ~30 %. For robustness, I built a fallback rule‑based synthesizer that handled edge cases like rare user names or numbers when the neural model failed to converge.

**Result:**  
The feature launched on schedule; user engagement with read‑aloud rose 42 % and we saw a 15 % drop in support tickets about “missing audio.” Latency averaged 180 ms, comfortably under our target. I learned that balancing model size, quantization, and caching is key to making neural TTS viable in real‑time mobile products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
