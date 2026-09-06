---
qid: ing_fe70b6d4b6__fp__local
question: 'Explain: Packet Size and MTU — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 457
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:49-05:00'
sources: []
---

**Why MTU matters for TCP vs UDP**

At the lowest level a network interface transmits *frames* whose payload cannot exceed the **Maximum Transmission Unit (MTU)**—the largest packet that can traverse a link without fragmentation.  
The sender’s socket layer must therefore fit its user‑level data plus protocol headers into this budget.

- **UDP** is a *connectionless* datagram: each send() becomes one IP/UDP packet. The application controls the payload size; if it exceeds MTU, the kernel fragments or drops the packet (IP fragmentation). Thus UDP offers *exactly* what you ask for but at the cost of potential fragment loss and reassembly overhead.

- **TCP** is a *stream*: bytes flow continuously. TCP must segment this stream into packets that respect MTU plus its own 20‑byte IP + 20‑byte TCP header (often more). The *Maximum Segment Size* (MSS) is derived as `MTU – headers`. If an application writes 1 MiB, TCP internally splits it into many MSS chunks, each reassembled at the receiver. This guarantees in‑order delivery and congestion control but introduces a fixed per‑segment overhead.

**Deep principle:**  
The MTU enforces *information‑theoretic* limits on how much new data can be packed per transmission. TCP’s segmentation is essentially an optimal packing problem: maximize throughput while keeping each packet below the MTU to avoid fragmentation, which would violate the law of conservation of information (fragmented packets are not independent messages).  

**Non‑obvious insight:**  
Because UDP lets you exceed MTU at the cost of fragmentation, a *hybrid* approach works well in practice: use UDP for bulk data but keep each datagram ≤ MSS and let the application layer handle reassembly. This avoids IP fragmentation while preserving the low‑latency benefits of a single‑datagram delivery—an optimization that many designers overlook when choosing between TCP and UDP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
