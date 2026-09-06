---
qid: ing_6d62838959__fp__local
question: 'Explain: What TCP Provides — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 437
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:58-05:00'
sources: []
---

### Why the Internet Needs Two Transport Schemes

At its core, a network must convey *bytes* from one host to another.  
The two classic protocols—TCP and UDP—are simply different **optimization goals** for that basic problem.

| Goal | TCP | UDP |
|------|-----|-----|
| Reliability | Guarantees in‑order delivery by acknowledging every segment and retransmitting lost ones. | No acknowledgment; packets may arrive out of order or be dropped. |
| Flow control | Uses a sliding window to match sender rate with receiver buffer capacity, preventing congestion collapse. | Sends at the application’s pace; no built‑in congestion avoidance. |
| Ordering & segmentation | Reassembles data streams into a single byte stream; hides packet size limits from applications. | Each datagram is independent; the payload length is preserved for the receiver. |

**Why it works:**  
TCP treats communication as a *stateful* process: both ends maintain a shared state (sequence numbers, window sizes). This mirrors **information‑theoretic error correction**—by exchanging control packets, the protocol can infer which bits were lost and correct them on the fly. UDP, in contrast, is stateless; it trades that inference for speed, akin to sending raw data through a noisy channel without any redundancy.

**Non‑obvious insight:**  
Because TCP’s state is per connection, it *implicitly enforces* a **fairness discipline**: each active flow gets a slice of the bandwidth. UDP users must implement their own pacing or rely on application‑level congestion control; otherwise they risk starving other traffic—this subtlety often surprises designers who think “just send fast.”  

In system design, pick TCP when *correctness* matters (file transfer, web pages) and UDP when *latency* dominates (VoIP, gaming). The choice is essentially a trade‑off between **robust error handling** and **minimal protocol overhead**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
