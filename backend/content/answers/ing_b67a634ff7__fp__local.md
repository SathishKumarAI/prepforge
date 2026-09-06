---
qid: ing_b67a634ff7__fp__local
question: You are exposing retrieval as a tool to an agent, over MCP. How does designing
  a tool interface differ from designing a retrieval API?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 467
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:53-05:00'
sources: []
---

**Fundamental problem**

A *retrieval API* is a low‑level contract: “give me the best matching document for query q.” The interface is static, one‑shot, and optimizes latency/throughput.  
A *tool interface* on an MPC (multi‑party computation) platform must answer a different question: *how can an untrusted agent invoke retrieval while keeping its intent secret, yet still obtain useful information?* This shifts the design from pure efficiency to cryptographic privacy and composability.

**Why it must differ**

1. **Statefulness & Context**  
   The agent’s successive calls depend on prior results; the tool must maintain a private session state across MPC rounds, whereas an API usually treats each request as independent.

2. **Side‑channel control**  
   In an API, timing or size leaks are tolerable. In a tool, any observable side‑channel can reveal query content or policy constraints, so the interface must enforce *constant‑time* and *fixed‑size* communication patterns.

3. **Error handling & rollback**  
   An agent may abort mid‑search; the tool must support atomic rollback in MPC, whereas an API simply returns an error code.

4. **Compositional semantics**  
   The tool must expose a clean “invoke”/“close” pair that can be chained with other MPC sub‑protocols (e.g., encryption, aggregation) without leaking auxiliary data.

**Deeper principle**

Both aim to *optimize* the same objective—retrieve useful information—but under different constraints. In retrieval APIs, optimization is computational; in tool interfaces, it’s a *security–performance* trade‑off governed by cryptographic composability theorems.

**Non‑obvious insight**

The most subtle difference lies in **metadata leakage**: even if the retrieved content remains hidden, the *shape* of the result set (e.g., number of hits) can reveal the query. A tool interface must therefore include a *dummy padding* or *query obfuscation* layer that decouples observable outputs from actual retrieval success—something an ordinary API never considers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
