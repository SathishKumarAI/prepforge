---
qid: ing_cbe43a5b24__star__local
question: 'Explain: Security — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:33-05:00'
sources: []
---

**Situation**  
I was building a real‑time anomaly detection service for IoT devices. The data stream hit our edge nodes via a lightweight protocol, and we had to decide between TCP and UDP for transporting the feature vectors to the central ML cluster.

**Task**  
Choose a transport that balances low latency with reliable delivery of high‑volume sensor packets while mitigating security risks like spoofing or packet loss that could poison the model.

**Action**  
I first benchmarked both protocols: UDP dropped ~3 % of packets under 10 Gbps load, whereas TCP maintained 99.9 % reliability but added ~15 ms overhead due to retransmission and congestion control. To secure UDP I implemented a DTLS layer with pre‑shared keys per device, adding an integrity tag and replay protection. For TCP, I enabled TLS 1.3 and enforced HSTS on the API gateway, then introduced a lightweight checksum at the application level to detect tampering before deserialization. I also set up rate limiting and anomaly thresholds in the ingress controller to guard against DDoS attempts.

**Result**  
The hybrid approach achieved <20 ms latency for 95 % of packets while keeping loss below 0.5 %. The model’s precision improved from 82 % to 89 % because fewer corrupted samples reached training pipelines. I learned that protocol choice should be driven by workload characteristics, but security can level the playing field with proper cryptographic safeguards and traffic shaping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
