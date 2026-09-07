---
qid: ing_a92df60325__faang__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 549
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:45-05:00'
sources: []
---

**Clarify**  
We’re building a server‑side endpoint that streams generated tokens (e.g., from an LLM) back to the client as they become available. The client may drop the connection at any time, so we must cleanly cancel the generation and free resources. Assume HTTP/2 or WebSocket transport and a token‑generator function `generate_next()` that yields one token at a time.

**Approach**  
1. Accept the request and create an async generator that pulls tokens from the model.  
2. Push each token to the client via the streaming response (SSE, chunked transfer, or WebSocket).  
3. Wrap the stream in a `try/except` block that catches connection‑abort exceptions (`asyncio.CancelledError`, `WebSocketDisconnect`).  
4. On disconnect, cancel the generator task and log the event.

**Depth**  
```python
import asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

async def token_stream():
    async for token in generate_next():   # generator yielding tokens
        yield token

@app.websocket("/stream")
async def stream_endpoint(ws: WebSocket):
    await ws.accept()
    task = None
    try:
        async for tok in token_stream():
            await ws.send_text(tok)
    except (WebSocketDisconnect, asyncio.CancelledError) as exc:
        # Client dropped; cancel any remaining work
        if task and not task.done():
            task.cancel()
        logger.info(f"Client disconnected: {exc}")
    finally:
        await ws.close()
```
- **Complexity**: O(N) where N is the number of tokens generated.  
- **Trade‑offs**: Using WebSocket keeps latency low; SSE would be simpler but less flexible.

**Edge Cases**  
- Network hiccups causing transient disconnects → retry logic on client side.  
- Server crashes while streaming → ensure graceful shutdown via `finally`.  
- Backpressure if client processes slower than generation → implement flow control or buffer limits.

**Optimize & Communicate**  
To reduce memory churn, stream tokens directly without buffering the entire response. For higher throughput, batch a few tokens per message (e.g., 5–10). Explain to interviewers that this pattern decouples token generation from transport, enabling graceful cancellation and efficient resource usage—exactly what FAANG systems expect for robust real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
