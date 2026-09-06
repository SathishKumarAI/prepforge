---
qid: ing_70d8772e5a__think__local
question: How do you monitor a deployed LLM system for drift? What kinds of drift
  matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 420
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:28:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Define “deployed LLM system”: is it a single model or a pipeline (pre‑processing → inference → post‑processing)?  
- Assume we have access to logs, metrics APIs, and can inject probes without breaking user traffic.  

**2️⃣ Adopt a monitoring framework**  
- Treat drift as *data*, *concept*, and *system* drift—each with distinct indicators.  
- Use a layered stack: input monitoring → output quality → system health.  

**3️⃣ Step‑by‑step reasoning**  
1. **Baseline collection** – record token distributions, latency, confidence scores, and downstream KPI (e.g., CTR).  
2. **Continuous sampling** – sample inputs/outputs at fixed intervals or via stratified queues.  
3. **Statistical tests** – apply KS, Chi‑square, or KL divergence to detect shifts in input feature space.  
4. **Performance metrics** – track accuracy proxies (e.g., BLEU, F1) on a held‑out validation set that mirrors production.  
5. **Alerting & root‑cause analysis** – if drift exceeds thresholds, flag the source layer and trigger an investigation loop.  

**4️⃣ Common traps to avoid**  
- Relying solely on accuracy metrics when they’re unavailable or noisy.  
- Ignoring *system* drift (e.g., GPU memory leaks) that masquerades as model drift.  
- Over‑reacting to benign seasonal changes by setting too low thresholds.  

**5️⃣ Sanity‑check & communicate**  
- Visualize trends over time; look for consistent patterns vs. isolated spikes.  
- Summarize findings in a concise dashboard: “Input drift detected → 12% shift in topic distribution, but output quality unchanged.”  
- Iterate thresholds based on business impact and stakeholder feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
