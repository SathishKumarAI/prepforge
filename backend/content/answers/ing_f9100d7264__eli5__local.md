---
qid: ing_f9100d7264__eli5__local
question: 'Explain: Bandwidth — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 264
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:09:14-05:00'
sources: []
---

**Bandwidth – the “road capacity” for messages**

Think of your WhatsApp traffic like cars on a highway.  
*Bandwidth* is how many cars can travel side‑by‑side at once; it’s the total amount of data that can flow through the network each second (measured in bits per second).  

When you send a photo, the app packs that file into packets and sends them over the internet. If your connection has high bandwidth, those packets zip across quickly, so the image appears almost instantly. With low bandwidth—like a narrow road or many cars stuck in traffic—the packets arrive slowly, causing delays or dropped images.

In designing WhatsApp, engineers must:

1. **Estimate peak bandwidth**: How much data will all users generate at once (e.g., millions of photos per minute)?  
2. **Scale servers and CDNs** so each “road segment” can handle the load without congestion.  
3. **Compress and chunk large files** to keep packet sizes small, easing the traffic flow.

So bandwidth is simply the network’s capacity to carry data; making it high enough ensures smooth, real‑time messaging for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
