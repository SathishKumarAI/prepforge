---
qid: ing_f9100d7264__star__local
question: 'Explain: Bandwidth — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 349
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:37-05:00'
sources: []
---

**Situation:**  
At my previous company we were tasked with launching a real‑time messaging app similar to WhatsApp for a market where mobile data was expensive and network speeds were highly variable.

**Task:**  
I had to design the system so that users could send text, images, and group chats with minimal latency while keeping bandwidth usage under 200 KB per minute on average, even on 2G networks.

**Action:**  
First, I introduced a multi‑tier compression pipeline: small PNGs were converted to WebP at 70 % quality loss; text payloads were gzipped. For media, we used delta encoding so only changed portions of an image were sent. On the server side, I deployed edge caching via CloudFront and implemented adaptive bitrate streaming for voice notes—downscaling audio from 128 kbps to 32 kbps when packet loss exceeded 10 %. I also added a “draft sync” feature that batched unsent messages locally until connectivity improved. All components were built in Go, using gRPC with protobufs for low‑overhead serialization.

**Result:**  
The app achieved an average data consumption of 145 KB per minute, a 27 % reduction compared to our baseline prototype. User retention on slow networks rose from 62 % to 78 %, and we received positive feedback on message reliability during outages. I learned that aggressive compression combined with edge caching can dramatically improve user experience in bandwidth‑constrained environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
