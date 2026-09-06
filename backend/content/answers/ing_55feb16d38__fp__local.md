---
qid: ing_55feb16d38__fp__local
question: How Do WebSockets Work? — Long Polling vs WebSockets - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 422
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:38-05:00'
sources: []
---

**Why a “push” channel is needed**

When a web page needs real‑time data (chat, stock tickers, game moves), the client can’t keep asking the server every few seconds—HTTP’s request/response model forces a new TCP handshake each time, wasting bandwidth and adding latency.  
The problem reduces to *maintaining an open, bidirectional communication channel with minimal overhead*.

**WebSocket as the optimal solution**

1. **Single TCP connection** – After the initial HTTP upgrade hand‑shake (a normal GET that includes `Upgrade: websocket`), the socket stays alive.  
2. **Full duplex** – Both sides can send frames independently, so no “request” or “reply” framing is required.  
3. **Low header cost** – Once upgraded, each frame carries only a 2‑byte overhead versus ~500 bytes of HTTP headers per request.

Mathematically this is an *information‑theoretic* improvement: we reduce the entropy of control messages (handshake + keep‑alive) to its minimal value while keeping channel capacity high. The trade‑off is that the server must now multiplex multiple logical streams over one socket, which it does by tagging frames with a stream ID.

**Long polling vs WebSocket**

| Feature | Long Polling | WebSocket |
|---------|--------------|-----------|
| Latency | One round‑trip per message | Zero round‑trips after handshake |
| Overhead | Full HTTP headers each poll | Tiny frame header |
| Server load | Many short connections | Few persistent connections |

**Non‑obvious insight**

Because the WebSocket protocol is *frame‑based*, a server can interleave messages from many clients over one TCP stream without needing to know which client “owns” a message. The only requirement is that each frame be self‑contained, enabling graceful handling of partial frames during network hiccups—something long polling cannot guarantee because it relies on full HTTP responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
