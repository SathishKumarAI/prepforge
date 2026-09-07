---
qid: ing_bf930a71f6__faang__local
question: 'Explain: Video: frames are expensive — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 570
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks why processing individual *video frames* is costly when building multimodal AI systems that fuse vision, audio and text. I’d confirm: are we talking about raw pixel tensors, inference time, memory footprint, or all three? Are the models CNN‑based, transformer‑based, or a hybrid?

**Approach**  
1. Quantify per‑frame cost (CPU/GPU ops, FLOPs).  
2. Identify bottlenecks: resolution, frame rate, model depth.  
3. Compare against other modalities (audio: 16 kHz → 160 samples/s; text: token count).  
4. Discuss optimization levers (down‑sampling, keyframe selection, efficient backbones).

**Depth**  
- **Computational load:** A single RGB frame at 1080p is ~3 M pixels × 3 channels ≈ 9 MB. Feeding it into a ResNet‑50 requires ~10⁹ FLOPs; a ViT with 12 layers and hidden size 768 needs ~1×10¹⁰ operations.  
- **Memory & bandwidth:** Storing consecutive frames for temporal modeling multiplies the footprint. Even storing 30 fps for 5 s yields >150 MB of raw data plus activations.  
- **Training vs inference:** Backpropagation doubles FLOPs; gradients over spatio‑temporal tensors explode memory usage (often O(3–4×).)  
- **Contrast with audio/text:** Audio at 16 kHz → 160 samples/s is ~5× smaller per second; text token counts are orders of magnitude lower.

**Edge Cases**  
- Low‑res or grayscale inputs reduce cost but hurt accuracy.  
- Models that ignore temporal redundancy (e.g., processing every frame) suffer from unnecessary compute.  
- Edge devices with limited GPU memory cannot hold full‑resolution feature maps.

**Optimize & Communicate**  
- **Temporal sparsification:** keyframe extraction, dynamic frame skipping based on motion saliency.  
- **Spatial reduction:** use MobileNet or EfficientNet backbones; employ learnable strided convolutions.  
- **Mixed‑precision / quantization:** 8‑bit weights to cut memory and speed up inference.  
- **Pipeline parallelism:** split encoder–decoder across GPUs to keep GPU idle time minimal.

By framing the problem with concrete numbers, outlining a clear plan, digging into FLOPs/memory trade‑offs, spotting pitfalls, and proposing practical mitigations, I demonstrate the structured, depth‑first thinking FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
