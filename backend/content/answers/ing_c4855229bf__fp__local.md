---
qid: ing_c4855229bf__fp__local
question: How Does Long Polling Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 572
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:54-05:00'
sources: []
---

**Why the browser needs a “handshake” with the server**

A web page can only read data that arrives through its TCP connection.  
When a user wants real‑time updates (chat, stock tickers, notifications) the
server must *push* information without the client repeatedly asking for it.
The naive way is polling: the browser sends a request every few seconds,
but this wastes bandwidth and latency.

**Long polling turns “poll” into “wait”.**

1. **Client → Server** – The browser issues an HTTP `GET` (or `POST`) that
   *does not expect an immediate response*.
2. **Server** – If there is new data, it replies immediately.  
   If nothing has changed, the server keeps the connection open,
   holding the request until either:
   - New data arrives, or
   - A timeout (≈ 30–60 s) occurs.
3. **Client** – As soon as a response arrives, the browser processes it and
   immediately issues another long‑poll request.

Mathematically, this is equivalent to a *continuous observation* of a Poisson
arrival process: the server returns the next event in real time, while the
client’s single open connection behaves like an asynchronous iterator.

**Why it works better than plain polling**

- **Bandwidth** – Only one TCP handshake per update instead of many idle
  handshakes.
- **Latency** – The moment data is ready, the server pushes it; no periodic
  delay.
- **Scalability** – HTTP/1.1 keeps connections lightweight; servers can keep
  thousands open with async I/O.

**Contrast with WebSockets**

| Feature | Long Polling | WebSocket |
|---------|--------------|-----------|
| Protocol | HTTP (stateless) | TCP‑level duplex |
| Connection count | One request per update | Persistent bidirectional socket |
| Server model | “Push on demand” via open request | Continuous stream, easier to multiplex |
| Browser support | Universal | Widely supported but requires upgrade handshake |

**Hidden insight**

Long polling is *not* a new transport; it’s an **optimization of the HTTP
request–response cycle that mimics push by turning idle time into a waiting
state**. The server never needs to maintain a dedicated socket per client;
it only holds the request open until data arrives, thereby conserving both
memory and CPU while preserving the statelessness of HTTP.

In short: long polling converts the *request* into a *wait‑for‑event*
primitive, giving real‑time behaviour with minimal protocol overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
