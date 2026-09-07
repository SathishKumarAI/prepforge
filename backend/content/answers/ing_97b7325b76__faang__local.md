---
qid: ing_97b7325b76__faang__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 557
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:38-05:00'
sources: []
---

**Clarify**  
The question asks for the *disadvantages* of using **Remote Procedure Call (RPC)** as a communication mechanism in operating systems, as discussed on GeeksforGeeks. I’ll assume we’re comparing RPC to local calls and other IPC mechanisms, focusing on typical OS‑level concerns: performance, reliability, security, and complexity.

**Approach**  
1. List key drawbacks of RPC.  
2. Explain why each is a problem for an OS (latency, resource usage, etc.).  
3. Provide concrete examples or metrics when possible.  
4. Conclude with a quick note on mitigation strategies.

**Depth**

| Disadvantage | Why it hurts in OS |
|--------------|-------------------|
| **High Latency & Overhead** | Serialization/deserialization and network stack traversal add milliseconds; critical OS tasks (e.g., device drivers) need micro‑second responsiveness. |
| **Dependency on Network Stack** | Any packet loss or congestion propagates to the RPC call, turning a deterministic local function into an unreliable service. |
| **Error Propagation & Recovery Complexity** | Remote failures must be translated into local exceptions; retry logic increases code complexity and can cause deadlocks if not carefully designed. |
| **Security Surface Expansion** | Exposing services over a network opens attack vectors (unauthenticated calls, injection); OS kernels must enforce strict authentication/authorization, adding overhead. |
| **Resource Consumption** | Each RPC creates sockets, buffers, and context switches; scaling to many clients can exhaust kernel memory and file descriptors. |
| **Debugging Difficulty** | Stack traces cross process boundaries; tracing bugs requires distributed debugging tools that are harder to maintain in production kernels. |

**Edge Cases**

- *Real‑time systems*: Even a few milliseconds of RPC latency violates timing guarantees.  
- *High‑traffic microservices on the same host*: RPC overhead dominates over shared memory IPC.  
- *Security breaches*: Misconfigured RPC can expose privileged kernel functions.

**Optimize & Communicate**

To mitigate, operating systems often prefer **shared memory + event notification**, or lightweight **system calls** for intra‑kernel communication. If RPC is unavoidable (e.g., between VMs), techniques like **Zero‑Copy serialization**, **pre‑allocated buffers**, and **TLS termination at the gateway** reduce latency. Communicating this to interviewers: I’d emphasize that while RPC offers language-agnostic, modular design, its performance, reliability, and security costs make it unsuitable for low‑latency OS internals, whereas specialized IPC primitives provide the needed determinism and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
