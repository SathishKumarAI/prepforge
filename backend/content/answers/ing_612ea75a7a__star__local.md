---
qid: ing_612ea75a7a__star__local
question: DeepSeek claims frontier-class results at a fraction of the usual training
  cost. If an interviewer asks "how is that even possible," what is your structured
  answer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 270
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:19-05:00'
sources: []
---

**Situation:** In my last role as a research engineer, we were tasked with training a large language model for our internal chatbot. The baseline cost on AWS was around $120k per epoch, which exceeded our budget and delayed product launch.

**Task:** I needed to reduce the training expenditure by at least 70% while maintaining comparable performance metrics (perplexity within 5% of the baseline).

**Action:** I explored DeepSeek’s approach: they use a mixture-of-experts architecture combined with aggressive sparsification. First, I implemented MoE layers that activate only 10% of experts per token, cutting FLOPs by ~90%. Next, I integrated quantization-aware training to reduce memory bandwidth and storage costs, and leveraged mixed-precision on A100 GPUs to double throughput. Finally, I set up a dynamic batch scheduler that prioritizes high-gradient samples, improving convergence speed by 30%.

**Result:** The model converged in just 15% of the time, cutting GPU hours from 1,200 to 180—savings of $108k. Perplexity stayed at 18.4 versus baseline 18.0. I learned that architectural sparsity combined with careful quantization can dramatically lower costs without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
