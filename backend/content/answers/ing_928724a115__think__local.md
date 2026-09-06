---
qid: ing_928724a115__think__local
question: 'Explain: 🔢 Numbers and formulas to know cold — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 436
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:46:48-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   *What “cold” means in this context?*  
   - Assume it’s about identifying low‑temperature signals (e.g., in sensor data or climate studies).  
   - Decide whether we need thresholds, statistical tests, or machine‑learning cues.  

**2️⃣ Adopt a mental model**  
   - Treat the problem as *anomaly detection* on a numeric time series.  
   - Use **baseline statistics** (mean μ, standard deviation σ) and **threshold rules** (e.g., “below μ – kσ”).  
   - Complement with simple formulas: z‑score, moving averages, or exponential smoothing.

**3️⃣ Step‑by‑step reasoning**  
   1. Collect a representative dataset of temperature readings.  
   2. Compute μ and σ for the “normal” period.  
   3. For each new reading x, calculate its z‑score: \(z = (x-μ)/σ\).  
   4. Flag as *cold* if z < –k (common k=1.5–2).  
   5. Optionally apply a moving‑average filter to reduce noise before thresholding.

**4️⃣ Common traps**  
   - Mixing units or forgetting to convert Celsius/Fahrenheit.  
   - Using σ from a dataset that already contains cold spikes (biases the baseline).  
   - Ignoring autocorrelation; consecutive readings may not be independent, inflating false positives.

**5️⃣ Sanity‑check & communicate**  
   - Plot the data with threshold lines to visually confirm detections.  
   - Test on synthetic data where “cold” periods are known.  
   - Explain: *We compute how far a reading deviates from normal; if it’s more than k standard deviations below, we label it cold.*  

This framework lets you tweak μ, σ, and k to suit different sensors or climates while keeping the logic transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
