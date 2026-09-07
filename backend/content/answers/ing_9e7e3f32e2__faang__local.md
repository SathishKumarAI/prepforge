---
qid: ing_9e7e3f32e2__faang__local
question: 'Explain: On-Device and Edge Deployment — On Device And Edge Deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 531
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:32-05:00'
sources: []
---

**Clarify**  
You’re asking for a comparison of *on‑device* versus *edge* deployment of AI models—i.e., running inference directly on a mobile device (smartphone, smartwatch) vs. on an intermediate gateway or local server that sits between the cloud and end devices. I’ll assume we’re focusing on latency, bandwidth, privacy, cost, and scalability.

**Approach**  
1. Define each paradigm.  
2. List core trade‑offs: compute, power, network, data ownership.  
3. Illustrate with typical use cases.  
4. Summarize when to choose which.

**Depth**  
| Aspect | On‑Device | Edge |
|--------|-----------|------|
| **Latency** | <10 ms (depends on CPU/GPU). | 5–50 ms (adds one hop). |
| **Bandwidth** | None (no cloud traffic). | Small bursts to edge; still less than cloud. |
| **Privacy** | Highest—data never leaves device. | Moderate—data may be aggregated at edge node. |
| **Power/Heat** | Limited; requires model compression, quantization. | Edge nodes can be more powerful but consume extra energy. |
| **Scalability** | Each device must ship a new model build. | Centralized updates to the edge fleet. |
| **Reliability** | Independent of connectivity. | Depends on edge node uptime. |

Typical scenarios:  
- *On‑device*: AR filters, offline translation, health monitoring on wearables.  
- *Edge*: Smart cameras in factories, IoT hubs aggregating sensor streams, autonomous vehicles’ perception modules that still rely on a local server for heavy tasks.

**Edge Cases**  
- Devices with severe thermal limits may not handle even compressed models.  
- Edge nodes behind strict firewalls might block updates or violate data‑locality laws.  
- Very large model sizes (e.g., GPT‑3) cannot fit on any device, forcing edge/cloud.

**Optimize & Communicate**  
To improve latency further, combine both: run lightweight inference on-device and offload only complex sub‑tasks to the edge. Communicate this layered strategy clearly in a presentation: “We’ll first shave 20 ms by keeping the core model local, then use the edge for anything that needs heavier compute or collective intelligence.” This showcases structured thinking, depth of trade‑offs, and practical deployment insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
