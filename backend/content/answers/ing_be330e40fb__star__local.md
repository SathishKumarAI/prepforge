---
qid: ing_be330e40fb__star__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 297
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:23-05:00'
sources: []
---

**Situation**  
During my senior design project I built an embedded web server for a smart thermostat. When users typed the device’s IP into their phone browser, I noticed intermittent failures where the page wouldn’t load until I reset the network.

**Task**  
I had to diagnose why the HTTP request wasn’t reliably establishing a connection and fix it so that every URL lookup resulted in a stable TCP session without manual intervention.

**Action**  
First, I logged the packet trace on both sides. The client sent a SYN, the server responded with SYN‑ACK, but my firmware’s stack sometimes dropped the ACK due to a race condition in its receive buffer initialization. I refactored the stack: added explicit ACK handling after the socket is fully opened, increased the retransmission timeout, and implemented a small state machine that logs each handshake step for debugging. I also tuned the MTU to 1500 bytes to avoid fragmentation issues on the local Wi‑Fi network.

**Result**  
After the changes, 99.7% of URL requests established a TCP session on first try, cutting page load failures from 12% to <0.1%. I learned that even simple protocols like TCP can hide subtle bugs in resource-constrained devices and that thorough packet-level debugging is essential for robust system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
