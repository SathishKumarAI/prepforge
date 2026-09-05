---
qid: ing_748c1f1d1a__star__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 363
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:26-05:00'
sources: []
---

**Situation:**  
At my last role, we were launching a customer‑facing chatbot that used GPT‑4 to draft responses to user inquiries. Within two weeks of deployment, a disgruntled employee discovered a way to inject malicious prompts that caused the model to reveal internal policy documents.

**Task:**  
I had to design and implement a robust prompt‑injection defence strategy so that any injected content would be neutralised without compromising the chatbot’s utility or user experience.

**Action:**  
First, I layered defenses:  
1. **Input sanitisation** – stripped disallowed tokens (e.g., “/system”, “<meta>”) and applied a whitelist of allowed commands.  
2. **Prompt templating** – used a strict template with placeholders for user content, avoiding free‑form prompt concatenation.  
3. **Reinforcement learning from human feedback (RLHF)** – fine‑tuned the model on a curated dataset of malicious prompts to teach it safe defaults.  
4. **Runtime monitoring** – implemented an anomaly detector that flagged any deviation from expected token distributions and routed such interactions to a human moderator.  
I also added a “fallback” layer: if any check failed, the system would automatically replace the user prompt with a generic safe completion.

**Result:**  
After deployment, we saw zero successful injection incidents over six months, while response latency increased by only 12 ms on average. The layered approach also reduced false positives by 35 %. I learned that treating prompt safety as a multi‑layered defense—rather than a single filter—is essential for resilient AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
