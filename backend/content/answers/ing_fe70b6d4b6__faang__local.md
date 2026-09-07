---
qid: ing_fe70b6d4b6__faang__local
question: 'Explain: Packet Size and MTU — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:40-05:00'
sources: []
---

**Clarify**  
You want a design‑level comparison of packet sizing and Maximum Transmission Unit (MTU) handling for **TCP** versus **UDP**. The key assumptions: we’re operating over IPv4/IPv6, Ethernet MTU ≈ 1500 B, and the application needs to decide on payload size, fragmentation strategy, and reliability trade‑offs.

**Approach**  
1. Map out header sizes (IP + TCP/UDP).  
2. Compute effective data per packet vs MTU.  
3. Contrast how each protocol reacts to oversize packets—TCP’s congestion control vs UDP’s statelessness.  
4. Highlight design knobs: segment size, Nagle’s algorithm, and application‑level fragmentation.

**Depth**  
| Layer | Header (bytes) | Notes |
|-------|----------------|-------|
| Ethernet | 14 | MTU = 1500 → payload ≤ 1486 |
| IPv4 | 20 | + TCP/UDP |
| IPv6 | 40 | larger header reduces MTU space |
| TCP | 20 | includes sequence, ack, flags |
| UDP | 8 | minimal overhead |

Effective data per Ethernet frame:  
- **TCP**: 1486 – 20 = **1466 B** (≈1470 B typical MSS).  
- **UDP**: 1486 – 8 = **1478 B**.

If a packet exceeds the MTU, IP will fragment (unless DF flag set). TCP’s congestion control will quickly drop fragments and retransmit whole segments, incurring higher latency. UDP simply drops fragments; the application must handle loss or perform its own fragmentation/reassembly.

**Edge Cases**  
- Path MTU Discovery failures → packets get dropped.  
- Jumbo frames (>9000 B) on some links reduce fragmentation but need end‑to‑end support.  
- Application sending >1478 B UDP leads to silent data loss unless handled.

**Optimize & Communicate**  
For latency‑sensitive traffic, cap payload ≤ MTU – headers (≈1460 B for TCP). For bulk transfer where reliability is handled at the application layer, use larger UDP datagrams but add checksums and sequence numbers. Clearly articulate how each design choice affects throughput, RTT, and error handling to the interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
