---
qid: ing_c2b285cd4e__think__local
question: 'Explain: Evidence and Root Cause — What is an AI SRE?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 487
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:48:18-05:00'
sources: []
---

We should structure numbered points, explain what clarifying, mental model, reasoning, traps, sanity-check. Provide within 150-220 words. Use markdown.**1️⃣ Clarify the ask & assumptions**  
   - *What does “AI SRE” mean?* Assume it’s a Site‑Reliability Engineer whose domain is AI workloads (model serving, data pipelines, infra).  
   - *Evidence vs root cause:* Distinguish between observable symptoms (latency spikes) and underlying reasons (data drift, resource exhaustion).

**2️⃣ Adopt the “Observability → Reliability” framework**  
   - **Observability stack:** metrics, logs, traces specific to ML ops (e.g., batch size, GPU utilisation).  
   - **Reliability principles:** SLIs/SLOs for inference latency/accuracy, error budgets, blameless post‑mortems.

**3️⃣ Step‑by‑step reasoning**  
   1. *Collect evidence:* Capture anomalies in model latency or accuracy degradation.  
   2. *Correlate with infra events:* Look at scaling logs, queue lengths, GPU health.  
   3. *Identify root cause patterns:* e.g., “model serving container restart due to OOM” → resource mis‑allocation.  
   4. *Validate hypothesis:* Reproduce in staging or use canary deployments.  
   5. *Implement fix & monitor.*  

**4️⃣ Avoid common traps**  
   - Don’t conflate *symptom* with *cause* (e.g., blaming the model for latency when it’s actually a networking issue).  
   - Resist “magic bullet” fixes; always trace back to infra or data pipelines.  
   - Ignore the human factor: mis‑configured alerts can mask real issues.

**5️⃣ Sanity‑check & communicate**  
   - Run a quick “what‑if” on your root‑cause diagram (does it explain all evidence?).  
   - Summarise in plain language for stakeholders: “We saw high latency because the GPU pool was exhausted during peak inference, not because the model itself slowed down.”  

By following this structured approach you’ll consistently turn raw evidence into actionable root‑cause insights for AI‑centric SREs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
