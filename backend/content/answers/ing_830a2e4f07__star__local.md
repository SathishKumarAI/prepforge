---
qid: ing_830a2e4f07__star__local
question: 'Explain: HTTP/3 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:15-05:00'
sources: []
---

**Situation:** At my previous company we were launching a real‑time analytics dashboard that streamed user events to the front end via websockets and REST endpoints. Our traffic spike during product launches pushed our TCP‑based HTTP/2 over TLS to hit a 45 % latency increase due to head‑of‑line blocking, especially on mobile networks.

**Task:** I was tasked with redesigning the data path so that event delivery stayed under 200 ms even under peak load, while keeping compatibility with existing browsers and preserving our encryption strategy.

**Action:** I led a small team to prototype HTTP/3 (QUIC) for the event stream. We wrapped the websocket payload in QUIC datagrams, used multiplexed streams to avoid head‑of‑line stalls, and leveraged 0‑RTT key exchange to cut TLS handshake time by ~60 %. We also implemented flow‑control tuning: setting a conservative initial window of 64 KB per stream and enabling adaptive congestion control (BBR) for mobile paths. Integration tests showed that the QUIC server could handle 10k concurrent connections with <150 ms latency on LTE, compared to 320 ms on HTTP/2.

**Result:** The switch reduced average event delivery latency by 52%, dropped error rates on flaky networks from 8% to 1.3%, and cut our CDN bandwidth cost by ~15 % due to fewer retransmissions. I learned that adopting QUIC early requires careful stream‑level tuning, but the payoff in real‑time responsiveness is substantial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
