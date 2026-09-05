---
qid: ing_433d0c82b3__star__local
question: 'Explain: Speaker Diarization: Who Said What — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 358
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:19-05:00'
sources: []
---

**Situation** – While working on a clinical note‑taking app for an outpatient clinic, the team noticed that automated transcription was producing accurate text but clinicians complained it mixed up who said what during multi‑speaker visits, leading to billing errors.

**Task** – I needed to build a speaker diarization module that could reliably separate patient and provider voices in 30‑minute audio recordings, with <5 % error, and integrate it into the existing ASR pipeline within two sprints.

**Action** – First, I collected a labeled dataset of 200 recorded visits (audio + ground‑truth speaker turns). Using Kaldi’s x‑vector system, I trained a deep neural embedding extractor on Mel‑frequency cepstral coefficients. Then I applied agglomerative hierarchical clustering with a distance threshold tuned via Bayesian optimization to segment the audio into speaker clusters. To handle overlapping speech, I added a short‑time energy detector and fused the diarization output with Whisper’s transcription timestamps. Finally, I wrapped the process in a Docker container and exposed it through a REST API that the front‑end could call asynchronously.

**Result** – The new diarization achieved 92 % speaker accuracy on our test set, cutting billing disputes by 78 % and reducing manual review time from 12 minutes to under 2 minutes per visit. I learned how careful feature engineering and clustering hyper‑parameter tuning can bring state‑of‑the‑art ASR into a regulated healthcare setting while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
