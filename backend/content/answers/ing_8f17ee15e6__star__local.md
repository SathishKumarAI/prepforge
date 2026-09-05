---
qid: ing_8f17ee15e6__star__local
question: Compare MCP's transports. When would you choose each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 503
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:19-05:00'
sources: []
---

**Situation:**  
In my last role I had to integrate the MCP SDK into a real‑time analytics dashboard for a retail client. The system needed to pull bulk inventory snapshots, stream live sales events, and keep mobile app users updated even on flaky networks.

**Task:**  
Decide which MCP transport—REST, WebSocket, or SignalR—to use for each data flow so the app met latency targets (≤150 ms), minimized bandwidth, and stayed resilient.

**Action:**  
I mapped REST to scheduled inventory pulls: its stateless request/response model kept server load low and was cache‑friendly. For live sales, I used WebSocket because it gives a single persistent connection with sub‑100 ms round‑trip for push notifications. Mobile clients ran SignalR; its automatic fallback (WebSocket → ServerSentEvents → LongPolling) ensured continuity when Wi‑Fi dropped to cellular.

**Result:**  
The dashboard achieved 120 ms average latency for events, cut data usage by 35% versus polling REST, and mobile app crash rate fell from 8 % to <1 %. I learned that transport choice is a trade‑off between real‑time needs, network reliability, and server cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
