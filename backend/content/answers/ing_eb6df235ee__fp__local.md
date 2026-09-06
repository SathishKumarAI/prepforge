---
qid: ing_eb6df235ee__fp__local
question: 'Explain: Web Browsing — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 443
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:19:51-05:00'
sources: []
---

**Why the Client‑Server model is indispensable for web browsing**

The web’s core problem is *distributed content delivery*: a vast number of users (clients) must retrieve, render, and interact with data stored on servers that may be geographically dispersed. To solve this, we decompose the system into two complementary layers:

| Layer | Responsibility | Why it works |
|-------|----------------|--------------|
| **Client** | UI rendering, local state, network I/O, user input | Keeps latency low by executing most work locally; reduces server load. |
| **Server** | Data persistence, business logic, authentication, content generation | Centralizes knowledge and resources that are too expensive or insecure to duplicate on every client. |

This decomposition follows the *information‑theoretic* principle of **redundancy minimization**: only data that must be shared is transmitted over the network; everything else stays local, cutting bandwidth and improving responsiveness.

**Key design pillars**

1. **Statelessness** – HTTP requests are independent; servers can scale horizontally because any node can handle any request.  
2. **Caching & Content Delivery Networks (CDNs)** – By placing edge caches close to users, we trade off consistency for latency, exploiting *cache locality* in network topology.  
3. **Security via authentication tokens** – Clients carry short‑lived tokens; servers verify them without storing per‑session state, satisfying the *principle of least privilege*.  

**Non‑obvious insight**

Most developers focus on *latency*, but a deeper bottleneck is *entropy*: every additional round‑trip increases uncertainty in request ordering. By batching requests (e.g., GraphQL or HTTP/2 multiplexing), we reduce entropy, enabling servers to process more efficiently and clients to render smoother UIs. This subtle interplay between network entropy and system throughput often explains why simply adding bandwidth does not yield proportional performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
