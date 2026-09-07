---
qid: ing_267af811a6__faang__local
question: 'Q20: Explain reasoning models and controllable thinking. When are they
  worth the cost?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 575
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:13:21-05:00'
sources: []
---

**Q20 – Reasoning Models & Controllable Thinking**

---

### **1️⃣ Clarify**
You’re asked to explain two concepts that help a language model decide *what* to say and *how* to do it safely:  
- **Reasoning models** (e.g., chain‑of‑thought, self‑critical reasoning).  
- **Controllable thinking** (prompt or parameter controls that steer style/accuracy).  
Assumptions: the audience knows LLM basics; we’re focusing on when the extra computation and complexity are justified.

---

### **2️⃣ Approach**
1. Define each concept.  
2. Discuss trade‑offs (compute, latency, interpretability).  
3. Outline use‑case criteria that tip the balance toward adoption.

---

### **3️⃣ Depth**

| Concept | How it works | Typical cost | When useful |
|---------|--------------|--------------|-------------|
| **Reasoning models** | The model generates intermediate “thought” steps before an answer (e.g., *chain‑of‑thought*). Self‑critical reasoning adds a second pass to evaluate the first. | 2–3× token usage; inference latency ↑ by ~30 %. | Complex multi‑step queries, math/logic problems, debugging code, or any scenario where errors are costly. |
| **Controllable thinking** | External signals (prompt templates, temperature, top‑p, few‑shot examples) steer output style, confidence, or safety filters. Often implemented via prefix tuning or parameter prompts. | Minor overhead; may require extra prompt engineering time. | Regulatory compliance, brand voice consistency, or when the model must prioritize factuality over creativity. |

**When worth it?**  
- **High‑stakes domains** (healthcare, finance).  
- **Regulated content** (legal, medical advice).  
- **Customer‑facing products** where trust matters.  
If latency and cost are critical (e.g., real‑time chatbots) and the task is straightforward, a simple “direct answer” approach may suffice.

---

### **4️⃣ Edge Cases**
- *Over‑reasoning* can lead to hallucinations if intermediate steps are wrong.  
- Controllable signals may conflict with each other, causing unpredictable outputs.  
Test: benchmark accuracy vs. latency on representative queries; simulate adversarial prompts.

---

### **5️⃣ Optimize & Communicate**
- Use **adaptive inference**: run reasoning only when a confidence score dips below a threshold.  
- Cache intermediate thoughts for repeated sub‑tasks.  
Explain to stakeholders that the upfront cost is justified by higher precision and safety, especially where errors translate to real‑world harm or brand damage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
