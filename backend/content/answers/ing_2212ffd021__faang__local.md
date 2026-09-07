---
qid: ing_2212ffd021__faang__local
question: 'Explain: Python MCP Server (FastMCP) — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 778
total_tokens: 1014
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:04:01-05:00'
sources: []
---

**Clarify**  
You’re asking how to build a *Python MCP* (Multi‑Client Protocol) server—specifically the FastMCP variant—to host AI “tool agents” that can be invoked by clients.  
Assumptions:  
1. Clients connect over TCP/Unix sockets.  
2. Each agent is a stateless Python function exposed via RPC.  
3. We want low latency, high concurrency, and graceful shutdown.

**Approach**  
1. **Protocol Design** – JSON‑over‑TCP with message framing (4‑byte length header).  
2. **Server Skeleton** – `asyncio` event loop + `StreamReader/Writer`.  
3. **Agent Registry** – map names → async callables.  
4. **Request Handling** – parse, dispatch, serialize response.  
5. **Concurrency & Scaling** – use a thread‑pool for CPU‑bound agents; keep I/O in the event loop.  
6. **Graceful Shutdown** – signal handling + cancel all tasks.

**Depth**  
```python
import asyncio, json, signal

agents = {}

def register(name):
    def decorator(fn):  # fn must be async or sync
        agents[name] = fn
        return fn
    return decorator

async def handle(reader, writer):
    while True:
        hdr = await reader.readexactly(4)
        size = int.from_bytes(hdr, 'big')
        data = await reader.readexactly(size)
        req  = json.loads(data.decode())
        name = req['name']; args=req.get('args',{})

        fn   = agents[name]
        if asyncio.iscoroutinefunction(fn):
            res = await fn(**args)
        else:  # CPU bound
            loop = asyncio.get_running_loop()
            res = await loop.run_in_executor(None, fn, **args)

        resp = json.dumps({'result':res}).encode()
        writer.write(len(resp).to_bytes(4,'big')+resp)
        await writer.drain()

async def main(host='0.0.0.0', port=9000):
    srv = await asyncio.start_server(handle, host, port)
    loop = asyncio.get_running_loop()
    for s in (signal.SIGINT, signal.SIGTERM):
        loop.add_signal_handler(s, srv.close)
    async with srv:
        await srv.serve_forever()

# Example agent
@register('add')
async def add(a:int,b:int): return a+b

if __name__=='__main__':
    asyncio.run(main())
```
*Complexity*: O(1) per request (ignoring serialization).  
*Trade‑offs*: All agents share one event loop; CPU‑heavy tasks are offloaded to threads.

**Edge Cases**  
- Malformed JSON → send error frame.  
- Unknown agent name → 404‑style error.  
- Large payloads → enforce max size.  
- Client disconnect → break loop gracefully.

**Optimize & Communicate**  
1. **Batching** – allow multiple calls per connection to reduce framing overhead.  
2. **Connection pooling** on client side for lower latency.  
3. **Metrics** – expose Prometheus counters (`requests_total`, `latency_seconds`).  
4. **Documentation** – auto‑generate OpenAPI spec from registry.

Narration: “We start by defining a lightweight, length‑prefixed JSON protocol that’s easy to parse and fast. The server uses asyncio for I/O concurrency; CPU‑bound agents are run in a thread pool so the event loop stays responsive. Graceful shutdown is achieved via signal handlers that close the listening socket while letting current tasks finish.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
