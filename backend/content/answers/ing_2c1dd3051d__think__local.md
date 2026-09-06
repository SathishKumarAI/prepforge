---
qid: ing_2c1dd3051d__think__local
question: GPU cold starts take minutes. How do you autoscale an inference fleet anyway?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 444
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:35:21-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
First, pinpoint what “GPU cold starts” means in your context (e.g., Docker image pull, CUDA init, model loading). Assume you’re running inference on a cloud provider that offers GPU‑enabled instances and that autoscaling is triggered by CPU/latency metrics. Also decide whether you can pre‑warm or cache models.

**2️⃣ Adopt a layered mental model**  
Think of the fleet as a *two‑tier system*: (a) **Cold Tier** – stateless, fast‑to‑spawn containers or serverless functions; (b) **Warm Tier** – dedicated GPU workers that stay alive. Your autoscaler should balance between launching new cold workers and keeping warm ones ready.

**3️⃣ Step‑by‑step reasoning**  
- Measure latency spikes → trigger a “warm” request.  
- If no warm worker exists, spin up a small GPU instance (or use a pre‑loaded AMI) that stays idle for a short window.  
- Keep a queue of pending inference jobs; if the queue grows beyond a threshold, scale out more warm workers.  
- Use *pre‑warm hooks* to load models into memory immediately after boot.  
- When demand drops, drain jobs from a worker before shutting it down.

**4️⃣ Avoid common traps**  
- Don’t rely solely on CPU metrics; GPU utilization and memory are critical.  
- Beware of “spiky” traffic that can cause thrashing (constant spin‑up/tear‑down).  
- Don’t over‑provision: keep a cap on the maximum number of warm workers to avoid cost blow‑ups.

**5️⃣ Sanity‑check & communicate**  
Run a simulation with historical load curves to verify latency targets. When explaining, start by stating the cold‑start problem, outline the two tiers, and then walk through the trigger/scale‑up/scale‑down logic, highlighting how pre‑warming mitigates minutes of delay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
