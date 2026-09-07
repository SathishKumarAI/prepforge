---
qid: ing_8251ca9145__faang__local
question: 'Explain: What is a good latency for a conversational AI agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 529
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:39-05:00'
sources: []
---

**1️⃣ Clarify**  
The question asks for an *acceptable latency* when users interact with a conversational AI (e.g., chatbots or voice assistants).  
Key assumptions I’d confirm:  

- **Interaction mode:** text vs. spoken.  
- **User expectations:** typical human‑human reply times (~1–2 s).  
- **Use case:** casual chat, customer support, real‑time control.  

**2️⃣ Approach**  
I’ll define latency in two parts: *network* + *processing*. Then map target ranges to user experience categories and justify them with industry benchmarks.

**3️⃣ Depth**  
| Interaction | Target Latency | Rationale |
|-------------|----------------|-----------|
| **Text chat** | 200–500 ms (per turn) | Allows back‑to‑back typing; keeps flow natural. Google’s Search AI replies in ~300 ms. |
| **Voice assistant** | 300–700 ms | Speech synthesis & recognition add ~200 ms; still feels conversational. Alexa’s “quick” responses are <1 s. |
| **Real‑time control (e.g., driving, gaming)** | ≤150 ms | Low jitter needed for safety; matches typical human reaction times (~200 ms). |

- **Processing**: Use model pruning or distillation to keep inference <100 ms on edge devices; otherwise offload to GPU clusters with 1–2 s network RTT.  
- **Trade‑offs**: Lower latency → smaller models, less context; higher latency → richer dialogue but risk of user frustration.

**4️⃣ Edge Cases**  
- *Network congestion*: fallback to cached responses or simplified prompts.  
- *Complex queries*: batch processing may exceed 1 s—prompt users with “I’m working on that.”  
- *Multilingual support*: additional tokenization can add ~50 ms; plan for language‑specific pipelines.

**5️⃣ Optimize & Communicate**  
To improve:  
- **Cache frequent intents** (e.g., FAQ).  
- **Quantize weights** to 8‑bit, reducing inference time by ~2×.  
- **Pipeline parallelism** on multi‑GPU setups reduces per‑turn latency by 30 %.  

I’d narrate these decisions by mapping user‑perceived wait times to business KPIs (conversion rates, CSAT), showing how each optimization directly impacts the bottom line.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
