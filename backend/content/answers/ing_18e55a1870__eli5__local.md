---
qid: ing_18e55a1870__eli5__local
question: 'Explain: Video and Audio Streaming — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 250
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:24-05:00'
sources: []
---

Imagine a huge library that holds every book you could ever want, but the library is in one far‑off city. If you lived nearby, you’d walk straight to it and get your copy fast. But if you live on another continent, waiting for a package shipped from that city would take days.

A Content Delivery Network (CDN) solves this by creating tiny “branch libraries” all over the world. Each branch keeps copies of the most popular books (videos or audio files). When you ask for a song or a movie, your request is automatically routed to the nearest branch, so you get it almost instantly.  

In streaming terms:  
- **Content** = video/audio file.  
- **Origin server** = original library in one location.  
- **Edge servers** (CDN nodes) = local branches that cache copies.  
- **Caching** = storing a copy locally for quick future requests.  

The CDN keeps many copies, so even if one branch is busy or goes offline, another can serve you. That’s why streaming feels smooth and fast no matter where you are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
