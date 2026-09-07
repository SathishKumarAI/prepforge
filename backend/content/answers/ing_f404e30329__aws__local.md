---
qid: ing_f404e30329__aws__local
question: 'Explain: In-Flight Batching (Prefill-Decode Fusion)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:55-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑science team for a streaming media platform, we noticed that the inference latency of our transformer‑based captioning model was 350 ms per request, which broke our SLA (≤200 ms). The requirement: reduce latency without adding GPU capacity.

**Action**  
I proposed **In‑Flight Batching (Prefill‑Decode Fusion)**—a technique that merges multiple decoding steps across concurrent requests into a single GPU kernel.  
1. **Collect** incoming requests in a short window (~5 ms).  
2. **Pad** all prompts to the same length, then batch the *prefill* phase (embedding + first transformer layer) once per window.  
3. For the *decode* phase, use a *dynamic batching* scheduler that groups partially decoded tokens of different requests and feeds them into a shared decoder kernel.  

Implementation used **AWS Inferentia** with **Neural Edge Runtime**, orchestrated by an **Amazon SageMaker Endpoint** behind an **Application Load Balancer**. The batch size was auto‑scaled by a CloudWatch metric (GPU utilisation) using a Lambda controller.

**Result**  
Latency dropped from 350 ms to **140 ms** on average, and GPU utilisation rose from 45 % to 80 %. This allowed us to serve twice as many concurrent users while keeping cost unchanged. The model’s accuracy remained within 0.3 % of the baseline.

**Reflection**  
- *Ownership*: I owned the end‑to‑end pipeline and drove cross‑functional buy‑in.  
- *Dive Deep*: Profiling revealed the decoder was the bottleneck; batching solved it without hardware changes.  
- *Learning*: Initial attempts over‑batching caused memory spikes; we introduced a conservative window size after observing the trade‑off between latency and GPU memory.

This showcases Amazon’s **Customer Obsession** (improved user experience) and **Ownership** (full responsibility for performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
