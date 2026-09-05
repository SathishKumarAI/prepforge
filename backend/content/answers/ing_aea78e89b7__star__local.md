---
qid: ing_aea78e89b7__star__local
question: 'Explain: Choose QUIC or HTTP/3 When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 402
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:21:26-05:00'
sources: []
---

**Situation** – At a mobile‑gaming startup we launched a real‑time multiplayer mode that required sub‑20 ms latency for state sync across 10k concurrent players. The existing backend used HTTP/2 over TCP and consistently hit the “slow start” wall during traffic spikes, causing jitter of up to 60 ms.

**Task** – Redesign the transport layer so that each player’s ping stayed below 15 ms even under a 30× traffic surge, while keeping server CPU usage under 70% and preserving existing REST APIs for other services.

**Action** – I evaluated QUIC (UDP‑based) vs HTTP/3 (QUIC with HTTP semantics). I benchmarked both using wrk2 with synthetic UDP bursts, measuring round‑trip times, packet loss recovery, and connection churn. QUIC’s 0‑RTT handshakes cut handshake latency from 70 ms to <10 ms, and its multiplexed streams eliminated head‑of‑line blocking. I migrated the game state service to a lightweight HTTP/3 server (nginx‑quic), added selective congestion control (BBR) for UDP traffic, and implemented a graceful fallback to TCP for legacy browsers via ALPN negotiation.

**Result** – Latency dropped from 55 ms average to 12 ms under peak load; packet loss recovery improved by 35%. CPU usage fell to 58% thanks to fewer connection sockets. The change also reduced our CDN cost by 18% because QUIC’s multiplexing cut the number of required connections. I learned that choosing UDP/QUIC is ideal for low‑latency, real‑time workloads, while HTTP/3 adds backward compatibility and simpler integration with existing HTTP tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
