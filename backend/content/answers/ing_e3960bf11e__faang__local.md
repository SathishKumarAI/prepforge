---
qid: ing_e3960bf11e__faang__local
question: 'Explain: Tradeoff Discussion (5 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:28:08-05:00'
sources: []
---

**Clarify**  
You’re asked to discuss the classic ML trade‑offs in a brief system‑design interview: *latency vs accuracy*, *model size vs inference speed*, and *data volume vs generalization*. I’ll assume the context is an online recommendation service that must serve predictions within 10 ms while maintaining high AUC.

**Approach**  
1. List key dimensions (accuracy, latency, resource use).  
2. Map each dimension to concrete design choices (model family, feature engineering, quantization).  
3. Quantify the impact of a few representative knobs.  

**Depth**  
- **Accuracy vs Latency**: Deep neural nets (e.g., transformer‑style) give >10 % AUC lift over linear models but need 50–100 ms inference on CPU. Switching to an XGBoost or shallow NN reduces latency to <5 ms at a ~3 % AUC drop.  
- **Model Size vs Inference Speed**: 200 M‑parameter model ≈300 MB; serving it requires GPU or TPU and batch scheduling, adding overhead. Quantizing to int8 shrinks size by 4× and speeds up inference 2–3× with <1 % AUC loss.  
- **Data Volume vs Generalization**: Training on >10M user logs yields diminishing returns after 5 M samples; beyond that, over‑fitting risk rises unless regularization or data augmentation is applied.

**Edge Cases**  
- Cold‑start users → rely on rule‑based fallback to avoid latency spikes.  
- Model drift in production → continuous evaluation pipeline to trigger re‑training when AUC falls below threshold.

**Optimize & Communicate**  
Explain that the “sweet spot” is often a *medium‑size* quantized NN served via edge TPU, delivering <8 ms inference with only 1–2 % AUC loss. Highlight trade‑off curves and propose monitoring metrics (latency percentiles, AUC drift) to guide future iterations. This shows structured reasoning, clear communication, and depth—all key for a FAANG signal interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
