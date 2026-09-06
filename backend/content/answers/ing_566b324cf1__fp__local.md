---
qid: ing_566b324cf1__fp__local
question: 'Explain: Context Switching — Cloud Computing without Containers | Cloudflare
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 390
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:08:33-05:00'
sources: []
---

**Context switching in “cloud computing without containers”**

The *fundamental problem* is that a cloud platform must run many, often unrelated, workloads on shared hardware while guaranteeing isolation and predictability. Traditional operating‑system (OS) context switches—saving registers, page tables, cache state, etc.—are expensive; the cost rises sharply when every tenant gets its own VM or container image.

Cloudflare’s approach replaces that OS‑level switch with a *lightweight task scheduler* built into their runtime (e.g., Cloudflare Workers). Each “context” is merely an in‑memory function plus a small, immutable snapshot of required state. When the scheduler hands control to a new function, it restores only the minimal set of CPU registers and a pointer to that function’s environment; it does **not** need to re‑map memory pages or flush caches. The OS sees no new process launch, so the kernel’s heavy context‑switch machinery is bypassed.

Why this must work:  
1. **Isolation by design** – each function runs in its own sandboxed address space, protected by hardware (e.g., Intel SGX) or software traps.  
2. **Predictable latency** – because no page faults or cache thrashing occurs during the switch, execution time is bounded.  
3. **Scalability** – millions of functions can be multiplexed on a single core without kernel overhead.

A *non‑obvious insight* is that by treating each function as a *stateless* object (its state is passed in via arguments), Cloudflare turns the traditionally expensive “process boundary” into a simple “function boundary.” The scheduler’s cost becomes dominated by memory bandwidth, not OS bookkeeping. This reframes context switching from an OS problem to a pure scheduling one, enabling near‑real‑time cloud services without containers or VMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
