---
qid: ing_0d301cbbb7__fp__local
question: 'Explain: Core APIs — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 441
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:33:56-05:00'
sources: []
---

### Why the Core APIs are inevitable

A music‑streaming service must *serve* tracks, *recommend* them and *track* user behaviour.  
From a systems view these three functions form **three orthogonal sub‑problems**:

| Sub‑problem | Fundamental goal | Core API |
|-------------|-------------------|----------|
| Content delivery | Low‑latency streaming of millions of files | `GET /tracks/{id}/stream` |
| Personalisation | Maximise user engagement by showing relevant music | `POST /recommendations?userId=…` |
| Analytics & feedback | Learn from listening patterns to improve the system | `PUT /playback?trackId=…&duration=` |

Each API is forced upon us by an *information‑theoretic* constraint:  
- The streaming endpoint must expose a **canonical representation** of a track (file, bitrate) because otherwise we would need to duplicate logic for every consumer.  
- Recommendation must be expressed as a **queryable graph** (`user → listening history → candidate tracks`) – without it the recommender is just a black box that can’t scale or be audited.  
- Playback events are the only observable that turns implicit behaviour into explicit data; they are the *only* way to close the feedback loop required for any learning algorithm.

### One non‑obvious insight

Most designers treat the analytics API as an afterthought, but it is actually the **bridge between the streaming and recommendation layers**.  
If playback events are stored in a *streaming pipeline* (Kafka → time‑series DB) rather than a batch job, the recommender can react to new listening patterns within seconds, turning a static “next song” into a dynamic, context‑aware experience.  

In short: **design the three APIs as independent contracts that enforce data flow, scalability and observability**—and remember that analytics is the glue that lets the system learn in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
