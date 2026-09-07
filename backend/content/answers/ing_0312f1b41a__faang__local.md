---
qid: ing_0312f1b41a__faang__local
question: 'Explain: Implementing WebSockets — What are WebSockets and Why are they
  Used?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 484
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:10-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** *Explain what WebSockets are and why we use them in ML‑centric web apps.*  
Assumptions to confirm:  
- Audience knows HTTP basics.  
- Focus is on real‑time data flow (e.g., streaming predictions, model updates).  

## 2️⃣ Approach  
1. Define the protocol (TCP‑level handshake → persistent duplex channel).  
2. Contrast with polling/long‑polling.  
3. Highlight typical ML use‑cases (live inference dashboards, federated learning sync).  

## 3️⃣ Depth  
WebSocket is a TCP‑based protocol that upgrades an HTTP request to a full‑duplex, low‑latency connection. After the handshake (`GET /ws` + `Upgrade: websocket`), both client and server can send frames at any time without re‑establishing connections.  

Why it matters for ML workloads:  
- **Streaming predictions:** A model deployed on the edge streams results to a browser dashboard with sub‑100 ms latency.  
- **Model lifecycle updates:** During federated learning, clients push gradients and pull new weights instantly.  
- **Stateful interactions:** Interactive visualizations (e.g., feature importance heatmaps) update in real time as users tweak parameters.  

Compared to HTTP polling: WebSocket eliminates request/response overhead (~2 × fewer round trips), reduces bandwidth (no repeated headers), and supports server‑initiated messages, which is essential for push‑based ML pipelines.

## 4️⃣ Edge Cases  
- **Network intermediaries:** Some corporate proxies block non‑HTTP ports; fallback to long‑polling.  
- **Browser compatibility:** Older browsers need polyfills or SockJS.  
- **Security:** Must use `wss://` and validate origins to prevent CSRF.  

## 5️⃣ Optimize & Communicate  
To scale, multiplex multiple logical streams over one socket (e.g., using sub‑protocols) and employ back‑pressure control (`window-size`). When explaining, walk the interviewer through a concrete ML workflow: *client requests inference → server pushes results via WebSocket*, highlighting latency gains. This showcases clear reasoning, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
