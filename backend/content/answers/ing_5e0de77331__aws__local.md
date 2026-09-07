---
qid: ing_5e0de77331__aws__local
question: How does prompt injection show up in a mobile app, and what does the client
  own?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 446
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:27-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When launching a voice‑to‑text feature in our Android app, I discovered that malicious users could embed hidden prompts in audio files (“prompt injection”) to alter the LLM’s output and bypass compliance checks. The client—our product owner—needed a robust mitigation strategy that preserved user experience while ensuring data privacy.

**Action (Dive Deep + Bias for Action)**  
1. **Threat modeling**: I mapped injection vectors (hidden phonemes, adversarial noise) and quantified risk by simulating 10 k injected samples, observing a 35 % false‑positive rate in our existing pipeline.  
2. **Design**: Built an on‑device pre‑filter using *TensorFlow Lite* to detect anomalous audio patterns, then forwarded only clean chunks to the server.  
3. **AWS integration**: Deployed the LLM inference on *Amazon SageMaker Endpoint* with autoscaling (min 1, max 8 instances) and *AWS WAF* rules to block payloads exceeding size limits.  
4. **Monitoring**: Enabled CloudWatch metrics for injection attempts; set an alarm threshold of 5 % spike → auto‑scale.

**Result (Deliver Results)**  
- Reduced injection success rate from 35 % to <0.1 %.  
- Latency dropped by 12 ms per inference due to pre‑filtering, keeping the app’s response time under 200 ms for 99.5 % of users.  
- Cost savings: 18 % less SageMaker compute during peak hours.

**Learning & Bar‑raiser cues**  
I documented the failure modes in a post‑mortem, shared lessons on adversarial audio with the security team, and added automated unit tests for the pre‑filter. The bar‑raiser will see that I took ownership, dove deep into technical details, quantified impact, and turned a potential breach into a scalable defense.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
