---
qid: ing_d0a5a57a71__aws__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 440
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:45-05:00'
sources: []
---

**Situation & Task (S)**  
In my previous role as a Solutions Architect for a media‑tech startup, we needed to expose our ML‑generated assets (video thumbnails, captions, recommendation vectors) to millions of users worldwide with sub‑second latency. The existing CDN was a single‑region CloudFront distribution that suffered from regional bottlenecks and high egress costs.

**Action & Technical Design (A)**  
I designed a multi‑region **AWS Global Accelerator + CloudFront** strategy:
- **Global Accelerator** routes traffic to the nearest healthy CloudFront edge, improving latency by ~30 % on average.
- **CloudFront Origin Shield** in each region caches ML artifacts in S3, reducing origin fetches by 70 %.
- **Lambda@Edge** normalizes requests (e.g., dynamic thumbnail resizing) and enforces cache‑control headers.
- Cost was kept in check with **S3 Intelligent-Tiering** for infrequently accessed model weights and **Reserved Capacity** on CloudFront.

I performed a **load test** (10 k RPS) using Artillery, showing 99.9 % of requests served within 120 ms versus the legacy system’s 350 ms median.

**Result & Impact (R)**  
The rollout cut CDN egress costs by **$18K/month**, reduced latency by **32 %**, and increased user engagement on video pages by **12 %**. The solution also enabled us to add a new ML feature—real‑time captioning—without further cost spikes.

> **Leadership Principles:**  
> *Customer Obsession* – Delivered faster, cheaper content for users worldwide.  
> *Ownership* – Took end‑to‑end responsibility from architecture to metrics tracking.  

**Bar‑raiser takeaway:** I dove deep into latency & cost trade‑offs, quantified impact with real traffic data, and iterated based on failure points observed during load testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
