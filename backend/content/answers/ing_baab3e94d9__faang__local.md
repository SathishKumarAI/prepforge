---
qid: ing_baab3e94d9__faang__local
question: 'Explain: Questions that actually matter — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:46-05:00'
sources: []
---

**Clarify**  
You’re asking how to design a mobile‑device ML system that can answer *“what questions actually matter”*—i.e., surface the most relevant user queries or intents given limited compute, latency, and battery constraints. I’ll assume we need: (1) real‑time inference on-device; (2) privacy‑preserving data handling; (3) a continuous learning loop that adapts to new user contexts.

**Approach**  
1. **Data pipeline** – collect lightweight sensor logs (touch, accelerometer), anonymized text snippets, and contextual metadata.  
2. **Model architecture** – lightweight transformer (e.g., MobileBERT) fine‑tuned on intent classification + question relevance scoring.  
3. **Inference engine** – quantize to 8‑bit, use ONNX runtime with hardware acceleration (DSP/Neural Engine).  
4. **Feedback loop** – user interactions trigger edge‑based re‑ranking; periodic secure uploads for federated learning.

**Depth**  
- *Training*: Use a multi‑task loss combining cross‑entropy for intent + regression for relevance. Train on a distributed cluster, then distill to MobileBERT.  
- *Inference*: Latency < 50 ms, memory < 30 MB; achieved by layer pruning (≈80%) and dynamic batching of user events.  
- *Privacy*: All raw text is tokenized locally; only hashed embeddings are sent for federated averaging.  
- *Evaluation*: Precision‑at‑k on held‑out query logs; A/B test battery impact (≤5 % increase).  

**Edge Cases**  
- Low‑signal devices: fallback to rule‑based heuristics when GPU unavailable.  
- Multilingual users: use language‑agnostic embeddings or per‑language sub‑models.  
- Rare intents: handle via zero‑shot transfer learning.

**Optimize & Communicate**  
Future improvements: (1) Adaptive quantization based on current battery level; (2) On‑device curriculum learning to prioritize high‑impact intents. I’d present the design with a clear diagram, walk through the data flow, and emphasize trade‑offs between accuracy, latency, and energy—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
