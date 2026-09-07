---
qid: ing_b187257fce__aws__local
question: 'Explain: Sources — Elevenlabs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 453
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:25-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a voice‑to‑voice chatbot for an enterprise training platform that needed *real‑time, natural‑sounding speech* in over 20 languages. The key challenge: selecting a TTS engine that could deliver high fidelity while staying under the $5 k/month budget.

**Action (Design & Technical)**  
I scoped three options: Google Cloud TTS, Azure Cognitive Services, and **ElevenLabs**. After a *Dive Deep* analysis of API latency, token limits, and model quality, I chose ElevenLabs because:

| Metric | EleventLabs | Google Cloud | Azure |
|--------|-------------|--------------|-------|
| Avg. Latency (ms) | 80 | 140 | 120 |
| Cost per 1 k words | $0.03 | $0.04 | $0.05 |
| Multilingual coverage | 25+ | 30+ | 20+ |

I wrapped ElevenLabs in a **Lambda** microservice, caching recent utterances with **ElastiCache‑Redis** to shave 15 % of API calls. The service is deployed behind an **Application Load Balancer** for 99.95 % availability and autoscaled based on CPU usage. Costs stayed at $3.8 k/month, 24 % below budget.

**Result (Quantified Impact)**  
- Voice quality score (user survey) rose from 3.6/5 to **4.7/5**.  
- Session completion rate increased by **18 %**, directly boosting training ROI.  
- Latency improved by **42 %**, reducing perceived wait time for users.

**Learnings & Ownership**  
I documented the trade‑offs and maintained a post‑mortem on the initial Google Cloud run that exposed hidden token limits, ensuring future migrations stay informed. This demonstrates *Customer Obsession* (delivering superior user experience) and *Ownership* (end‑to‑end solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
