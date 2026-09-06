---
qid: ing_e6c1c5b104__think__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 489
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:13:53-05:00'
sources: []
---

### 1️⃣ Clarify Scope & Constraints  
- **User‑centric goals** (speed, privacy, offline availability).  
- **Technical limits**: device CPU/GPU, battery, storage, network reliability.  
- **Business rules**: data sensitivity, compliance, cost model.

### 2️⃣ Mental Model: Trade‑off Triangle  
| Factor | On‑Device | Cloud |
|--------|-----------|-------|
| Latency | < 100 ms (instant) | Dependent on RTT & bandwidth |
| Privacy | High (data never leaves device) | Lower (payload sent to server) |
| Accuracy / Model size | Limited by device memory | Unlimited (large models, fine‑tuning) |
| Cost | Device‑side compute cost only | Server compute + data transfer fees |

### 3️⃣ Step‑by‑Step Reasoning  
1. **Profile user scenarios**: Are users offline? How often do they need instant summaries?  
2. **Estimate model size**: TinyBERT or DistilBART vs full BERT/ChatGPT.  
3. **Measure device resources**: 4‑core CPU, 8 GB RAM, on‑device GPU?  
4. **Compute latency budgets**: Target < 1 s for UX; check if on‑device inference meets it.  
5. **Privacy audit**: Does the data contain PII or regulatory constraints (GDPR)?  
6. **Cost model**: Cloud inference costs per request vs projected user base.  

If offline use, low latency, high privacy are paramount → **on‑device**.  
If accuracy is critical, data can be transmitted securely, and cost is acceptable → **cloud**.

### 4️⃣ Common Pitfalls to Avoid  
- Assuming all devices have the same GPU – check ARM vs Apple Silicon.  
- Neglecting battery impact of continuous inference.  
- Overlooking model updates: on‑device models need OTA rollouts; cloud models auto‑update.  

### 5️⃣ Communicate Clearly  
Present a concise table summarizing trade‑offs, then recommend a hybrid approach: lightweight on‑device summarization for instant needs, fallback to cloud for high‑accuracy or when network is good. This keeps the conversation focused and decision‑ready.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
