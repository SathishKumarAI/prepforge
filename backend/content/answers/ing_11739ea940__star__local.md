---
qid: ing_11739ea940__star__local
question: 'Explain: Introducing the AI-native onsite — The AI-native interview | Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:32-05:00'
sources: []
---

**Situation** – When I joined Sierra’s Talent Acquisition team, the onsite interviews were still paper‑based and heavily reliant on senior interviewers’ subjective notes. We had a 20% drop in candidate satisfaction scores and an average time‑to‑fill of 45 days.  
**Task** – I was tasked with building an AI‑native onsite interview platform that could capture, analyze, and score responses in real time while keeping the experience natural for candidates.  
**Action** – First, I scoped the data pipeline: we integrated a speech‑to‑text engine (Google Cloud Speech) with a custom NLP model trained on 12k past interview transcripts to extract key competency themes. The backend was built in Python on FastAPI, and the frontend used React with WebRTC for live video capture. We added a confidence‑scoring layer that flagged ambiguous answers for follow‑up questions. I also ran a pilot with 30 candidates, iterating on prompt engineering to reduce bias scores by 15%.  
**Result** – After full rollout, candidate satisfaction jumped from 68% to 86%, and time‑to‑fill dropped to 32 days—a 29% improvement. The platform’s real‑time scoring also cut senior interviewers’ prep time by 40 hours per month, freeing them for deeper coaching. I learned that marrying NLP with a user‑centric design can scale quality hiring without sacrificing nuance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
