---
qid: ing_241a69a0c0__star__local
question: 'Explain: High-level architecture — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:27-05:00'
sources: []
---

**Situation** – At my previous startup we were tasked with launching a live customer support chatbot that could handle spoken queries on our e‑commerce platform. The existing text‑based bot was great for FAQs but fell short when users wanted to talk through complex returns or payment issues.

**Task** – Design and implement a low‑latency, end‑to‑end architecture that would convert speech to text, interpret intent, generate responses, synthesize speech, and stream the audio back in under 200 ms while scaling to thousands of concurrent calls.

**Action** – I chose a microservices stack:  
- **Speech‑to‑Text** via Google Cloud Speech‑API with custom phoneme models for product jargon.  
- **Intent & NLU** handled by an internal Rasa server, using slot filling and context tracking.  
- **Response Generation** fed to an LLM fine‑tuned on our support transcripts, wrapped in a FastAPI container.  
- **Text‑to‑Speech** used Amazon Polly with neural voices for natural prosody.  
I orchestrated the flow through Kafka streams, added Redis caching for frequent intents, and employed WebRTC for real‑time audio streaming. Load testing revealed 98 % of calls stayed below 180 ms; I tuned thread pools and batch sizes to eliminate GC pauses.

**Result** – The voice agent cut average resolution time by 35 %, increased user satisfaction scores from 4.2 to 4.7/5, and handled 12,000 concurrent sessions during peak sales without degradation. I learned that tight integration of cloud APIs with a lightweight event‑driven pipeline is key for latency‑critical conversational AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
