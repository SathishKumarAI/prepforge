---
qid: ing_fe3acf13b1__star__local
question: 'Explain: TCP vs. UDP — System Design: Top 15 Trade-Offs - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 343
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:15-05:00'
sources: []
---

**Situation**  
In my last role I was building a real‑time feature store that streamed sensor readings from edge devices into a Spark cluster. The ingest rate hit 50 k events per second and the downstream analytics had to process them with <2 s latency.

**Task**  
I needed to pick a transport protocol that balanced reliability, throughput, and complexity while keeping packet loss under 0.5 % so model drift wouldn’t skew predictions.

**Action**  
I evaluated TCP and UDP across five key trade‑offs: connection overhead, ordering guarantees, congestion control, header size, and firewall friendliness. I ran a 24‑hour benchmark with both protocols, measuring round‑trip time, throughput, and error rate. For UDP I added a lightweight sequence layer and selective retransmission logic; for TCP I tuned the window scaling and disabled Nagle’s algorithm. I also instrumented packet loss via NetFlow to confirm that our 10 Gbps link stayed below the target.

**Result**  
The custom‑UDP stack delivered 15 % higher throughput (≈57 k events/s) with latency <1.8 s, while still keeping loss under 0.3 %. Switching to TCP dropped throughput by 12 % and increased jitter, making it unsuitable for our real‑time use case. I learned that protocol choice must be driven by application metrics and that adding minimal reliability logic can unlock UDP’s performance advantages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
