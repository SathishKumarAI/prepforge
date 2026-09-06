---
qid: ing_b045a674d6__fp__local
question: 'Explain: Requirements Gathering — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 450
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:15-05:00'
sources: []
---

**Why we start with requirements**

A music‑streaming platform like Spotify is not a toy; it must satisfy *concurrent users* (millions of streams per second), *high availability* (downtime < 5 ms), and *low latency* (≤ 200 ms for the first byte). Those constraints come from **information‑theoretic limits**: the amount of data a user can receive per second is bounded by bandwidth, while the user’s perception of “instantaneous” service is capped by human reaction time. Thus any design that ignores these bounds will fail before it even reaches implementation.

**Deriving the functional scope**

1. **User‑centric flows** – Playlists, search, recommendations.  
2. **Content delivery** – CDN, adaptive bitrate.  
3. **Metadata management** – artists, albums, tags.  
4. **Personalization engine** – collaborative filtering, content‑based ranking.  
5. **Monetization & DRM** – subscription tiers, licensing constraints.

Each flow imposes a *resource* requirement: e.g., search needs an inverted index; recommendations require a graph of user–song interactions; streaming demands distributed cache and load balancers. By mapping flows to resources we automatically surface bottlenecks (e.g., the recommendation engine’s quadratic complexity).

**Non‑obvious insight**

Many interviewees treat “recommendation” as a black box, but its *feedback loop* is critical: every user interaction rewrites the graph in real time. Designing with an **event‑driven microservice** that streams interactions to a **stream processor (Kafka + Flink)** ensures freshness while keeping latency low—something that naïve batch‑based systems miss.

In short, requirements gathering for Spotify is a *constraint‑propagation* exercise: start from human perception limits, translate them into system metrics, then systematically map each user story to the underlying data structures and services. This disciplined derivation guarantees you’ll propose a design that actually scales.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
