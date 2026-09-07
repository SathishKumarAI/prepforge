---
qid: ing_c2b0d6d482__faang__local
question: 'Explain: You''re shipping an image-generation feature. Walk me through
  the safety design: NSFW filtering, deepfakes, and provenance.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 509
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:42-05:00'
sources: []
---

**Clarify**  
We’re launching a generative‑image API that lets users upload prompts or base images. The key risks are (1) generating pornographic/violent content (“NSFW”), (2) creating realistic but fabricated depictions of real people (“deepfakes”), and (3) ensuring every output can be traced back to its source model & prompt for auditability.

**Approach**  
1. **Pre‑filter prompts** with a lightweight NLP classifier to block known trigger words.  
2. **Post‑generation filter** using a trained vision model that scores each image on NSFW, violence, and face authenticity.  
3. **Deepfake guard**: run a facial‑recognition confidence check against a public face database; if high similarity + low provenance score → flag or refuse.  
4. **Provenance chain**: embed an opaque, cryptographically signed metadata blob (model ID, version, timestamp, prompt hash) into the image’s EXIF/metadata and store it in a tamper‑evident ledger.

**Depth**  
- The filter pipeline runs sequentially; early rejections keep GPU usage low.  
- We use a two‑stage vision model: a fast MobileNet backbone for initial screening (≈10 ms) followed by a more accurate ResNeXt on flagged images.  
- Deepfake detection leverages face embeddings from a FaceNet variant, thresholded at 0.85 cosine similarity to known faces; we also compare against the provenance hash to detect re‑generation attacks.  
- Provenance metadata is signed with an HSM‑protected key and stored in a Merkle tree on our audit server; any tampering invalidates the root.

**Edge Cases**  
- Artistic nudity may slip through → add user‑reporting & manual review queue.  
- New public figures not yet in the face database could be misflagged as deepfakes → periodically refresh the lookup set.  
- Extremely low‑resolution outputs might evade the vision filter; we enforce a minimum resolution threshold.

**Optimize & Communicate**  
We’ll monitor false‑positive rates and adjust thresholds via A/B testing, aiming for ≤1 % overall rejection while keeping latency <50 ms. In production, I’d present this pipeline diagram, explain trade‑offs (speed vs accuracy), and outline rollback procedures if a model drift causes excessive filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
