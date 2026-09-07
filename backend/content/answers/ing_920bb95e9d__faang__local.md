---
qid: ing_920bb95e9d__faang__local
question: 'Explain: By Application Type (June 2026) — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 777
total_tokens: 1014
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:19-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise “Model‑Selection Cheat Sheet” that maps common AI use‑cases (e.g., vision, NLP, recommendation) to the families of models that are typically best‑fit in 2026. I’ll assume you need:  
1. A high‑level taxonomy of application types.  
2. Recommended baseline and advanced model choices per type.  
3. Key trade‑offs (accuracy vs latency, data needs, interpretability).  

**Approach**  
1. List the major AI domains.  
2. For each domain, outline: *Baseline* → *Strong Baseline* → *State‑of‑the‑Art*.  
3. Add quick “when to pick” notes and performance/complexity cues.  

**Depth**

| Application | Baseline (≈ 2026) | Strong Baseline | State‑of‑the‑Art | When to Use |
|-------------|-------------------|-----------------|------------------|-------------|
| **Image Classification** | ResNet‑50 (pre‑trained) | EfficientNet‑B4 | Vision Transformer (ViT‑L/XL) or Swin‑V2 | Small‑to‑medium data, low latency → baseline; large datasets & high accuracy → SOTA |
| **Object Detection** | Faster R‑CNN with ResNet‑50 backbone | YOLOv8 / DETR | Deformable DETR + Swin‑backbone | Real‑time inference → YOLO; high precision or occlusion robustness → Deformable DETR |
| **Semantic Segmentation** | DeepLabV3+ (ResNet‑101) | HRNet + OCR module | SegFormer (Transformer‑based) | Edge devices → DeepLabV3+; large‑scale scenes → SegFormer |
| **Speech Recognition** | Deep Speech 2 | QuartzNet / Conformer | Whisper‑Large or LLM‑augmented ASR | Low‑latency mobile → QuartzNet; enterprise transcription with background noise → Whisper |
| **Text Generation (LLM)** | GPT‑3.5 or Llama‑2‑7B | GPT‑4o / Mistral‑7B | Claude‑3.5 Sonnet or Gemini Pro + retrieval | Simple chatbots → GPT‑3.5; high‑quality, policy‑aware apps → GPT‑4o/Claude |
| **Recommendation** | Matrix factorization (SVD) | LightFM + neural re‑ranker | Multi‑modal Transformers (RecBERT) | Cold‑start or sparse data → MF; rich user/context signals → Transformer |
| **Anomaly Detection (time series)** | ARIMA / Prophet | LSTM‑Encoder/Decoder | Temporal Fusion Transformer (TFT) | Simple trends → ARIMA; complex seasonality & multivariate → TFT |

**Edge Cases**  
- *Data scarcity*: fall back to transfer learning or few‑shot prompting.  
- *Hardware limits*: prefer mobile‑optimized models (e.g., MobileNet, Tiny YOLO).  
- *Regulatory constraints*: use interpretable models (e.g., decision trees) when explainability is required.

**Optimize & Communicate**  
Explain that the “baseline” gives a quick, reliable start; the “strong baseline” balances performance and resource usage; the SOTA offers peak accuracy but may demand GPU clusters. Stress iterative prototyping: benchmark on your own data, then decide whether the marginal gain of a heavier model justifies its cost. Conclude by noting that 2026’s trend is to layer lightweight backbones with Transformer heads—yielding modular, upgrade‑friendly pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
