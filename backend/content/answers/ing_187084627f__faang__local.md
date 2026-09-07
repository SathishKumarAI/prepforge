---
qid: ing_187084627f__faang__local
question: 'Explain: Step 1. Do the work manually — How Do AI Agents Work - by Neo
  Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 421
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:20-05:00'
sources: []
---

**Step 1 – “Do the work manually”**  
*How do AI agents work? – Neo Kim & Fran Soto*

---

### **Clarify**
The question asks us to explain the first step in building an AI agent: *manually performing the task we want the agent to learn*.  
Assumptions to confirm:
- The target domain is a well‑defined, repeatable task (e.g., playing chess or answering FAQs).  
- We have access to a human expert who can perform it accurately.  
- Our goal is to capture this behavior in data for downstream learning.

---

### **Approach**
1. **Define the objective** – what success looks like.  
2. **Collect ground‑truth demonstrations** – let humans do the task while we record inputs, actions, and outcomes.  
3. **Annotate & preprocess** – clean noise, align timestamps, label key events.  
4. **Validate coverage** – ensure diverse scenarios are represented.

---

### **Depth**
Manual work serves as a *supervised learning* dataset. Each example is an (observation → action) pair. The agent learns a policy π(a|o) that mimics the expert’s behavior via regression or classification. Complexity: O(N × M) where N = examples, M = feature dimensionality. Trade‑off: richer data yields better generalization but costs time.

---

### **Edge Cases**
- **Ambiguous actions** – humans may choose different valid moves; we need consensus rules.  
- **Out‑of‑distribution inputs** – if the agent encounters unseen states, it will fail. Test by withholding rare scenarios during training.  

---

### **Optimize & Communicate**
After gathering data, summarize key patterns (e.g., most frequent actions per state) and present them in a dashboard for stakeholders. This transparency builds trust and informs feature engineering for subsequent reinforcement or imitation learning stages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
