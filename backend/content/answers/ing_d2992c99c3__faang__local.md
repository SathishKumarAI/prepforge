---
qid: ing_d2992c99c3__faang__local
question: 'Explain: Evaluation plan — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 585
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:50:04-05:00'
sources: []
---

**Clarify**  
We need a plan for evaluating a *real‑time voice agent*—i.e., a system that receives spoken input, transcribes it, processes intent, and generates spoken responses with minimal latency. Key assumptions:  

1. The evaluation must cover **accuracy**, **latency**, **robustness to noise**, and **user satisfaction**.  
2. We have access to a labeled speech corpus, a live test harness (synthetic or real users), and performance metrics from the production stack.

**Approach**  

| Phase | Tasks |
|-------|-------|
| 1️⃣ Data & Metrics | Define ASR/WER, NLU intent‑F1, TTS MOS, end‑to‑end latency (ms). |
| 2️⃣ Offline Benchmark | Run the full pipeline on a held‑out test set; compute WER, F1, and latency per utterance. |
| 3️⃣ Stress & Robustness | Add background noise, varied accents, and packet loss to assess degradation. |
| 4️⃣ Live User Study | Deploy A/B tests; collect task success rate, user satisfaction surveys, and system logs. |
| 5️⃣ Continuous Monitoring | Set up dashboards for real‑time latency and error rates; trigger alerts when thresholds are breached. |

**Depth**  
- **ASR**: Use a hybrid HMM-DNN model; report WER per speaker gender/accents.  
- **NLU**: Intent classification with transformer fine‑tuned on domain data; compute confusion matrix.  
- **TTS**: Neural vocoder (e.g., HiFi-GAN); evaluate MOS via crowdsource or automated prosody metrics.  
- **Latency**: Measure per‑stage latency, aggregate, and compare against SLA (≤ 400 ms).  
- **Statistical Significance**: Apply paired t‑tests for A/B comparisons.

**Edge Cases**  
- Extremely noisy audio → WER spikes; test with white noise + echo.  
- Network jitter → TTS buffering leads to dropped packets; simulate packet loss >10%.  
- Rare intents → low support set leading to misclassifications; evaluate recall on tail classes.

**Optimize & Communicate**  
1. **Model compression** (quantization, pruning) to shave 50 ms from ASR latency.  
2. **Cache common utterances** to avoid full inference for repeats.  
3. Present findings in a concise slide deck: high‑level metrics first, then drill down into failure modes, and finish with actionable next steps. This structure demonstrates clear problem framing, systematic evaluation, deep technical insight, and readiness to iterate—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
