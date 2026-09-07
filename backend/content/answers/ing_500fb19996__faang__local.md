---
qid: ing_500fb19996__faang__local
question: 'Explain: Video Processing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 1024
total_tokens: 1256
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:50:40-05:00'
sources: []
---

**Topic:** Machine Learning – *Video Processing: 20 Key Interview Questions*  

---

## 1️⃣ Clarify  
You’re asked to outline the most common interview topics around video‑processing ML.  
Assumptions:  
- Audience knows basic computer vision (CNNs, RNNs).  
- Focus on production‑grade pipelines, not pure research tricks.

## 2️⃣ Approach  
Provide a concise table: *Question → Core concept → Typical answer cue*.  
Keep each entry under ~10 words; use bullet points for readability.  

## 3️⃣ Depth  
| # | Question | Core Concept | Sample Answer Cue |
|---|----------|--------------|-------------------|
|1|What is the difference between frame‑level and sequence‑level models? | Temporal vs spatial features | “CNN+RNN/Temporal Conv” |
|2|How do you handle variable video length in training? | Padding, masking, sliding windows | “Use 3D‑conv + global pool” |
|3|Explain optical flow and its use cases. | Motion estimation | “Lucas–Kanade, TV‑L1, used for action detection” |
|4|What are the trade‑offs of 2D vs 3D convolutions? | Computation vs temporal capture | “3D heavier but better long‑term context” |
|5|Describe the architecture of I3D. | Inflated 2D convs into 3D | “Inflate ImageNet weights, fine‑tune on video” |
|6|How do you address class imbalance in action recognition? | Oversample, focal loss, weighted BCE | “Use per‑class weighting + data augmentation” |
|7|Explain how to perform real‑time video inference on edge devices. | Model compression, quantization, pruning | “TensorRT + 8‑bit INT8, strip‑mining” |
|8|What is a feature pyramid network (FPN) in video? | Multi‑scale spatial features | “Merge conv layers at different resolutions” |
|9|How do you evaluate video segmentation models? | IoU over frames, mean per class | “Compute mIoU across validation set” |
|10|Describe a pipeline for video captioning. | Encoder (CNN/3D‑RNN) + Decoder (LSTM/Transformer) | “Use attention over spatio‑temporal features” |
|11|What are the common codecs and why do they matter? | Compression artifacts, bitrate | “H.264 vs H.265 impact on feature quality” |
|12|Explain how you would detect anomalies in surveillance footage. | Autoencoders, reconstruction error | “Train on normal clips, flag high MSE” |
|13|What is the role of non‑maximum suppression (NMS) in video object detection? | Temporal consistency across frames | “Apply soft‑NMS over tubelets” |
|14|How would you handle occlusion in multi‑person tracking? | Kalman filter + re‑identification embeddings | “Tracklet association via cosine similarity” |
|15|Describe the use of transformers for video. | Self‑attention over spatio‑temporal tokens | “ViViT, TimeSformer” |
|16|What metrics would you use to benchmark video super‑resolution? | PSNR, SSIM, LPIPS | “Compare against baseline Bicubic” |
|17|Explain how to perform domain adaptation for videos from different cameras. | Feature alignment, adversarial loss | “Use MMD or CycleGAN on feature space” |
|18|What is a tubelet and why is it useful? | 3D bounding box across frames | “Enables action localization” |
|19|How do you ensure temporal coherence in video style transfer? | Temporal consistency loss | “Add optical‑flow weighted L2 term” |
|20|Describe a strategy for large‑scale distributed training of video models. | Data parallelism, mixed precision | “DDP + NCCL + Apex AMP” |

## 4️⃣ Edge Cases  
- Extremely short clips: fallback to frame‑level inference.  
- Missing frames: use interpolation or mask during loss.  
- Real‑time constraints: profile GPU memory, batch size.

## 5️⃣ Optimize & Communicate  
When answering, start with the high‑level idea, then drill into the math/implementation detail, and finish by stating trade‑offs (latency vs accuracy). Use analogies (“inflating 2D convs” ≈ “adding a time dimension”).  

**Result:** A concise cheat‑sheet that demonstrates structured thinking, depth in core concepts, and readiness for production‑level discussion—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
