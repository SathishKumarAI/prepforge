---
qid: ing_e6e616a849__star__local
question: 'Explain: Final Thoughts — How DNS Actually Works - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 327
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:05-05:00'
sources: []
---

**Situation**  
During my senior project I was tasked with building a lightweight IoT gateway that could resolve domain names in real time while operating under strict power constraints. The existing firmware used a static host file, which was brittle and required manual updates whenever the network changed.

**Task**  
I needed to implement a dynamic DNS resolver that would query authoritative servers on demand, cache results efficiently, and fall back gracefully when the gateway lost connectivity—all within 10 ms response time for the 200 devices it served.

**Action**  
I started by dissecting RFC 1035: I implemented UDP-based queries with proper transaction IDs and flags, added a simple LRU cache in RAM, and used a minimal DNS library written in C++17. To reduce packet size, I enabled EDNS0 for larger responses but fell back to TCP if truncation occurred. For reliability, I introduced exponential back‑off retries and integrated mDNS for local discovery when the upstream DNS was unreachable. I also profiled with Valgrind to keep memory usage under 2 MB.

**Result**  
The gateway resolved queries in an average of 7 ms, a 30 % improvement over the static approach, and maintained uptime above 99.8 %. The project demonstrated how understanding low‑level DNS mechanics can yield high‑performance, energy‑efficient solutions—an insight I carried into my subsequent work on edge AI inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
