---
qid: ing_336b23c929__aws__local
question: A Copilot chat feature has a p95 latency budget of 3 seconds to first useful
  content. Where does the time go, and how do you cut it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 496
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:34-05:00'
sources: []
---

**Situation & Goal (S)**  
At a cloud‑AI startup we launched a Copilot chat that promised *p95 latency ≤ 3 s* to the first useful content. In production the median hit 4.8 s and p95 was 7.2 s, hurting user engagement.

**Task (T)**  
Break down the latency budget, identify bottlenecks, and cut p95 by ≥ 50 % while keeping cost < 30 %.

**Action (A)**  

| Phase | AWS Service | Why & How |
|-------|-------------|-----------|
| **Model inference** | Amazon SageMaker Real‑Time Endpoint with *GPU p4d* instances | Warm pool + multi‑head batching → 1.2 s GPU time, cut by 30 % vs. on‑prem |
| **Text generation** | OpenAI GPT‑3 via API Gateway + Lambda (async) | Offload heavy decoding; async call reduces UI wait to 0.4 s |
| **Data prep & caching** | Amazon ElastiCache Redis | Pre‑fetch embeddings, store last 10k prompts → 50 ms cache hit vs. 300 ms DB |
| **Network** | CloudFront + VPC endpoints | Edge routing reduces round‑trip to < 30 ms |

We added a *retry‑on‑fail* circuit breaker that falls back to a distilled model, saving an extra 0.5 s in ~2 % of cases.

**Result (R)**  
p95 latency dropped from 7.2 s to **3.4 s** (≈ 53 % reduction). User retention increased by 12 %, and monthly compute cost fell by 22 %.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – relentlessly focused on user‑perceived speed.  
- **Ownership & Dive Deep** – dissected every micro‑second, iterated on model & architecture.  

**Bar‑raiser cues:** Clear ownership of each latency component, data‑driven impact (3.4 s, 12 % lift), and a learning loop from failed retries to continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
