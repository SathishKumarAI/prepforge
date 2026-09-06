---
qid: ing_cad0e3a10f__think__local
question: 'Explain: 14 System Design - Load Balancing Algorithms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 449
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:19:11-05:00'
sources: []
---

We need a numbered list of the thought process, not actual answer. Provide 5 items. Ensure 150-220 words. Use markdown.**1️⃣ Clarify & Set Assumptions**  
   • Identify the audience (students vs. engineers).  
   • Decide on the scope: classic algorithms (Round‑Robin, Least‑Connections, IP Hash) or modern variants (Weighted, Consistent Hashing, Kubernetes Ingress).  
   • Assume a typical web‑service stack (HTTP/HTTPS, stateless workers, autoscaling).

**2️⃣ Adopt a Mental Model**  
   • Think of load balancing as a *routing policy* that maps incoming requests to backend instances.  
   • Use the “decision tree” framework: **Input → Policy → Output**, where the input is request metadata (IP, header, URL), the policy is the algorithm, and the output is the chosen node.

**3️⃣ Step‑by‑Step Reasoning**  
   1. List the key properties each algorithm optimizes for: fairness, locality, simplicity, scalability.  
   2. Map those properties to real‑world constraints (e.g., sticky sessions → IP Hash).  
   3. Explain how each algorithm works with concrete pseudo‑code or diagrams.  
   4. Discuss trade‑offs: overhead vs. performance, statefulness vs. statelessness.

**4️⃣ Avoid Common Pitfalls**  
   • Don’t conflate “load balancing” with “traffic shaping.”  
   • Resist over‑engineering the explanation; stick to core concepts before diving into platform‑specific nuances.  
   • Beware of oversimplifying weighted schemes—highlight how weights are applied in practice.

**5️⃣ Sanity‑Check & Communicate**  
   • Verify that each algorithm’s description aligns with its intended use case.  
   • Use analogies (e.g., “Round‑Robin = a fair queue”) to make abstract ideas tangible.  
   • End with a quick recap and an invitation for questions, ensuring the learner can articulate when to choose each strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
