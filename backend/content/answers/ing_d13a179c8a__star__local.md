---
qid: ing_d13a179c8a__star__local
question: 'Explain: Design an in-app assistant that can take actions in your app ("book
  it", "send it to Sam").'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 302
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:11-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our mobile app had a feature‑rich dashboard where users could book appointments and forward documents to colleagues. However, usage of these actions dropped by 35% after a major UI redesign because the steps were too long and confusing.

**Task:** I was tasked with designing an in‑app assistant that would let users say “Book it” or “Send it to Sam” and have the app perform those actions automatically—reducing friction and boosting engagement.

**Action:** I started by integrating a lightweight natural language understanding module (spaCy) trained on 4,000 real user utterances. The assistant ran locally using TensorFlow Lite to keep latency under 200 ms. For intent execution I built an action‑router that mapped intents to REST endpoints: booking used our existing `/appointments` API with OAuth2 scopes; sending used a secure email microservice. To handle ambiguity, the assistant surfaced context‑aware prompts (e.g., “Which Sam?”) and logged fallback rates for continuous improvement.

**Result:** Post‑launch, we saw a 48% increase in completed bookings via voice commands and a 27% lift in document transfers within two weeks. User satisfaction scores rose from 3.8 to 4.5/5, and I learned the importance of balancing on‑device inference with secure backend integration for real‑time assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
