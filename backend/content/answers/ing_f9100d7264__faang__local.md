---
qid: ing_f9100d7264__faang__local
question: 'Explain: Bandwidth — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 532
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:49-05:00'
sources: []
---

**Clarify**

You’re asked to explain *bandwidth* in the context of designing a messaging app like WhatsApp.  
Assumptions: we need to talk about how bandwidth constraints affect protocol choice, message size, QoS, and scalability; not just raw data rates.

**Approach**

1. Define bandwidth & its impact on latency/throughput.  
2. Map WhatsApp’s traffic patterns (text, media, group chats).  
3. Discuss trade‑offs: compression vs. CPU, batching vs. real‑time delivery.  
4. Show how to measure and tune.

**Depth**

Bandwidth is the maximum data rate a network link can carry, usually measured in Mbps. In WhatsApp, each user’s device has a *client bandwidth budget* that limits how many bytes per second it can send/receive without draining battery or exceeding carrier caps.  

- **Text**: ~200 B per message → negligible; use plain TCP with minimal headers.  
- **Media**: 100–500 KB (images) to several MB (videos). To stay within bandwidth, WhatsApp compresses, chunks, and uses resumable uploads over HTTPS or QUIC.  

Key design points:

| Feature | Bandwidth impact | Mitigation |
|---------|-----------------|------------|
| **Media compression** | Reduces bytes per message | Lossy codecs (WebP, H.265) |
| **Chunking & resume** | Avoids retransmitting entire file | HTTP/2 push + Range requests |
| **Push notifications** | Small headers but many connections | FCM/Apple APNs with batched topics |
| **Group chats** | Multicast traffic | Forward‑chaining: send once, forward locally |

**Edge Cases**

- *Low‑bandwidth mobile* (3G): fallback to lower‑quality media or text‑only mode.  
- *High‑traffic spikes*: backpressure via token buckets per user.  
- *Offline users*: queue on server; deliver when bandwidth available.

**Optimize & Communicate**

Explain that optimizing bandwidth is a multi‑layer problem: protocol choice (QUIC over UDP), content encoding, and client‑side throttling. Emphasize monitoring metrics—bytes/s per endpoint, packet loss—and using adaptive bitrate for media. Conclude with the trade‑off: aggressive compression saves bandwidth but increases CPU; batching reduces overhead but adds latency. This balanced view shows depth, structured reasoning, and practical system‑design insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
