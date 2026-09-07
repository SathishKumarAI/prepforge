---
qid: ing_e6c1c5b104__faang__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 467
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:02-05:00'
sources: []
---

**Clarify**  
*Goal:* On‑device or cloud summary of user text/video?  
*Assumptions:*  
1. Input size (≤ 5 min audio, 500 kB text).  
2. Privacy policy – no sensitive data to leave device.  
3. Latency tolerance – < 2 s for instant feedback.  
4. Device heterogeneity – Android/iOS, ARM‑v8, GPU/Neural Engine.

**Approach**  
1. Profile compute & memory budgets per target OS.  
2. Estimate model size and FLOPs needed for acceptable ROUGE/F1 scores.  
3. Map privacy constraints to data flow (edge vs cloud).  
4. Prototype both pipelines on a single device; measure latency, battery, accuracy.

**Depth**  
*On‑device:* Use a distilled transformer (~10 M params) with quantization (INT8) and ONNX/ML‑Compute. 2–3 s inference, ~20 MB RAM, < 5 % CPU, no network. Privacy is perfect; offline works for low‑bandwidth users.  
*Cloud:* Deploy a larger model (~100 M params) on GPU clusters. Latency ≈ 0.5 s (TCP), higher bandwidth, but can handle longer inputs and continuous learning updates. Requires encryption & compliance checks.

**Edge Cases**  
- Low‑power devices → inference stalls; fallback to lightweight summarizer or server fallback.  
- Network loss in cloud mode → degrade gracefully with cached models.  
- Extremely large documents → chunking logic needed for both pipelines.

**Optimize & Communicate**  
Explain trade‑offs: *Privacy + offline* vs *Accuracy + scalability*. Recommend hybrid: critical user data stays on device; non‑sensitive bulk summarization offloads to cloud, using a lightweight “warm‑up” model locally. Highlight monitoring metrics (latency, battery) and future plans for federated learning to improve on‑device models without leaking data. This structured plan shows clear decision logic, technical depth, and risk mitigation—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
