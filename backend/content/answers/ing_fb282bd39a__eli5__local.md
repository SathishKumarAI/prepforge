---
qid: ing_fb282bd39a__eli5__local
question: 'Explain: Traffic Spike Absorption — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 201
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:12:46-05:00'
sources: []
---

Imagine a busy highway that sometimes gets hit by sudden, huge rushes of cars—maybe during a big sports event or a holiday sale on a website. If all those cars had to drive straight into one single toll booth (your origin server), the booth would jam and traffic would grind to a halt.

A Content Delivery Network (CDN) is like a network of many toll booths scattered along the highway, each standing in front of local parking lots that already hold copies of the popular car models (web pages or videos). When a rush hits, cars are diverted to the nearest booth instead of all piling up at the main one. The CDN’s “edge servers” act as these nearby booths: they store and serve content locally, absorbing the spike so the original server stays clear.

In this way, the CDN keeps traffic flowing smoothly, even when millions of visitors arrive at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
