---
qid: ing_d50f77934f__star__local
question: 'Explain: Likely interviewer follow-ups — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:35:01-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time voice assistant for our customer support hotline. The call volume spiked during product launches, and our current IVR took an average of 45 seconds to route a caller to the right agent, causing a 12% drop in CSAT.

**Task** – I needed to create a lightweight, low‑latency voice agent that could understand intent, fetch relevant knowledge base articles, and hand off to a human if necessary, all within 2 seconds of speech input.

**Action** – I chose Whisper for streaming transcription because it offers sub‑second latency on a single GPU. For intent detection I fine‑tuned a DistilBERT model on our call transcripts, achieving 92% F1 while keeping inference under 200 ms. To retrieve articles I indexed the knowledge base with ElasticSearch and used cosine similarity over embeddings from Sentence‑Transformers. The entire pipeline ran in Docker containers orchestrated by Kubernetes, scaling horizontally based on CPU load. I also added a fallback queue that logged unsolved intents for later analysis.

**Result** – Deployment cut routing time to 1.3 seconds, boosting CSAT by 7% and reducing average handle time by 15%. The system handled 2,300 concurrent calls during the launch with no downtime. I learned how to balance model size, inference speed, and cloud orchestration to meet strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
