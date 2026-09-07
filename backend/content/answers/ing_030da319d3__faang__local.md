---
qid: ing_030da319d3__faang__local
question: 'Explain: ── Output parser ─────────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 526
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:00-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of an *output parser*—the component that takes raw model predictions (logits, tensors, probability maps) and converts them into human‑readable or downstream‑usable results. Clarify the context: is it for classification, object detection, NER, etc.? Confirm whether we’re talking about a post‑processing layer in an inference pipeline or a generic utility.

**Approach**  
1. Define the input (e.g., softmax scores, bounding boxes).  
2. Enumerate common transformations (thresholding, argmax, non‑maximum suppression, detokenization).  
3. Discuss integration points: model output → parser → API response / downstream task.  
4. Highlight performance considerations: batch vs. single inference, GPU/CPU usage.

**Depth**  
- **Classification**: Argmax over logits; temperature scaling for calibration; top‑k selection with confidence thresholds.  
- **Object Detection**: Convert raw boxes + class scores → apply NMS (IoU threshold), clip to image bounds, optionally perform soft‑non‑maximum suppression.  
- **Segmentation**: Argmax across channel dimension, apply morphological post‑processing, compute connected components.  
- **Sequence Labeling/NLP**: Decode token probabilities with Viterbi or greedy decoding; map indices back to tokens using a vocab table; handle subword merging (BPE).  

Complexity: most parsers run in O(n) over number of predictions; NMS is O(n²) but optimized via sorting or GPU kernels. Trade‑offs involve accuracy vs latency: higher IoU thresholds reduce false positives at cost of missing overlaps.

**Edge Cases**  
- Empty predictions (no detections).  
- Extremely low confidence scores leading to no output.  
- Numerical instability in softmax → use log‑softmax.  
- Overlap handling when boxes are identical or highly overlapping.  
- Tokenization mismatches causing out‑of‑vocabulary errors.

**Optimize & Communicate**  
Suggest caching vocab lookups, vectorizing NMS with SIMD or CUDA, and batching parsers to amortize overhead. Explain the design: “We expose a pure function so it can be unit tested independently; we keep state minimal for thread safety.” Conclude by summarizing that an output parser bridges raw model tensors to actionable results, balancing correctness, speed, and robustness—key for production ML pipelines at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
