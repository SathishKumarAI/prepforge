---
qid: ing_fe70b6d4b6__star__local
question: 'Explain: Packet Size and MTU — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 386
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:37-05:00'
sources: []
---

**Situation:** While leading the backend team for a real‑time multiplayer game, we noticed sudden latency spikes during peak hours—players reported “jitter” and occasional packet loss that broke gameplay.

**Task:** I had to diagnose whether our transport choice (TCP vs UDP) and MTU settings were causing these issues, and then design a solution that kept throughput high while minimizing retransmissions or fragmentation.

**Action:** First, I captured traffic with Wireshark on both the client and server. The logs revealed frequent IP fragmentation: 1500‑byte packets were being split into 1200‑byte fragments because our game payloads (≈1400 bytes) exceeded the network’s MTU. With TCP, each fragment was reassembled by the OS, but the overhead of acknowledgment per segment caused head‑of‑line blocking. Switching to UDP let us send a single datagram; however, we still faced fragmentation on some hops. I reduced packet size to 1200 bytes and enabled Path MTU Discovery (PMTUD) so routers would advertise their MTU via ICMP “Fragmentation Needed” messages. On the application side, I added simple forward error correction (FEC) to mask occasional lost UDP packets.

**Result:** Post‑deployment, average round‑trip time dropped from 200 ms to 70 ms and packet loss fell below 0.2 %. Player churn during peak periods decreased by 35 %. I learned that understanding the trade‑off between TCP’s reliability (and its hidden fragmentation cost) versus UDP’s lightweight nature—and actively managing MTU—is critical for latency‑sensitive systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
