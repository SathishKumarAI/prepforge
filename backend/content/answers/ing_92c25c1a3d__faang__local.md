---
qid: ing_92c25c1a3d__faang__local
question: 'Explain: WebSockets vs. HTTP, Polling, and Long-Polling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 680
total_tokens: 919
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:49-05:00'
sources: []
---

**Clarify**  
We’re comparing four client‑server communication patterns for real‑time data:  

1. **HTTP (short request/response)** – stateless, one‑off.  
2. **Polling** – periodic HTTP requests to ask “any new data?”  
3. **Long‑polling** – a single request that the server holds open until it has something to send.  
4. **WebSockets** – a full‑duplex TCP connection upgraded from HTTP, keeping a persistent channel.

Key assumptions: low latency is required; traffic can be bursty; servers must scale horizontally; clients may be browsers or mobile apps.

---

**Approach**  
For each pattern list:  

*Connection model* → *Latency & overhead* → *Scalability* → *Browser support* → *Use‑case fit.*

---

**Depth**

| Pattern | Connection | Latency | Overhead | Scalability | Browser Support | Typical Use |
|---------|------------|--------|----------|-------------|-----------------|--------------|
| **HTTP** | Stateless, one‑off | ~200 ms+ (network round‑trip) | Minimal per request | Excellent – no long‑lived sockets | Universal | CRUD APIs |
| **Polling** | Repeated HTTP GETs | Latency ≈ poll interval + RTT | High: many requests, server load | Poor if intervals < 1 s; mitigated by scaling & CDN | Universal | Simple notifications (e.g., Slack web) |
| **Long‑polling** | Single request held until data | Near‑instant on new data; small wait otherwise | Moderate: one open connection per client | Better than polling; still per‑connection overhead; can use reverse proxies | Universal, but browsers may throttle idle sockets | Chat apps pre‑WebSocket |
| **WebSockets** | Persistent TCP socket (upgrade) | < 10 ms once connected | Low after handshake | Excellent – many concurrent connections, no extra HTTP traffic | All modern browsers & mobile SDKs | Real‑time games, live dashboards |

*Trade‑offs*: WebSockets need a firewall/NGINX to keep sockets alive; long‑polling works through strict NAT/firewalls without upgrades. Polling is simplest but wasteful.

---

**Edge Cases**

* Network partitions → WebSocket reconnect logic needed.  
* Browser idle timeouts → long‑polling may be throttled on mobile browsers.  
* Legacy clients (no JS) → must fall back to polling or server‑sent events.

Test with varying client counts, burst traffic, and intermittent network loss to verify reconnection strategies.

---

**Optimize & Communicate**

- **Hybrid strategy**: start with long‑polling for backward compatibility; upgrade to WebSocket when supported.  
- **Backpressure**: implement flow control (e.g., `window` size) on WebSockets to avoid flooding clients.  
- **Health checks**: use ping/pong frames or keep‑alive HTTP requests.

When explaining, emphasize the “latency vs. overhead” trade‑off and how each pattern maps to a specific problem space. This shows clear reasoning, technical depth, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
