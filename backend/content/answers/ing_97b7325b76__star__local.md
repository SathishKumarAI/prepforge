---
qid: ing_97b7325b76__star__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 325
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:07-05:00'
sources: []
---

**Situation:** In my senior year capstone, we built a distributed machine‑learning inference service that needed low‑latency predictions across data centers. The team chose gRPC (an RPC framework) to expose model endpoints because of its language‑agnostic support.

**Task:** I had to evaluate whether RPC was the right transport for our latency‑critical workload and identify any hidden drawbacks before production rollout.

**Action:** I set up a microbenchmark comparing plain TCP sockets, HTTP/2, and gRPC. I instrumented request serialization/deserialization times, connection‑establishment overhead, and error‑handling paths. I also introduced a fault‑injection test to simulate packet loss and observe RPC retry semantics. While profiling with `perf` and `wireshark`, I noted that the protobuf marshaling added ~15 µs per call, and gRPC’s built‑in flow control caused back‑pressure spikes when workers throttled.

**Result:** The tests revealed a 30 % higher average latency on peak traffic versus raw sockets, mainly due to RPC framing and retry logic. We switched to a lightweight binary protocol for the critical path, reducing inference latency by 22 ms per request and improving throughput from 1.2k to 1.8k requests/sec. I learned that while RPC simplifies integration, its abstraction layers can be costly in latency‑sensitive ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
