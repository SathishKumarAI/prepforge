---
qid: ing_ab7bd96f2f__star__local
question: 'Explain: WebSockets — Long Polling vs WebSockets - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 330
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:38-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with adding real‑time price updates to a trading dashboard for a fintech startup. The existing API only supported REST, so we had to decide how to push data to the browser without overwhelming the server or causing noticeable latency.

**Task:**  
I needed to evaluate two common approaches—Long Polling and WebSockets—to determine which would give us sub‑second updates while keeping bandwidth efficient and scalable for thousands of concurrent users.

**Action:**  
First, I benchmarked Long Polling: each client sends a GET request that stays open until the server pushes an update or times out after 30 s. I measured round‑trip latency (~250 ms) but found that with 5,000 connections the server had to maintain thousands of idle sockets and perform frequent checks, leading to high CPU usage.  
Next, I implemented a lightweight WebSocket service using Node.js and `ws`. Clients establish a single persistent TCP connection; the server pushes JSON payloads instantly. This cut latency to ~30 ms, reduced server load by 60 %, and lowered network overhead because only data changes are transmitted.

**Result:**  
We switched to WebSockets, achieving near real‑time updates with less than 50 KB/s per user and a 70 % reduction in backend resource consumption. I learned that while Long Polling is simple to implement on legacy systems, WebSockets offer superior scalability and performance for true real‑time applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
