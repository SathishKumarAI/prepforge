---
qid: ing_caecbf010f__faang__local
question: 'Explain: Connection Close — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 412
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks how a *connection close* is handled for TCP versus UDP in a system‑design context—i.e., what mechanisms signal the end of communication and how that affects resource cleanup.

**Approach**  
1. List the protocol semantics (stateful vs stateless).  
2. Map each to real‑world APIs (TCP sockets, UDP datagrams).  
3. Highlight downstream implications: flow control, ordering, reliability, and system resources.

**Depth**  
- **TCP** is connection‑oriented. Closing involves a 4‑way handshake:  
  *FIN* → ACK → FIN → ACK.  
  Each side must acknowledge receipt of the final byte before sockets are fully released, guaranteeing in‑order delivery and graceful resource deallocation.  
- **UDP** is datagram‑based; no connection exists to tear down. The application simply stops sending/receiving. The OS may drop any pending packets after a timeout or when the socket is closed by the app (socket close syscall). There’s no handshake, so no guarantee that the peer has seen the last packet.

**Edge Cases**  
- TCP: half‑open connections, delayed FINs, lingering sockets in TIME_WAIT.  
- UDP: packet loss, out‑of‑order delivery, NAT timeouts causing stale mappings.

**Optimize & Communicate**  
Explain trade‑offs: TCP’s overhead is justified for stateful services (HTTP, database), whereas UDP’s low latency suits real‑time media or IoT where occasional packet loss is acceptable. Emphasize that in system design we choose the close semantics based on required reliability and resource constraints, and we expose clear API contracts to application developers. This structured reasoning demonstrates clarity, depth, and a practical grasp of protocol behavior expected at FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
