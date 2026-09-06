---
qid: ing_ca673e69bd__fp__local
question: 'Explain: Now a road, even though it looks — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 457
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:11:04-05:00'
sources: []
---

### How Google Maps “sees” a road that *looks* there

The core problem is **geographic inference under visual noise**.  
A satellite image contains pixels, but we need a *graph* of drivable edges.  
We cast this as a supervised segmentation task: for every pixel predict
“road / non‑road”.  The network learns from millions of hand‑labelled
examples where roads are confirmed by survey data.

Why must the model be probabilistic?  
A single image can show shadows, bridges, or temporary construction that
look like roads.  Treating predictions as deterministic would lock in
errors.  By outputting a probability map and thresholding with an
entropy‑based confidence score, we keep uncertain regions unlabelled,
allowing downstream modules (e.g., path planners) to query higher‑level
sources for confirmation.

The deeper principle is **geometric consistency**:  
roads form a sparse, low‑degree graph.  After pixel‑wise inference we run
a *graphical model* that penalises abrupt direction changes and enforces
smoothness along connected edges.  This is equivalent to a Markov random
field whose energy couples local predictions with global structure.

#### Non‑obvious insight  
Most people overlook the role of **temporal coherence**.  
Satellite imagery arrives in bursts; a road may be occluded in one frame
but visible in another.  By maintaining a hidden‑state Kalman filter over
the probability map, the system “remembers” past evidence and can recover
roads that are temporarily invisible—turning a noisy vision problem into
a stable spatio‑temporal estimation task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
