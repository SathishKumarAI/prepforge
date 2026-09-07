---
qid: ing_61108daa89__faang__local
question: 'Explain: to make sure to terminate that websocket'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 484
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:30-05:00'
sources: []
---

**1️⃣ Clarify**  
The problem: *“How do you guarantee a WebSocket connection terminates cleanly?”*  
Assumptions: we control both client and server, the channel carries state‑ful data, and network conditions can be unreliable. We want no dangling sockets, resource leaks, or orphaned listeners.

---

**2️⃣ Approach**  
1. **Explicit close handshake** – send `Close` frame with reason code.  
2. **Timeout guard** – if no ack within X s, force terminate.  
3. **Resource cleanup** – remove event listeners, free buffers, decrement connection counters.  
4. **Graceful fallback** – on network loss, attempt reconnection or notify higher layers.

---

**3️⃣ Depth (Implementation)**  
```python
def close_ws(ws):
    try:
        ws.send_frame(CLOSE_FRAME(code=1000, reason="normal"))   # 1
        timer = threading.Timer(5.0, ws.force_close)              # 2
        timer.start()
    finally:
        ws.remove_all_listeners()                                 # 3
```
- **Complexity:** O(1) for close call; cleanup is linear in listeners but negligible.  
- **Trade‑offs:** Short timeout → quick recovery but may cut off legitimate slow peers; long timeout → resource waste.

---

**4️⃣ Edge Cases**  
| Case | What breaks? | Test |
|------|--------------|------|
| Peer ignores `Close` frame | Socket stays open, leaks | Simulate silent peer |
| Network partition mid‑handshake | Partial close frames lost | Drop packets in test harness |
| Rapid open/close bursts | Race conditions on listener removal | Stress‑test with 10k cycles |

---

**5️⃣ Optimize & Communicate**  
- Use a **state machine** to track handshake stages; avoid duplicate closes.  
- Log each phase (send, ack, cleanup) for observability.  
- Explain to interviewer: “I first ensure protocol compliance, then guard against network hiccups with timers, finally I clean resources deterministically.”  

This structured plan satisfies FAANG’s SIGNAL rubric: clear assumptions, systematic approach, technical depth, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
