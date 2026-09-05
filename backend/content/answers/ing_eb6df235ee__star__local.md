---
qid: ing_eb6df235ee__star__local
question: 'Explain: Web Browsing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 314
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:19:25-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with designing a lightweight, high‑throughput web browsing service for an IoT device that needed to fetch and render dynamic content on a low‑power microcontroller.

**Task:**  
I had to create a client–server architecture that minimized latency, reduced bandwidth usage, and allowed secure authentication while still supporting standard HTTP/HTTPS requests.

**Action:**  
First I profiled the device’s network stack and identified packet overhead as the bottleneck. I implemented a custom HTTP client in Rust using async‑await, leveraging `hyper` for non‑blocking IO. On the server side I built a Node.js Express API that served JSON payloads compressed with Brotli, added JWT‑based authentication, and used Redis caching to keep hot routes under 5 ms. To cut down on round trips, I introduced a GraphQL endpoint so the client could request only the fields it needed. I also set up mutual TLS to secure traffic between device and server.

**Result:**  
The new design cut page load time from 1.8 s to 0.4 s (78% faster) and reduced bandwidth by 60%. The system handled 200 concurrent IoT clients with <30 ms latency, meeting our real‑time requirement. I learned that thoughtful protocol choice and data shaping can drastically improve performance in constrained environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
