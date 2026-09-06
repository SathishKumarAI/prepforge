---
qid: ing_54e5f60e93__think__local
question: 'Explain: F7: Catastrophic forgetting on rarely-seen tasks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 333
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:36:32-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Identify what “rarely‑seen tasks” means (e.g., low‑frequency classes in a dataset or infrequent tasks in continual learning).  
- Assume we’re dealing with neural nets that update online and can suffer from catastrophic forgetting.  

**2. Adopt a mental model**  
- Think of the network as a shared representation space where each task carves out a region of weights.  
- Catastrophic forgetting occurs when new updates overwrite parameters crucial for old, rarely‑seen tasks.  

**3. Step‑by‑step reasoning**  
1. *Data imbalance*: Rare tasks provide few gradients → their loss is under‑weighted.  
2. *Gradient interference*: Updates for common tasks dominate and push weights away from the rare‑task optimum.  
3. *Weight drift*: Over time, parameters move to a region optimal for frequent tasks, making recall of rare tasks impossible.  

**4. Common traps to avoid**  
- Don’t conflate “forgetting” with “overfitting”: Rare tasks can overfit if given too much emphasis.  
- Avoid assuming all forgetting is due to gradient magnitude; architecture and regularization also matter.  

**5. Sanity‑check & verbalize**  
- Ask: *If we froze weights after learning a rare task, would performance stay?* (Yes → confirms forgetting).  
- Explain that the issue stems from imbalance in exposure and gradient influence, not an inherent flaw of neural nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
