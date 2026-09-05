---
qid: ing_b045a674d6__star__local
question: 'Explain: Requirements Gathering — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 341
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:28-05:00'
sources: []
---

**Situation:**  
I was tasked with leading the first sprint of a new music‑streaming platform for a mid‑size startup that wanted to compete with Spotify’s user experience but on a tighter budget.

**Task:**  
My goal was to gather detailed functional and non‑functional requirements, validate them against business goals (e.g., 1 M DAUs within two years), and produce a high‑level architecture that could scale to 10 TB of audio data while keeping latency under 200 ms for playback.

**Action:**  
I organized workshops with product managers, UX designers, and the marketing team to map out user journeys—search, playlists, social sharing. I conducted interviews with existing Spotify users via a survey tool (Typeform) to surface pain points like buffering in low‑bandwidth zones. Using these insights, I drafted a feature backlog in Jira and performed a cost–benefit analysis for each feature. For the technical side, I ran load tests on an AWS Fargate prototype to estimate CPU/Memory needs, then sketched a microservices diagram (Auth, Catalog, Recommendation, Playback) with Kubernetes and a Redis cache for hot metadata.

**Result:**  
The finalized requirements document was approved 3 days ahead of schedule. The architecture plan cut projected cloud spend by 18% while meeting performance targets. I learned that early, data‑driven user research dramatically reduces scope creep, and that aligning technical trade‑offs with business metrics ensures stakeholder buy‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
