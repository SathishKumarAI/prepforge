---
qid: ing_2aac26561b__think__local
question: 'Q: Your LLM bill doubled month over month with flat traffic. How do you
  find and fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 423
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:30:25-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - Confirm *“flat traffic”* really means request volume, latency, or queue length unchanged.  
   - Verify billing unit (compute‑time, GPU-hours, cloud provider cost) and that the bill is indeed doubled without a corresponding usage spike.

**2️⃣ Adopt a diagnostic framework**  
   - **Metric audit** → compute utilisation, memory, I/O.  
   - **Cost mapping** → link each metric to its billed resource.  
   - **Change‑log review** → any recent model or infrastructure updates?  

**3️⃣ Step‑by‑step reasoning**  
   1. Pull historical usage dashboards (CPU/GPU, batch jobs).  
   2. Cross‑check with billing API: spot any new services (e.g., autoscaling, spot instances).  
   3. Inspect model changes: larger embeddings, added layers, or new pre‑processing steps that increase inference time.  
   4. Look for configuration drift: higher batch sizes, longer prompt context, or increased warm‑up traffic.  
   5. Identify any background jobs (logging, monitoring) now running at higher frequency.

**4️⃣ Common traps to avoid**  
   - Assuming *traffic* is the only driver; neglect hidden compute tasks.  
   - Ignoring per‑instance billing nuances (e.g., GPU spot pricing fluctuations).  
   - Overlooking mis‑configured autoscaling rules that spawn extra instances.  

**5️⃣ Sanity‑check & communicate**  
   - Re‑simulate a few inference runs locally to confirm latency hasn’t risen.  
   - Prepare a concise slide: “Root cause = increased per‑request compute due to X; Fix = adjust Y and monitor.”  
   - Validate with a quick cost‑reduction experiment before rolling out the fix.

This structured approach lets you pinpoint why the bill doubled, even when traffic looks unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
