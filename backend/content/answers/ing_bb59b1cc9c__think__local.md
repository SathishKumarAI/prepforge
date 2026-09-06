---
qid: ing_bb59b1cc9c__think__local
question: 'Explain: Timeouts and Retries — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 462
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:19:04-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that the interview question is about *timeouts* (how long to wait for a response) and *retries* (how many times to resend).  
- Assume the candidate knows basic TCP/UDP behavior but may not recall specific flag semantics.  
- Ask whether the focus is on *application‑level* retries or *transport‑layer* mechanisms.

**2️⃣ Adopt a mental model**  
- Think of two layers: **Transport Layer** (TCP guarantees delivery, ordering, flow control) vs **Application Layer** (protocols that need to decide when to give up).  
- Map “timeout” → “how long before we consider the attempt failed.”  
- Map “retry” → “how many times do we re‑issue the request after a timeout or error.”

**3️⃣ Step‑by‑step reasoning**  
1. **TCP**:  
   - Already has built‑in retransmission, ACKs, and congestion control.  
   - Timeouts are handled by the stack (RTO).  
   - Application retries rarely needed unless you want to change data or use a different path.  
2. **UDP**:  
   - No guarantees; packets may be lost or reordered.  
   - The application must implement its own timeout logic and decide when to resend.  
   - Consider adding sequence numbers, ACKs, or using protocols like RTP/DTLS that add reliability on top of UDP.

**4️⃣ Common traps to avoid**  
- Mixing up *TCP retransmission* with *application retries*.  
- Assuming UDP will never deliver a packet; it can succeed but be delayed.  
- Ignoring the impact of network congestion on timeout values (e.g., exponential backoff).

**5️⃣ Sanity‑check & verbalize**  
- Verify that you’ve covered both layers: “In TCP, the OS handles timeouts and retransmissions, so we usually just wait for an ACK; in UDP, we must explicitly set a timer and decide how many times to send again.”  
- Summarize key differences concisely before moving on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
