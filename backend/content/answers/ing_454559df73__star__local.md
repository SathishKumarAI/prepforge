---
qid: ing_454559df73__star__local
question: 'Explain: Likely interviewer follow-ups — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:14-05:00'
sources: []
---

**Situation** – At my previous company we were launching a virtual meeting assistant to reduce manual note‑taking and agenda drift for our sales team. The product had to integrate with Zoom, Outlook, and Salesforce, yet the initial alpha release was missing real‑time transcription accuracy (only 70% F1) and struggled with noisy environments.

**Task** – I was tasked to improve transcription precision to at least 90%, ensure seamless calendar sync, and deliver a lightweight client that ran on both Windows and macOS without heavy CPU usage, all before the product’s beta release in two months.

**Action** – First, I swapped the open‑source Whisper model for a custom fine‑tuned Whisper‑Large variant on our GPU cluster, adding a speaker diarization module that split turns by voice ID. I implemented an async pipeline using gRPC so transcription ran concurrently with video streaming, keeping CPU usage under 30%. For calendar sync, I used Microsoft Graph API to pull meeting metadata and stored it in a Redis cache for quick lookup during live sessions.

**Result** – Transcription accuracy jumped to 92% F1, and the assistant’s latency dropped from 3.5 s to 0.8 s per utterance. The beta launch met its deadline; user satisfaction scores rose from 4.2/5 to 4.7/5, and we saw a 15% reduction in manual note‑taking time for sales reps. I learned that balancing model size with real‑time constraints often requires architectural tweaks rather than just larger models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
