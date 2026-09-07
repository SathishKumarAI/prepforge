---
qid: ing_e1856d1a3b__faang__local
question: 'Explain: Obviously, when you''re sending a request to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 515
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:23:43-05:00'
sources: []
---

**Clarify**  
You’re asking about the *obvious* overhead that appears whenever you send an HTTP request from a client to a server—latency introduced by network hops, DNS resolution, TLS handshake, and serialization. I’ll assume we’re comparing two typical scenarios: (1) a single round‑trip request over a public Internet link, versus (2) a tightly coupled microservice call inside a data center.

**Approach**  
1. List each latency source.  
2. Quantify typical values.  
3. Explain how they stack and where optimizations matter most.

**Depth**  

| Stage | Typical Latency | Why it matters |
|-------|-----------------|----------------|
| DNS lookup | 10–100 ms (cache hit) | First request or cache miss forces external resolution. |
| TCP three‑way handshake | 20–50 ms | Adds a full RTT; mitigated by keep‑alives or HTTP/2 multiplexing. |
| TLS handshake | 30–80 ms | Cipher negotiation + server auth; can be reduced with session resumption or QUIC. |
| Serialization / JSON parsing | <5 ms | Depends on payload size; binary formats help. |
| Server processing | 1–10 ms (stateless) | CPU/GPU time, model inference latency. |
| Network RTT (client ↔ server) | 20–200 ms | Varies with distance and congestion. |

In a data‑center microservice call the first three rows are largely absent or negligible; you get sub‑10 ms end‑to‑end latency. Across the Internet, DNS/TCP/TLS can dominate, pushing to ~200 ms.

**Edge cases**  
- *Cold start*: container boot + model load adds seconds.  
- *High concurrency*: TCP congestion control can inflate RTTs.  
- *TLS 1.3 vs 1.2*: handshake time drops dramatically.  
- *Mobile networks*: variable radio latency, packet loss.

**Optimize & Communicate**  
To shave milliseconds: use HTTP/2 or QUIC (multiplexed streams, reduced TLS overhead), enable DNS caching, keep TCP connections alive, and cache model artifacts locally. For a production ML API, benchmark each component; present the bottleneck as a bar chart and recommend targeted infra changes. This narrative shows you can dissect latency into actionable pieces—a key skill for FAANG engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
