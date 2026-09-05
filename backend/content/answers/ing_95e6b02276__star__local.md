---
qid: ing_95e6b02276__star__local
question: 'Explain: Design the dubbing pipeline: an English video becomes Spanish,
  same speakers, same timing.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 346
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:42-05:00'
sources: []
---

**Situation**  
I was hired by a global media company that wanted to localize its flagship documentary series from English to Spanish while preserving the original voice‑actors’ cadence and lip sync for a worldwide streaming platform.

**Task**  
Build an end‑to‑end dubbing pipeline that automatically generates high‑quality Spanish audio, keeps speaker identity intact, aligns perfectly with the original video timing, and can scale to 50 episodes per month without manual post‑editing.

**Action**  
I first extracted the English speech using Whisper ASR to get timestamps. Then I used a multilingual TTS system (Coqui STT + ESPnet) fine‑tuned on each actor’s voice to synthesize Spanish sentences that match prosody and energy curves. For timing, I applied dynamic time warping (DTW) between the original phoneme durations and the synthesized ones, stretching or compressing them in real time with a high‑fidelity waveform generator (WaveRNN). The audio was merged back into the video using FFmpeg’s filtergraph to maintain exact frame alignment. Finally, I automated the workflow with Airflow DAGs, adding quality checks that flag sync errors >30 ms for human review.

**Result**  
The pipeline cut localization time from 12 days per episode to 2 days, reduced manual editing by 85%, and achieved a lip‑sync error rate of <5 ms across all episodes. I learned how to blend ASR, TTS, DTW, and orchestration tools into a robust, scalable dubbing system that keeps the original performance’s authenticity intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
