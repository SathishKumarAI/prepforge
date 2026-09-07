---
qid: ing_9010667504__faang__local
question: 'Explain: Evaluating Generative Quality — Multimodal Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 563
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:17-05:00'
sources: []
---

**Clarify**  
We’re asked how a system can *evaluate* the quality of multimodal (image‑+ text) generation—i.e., does the output look realistic, match its prompt, and convey meaning? Assume we have a generative model that produces paired outputs and an evaluation pipeline that runs offline. Clarify: do we need human ratings, automated metrics, or both? What is “quality” (fidelity, diversity, alignment)?

**Approach**  
1. **Define dimensions** – realism, relevance, coherence, diversity.  
2. **Automated metrics** – use established scores per modality and cross‑modal consistency:  
   *Image*: FID/IS, LPIPS.  
   *Text*: BLEU/ROUGE (for literal matches), BERTScore or CLIP similarity for semantic alignment.  
3. **Cross‑modal checks** – compute CLIP text–image cosine similarity to verify that the image and caption are jointly coherent.  
4. **Human study** – A/B test with annotators rating Likert scores on each dimension; optionally use crowd-sourced “real vs fake” judgments for realism.  
5. **Calibration & aggregation** – normalize scores, weight by business‑criticality, and report composite quality.

**Depth**  
- FID measures distributional distance between generated and real images via Inception features; IS rewards high‑confidence predictions but ignores diversity. LPIPS captures perceptual similarity.  
- CLIP similarity bridges modalities: higher cosine indicates that the image embeds in a space close to its caption embedding, reflecting semantic alignment.  
- BERTScore compares token embeddings, robust to paraphrasing.  
Complexity: FID O(n log n) on feature extraction; CLIP similarity is linear in batch size. Trade‑offs: automated metrics are fast but may miss nuanced errors (e.g., subtle hallucinations). Human ratings capture nuance but scale poorly.

**Edge Cases**  
- Low‑frequency prompts → overfitting leads to high FID but poor novelty.  
- Ambiguous text → CLIP similarity drops even if image is plausible.  
- Adversarial prompts → models may generate nonsensical outputs that still score well on metrics; human checks catch this.

**Optimize & Communicate**  
Iterate by correlating automated scores with human judgments to refine weights. Deploy a dashboard that flags outliers per metric, enabling rapid debugging. Explain to stakeholders: “We combine fast, modality‑specific metrics with cross‑modal consistency and spot‑check via human ratings; this gives us both breadth (coverage) and depth (semantic fidelity).”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
