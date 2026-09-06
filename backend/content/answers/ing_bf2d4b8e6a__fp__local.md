---
qid: ing_bf2d4b8e6a__fp__local
question: 'Explain: TCP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 459
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:51-05:00'
sources: []
---

**Why a transport protocol matters**

At the lowest level a network is a stream of bits that can be lost or reordered.  
A *system* must decide: **Do I need to guarantee that every bit arrives in order, or am I willing to trade correctness for speed?**  

---

### TCP – “I will correct everything”

TCP solves the problem by turning the noisy channel into an *ordered, reliable byte stream*.  
It does so with three intertwined mechanisms:

1. **Sequence numbers + acknowledgements** – each segment is tagged; the receiver tells the sender what it has seen.  
2. **Retransmission & timeouts** – missing segments are re‑sent after a calculated wait time.  
3. **Congestion control (e.g., slow start, AIMD)** – uses feedback to avoid saturating routers.

These operations implement an *implicit optimization*: the sender adjusts its sending rate so that the expected number of retransmissions is minimal while keeping the queue lengths stable. The underlying principle is a *feedback‑controlled Markov chain* that converges to a throughput‑fair equilibrium (the TCP throughput equation).  

**Non‑obvious insight:**  
The congestion window size is not just “how much I can send”; it is an estimator of the network’s *available capacity*. When packets are lost, the window shrinks sharply, causing the sender to probe the link more aggressively when it recovers. Thus, TCP adapts to both short‑term and long‑term variations without explicit measurement.

---

### UDP – “I’ll let you decide”

UDP offers a bare‑bones datagram service: no ordering, no flow control, no retransmission.  
It is ideal when the application can tolerate loss (e.g., live audio) or already implements its own recovery.  

**System design decision:**  
Use TCP for transactional or state‑critical traffic; use UDP when latency and simplicity outweigh reliability. The choice is a tradeoff between *information fidelity* (entropy of lost packets) and *system complexity* (protocol overhead).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
