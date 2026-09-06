---
qid: ing_97b7325b76__think__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 499
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:08:45-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- The question asks *why RPC is disadvantageous for OS‑level interprocess communication* (IPC).  
- Assume we’re comparing RPC to other IPC mechanisms (pipes, shared memory, message queues, signals).  
- Focus on practical drawbacks: performance, reliability, complexity, security.

**2️⃣ Mental model / framework**  
Use the *“IPC trade‑off matrix”*:  

| Factor | RPC | Alternative IPC |
|--------|-----|-----------------|
| Latency | high (network stack + marshalling) | low (shared memory) |
| Complexity | requires stub code, IDL, transport layer | minimal (system calls) |
| Error handling | difficult to recover from partial failures | straightforward signals or error codes |
| Security | exposure of endpoints, potential spoofing | controlled by OS permissions |

**3️⃣ Step‑by‑step reasoning**  
- **Marshalling overhead:** RPC serializes arguments → CPU time & memory copy.  
- **Transport dependency:** Often uses sockets; adds kernel context switches and network stack delays even for local calls.  
- **Stub generation:** Must maintain client/server stubs, increasing code maintenance burden.  
- **Error propagation:** Network glitches can cause partial failures; detecting and recovering is non‑trivial compared to simple return codes.  
- **Security surface:** Exposed endpoints can be spoofed or hijacked unless additional authentication layers are added.

**4️⃣ Common traps & wrong turns**  
- *Assuming RPC is always slower*: For local calls, kernel‑based IPC (e.g., pipes) can still beat user‑space marshalling.  
- *Ignoring context switches*: Even a simple `send/recv` over a socket causes two context switches; forget this and under‑estimate latency.  
- *Overlooking maintenance cost*: New services or changes require re‑generating stubs—often ignored in quick prototypes.

**5️⃣ Sanity‑check & verbalize**  
Re‑state the key disadvantages: high overhead, extra code complexity, fragile error handling, expanded attack surface.  
Check against a real system (e.g., Linux `nfsd` RPC vs. `memfd`).  
Conclude that while RPC shines for distributed systems, it’s a poor fit for tight OS‑level IPC where speed and simplicity dominate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
