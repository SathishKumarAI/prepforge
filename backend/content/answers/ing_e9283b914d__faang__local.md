---
qid: ing_e9283b914d__faang__local
question: 'Explain: Q111: Claude Fable 5 routes sensitive queries to Claude Opus 4.8
  via classifier-gated fallback. Critique this as a system design pattern and describe
  where you would apply tier routing in your own stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 470
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:46-05:00'
sources: []
---

**Clarify**  
The question asks whether routing *sensitive* queries to the higher‑capacity Claude Opus 4.8 via a classifier‑gated fallback is a sound system design pattern, and where tiered routing would fit in our own architecture.

**Approach**  
1. Identify intent: keep latency low for most traffic, reserve expensive model for high‑risk content.  
2. Evaluate the classifier’s precision/recall trade‑off.  
3. Map costs, SLAs, and policy constraints to each tier.  
4. Propose a generic “router” component that can be plugged into any request pipeline.

**Depth**  
- **Pattern critique:** The fallback is essentially *lazy routing*: first attempt cheap model; if classifier flags sensitivity, reroute to Opus. This reduces average cost but adds a second round‑trip and complexity in maintaining two models. If the classifier mislabels (high false negatives), sensitive content may leak; high false positives hurt user experience.  
- **Cost vs. latency:** Opus 4.8 costs ~3× per token and has higher inference latency (~150 ms). For a system handling millions of requests, even a 1% fallback rate can dominate spend.  
- **Governance:** The classifier must be continuously audited; any drift requires retraining or re‑labeling.

**Edge cases**  
- *Classifier failure*: timeouts or crashes should default to the safe model (Opus).  
- *Concurrent routing*: race conditions where two parallel calls diverge.  
- *Model version mismatch*: ensure consistent schema across tiers.

**Optimize & communicate**  
Introduce a **tier‑routing service**:  
1. Accept request → policy engine → quick “safe” model.  
2. If confidence < threshold, forward to Opus with retry/backoff.  
3. Log all decisions for auditability.  

Explain trade‑offs in the interview: lower cost vs. higher latency; the need for a robust fallback path; and how this pattern scales when adding more models (e.g., Claude Sonnet, Gemini). By framing it as a *policy‑driven router*, we keep the design modular and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
