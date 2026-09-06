---
qid: ing_8ed032b0e1__fp__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 374
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:08:44-05:00'
sources: []
---

**Spot detection for a parking‑garage camera feed**

1. **Fundamental problem** – we must decide, pixel‑by‑pixel, whether an area is free or occupied.  
2. **Why a dense prediction works** – the occupancy of a spot depends on local shape (curved edges of a car) and global context (other cars). A fully convolutional network (FCN) gives a per‑pixel probability map that respects both scales.  
3. **Model design** – an encoder–decoder architecture (e.g., U‑Net) is trained with a binary cross‑entropy loss on annotated frames. The decoder upsamples the compressed feature map, and skip connections preserve fine edge details needed to separate adjacent cars.  
4. **Post‑processing** – we overlay the probability map onto pre‑defined spot polygons. For each polygon we compute the mean probability; if it falls below a threshold (e.g., 0.3) the spot is considered occupied. This turns dense predictions into discrete states.  
5. **Insight most people miss** – *class imbalance* is not just a training issue but also an inference one: in a typical garage, >90 % of pixels are free space. If we set a global threshold too low, noise from shadows or lighting changes floods the map. A small per‑spot calibration (e.g., using a moving average over recent frames) adapts the decision boundary to local illumination, dramatically improving robustness without extra data.

The approach marries dense semantic segmentation with spatial aggregation, yielding an end‑to‑end pipeline that is both mathematically sound and practically resilient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
