---
qid: ing_c2b0d6d482__fp__local
question: 'Explain: You''re shipping an image-generation feature. Walk me through
  the safety design: NSFW filtering, deepfakes, and provenance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 500
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:56:02-05:00'
sources: []
---

**Why we need a safety layer**

The core problem is *unintended content*: an unconstrained diffusion model can output any visual pattern the training data allowed, including pornographic material, harmful deepfakes, or copyrighted art.  
From an **information‑theoretic** view, the model learns a joint distribution \(P(x|z)\) over pixels conditioned on latent prompts. The “dangerous” region of this distribution is a small but non‑negligible probability mass that we must excise without destroying useful outputs.

---

### 1. NSFW filtering  
- **Prompt pruning**: Detect and block triggers (e.g., “nude”, “explicit”) using a lightweight transformer classifier.  
- **Image post‑filtering**: Run the generated image through an *image‑level* detector trained on a curated set of explicit content.  
- **Bayesian calibration**: The two classifiers form a product‑of‑experts; their confidence scores are combined via Bayesian fusion to reduce false positives while keeping recall high.

### 2. Deepfake mitigation  
- **Identity consistency loss**: Add a loss term that penalises deviations from a reference face embedding, preventing the model from inventing new identities.  
- **Face‑swap detector**: Apply a lightweight GAN‑based verifier on any output flagged as “human” to check for synthesis artifacts (e.g., inconsistent eye‑blink patterns).  

### 3. Provenance & audit trail  
- **Deterministic seeding**: Every request logs the random seed, model version, and prompt hash; this enables exact regeneration.  
- **Chain‑of‑responsibility graph**: Store a provenance DAG linking prompt → latent → image, allowing rollback or flagging of unsafe branches.

---

#### Non‑obvious insight
*The safest way to guard against deepfakes is not merely to block them but to enforce *identity consistency* during generation.*  
By embedding the requirement that any human face must match a known identity vector, we turn the generative process into an implicit verifier—deepfakes become statistically unlikely rather than just detectable after the fact. This shifts safety from reactive detection to proactive constraint, dramatically reducing the attack surface while preserving creative flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
