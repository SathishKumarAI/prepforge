---
qid: ing_b528952cd4__star__local
question: 'Explain: ASR + diarization — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 380
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:57-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we launched a video‑conferencing feature that was used by over 3,000 remote teams daily. The product team wanted an automated meeting assistant that could transcribe talks in real time and label each speaker so managers could quickly review key decisions.

**Task** – I had to design a pipeline that combined Automatic Speech Recognition (ASR) with speaker diarization, ensuring the final transcript was accurate (<5% WER) and speakers were correctly identified, all while keeping latency under 200 ms per second of audio.

**Action** – First, I selected Mozilla DeepSpeech for ASR because of its open‑source model and GPU acceleration. For diarization, I integrated pyannote‑audio’s pre‑trained embeddings with a clustering algorithm tuned to our typical meeting length (~30 min). I wrapped both models in a microservice using FastAPI, adding a buffering layer that processed audio chunks asynchronously. To reduce errors, I implemented a confidence‑based re‑transcription loop: any segment with <80% ASR confidence triggered a second pass with a larger beam width. Finally, I added an optional “speaker change detection” heuristic based on pause duration to refine boundaries.

**Result** – The system achieved 4.2 % WER and correctly identified speakers 92 % of the time in live tests. Deployment cut post‑meeting review time by 60 %, allowing managers to focus on action items rather than sifting through raw audio. I learned that balancing model complexity with real‑time constraints is key, and that a lightweight confidence filter can dramatically improve user trust without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
