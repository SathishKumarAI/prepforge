---
qid: ing_b41164c16c__faang__local
question: 'Explain: Context & Memory Management <a name="context-memory"></a>'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:45-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how modern LLMs handle *context* (the text fed in a single request) and *memory* (information carried across turns). I’ll assume we’re talking about transformer‑based models used by Meta/Google/others, not symbolic systems.

---

**Approach**  
1. Define the two concepts.  
2. Explain the token‑budget limit & sliding windows for context.  
3. Describe explicit memory mechanisms: prompt engineering, external KV stores, or fine‑tuned recurrent adapters.  
4. Summarize trade‑offs and typical use cases.

---

**Depth**

| Concept | Mechanism | Key Points |
|---------|-----------|------------|
| **Context** | Token window (e.g., 8 k tokens) | • Model processes the entire sequence in parallel.<br>• Attention weights decay with distance; long‑range dependencies suffer unless engineered. |
| **Memory** | 1️⃣ Prompt replay / “history prompt”<br>2️⃣ External KV cache<br>3️⃣ Fine‑tuned memory adapters (e.g., Transformer‑XL, Compressive Transformers) | • Prompt replay concatenates prior turns—cheap but inflates token count.<br>• KV cache stores past key/value pairs and reuses them across calls—efficient for streaming.<br>• Memory adapters compress past activations into a small vector that can be concatenated to new inputs. |

Complexity: Sliding window is **O(n log n)** per forward pass; external caches add negligible overhead. Trade‑off: larger context → better coherence but higher latency and GPU memory.

---

**Edge Cases**

- Exceeding token budget → truncation or summarization required.  
- Highly repetitive dialogue → prompt replay may cause “hallucination” if old info is stale.  
- Long‑term knowledge (years of data) cannot be stored in a single pass; requires hierarchical memory or retrieval systems.

---

**Optimize & Communicate**

*Improvements*: Hybrid approach—use KV cache for immediate past turns, compress distant history into a learned vector, and retrieve relevant facts from an external database when needed.  
*Narration*: “We treat context as the window we can directly feed to the transformer; memory is everything else we bring in behind the scenes so that the model feels ‘aware’ of the conversation without blowing up the token budget.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
