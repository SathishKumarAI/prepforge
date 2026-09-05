---
qid: ing_319435d8fe__fp__local
question: 'Explain: How RPC Works (Step by Step) — Remote Procedure Call (RPC) in
  Operating System - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 457
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:12-05:00'
sources: []
---

### Why RPC is Needed  
In a distributed OS, processes live on different machines but must cooperate as if they were local. The *fundamental problem* is **procedure abstraction over a network**: we want to call a function on a remote host without exposing its internals or dealing with sockets manually.  

### Step‑by‑step Mechanics  

1. **Client Stub Generation**  
   - A compiler parses the interface definition (e.g., an IDL file).  
   - It emits a *client stub* that looks like a normal function: `int add(int, int)`.  

2. **Marshalling**  
   - Inside the stub, arguments are serialized into a byte stream (`marshaling`).  
   - The format must be *platform‑agnostic* (endianness, alignment), hence the use of protocols like XDR or Protocol Buffers.  

3. **Transport**  
   - The stub sends the marshaled packet over a transport layer (TCP/UDP).  
   - The OS handles socket creation, connection establishment, and reliability.  

4. **Server Stub Reception**  
   - A *server stub* on the remote machine receives the packet, unmarshals it back into native types, and performs a local dispatch to the actual implementation function.  

5. **Execution & Return Path**  
   - The server function runs, producing a result (or exception).  
   - Its return value is marshaled again, sent back through the same transport channel, and finally unmarshaled by the client stub into the caller’s context.  

6. **Error Handling**  
   - Network faults or protocol mismatches are reported as exceptions to keep the API clean.  

### Non‑Obvious Insight  
The *marshalling* step is essentially a small instance of the **information bottleneck principle**: you compress all the information needed for execution into a minimal, transportable representation while preserving semantics. This compression guarantees that RPC scales—network bandwidth and latency dominate, so keeping the payload tiny is the real optimization, not just the function call itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
