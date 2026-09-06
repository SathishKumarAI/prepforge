---
qid: ing_2073ad80fe__think__local
question: You suspect someone is distilling your model through your public API. How
  would you detect it and what can you actually do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 469
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:50:15-05:00'
sources: []
---

**Thought‑Process Outline**

1. **Clarify the Problem & State Assumptions**  
   * Assume you own a hosted model exposed via a public API and that an external party may be using it to train their own copy (distillation).  
   * Define “distillation” operationally: repeated, high‑volume calls with diverse prompts and systematic extraction of outputs.  
   * Decide what data you can observe (request logs, response metadata) and what you cannot (client-side behavior).

2. **Apply a Detection Framework**  
   * **Baseline profiling** – record normal usage patterns (frequency, prompt length, diversity).  
   * **Anomaly detection** – flag sessions that exceed typical thresholds or exhibit systematic coverage of the model’s output space.  
   * **Fingerprinting** – embed subtle “watermarks” in outputs (e.g., rare token combinations) and later test for their presence in downstream text.

3. **Step‑by‑Step Reasoning**  
   * Collect a sliding window of request metadata (IP, rate, prompt hashes).  
   * Compute statistical features (entropy, repeat frequency).  
   * Run an unsupervised anomaly detector; if confidence > threshold, label the client as suspect.  
   * Cross‑check with watermark detection: if the suspect’s downstream content contains your fingerprints, you have evidence of distillation.

4. **Avoid Common Traps**  
   * Don’t over‑penalize legitimate heavy users (researchers, large apps).  
   * Beware of false positives from bots or distributed clients.  
   * Remember that watermarking can be removed; it’s a deterrent, not proof.

5. **Sanity‑Check & Communicate**  
   * Validate the detection pipeline on synthetic distillation traffic vs normal traffic.  
   * Present findings with confidence intervals and explain the logic: “We observed X requests per hour from Y IP, all covering distinct prompt clusters, and detected watermark Z in their downstream text.”  
   * Offer mitigation options (rate limiting, contractual clauses, API key revocation) while keeping the explanation transparent to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
