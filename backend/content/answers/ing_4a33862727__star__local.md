---
qid: ing_4a33862727__star__local
question: 'Explain: Disadvantages of a VPN: — How Does a VPN Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:56:38-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were migrating our internal analytics platform from on‑prem servers to the cloud. The compliance team insisted that all data traffic must be encrypted with a VPN because of regulatory mandates.

**Task:**  
I had to evaluate whether a VPN was the best solution for our high‑throughput data pipelines and demonstrate its limitations to senior engineers, so we could choose an alternative if needed.

**Action:**  
First I mapped how a typical site‑to‑site IPsec tunnel works: it negotiates keys via IKE, encapsulates each packet in an outer header, and encrypts the payload. Then I set up a testbed with our production workload (≈200 GB/day) over a 1 Gbps link. I measured latency, throughput, and CPU usage on both ends while toggling encryption levels. I also compared it to using TLS‑based secure sockets directly between services.

**Result:**  
The VPN introduced an average round‑trip delay of 12 ms and consumed ~30 % more CPU on the gateway, throttling our data ingestion rate by 18 %. Moreover, the double encapsulation caused fragmentation issues in some packets, leading to a 5 % error burst. I presented these findings, and we switched to TLS‑termination at the application layer, reducing latency by 25 % and freeing up CPU for other tasks. The exercise taught me how protocol overhead can become a bottleneck and that choosing the right encryption layer depends on traffic patterns and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
