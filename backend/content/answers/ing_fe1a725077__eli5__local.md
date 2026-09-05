---
qid: ing_fe1a725077__eli5__local
question: 'Explain: Measuring Scalability — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 219
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:26-05:00'
sources: []
---

Imagine you’re running a lemonade stand that suddenly gets a huge crowd. **Scalability** is like having extra cups, more pitchers, and a second table so every thirsty customer can still get their drink quickly. In machine‑learning systems, we measure scalability by testing how the system behaves when the “crowd” grows—more data points, more users, or faster requests.

1. **Throughput**: How many predictions (cups) per second can the model serve?  
2. **Latency**: How long does each prediction take from request to answer?  
3. **Resource usage**: CPU, GPU, memory, and storage—are they getting full before you run out of space?

We run stress tests, gradually increase load, and watch these metrics. If throughput stays steady, latency remains low, and resources grow linearly, the system is *scalable*—ready for a bigger crowd without breaking down.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
