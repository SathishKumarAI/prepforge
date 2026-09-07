---
qid: ing_ee0b6bab1f__faang__local
question: 'Explain: Decision Framework: Engine per Workload — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:45-05:00'
sources: []
---

**Clarify**  
The question asks how an AI‑driven “decision framework” selects a dedicated inference engine for each workload in a serving infrastructure (e.g., model type, latency target, resource constraints). I’d confirm whether we’re talking about on‑prem vs cloud, single vs multi‑tenant workloads, and the performance metrics that drive the choice.

**Approach**  
1. Profile the workload: compute intensity, input size, batch size, SLA.  
2. Enumerate candidate engines (TensorRT, ONNX Runtime, PyTorch Serve, Triton).  
3. Score each engine on latency, throughput, memory footprint, and hardware affinity.  
4. Pick the engine that satisfies the SLA with minimal resource usage; fall back to a generic engine if none meet constraints.

**Depth**  
- **Profiling** uses synthetic runs or historical logs to capture kernel execution times.  
- **Scoring** employs weighted cost functions: `score = w1*latency + w2*throughput + w3*memory`.  
- Engine selection is cached per model signature; re‑evaluation occurs on model updates or hardware changes.  
Complexity: profiling O(n) per workload, engine lookup O(1). Trade‑off: heavier profiling yields better accuracy but increases deployment latency.

**Edge Cases**  
- New models with no prior stats → default to a conservative engine (e.g., ONNX Runtime).  
- Hardware failure → automatic re‑routing.  
- Multi‑tenant workloads with conflicting SLAs → partitioned inference queues.

**Optimize & Communicate**  
We can pre‑train “engine fingerprints” for common architectures, reducing profiling time. Explain the decision tree to interviewers: “I first quantify workload demands, then map them to engine capabilities, finally pick the minimal‑cost match.” This shows clear reasoning, acknowledges trade‑offs, and demonstrates a systematic engineering mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
