---
qid: vq_6181b85e7d__faang__local
question: What are the limitations of Generative AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:04-05:00'
sources: []
---

**Clarify**  
*Problem:* List and explain the main practical limits that prevent generative AI from being a universal solution.  
*Assumptions to confirm:* We’re focusing on current commercial‑grade models (e.g., GPT‑4, Stable Diffusion), not future breakthroughs; we care about safety, reliability, and deployment constraints.

**Approach**  
1. Identify core categories: *data bias & hallucination*, *resource cost & latency*, *interpretability & control*, *legal/ethical boundaries*.  
2. For each, give a concise example and its impact on real‑world use.

**Depth**  

| Category | Limitation | Example / Impact |
|----------|------------|------------------|
| **Data bias & hallucination** | Models reflect training distribution; they can produce plausible but false facts or reinforce stereotypes. | A medical chatbot citing nonexistent studies, leading to harmful advice. |
| **Resource cost & latency** | Large parameter counts and inference workloads demand GPUs/TPUs, high energy use, and long response times for complex prompts. | Real‑time translation in a low‑bandwidth mobile setting becomes impractical. |
| **Interpretability & control** | Black‑box architectures make it hard to guarantee outputs or enforce constraints (e.g., no hate speech). | An image generator inadvertently creating disallowed content despite filters. |
| **Legal/ethical boundaries** | Copyright, privacy, and liability issues; lack of clear regulatory frameworks. | Using copyrighted text for training without permission can lead to infringement lawsuits. |

**Edge Cases**  
- Extremely low‑resource devices or offline environments (model cannot run).  
- Highly specialized domains with scarce data (model hallucination spikes).  
- Adversarial prompts that exploit prompt injection.

**Optimize & Communicate**  
To mitigate, we layer prompt engineering, fine‑tuning on curated datasets, and post‑generation filtering. Future work includes efficient model distillation, robust auditing pipelines, and clearer policy guidelines. I’d explain this roadmap to stakeholders by highlighting trade‑offs: tighter controls → higher latency; smaller models → less hallucination but lower fidelity. This structured narrative satisfies FAANG interviewers’ emphasis on clarity, depth, and actionable insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
